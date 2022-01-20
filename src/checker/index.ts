import Question from '../classes/question.js';
import Submission from '../classes/submission.js';
import { pickLangVersion, pickLangEnding } from './langUtility.js';
import Request from './request.js';

export async function runFile(fileData, language, stdin):Promise<any> {

    const data = new TextEncoder().encode(
        JSON.stringify({
            language,
            version: pickLangVersion(language),
            files: [
                {
                    name: `main.${pickLangEnding(language)}`,
                    content: fileData
                }
            ],
            stdin,
            args: [],
            compile_timeout: 10000,
            run_timeout: 3000,
            compile_memory_limit: -1,
            run_memory_limit: -1
        })
    )

    const options = {
        hostname: 'emkc.org',
        port: 443,
        path: '/api/v2/piston/execute',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
    }

    // @ts-ignore
    const requestData = (await Request(options, data));

    // @ts-ignore
    return ((requestData.run || {}).stdout);

}

export async function checkAnswer(question:Question, answer:Submission) {

  

}