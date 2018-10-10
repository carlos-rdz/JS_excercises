var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

  let sortedProducts = products.sort(function(a,b) {

    if (a[`price`] > b[`price`]){
        return 1

    } if (a[`price`] < b[`price`]){
        return -1
    }

    return 0
  });

  console.log(sortedProducts)

