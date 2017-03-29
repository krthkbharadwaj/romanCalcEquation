exports.equation = function (req) {

    var arr = [];
    
    var f = convert_numeric(req.first);
    var s = convert_numeric(req.second);
    var t = convert_numeric(req.third);

    var parArr = [];
    parArr[f] =req.first;
    parArr[s] =req.second;
    parArr[t] =req.third;

    if(f==""||s==""||t==""){
        return "Please enter proper number";
    }else{
        arr.push(f); arr.push(s); arr.push(t);
    }
    var n = arr.length;

    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var equ = [];
        var mul = [];
        var mu = 1;
        var leftS = 0;

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
            for (var k = 0; k < arr.length; k++) {
                if(k==0){
                    if(arr[1]>arr[0]){
                        out +='-'+parArr[arr[k]];
                    }else{
                        out +=parArr[arr[k]];
                    }
                }else if(k==1 && (i == 0 || i==1)){
                    if(arr[1]>arr[0]){
                        out +="+"+parArr[arr[k]]+"=";
                    }else{
                        out +="-"+parArr[arr[k]]+"=";
                    }    
                }else if(k==1 && i == 2){
                    out +="+"+parArr[arr[k]]+"=";
                }else if(k==2){
                    out += parArr[arr[k]];
                }
            }
            var res = "Equation is "+out;
            return res;
        }else if(leftS==mu){
            var out = '';
            console.log("index is "+i);
            for (var k = 0; k < arr.length; k++) {
                if(k==0){
                    if(arr[1]>arr[0]){
                        out +=parArr[arr[1]]; 
                    }else{
                        out +=parArr[arr[k]];
                    }
                }else if(k==1 && i == 0){
                    out +="/"+parArr[arr[k]]+"=";
                }else if(k==1 && (i == 1 || i==2)){
                    if(arr[1]>arr[0]){
                      out +="/"+parArr[arr[0]]+"=";      
                    }else{    
                      out +="*"+parArr[arr[k]]+"=";
                    }    
                }else if(k==2){
                    out += parArr[arr[k]];
                }
            }
            var res = "Equation is "+out;
            return res;
        }

    }
    return "Can not make mathematical operations with numbers provided";
};

var rarr = new Array("M",
"CM", "D", "CD", "CCC", "CC", "C", "XC", "L", "XL", "XXX", "XX", "X", "IX", "V", "IV", "III", "II", "I");var narr = new Array(1000,900,500,400,300,200,100,90,50,40,30,20,10,9,5,4,3,2,1); var warr = new Array("CMCM",
"CMD",
"CMCD", "CMC", "DD", "DCD", "CDCD", "CDC", "CCCC", "XCXC",
"XCL", "XCXL", "XCX", "LL", "LXL", "XLXL", "XLX", "XXXX", "IXIX",
"IXV", "IXIV", "IXI", "IVIV", "IVI", "IIII");

/*var carr= new Array("MDCCC", "MCD",
"MIII", "M",
"M",
"CM",
"DCCC", "D",
"CD",
"CLXXX", "CXL", "CIII", "C",
"C",
"XC",
"LXXX", "L",
"XL",
"XVIII", "XIV", "XIII", "X",
"VIII", "V",
"IV");
*/

function convert_numeric(rom) { 
    var roman = rom.replace(/ /g, ""); 
    roman = roman.toUpperCase(); 
    roman = roman.replace(/[^IVXLCDM]/g, ""); 
    //document.getElementById("roman").value = roman; 
    if (roman.length == 0) { return; } 
    var position = 0; var result = 0; var pp = -1; 
    while (position < roman.length) { 
        var p = getnextletter(roman, position); 
        if (pp != 0) { 
            if (narr[pp] < narr[p]) {
                return; 
            } 
        } 
        if (p < 0) 
            return ""; 
        position += rarr[p].length; result += narr[p]; pp = p; 
    } 
       return result;
}
function getnextletter(roman, position) {
    for (i=0; i<warr.length; i++){
        if ( roman.indexOf(warr[i], position) == position ) {
            return;
        }
    }
    for (i=0; i<rarr.length; i++){
        if ( roman.indexOf(rarr[i], position) == position)
        return i;
    }
    return;
}