import inquirer from "inquirer";

//coding for calculator

const answer= await inquirer.prompt([
    {message :'Enter your first number',type :'number',name: 'firstNumber'},
    {message :'Enter your second number',type :'number',name: 'secondNumber'},
    
   
    {message :'Select one of operators to perfrom action',type: "list",name :'operator',choices:['Addition','Multiplication','Subtraction','Division'],},

])
//conditional operator
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}

else if(answer.operator === "Subtraction"){
    
    console.log(answer.firstNumber - answer.secondNumber)
}

else if(answer.operator === "Multiplication"){
    
    console.log(answer.firstNumber * answer.secondNumber)
}

else if(answer.operator === "Division"){
    
    console.log(answer.firstNumber / answer.secondNumber)
}

else{
console.log("Please select correct operator")
}



