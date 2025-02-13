# Varibles  
A variable is a container tha holds a  piece of information/data. The data stored is the value while the container is the variable. A data that does not change is a constant.  

## Declaring Varibles  

1. `var`: becoming obsolete
1. `let`: preferred for variables that change
1. `const`: for values that should not change/constant variables. 

    `var language = 'JavaScript';`  
    `let book = "You Don't Know JS";`  
    `const author = 'Kyle Simpson';`  


## Upddating variables
Only `let` and `var` can update variables since `const` cannot be changed. Trying to change a const value with throw an error! 

    let students = 16;    
    students = 20;   

    var lesson = "HTML";    
    lesson = "Javascript";   

## Declaring and Initializing variables
Declaring variable means creating  it without assigning a value.  

    let school;  
    console.loge(school);  
    
    This will output `undefined` School is declared but not iniotialized.  

Initializing a variable means assigning it an itital valur at the time of declaration.  

    let school = "Muranga University";    
    console.log(shool);   

    This will output Muranga University.   

## Renaming Variables  
Variable names can only start with a letter, underscore(_) or dollar sign($). All other naming methods are invalid and might throw an error. 
>NOTE: JavaScript reserved keywords such as `let, var, assyn, const` ...etc, cannot be used to name variabbles.  

    
    let _book = "Eloquent JavaScript";
    let copies = 20;
    let $price = 9.99;
    
>NOTE: Variables are case-sensitive and if a variable is made of multiple words use camel case convention
Use meaningful and descriptive names as good practice.

    meaningful and descriptive name: 

    let bootcampTrainer = "Dennis";
    let courseTought = "Web Develoment";
    let STUDENTS = 20;
    let students = 15;

    console.log(bootcampTrainer); // Dennis
    console.log(courseTought); // Web Development
    console.log(STUDENTS); // 20
    console.log(students); // 15

    bad practice: These declarations may confuse the readers.

    let a = "Gideon"
    let l = "javascript"
