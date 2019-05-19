function print(fruit, weightInGrams, pricePerKilo) {

    let money;
    let weight = (Number(weightInGrams) / 1000);

    money = (weight * pricePerKilo);

    console.log(`I need ${money.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

