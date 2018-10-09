const our_Nums = [-4,3,10,4,-5,10,4,3,-58,32,-57];


function positive_Nums(x){
    if (x > 0){
    return true;
    }
}

function even_Nums(x){
    if (x % 2 === 0){
    return true;
    }
}

function square(x){
    return x*x
}


// new_Nums = our_Nums.filter(positive_Nums);
// new_Nums = our_Nums.filter(even_Nums);
new_Nums = our_Nums.map(square);

console.log(our_Nums);
console.log(new_Nums);