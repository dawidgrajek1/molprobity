# MolProbity command line tools API

## Setup

Pull existing image from dockerhub

```bash
docker pull dawidgrajek1/molprobity:latest
docker compose up
```

or build the image

```bash
docker build -t molprobity .
docker run -p 3001:3001 -v user_data:/user_data molprobity
```

## Usage

1. Store your PDB files inside the created volume.
2. GET API call to `/oneline-analysis` will return a JSON file with the result.

## Example

The following API call:

```text
http://localhost:3001/oneline-analysis?filename=7KUC_1_A.pdb
```

will return

```json
{
    "pdbFileName": "7KUC_1_A.pdb",
    "x-H_type": "nuclear",
    "chains": "1",
    "residues": "16",
    "nucacids": "16",
    "resolution": "",
    "rvalue": "",
    "rfree": "",
    "clashscore": "0",
    "clashscoreB<40": "0",
    "minresol": "0",
    "maxresol": "9999",
    "n_samples": "1784",
    "pct_rank": "100",
    "pct_rank40": "100",
    "numbadbonds": "0",
    "numbonds": "388",
    "pct_badbonds": "0.00",
    "pct_resbadbonds": "0.00",
    "numbadangles": "1",
    "numangles": "605",
    "pct_badangles": "0.17",
    "pct_resbadangles": "6.25",
    "chiralSwaps": "0",
    "tetraOutliers": "0",
    "pseudochiralErrors": "0",
    "waterClashes": "0",
    "totalWaters": "0",
    "numPperpOutliers": "0",
    "numPperp": "16",
    "numSuiteOutliers": "1",
    "numSuites": "17"
}
```
