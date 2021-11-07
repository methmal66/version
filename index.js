#!/usr/bin/env node
const { version } = require("./package.json")

if (process.argv[2] == "-v") {
   console.log(version)
} else {
   console.log(`A very simple cli tool to display package version`)
   console.log(`To use this tool enter -v`)
}
