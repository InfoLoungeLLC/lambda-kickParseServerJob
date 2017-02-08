# lambda-kickParseServerJob

AWS Lambda Function to kick Parse Server Cloud job.

## Getting Started
    $ git clone https://github.com/InfoLoungeLLC/lambda-kickParseServerJob.git
    $ cd lambda-kickParseServerJob
    $ npm install
    $ zip -r lambda-kickParseServerJob.zip index.js node_modules
Then, upload lambda-kickParseServerJob.zip to AWS Lambda admin panel.

## Environment variables
Set Environment variables on AWS Lambda admin panel.
- MASTER_KEY : Parse Server Master Key (Required)
- APP_ID : Parse Server Application ID (Require)
- SERVER_URL : Parse Server Endpoint (Required) (ex. https://example.com/parse)
- JOB_NAME : Name of Job (Required)
