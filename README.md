# seed-cloud-functions-ts

A seed for a project based on Google Cloud Functions, written in Typescript.

## Test

```bash
npm run test
```

## Deployment

Use set-env-vars parameter to configure environment varialbe to be used as configuration.
Other trigger events are:
* google.storage.object.finalize
* google.storage.object.delete
* google.storage.object.archive
* google.storage.object.metadataUpdate

### Deployment of the storage triggered function
Make sure to replace the name of the bucket
```bash
npm run build
cp package.json dist
cp package-lock.json dist
cd dist
gcloud functions deploy helloStorage --runtime nodejs10 \
  --region europe-west1 \
  --trigger-resource <MY-BUCKET> \
  --trigger-event google.storage.object.finalize \
  --set-env-vars USERNAME=<USERNAME>,PASSWORD=<PASSWORD>
```



### Deploy pub/sub triggered function

**Create the required topic**

```bash
gcloud pubsub topics create incoming-data
```

**Deploy**

```bash
gcloud functions deploy helloPubSub --runtime nodejs10 --trigger-topic incoming-data \
--set-env-vars DBURI=<DBURI>,DBNAME=<DBNAME>
```