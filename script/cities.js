var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];


function city_Filter(x){

    if ( x['temperature'] <70.0 ){

        return x['name']
    }


}

filtered_Cities = cities.map(city_Filter)
console.log(filtered_Cities)


function city_Array(x){

    return x['name']
}

array_Of_City_Names = cities.map(city_Array)
console.log(array_Of_City_Names)


// Return cities with temperatures below 70