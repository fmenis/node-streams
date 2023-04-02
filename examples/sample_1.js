import { createBigFile } from '../utils/index.js'

import { createReadStream, createWriteStream } from 'fs'
import { pipeline, Transform } from 'stream'
import split2 from 'split2'

// createBigFile()

const readableStream = createReadStream('./data/file.txt', 'utf-8')
const writeStream = createWriteStream('./data/file-trasformed.txt')

const transformStream = new Transform({
  // objectMode: true,
  transform(chunk, encoding, callback) {
    const str = chunk.toString()
    callback(null, chunk.toString().toUpperCase() + '\n')
  },
})

pipeline(readableStream, split2(), transformStream, writeStream, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Pipeline execution successful')
  }
})

// pipeline(readableStream, transformStream, writeStream, err => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log('Pipeline execution successful')
//   }
// })
