length = parseInt(prompt(`How long do you want the square?: `));
width = parseInt(prompt(`How wide do you want the square?: `));


function box(a, b){

    var i;
    for (i=0;i<a;i++){
        
        var x;
        for(x=0;x<b;x++){
            console.log(`*`);

        }
        console.log('')
    }
}

box(length*2,width)