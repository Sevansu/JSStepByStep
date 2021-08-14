let globalname = "Sevansu";

function printName(){
    let localname="Sevansu Coding..."
    console.log(`${localname} selected`);
}

printName();
printName();
console.log(`${globalname}  selected`);
//console.log(`${localname} again selected`);//gives error
//console.log(`${globalname}  selected`);//will not log this output


//Function Expression IMPORTANT

let FunHey = function() {
    alert( "Hello" );
    console.log("alert with Hello executed");
  };

//for let its value  so in the end best practice to put semicolon

console.log(FunHey);
FunHey();

//callback function

