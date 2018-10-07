const our_Message= prompt(`What do you want to write as a message?: `);
const border = '*'


var i;

for (i=0;i<3;i++){

    if (i === 0 || i === 2){

        console.log(border.repeat(our_Message.length+4));


    } else {

        console.log(`* ${our_Message} *`)
    }    

}