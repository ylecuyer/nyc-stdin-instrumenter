#!/usr/bin/env node

const getInputData = () => {
  return new Promise((resolve, reject) => {
    let inputData = '';

    process.stdin.on('data', (chunk) => {
      inputData += chunk;
    });

    process.stdin.on('end', () => {
      resolve(inputData);
    });

    process.stdin.on('error', (err) => {
      reject(err);
    });
  });
};

const handleInput = async () => {
  var { createInstrumenter } = require('istanbul-lib-instrument')
  var fs = require('fs')

  const data = await getInputData();

  var instrumenter = createInstrumenter({
    esModules: false
  })

  // argv[2] is the path of the file
  output = instrumenter.instrumentSync(data, process.argv[2])

  console.log(output)
};

handleInput();
