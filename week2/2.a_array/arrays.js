//array objects 
const questionAndAnswer = [
    {
        question: "How many ounces are in a cup?",
        answer: "8",
    }, 
    {
        question: "What are the primary colors?",
        answer: "red yellow blue",
    },
    {
        question: "What are the secondary colors?",
        answer: "orange purple green",
    },
    {
        question: "What ocean borders the east coast of the US?",
        answer: "atlantic ocean",
    },
    {
        question: "What ocean borders the west coast of the US?",
        answer: "pacific ocean",
    },
];

//random question prompt
console.log(Math.floor(Math.random()) * 5)
const randomNumber = Math.floor(Math.random() * questionAndAnswer.length);

//User Answer + Correct Answer
const userResponse = window.prompt(questionAndAnswer[randomNumber].question);
window.alert('You answered ' + userResponse + '. The correct answer was ' + questionAndAnswer[randomNumber].answer + '.');