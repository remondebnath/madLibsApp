"use strict"
let questionArray=[];
let noOfQuestions=7;
let userInputs=[];
let questionCounter=0;

// promptname
questionArray=[`Please Enter a e-payment firmname co-founded by Elon Musk`, 
            `Please Enter a year when he started with rocket stuffs`,
            `Please Enter the brandname of his rocket company`,
            `Please Enter the productname his company produces`,
            `Please Enter his electric-company brandname`,
            `Please Enter the productname of his company`,
            `Please Enter the year he becomes ceo of his company`,
            `Please Enter a company name he brought recently`]      
// forloop
for(let i=noOfQuestions;i>=0;i--){
    userInputs.push(prompt(questionArray[questionCounter]+`(${noOfQuestions}question left)`));
    
    questionCounter++;
  noOfQuestions--;


}
alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');


let originalStory=`MR.Elon Musk cofounded the e-payment firm ${userInputs[0]} and 
In ${userInputs[1]} he founded ${userInputs[2]},
 a company that makes rockets and ${userInputs[3]}.
He was a major early funder of ${userInputs[4]},
which makes electric ${userInputs[5]} and batteries 
and became its chief executive officer in ${userInputs[6]}.
He purchased the social media service ${userInputs[7]}in 2022.`;
console.log(originalStory);
document.write(originalStory);
document.getElementById("demo").innerHTML=originalStory;
// Elon Musk cofounded the electronic payment firm PayPaland 
// in 2002 he founded SpaceX, a company that makes rockets and spacecraft.
// He was a major early funder of Tesla,
// which makes electric cars and batteries 
// and became its chief executive officer in 2008.
// He purchased the social media service Twitter in 2022.