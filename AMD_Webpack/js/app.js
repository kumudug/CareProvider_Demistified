define(['./calculator'], function(myCalc){
    console.log('AMD using Webpack');

    var val1 = 5, val2 = 9;
    var result = myCalc.addition(val1, val2);
    console.log('Addition of ' + val1 + ' to ' + val2 + ' yield ' + result);
});