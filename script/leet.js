const text = prompt(`What do you want to convert to leet?: `);
const letterToConvert = [`A`,`E`,`G`,`I`,`O`,`S`,`T`];
const numbers =         [`4`,`3`,`6`,`1`,`0`,`5`,`7`];


const textToTranslate = text.toUpperCase();
console.log(textToTranslate)
let translation = ``;

for (let letter of textToTranslate) {
    

    if (letterToConvert.indexOf(letter) !== -1 ){

        let index = letterToConvert.indexOf(letter)

        translation = translation+numbers[index];



    } else {

        translation = translation + letter;
    }


}

console.log(translation)