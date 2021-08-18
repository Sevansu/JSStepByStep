let person = {
    name : "seva"
}


person = null; //you can't access this object after this
//this will give error -> console.log(person.name);


let vehicle = {
    type:"car"
}

automobile=vehicle;
vehicle=null;
console.log(automobile.type);
