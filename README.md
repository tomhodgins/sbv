# sbv

**Read Youtube .SBV caption files and convert to JSON, text, or HTML**

## About

This plugin parses Youtube's `.sbv` subtitle file format and allows you to convert to JSON, plain text, or HTML formatting and output either on the command line or as a file.

## Installation

This software is available as a Node module from npm, as well as pre-built binaries for windows, mac, and linux available on Github in the [releases](https://github.com/tomhodgins/sbv/releases/latest) tab.

To install sbv globally with npm, enter this into your shell:

```
npm install -g sbv
```

## Usage

The following examples assume you have either installed sbv globally with npm, or are running a binary named "sbv" on your system.

### json

```
sbv json <input> <output>

// examples
sbv json
sbv json input.sbv
sbv json input.sbv output.json
```

The first example of `sbv json` will display the help text for the JSON conversion function. If you supply the name of an `.sbv` file by itself, like `sbv json input.sbv`, it will convert that SBV file into JSON and display the resulting file in the console. If you also supply an optional output filename like `sbv json input.sbv output.json` it will convert the file to JSON and output the result as `output.json` and show nothing in the console.

### text

```
sbv text <input> <output>

// examples
sbv text
sbv text input.sbv
sbv text input.sbv output.txt
```

The first example of `sbv text` will display the help text for the text conversion function. If you supply the name of an `.sbv` file by itself, like `sbv text input.sbv`, it will convert that SBV file into text and display the resulting file in the console. If you also supply an optional output filename like `sbv text input.sbv output.txt` it will convert the file to text and output the result as `output.txt` and show nothing in the console.

### html

```
sbv html <input> <output>

// examples
sbv html
sbv html input.sbv
sbv html input.sbv output.html
```

The first example of `sbv html` will display the help text for the HTML conversion function. If you supply the name of an `.sbv` file by itself, like `sbv html input.sbv`, it will convert that SBV file into HTML and display the resulting file in the console. If you also supply an optional output filename like `sbv html input.sbv output.html` it will convert the file to HTML and output the result as `output.html` and show nothing in the console.
