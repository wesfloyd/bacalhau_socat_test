// Taken from: https://web3.storage/docs/intro/#quickstart
// token bacalwow
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJGMzgzYzMyQ2QzRDAyNjk4ZTVDZDUxMjY5Qjg3ODk1MkJjYTU2ODUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTc2NTk0NjM5OTEsIm5hbWUiOiJiYWNhbHdvdyJ9.jsS_EPPZnURB1EVx9mckWDIT8nNNk4FIk-oxH3acgLg


import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function main () {
  const args = minimist(process.argv.slice(2))
  const token = args.token

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  if (args._.length < 1) {
    return console.error('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })
  const files = []

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
}

main()
