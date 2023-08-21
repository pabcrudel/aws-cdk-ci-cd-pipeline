import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export class LambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, stageName: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new lambda.Function(this, 'LambdaFunction', {
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'handler.main',
            code: lambda.Code.fromAsset(path.join(__dirname, 'lambda')),
            environment: { 'stageName': stageName },
        }).applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
    };
};