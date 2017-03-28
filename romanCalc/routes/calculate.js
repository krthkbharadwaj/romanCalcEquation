var express = require('express');
var router = express.Router();

/* GET input information from the form, to process the calculator. */
router.post('/', function (req, res, next) {
    res.render('result', { title: 'Roman Calculator', result: calculator(req.body) });
});

module.exports = router;

function calculator(req) {
    //console.log(req.first);
    var i, j;
    var arr = [];
    arr.push(req.first);
    arr.push(req.second);
    arr.push(req.third);
    var n = arr.length;

    console.log("arr is " + arr);
    console.log("n is " + n);

    var leftsum, rightsum;

    /* for(var i=0; i< n; i++) {
         for(var j=i;j)
     }*/

    var sum = 0;
    var leftS = 0;

    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var equ = [];
        var mul = [];
        var mu = 1;

        leftS = parseInt(arr[i]);
        for (var j = 0; j < arr.length; j++) {
            if (j != i) {
                sum += parseInt(arr[j]);
                equ.push(arr[j]);

                mu = mu * parseInt(arr[j]);
                mul.push(arr[j]);

            }
        }
        console.log("Left is " + leftS + " Sum is " + sum+" mul is "+mu);
        if (leftS == sum) {
            var out = '';
            for (var k = 0; k < equ.length; k++) {
                var operator = '';
                if (k != 0) {
                    operator = "+";
                }
                out += operator + equ[k];
            }
            return leftS+"="+out;
        }else if(leftS==mu){
            var out = '';
            for (var k = 0; k < mul.length; k++) {
                var operator = '';
                if (k != 0) {
                    operator = "*";
                }
                out += operator + mul[k];
            }
            return leftS+"="+out;
        }

    }
    return "Can not make mathematical operations";
}