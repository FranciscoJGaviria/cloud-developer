import AWS = require('aws-sdk');
import { config } from './config/config';

const c = config.dev;
const signedUrlExpireSeconds = 150 // 5 min

//Configure AWS
if(c.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({ profile: c.aws_profile });
  AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: { Bucket: c.aws_media_bucket }
});


/**
 * getSignedUrlToRead generates an aws signed url to retrieve an item
 * @param key: string - the filename to be put into the s3 bucket
 * @returns a url as a string
 */
export function getSignedUrlToRead(key: string): string {
  const params = {
    Bucket: c.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  };
  const url = s3.getSignedUrl('getObject', params);
  return url;
}

/**
 * getSignedUrlToWrite generates an aws signed url to put an item
 * @param key: string - the filename to be retrieved from s3 bucket
 * @return a url as a string
 */
export function getSignedUrlToWrite(key: string): string {
  const params = {
    Bucket: c.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  };
  const url = s3.getSignedUrl('putObject', params);
  return url;
}
