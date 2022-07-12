

To test locally:
1) Clone the repository
2) Invoke the docker container:
```
docker run -it -v $(pwd)/input:/project/input \
	-v $(pwd)/output:/project/output \
	wesfloyd/bacalwow-socat-test
```


To run on Bacalhau:
1) Upload the input directory to IPFS (via [Web3.storage folder upload script](https://web3.storage/docs/#create-the-upload-script))
    cd web3storage
    npm install
    node put-files.js --token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJGMzgzYzMyQ2QzRDAyNjk4ZTVDZDUxMjY5Qjg3ODk1MkJjYTU2ODUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTc2NTk0NjM5OTEsIm5hbWUiOiJiYWNhbHdvdyJ9.jsS_EPPZnURB1EVx9mckWDIT8nNNk4FIk-oxH3acgLg ../input

2) Use the CID of the input directory to run the job on Bacalhau

```
bacalhau docker run -v [TOKEN]:/project/input \
	-o $(pwd)/output:/project/output \
	wesfloyd/bacalwow-socat-test

bacalhau list

bacalhau describe [JOB_ID]

bacalhau get [JOB_ID]
```