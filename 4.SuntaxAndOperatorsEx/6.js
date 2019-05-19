function same(num) {

    num = num.toString();
    let sum =0;
    let firstElement = num[0];
    isSame = true;

    for (let index = 0; index < num.length; index++) {
        
        sum += Number(num[index]);

        if(firstElement != (num[index])){
            isSame = false;
        }
        
    }

    console.log(isSame)
    console.log(sum);
}

same(1234);