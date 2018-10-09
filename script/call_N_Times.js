
function hello_World(){
    console.log(`Hello World`)
}


function callNTimes(x,hello){
    for (i=0;i<x;i++){
        hello()

    }
}

callNTimes(5,hello_World)
