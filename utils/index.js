import { createWriteStream } from 'fs'

export function createBigFile() {
  const writeStream = createWriteStream('./data/file.txt')

  for (let i = 1; i <= 200000; i++) {
    writeStream.write(`Hello world welcome to Node.js (line ${i})\n`)
  }
}
