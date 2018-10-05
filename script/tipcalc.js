//
const LEVEL_GOOD = 'good';
const LEVEL_FAIR = 'fair';
const LEVEL_BAD = 'bad';

const TIP_GOOD = 0.2;
const TIP_FAIR = 0.15;
const TIP_BAD = 0.1;



const totalBill = parseFloat(`292.34`);
const levelOfService = 'bad';

let tip = 0.0;

if (levelOfService === LEVEL_GOOD) {
    tip = totalBill * TIP_GOOD;
}
else if (levelOfService === LEVEL_FAIR){
    tip = totalBill * TIP_FAIR;
}
else if (levelOfService === LEVEL_BAD){
    tip = totalBill * TIP_BAD;
}
else{
    console.log("Invalid");
}

console.log(`Tip amount: ${tip.toFixed(2)}`);
console.log(`Total amount: ${(totalBill + tip).toFixed(2)}`);
