let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(property in statistics) {
    var odd = statistics[property] % 2;
    var name = property.charAt(0);
    if ((odd == 1) || (name == 'r')) {
        console.log(`${property} = ${statistics[property]}`);
    }
}