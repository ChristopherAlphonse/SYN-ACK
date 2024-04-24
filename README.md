# SYN/ACK

## Description

This application is meant to be self-hosted for personal use. You can utilize it however you see fit.

![Screenshot2](./img/Screenshot%202024-04-23%20232256.png)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `pnpm install` to install dependencies.

## Data

All data is stored in `src/data/*` file.

## JSON Data EXAMPLE

```json
[
    {
        "question": "What service is commonly used to deploy and manage containerized applications on AWS?",
        "options": ["Amazon EC2", "Amazon RDS", "Amazon ECS", "Amazon S3"],
        "correctAnswer": "Amazon ECS"
    },
    {
        "question": "Which AWS service provides scalable cloud storage for archival and backup purposes?",
        "options": ["Amazon S3", "Amazon EBS", "Amazon Glacier", "Amazon RDS"],
        "correctAnswer": "Amazon Glacier"
    },
    {
        "question": "What AWS service enables you to build serverless applications using functions?",
        "options": [
            "Amazon SNS",
            "Amazon SQS",
            "AWS Lambda",
            "Amazon API Gateway"
        ],
        "correctAnswer": "AWS Lambda"
    }
]
```

## Music Data EXAMPLE

```typescript
export const songs: SongTypes[] = [
    {
        name: "First Snow",
        artist: "Emancipator",
        album: "Soon It Will Be Cold Enough",
        url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
    },
];
```

## Usage

To start the app using `pnpm dev`:

1. Make sure you have [pnpm](https://pnpm.io/) installed globally on your machine.
2. Navigate to the project directory.
3. Run `pnpm dev`.
4. The app should now be running locally. You can access it by navigating to `http://localhost:3000` in your web browser.

![Screenshot](./img/Screenshot%20from%202024-04-23%2016-10-46.png)
