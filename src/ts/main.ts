import {getAvg} from './averageService';

// Let's use some ES6 features
const scores= [90, 75, 60, 99, 94, 30];
const averageScore : number = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);