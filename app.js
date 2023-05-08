"use strict"
let questionArray=[];
let numberOfQuestions=7;
let userInputs="";
let questionCounter=0;
//  prompt("enter a firm name");
//  prompt("enter a firm name");
//  prompt("enter a firm name");
//  prompt("enter a firm name");
//  prompt("enter a firm name");
//  prompt("enter a firm name");
//  prompt("enter a firm name");
for(let i=0;i<3;i++){
    userInputs=prompt("hello");
    let questionArray.push(userInputs);
}

 console.log(questionArray);
 

let originalStory=`MR.Elon Musk cofounded the e-payment firm ${userInputs[0]}and 
In ${userInputs[1]}___ he founded ${userInputs[2]}____,
 a company that makes rockets and ${userInputs[3]}_____.
He was a major early funder of ${userInputs[4]}___,
which makes electric ${userInputs[5]}____ and batteries 
and became its chief executive officer in ${userInputs[6]}____.
He purchased the social media service ${userInputs[7]}____in 2022.`;
console.log(originalStory);
// Elon Musk cofounded the electronic payment firm PayPaland 
// in 2002 he founded SpaceX, a company that makes rockets and spacecraft.
// He was a major early funder of Tesla,
// which makes electric cars and batteries 
// and became its chief executive officer in 2008.
// He purchased the social media service Twitter in 2022.