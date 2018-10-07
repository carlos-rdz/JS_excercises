// 

let whatUserSaid = `yes`;
let numberOfCoins = 0;



while (whatUserSaid === 'yes'){

    whatUserSaid = prompt(`Hey, want another?`)

    if (whatUserSaid === 'yes'){
        numberOfCoins++;
    }
    
        console.log(`I have ${numberOfCoins} coins`)
}


console.log(`Bye!`)