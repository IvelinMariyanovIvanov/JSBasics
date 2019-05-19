function radius(input) {

    let inputType = typeof(input);

    if(inputType == "number") {
        let result = 0;

        result = Math.pow(input , 2) * Math.PI;
        result = result.toFixed(2);

        console.log(result);
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

radius(3);