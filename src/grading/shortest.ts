import Submission from "../classes/submission";

export default function getShortestSubmission(submissions:Array<Submission>) {

    let submissionDetails = [];
    let shortestLength = Number.MAX_VALUE;

    submissions.forEach((submission) => {

        let submissionLength = submission.text.length;

        if (shortestLength > submissionLength) 
            shortestLength = submissionLength;

        submissionDetails.push({
            ...submission,
            length: submissionLength
        });

    });
    
    for (var i = 0; i < submissionDetails.length; i++) {

        if (submissionDetails[i].length == shortestLength) return i;

    }

};