#!/usr/bin/env zsh
# Replace all occurrences of \Sequence{...} with \left\{...\right\}
# Handles nested/braced content. Edits the file in-place and creates a backup with .bak
# Usage: sequence_to_leftbrace.sh file.tex

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <file>" >&2
  exit 2
fi

file="$1"
if [ ! -f "$file" ]; then
  echo "File not found: $file" >&2
  exit 3
fi

bak="${file}.bak"
cp -- "$file" "$bak"

# Use Python to do a robust, balanced-brace aware replacement
python3 - <<'PY'
import sys
from pathlib import Path

p = Path("$file")
text = p.read_text(encoding='utf-8')

needle = r"\\Sequence{"
out = []
i = 0
L = len(text)
while i < L:
    idx = text.find(needle, i)
    if idx == -1:
        out.append(text[i:])
        break
    # append up to the match
    out.append(text[i:idx])
    # position of opening brace
    start = idx + len(needle) - 1  # start points at '{'
    if start >= L or text[start] != '{':
        # shouldn't happen, but append the matched text and continue
        out.append(needle)
        i = idx + len(needle)
        continue
    # find balanced brace block
    j = start + 1
    depth = 1
    while j < L and depth > 0:
        ch = text[j]
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
        j += 1
    if depth != 0:
        # unbalanced; append the rest and break
        out.append(text[idx:])
        break
    # extract inside (without outer braces)
    inside = text[start+1:j-1]
    # replace with \left\{inside\right\}
    out.append('\\left\\{' + inside + '\\right\\}')
    i = j

new_text = ''.join(out)
# Only write if changed
if new_text != text:
    tmp = p.with_suffix(p.suffix + '.tmp')
    tmp.write_text(new_text, encoding='utf-8')
    tmp.replace(p)
    print(f"Rewrote {p}")
else:
    print(f"No changes needed for {p}")
PY

exit 0
