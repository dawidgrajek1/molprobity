import { execSync } from 'child_process';

const USER_DATA = `/user_data`
const ONELINE_HEADERS = ["pdbFileName", "x-H_type", "chains", "residues", "nucacids", "resolution", "rvalue", "rfree", "clashscore", "clashscoreB<40", "minresol", "maxresol", "n_samples", "pct_rank", "pct_rank40", "numbadbonds", "numbonds", "pct_badbonds", "pct_resbadbonds", "numbadangles", "numangles", "pct_badangles", "pct_resbadangles", "chiralSwaps", "tetraOutliers", "pseudochiralErrors", "waterClashes", "totalWaters", "numPperpOutliers", "numPperp", "numSuiteOutliers", "numSuites"];


async function handler(command: string) {
    const output = execSync(command, { encoding: 'utf-8' }).toString();
    const splt = output.split('/\r?\n/');
    const filtered = splt.filter((line) => line !== '');
    return JSON.stringify(filtered);
}

export async function runOnelineAnalysys(filename: string) {
    const command = `oneline-analysis -noprotein -dorna -q ${USER_DATA}/${filename}`;
    const output = await handler(command);
    const outputParsed = (JSON.parse(output)[0]).toString().replace("\n", "").split(':');
    const outputParsedObj = Object.fromEntries(ONELINE_HEADERS.map((key, i) => [key, outputParsed[i]]));

    return JSON.stringify(outputParsedObj);
}