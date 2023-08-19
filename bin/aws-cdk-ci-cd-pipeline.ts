#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkCiCdPipelineStack } from '../lib/aws-cdk-ci-cd-pipeline-stack';

const app = new cdk.App();
new AwsCdkCiCdPipelineStack(app, 'AwsCdkCiCdPipelineStack', {
  env: { account: process.env.ACCOUNT_ID, region: process.env.REGION, },
});

app.synth();