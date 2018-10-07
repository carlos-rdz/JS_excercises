let starting_Number = parseInt(prompt(`Where do you want to start?:`)) ;
const ending_Number = parseInt(prompt(`Where do you want to end?:`)) ;


// console.log(starting_Number);
// console.log(ending_Number);

while (starting_Number < ending_Number+1) {

    if (starting_Number % 2 !== 0){
    
        console.log(`Your number is ${starting_Number}`);
    } 
    starting_Number++;
}