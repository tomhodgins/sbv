#!/usr/bin/env node

const fs = require('fs')

function read(file) {

  const contents = fs.readFileSync(file).toString()
  const data = []

  contents.replace(
    /^(\d:.*)\n((?:(?!\d+:\d+:\d+).*\n*)+)$/gm,
    (string, time, text) =>
      data.push({
        time: {
          start: time.split(',')[0],
          end: time.split(',')[1]
        },
        text: text.replace(/\n/g, ' ').trim()
      })
  )

  return data

}

const functions = {

  json: function(input, output='filename.json') {

    if (arguments.length) {

      const data = JSON.stringify(read(input))

      return arguments.length === 1
             ? console.log(data)
             : fs.writeFileSync(output, data)

    } else {

      return console.log('please enter a filename to read, and optionally an output filename to write')

    }

  },

  text: function(input, output='filename.txt') {

    if (arguments.length) {

      const data = read(input).map(caption => `${caption.text}`).join(' ')

      return arguments.length === 1
             ? console.log(data)
             : fs.writeFileSync(output, data)

    } else {

      return console.log('please enter a filename to read, and optionally an output filename to write')

    }

  },

  html: function(input, output='filename.html') {

    if (arguments.length) {

      const data = '<!DOCTYPE html>\n'
        + '<meta charset=utf-8>\n'
        + read(input).map(caption =>
            '<p'
            + ' title="' + caption.time.start + ' – ' + caption.time.end + '"'
            + ' data-start="' + caption.time.start + '"'
            + ' data-end="' + caption.time.end + '"'
            + '>'
            + caption.text
            + '</p>\n'
          )
          .join('')

      return arguments.length === 1
             ? console.log(data)
             : fs.writeFileSync(output, data)

    } else {

      return console.log('please enter a filename to read, and optionally an output filename to write')

    }

  },

}

if (process.argv[2]) {

  const [command, ...args] = [
    ...process.argv[2].split(' '), ...process.argv.slice(3)
  ]

  if (functions[command]) {

    functions[command](...args)

  } else {

    console.log('command not recognized')

  }

} else {

  console.log(`\navailable output formats include:\n\n${
    Object.entries(functions)
      .map(entry => `- ${entry[0]}\n`)
      .join('')
  }`)

}