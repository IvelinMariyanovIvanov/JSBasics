function calculate(day, service, time) {

    
    // let indexOfDay = function index(day) {

    //    let dayOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    //    return dayOfWeeks.indexOf(day);
    // };

    let dayOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let indexOfDay = dayOfWeeks.indexOf(day);
  

    let moneyToPay;

    let weekPrice = {
        "Fitness" : 5,
        "Sauna" : 4,
        "Instructor": 10
    };

    let weekEndPrice ={
        "Fitness" : 8,
        "Sauna" : 7,
        "Instructor": 15
    };

    if(indexOfDay <= 4) {
        if(time <=15) {
            moneyToPay= weekPrice[service]
        }
        else {
            moneyToPay = weekPrice[service] + 2.5;
        }
    } 
    else {
        moneyToPay = weekEndPrice[service];
    }

    console.log(moneyToPay);

}


calculate('Monday', 'Sauna', 15.30);
