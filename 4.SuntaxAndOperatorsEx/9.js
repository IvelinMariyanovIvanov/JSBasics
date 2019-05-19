function object(arr) {


    // let objList = [];
    let obj = {};

    for (let i = 0; i < arr.length; i+=2) {

    //    let obj = {};
       let food;
       let calories;

       food = arr[i];
       calories = Number(arr[i+1]);
       
       obj[food] = calories;
    //    objList.push(obj);
    }

   console.log(obj);
}

object(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);