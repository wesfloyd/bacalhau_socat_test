

To test locally:
1) Clone the repository
2) Invoke the docker container:
```
docker run -v $(pwd)/input:/project/input \
	-v output:/project/output \
	wesfloyd/bacalwow-socat-test
```


To run on [Bacalhau](https://github.com/filecoin-project/bacalhau):
1) Upload the input directory to IPFS (via [Web3.storage folder upload script](https://web3.storage/docs/#create-the-upload-script))
    cd web3storage
    npm install
    node put-files.js --token=[TOKEN] ../input

2) Use the CID of the input directory to run the job on Bacalhau

```
bacalhau docker run -v bafybeihde3ggze2h7vnic6tomttnp4mj7o4ifpa65ys57nrp35dnq4s7ri:/project/input \
	-o output:/project/output \
	wesfloyd/bacalwow-socat-test

bacalhau list

bacalhau describe [JOB_ID]

bacalhau get [JOB_ID]
```
