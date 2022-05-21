---
date: '2021-10-01'
title: 'Software Dev Engineer II'
company: 'Swiggy'
location: 'Bangalore, Karnataka, Inda'
range: 'Oct 2021 - present'
url: 'https://www.swiggy.com/'
---

Independently scoped, designed and implemented the changes necessary to use a low cost secondary storage i.e. Amazon S3, that would replace the existing SQL database i.e. TokuDB. As a result the Order Data Service migrated completed to a NoSQL data storage with Amazon DynamoDB as the primary and Amazon S3 as the secondary storage.

Key Highlights:
- Maintained the query latency under existing values inspite of S3 being a non-indexed storage. To accomplish this, an S3 index table was created explicitly using DynamoDB. 
- Implemented a mechanism to efficiently fetch, convert from json format to protobuf format and write the 19 TB of order data to the S3 bucket.
- Had zero downtime during the migration to the new archival storage.