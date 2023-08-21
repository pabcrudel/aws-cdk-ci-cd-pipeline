export async function main(event: string, context: string) {
    console.log('Stage name is: ', process.env.stage)
    return {
        body: 'Hello from lambda function',
        statusCode: 200,
    };
};