#!/usr/bin/env python

import sys


def fix_input_config(text: str) -> str:
    """
    Fixes a single line by converting "input config.def" to "input{config.def}".
    This is necessary for compatibility with pandoc.
    """
    return text.replace(r"\input config.def", r"\input{config.def}")


def fix_documentclass(text: str) -> str:
    """
    Strip the newline after 'documentclass' to avoid pandoc errors.
    """
    return text.replace("\\documentclass\n", "\\documentclass")


def fix_latex_file(filename):
    """
    Reads a LaTeX file and prepares it for processing by pandoc.
    """
    try:
        with open(filename, "r") as file:
            content = file.read()
            content = fix_input_config(content)
            content = fix_documentclass(content)
        return content

    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.", file=sys.stderr)
    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script_name.py <filename>", file=sys.stderr)
        sys.exit(1)

    # The first argument (sys.argv[0]) is the script name itself,
    # so the filename is at index 1.
    input_file = sys.argv[1]
    print(fix_latex_file(input_file))
