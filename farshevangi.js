// function nebraska(a, b) {
//     if (a === b) {
//         return "ტოლია";
//     } else {
//         return "არ არის ტოლი";
//     }
// }


// let godzilla = nebraska(5,25);
// console.log(godzilla);




// function amindi(V) {
//     if (V == undefined) {
//         return false;
//     } else {
//         return Math.round((V - 32) * 5 / 9);
//     }
// }

// let prognozi = amindi(22);

// console.log(prognozi);


let operation = "-";
function klanchi(a, b) {
    if (operation === "+") {
        return a + b;
    }else if (operation === "-") {
        return a - b;
    }else if (operation === "*") {
        return a * b;
    }else if (operation === "/") {
        return a / b;
    }else {
        return false;
    }
}

const teranozavri = klanchi(22, 11);
console.log(teranozavri)