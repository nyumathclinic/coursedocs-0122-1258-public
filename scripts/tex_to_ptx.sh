#!/usr/bin/env zsh
# Usage: pandoc_to_ptx.sh inputfile
# Replaces "\\input config.def" with "\\input{config.def}", runs pandoc with ../scripts/pretext.lua, and writes output to a .ptx file

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <inputfile>" >&2
  exit 2
fi

infile="$1"
if [ ! -f "$infile" ]; then
  echo "Input file not found: $infile" >&2
  exit 3
fi

outfile="${infile%.*}.ptx"

# Create a temp file
tmpfile=$(mktemp)
trap 'rm -f "$tmpfile"' EXIT INT TERM

# Replace the line and pipe to pandoc
# Use sed to replace the exact line `\\input config.def` with `\\input{config.def}`
# Then send through pandoc with the lua filter

perl -pe 's/^\\input\s+(\S+)/\\input{$1}/' "$infile" | pandoc -f latex -t "../scripts/pretext.lua" -o "$tmpfile"

# Move temp file to destination
mv "$tmpfile" "$outfile"
chmod 644 "$outfile"

echo "Wrote $outfile"
