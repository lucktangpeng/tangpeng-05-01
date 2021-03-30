#! /usr/bin/env node
const { program }  = require('commander')


program.option('-d --directory <dir>', 'is input url')

program.parse()
const configParams = program.opts()

const CountSize = require('../main')

const count = new CountSize(configParams)

count.start().then(val => {
  const Fomatter = (val / 1024 / 1024).toFixed(2)
  console.log(`目录的总大小为: ${Fomatter} MB`)
})