const text = prompt(`What do you want to convert to leet?: `);



function leet_Speak(a){

const lettersToNumbers = {
    'A':4,'E':3,'G':6,'I':1,'O':0,'S':5,'T':7};
const textToTranslate = a.toUpperCase();
let translation = ``;

for (let letter of textToTranslate){
    if (lettersToNumbers[letter] !== undefined){
        translation = translation + lettersToNumbers[letter]
    } else {
        translation = translation + letter
    }
}
console.log(translation)

}
leet_Speak(text)


// const textToTranslate = text.toUpperCase();
// console.log(textToTranslate)
// let translation = ``;

// for (let letter of textToTranslate) {
    

//     if (letterToConvert.indexOf(letter) !== -1 ){

//         let index = letterToConvert.indexOf(letter)

//         translation = translation+numbers[index];



//     } else {

//         translation = translation + letter;
//     }


// }

// console.log(translation)