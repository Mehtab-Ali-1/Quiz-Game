#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold.italic(`\n\t\t********  Wellcome to Quiz Game  ********`));
console.log(chalk.bgRed.white(`\t\t                                         \n`));

const quiz : {
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
    question_6 : string;
    question_7 : string;
    question_8 : string;
    question_9 : string;
    question_10 : string;
} = await inquirer.prompt([
    {
        name : "question_1",
        message : chalk.cyan("Q-1 :")+chalk.white(" What are the three main 'simple types' in TypeScript?"),
        type : "list",
        choices : [`Object, Array, Symbol`,`Array, Object, Boolean`,`Boolean, Number, String`,`Object, String, Number`]            //`Boolean, Number, String`
    },{
        name : "question_2",
        message : chalk.cyan("Q-2 :")+chalk.white(" True or False: TypeScript can always correctly infer a variables type."),
        type : "list",
        choices : [`True`,`False`]                    //`False`
    },{
        name : "question_3",
        message : chalk.cyan("Q-3 :")+chalk.white(" _____ is similar to 'any', but a safer alternative when uncertain about the type."),
        type : "list",
        choices : [`never`,`unknown`,`similar`]       //`unknown`
    },{
        name : "question_4",
        message : chalk.cyan("Q-4 :")+chalk.white(" What is the inherited type for the variable example in `const example = ['Dylan']`?"),
        type : "list",
        choices : [`string[]`,`unknown[]`,`string`,`any[]    
        `]                                             //`string[]`
    },{
        name : "question_5",
        message : chalk.cyan("Q-5 :")+chalk.white(" True or False: TypeScript will always correctly infer the type of an array."),
        type : "list",
        choices : [`True`,`False`]                     //`False`
    },{
        name : "question_6",
        message : chalk.cyan("Q-6 :")+chalk.white(" Type Aliases are mostly used with ______."),
        type : "list",
        choices : [`Numbers`,`Strings`,`Booleans`]     //`Strings`
    },{
        name : "question_7",
        message : chalk.cyan("Q-7 :")+chalk.white(" ________ an interface will have the same properties as that interface."),
        type : "list",
        choices : [`Duplicating`,`Idolizing`,`Extending`,`Improving`]   //`Extending`
    },{
        name : "question_8",
        message : chalk.cyan("Q-8 :")+chalk.white(" What are the two types of enums?"),
        type : "list",
        choices : [`String and Number`,`Number and Number Array`,`String and Boolean`,`Number and Boolean`]                           //`String and Number`
    },{
        name : "question_9",
        message : chalk.cyan("Q-9 :")+chalk.white(" Numeric enums first value is defaulted to what?"),
        type : "list",
        choices : [`1`,`0`,`5`,`10`]                    //`0`
    },{
        name : "question_10",
        message : chalk.cyan("Q-10 :")+chalk.white(" What is the type of the parameter: `function ex(param1?: string){}`?"),
        type : "list",
        choices : [`string | undefined`,`unknown`,`string | null`,`string`]    //string | undefined
    }
]);
// *********************  For Score  ************************
let scoreCount : number = 0;

// *********************  For Question-1  ************************
switch (quiz.question_1){
    case `Boolean, Number, String`:
        console.log(chalk.cyan(`\n1.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`\n1.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-2  ************************
switch (quiz.question_2){
    case `False`:
        console.log(chalk.cyan(`2.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`2.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-3  ************************
switch (quiz.question_3){
    case `unknown`:
        console.log(chalk.cyan(`3.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`3.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-4  ************************
switch (quiz.question_4){
    case `string[]`:
        console.log(chalk.cyan(`4.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`4.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-5  ************************
switch (quiz.question_5){
    case `False`:
        console.log(chalk.cyan(`5.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`5.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-6  ************************
switch (quiz.question_6){
    case `Strings`:
        console.log(chalk.cyan(`6.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`6.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-7  ************************
switch (quiz.question_7){
    case `Extending`:
        console.log(chalk.cyan(`7.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`7.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-8  ************************
switch (quiz.question_8){
    case `String and Number`:
        console.log(chalk.cyan(`8.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`8.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-9  ************************
switch (quiz.question_9){
    case `0`:
        console.log(chalk.cyan(`9.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
    default :
        console.log(chalk.cyan(`9.   `),chalk.red(`xxx INCORRECT xxx`));       
}
// *********************  For Question-10  ************************
switch (quiz.question_10){
    case `string | undefined`:
        console.log(chalk.cyan(`10.   `),chalk.green(`<<< CORRECT >>>`));
        scoreCount++;
        break;
        default :
        console.log(chalk.cyan(`10.   `),chalk.red(`xxx INCORRECT xxx`));       
    }
    // ************************************************************************
    
    console.log(chalk.bgYellow.black(`\n\t\t    *****  Result  *****    `))
    //   *********************  For Comments  ************************
if (scoreCount <= 4){
    console.log(chalk.red(`\n\t\t You must study much harder`));
}else if (scoreCount <=6){
    console.log(chalk.magenta(`\n\t  Good, but you should to do more practice`));
}else{
    console.log(chalk.green(`\n\t\tYou can be proud of yourself!`)); 
}
console.log(chalk.yellow(`\n\t\t    Score  :  ${scoreCount} of 10`))