#!/usr/bin/env node

var { createInstrumenter } = require('istanbul-lib-instrument')
var fs = require('fs')

var data = fs.readFileSync(0, 'utf-8')

var instrumenter = createInstrumenter({})

// argv[2] is the path of the file
output = instrumenter.instrumentSync(data, process.argv[2])

console.log(output)
