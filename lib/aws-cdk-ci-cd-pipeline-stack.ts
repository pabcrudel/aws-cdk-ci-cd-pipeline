import * as cdk from 'aws-cdk-lib';
import * as pipeline from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class AwsCdkCiCdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new pipeline.CodePipeline(this, 'Pipeline', {
      synth: new pipeline.ShellStep('Synth', {
        input: pipeline.CodePipelineSource.gitHub('pabcrudel/aws-cdk-ci-cd-pipeline', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
  };
};
