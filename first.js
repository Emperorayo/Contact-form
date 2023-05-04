function ask(question, yes, no){
    if(console.log(question)) yes()
    else no()
}
function showOk(){
    console.log("Agreed");
}
function showCancel(){
    console.log("You canceled")
}

console.log("Do you agree?", showOk , showCancel);