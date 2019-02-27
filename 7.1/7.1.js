function delay(f, sec) {
    return function() {
        setTimeout.apply(null, [f, sec].concat(Array.from(arguments)))
    }
}

function add(a, b) {
    console.log("add A+B=" + (a+b))
}

var delayed_add = delay(add, 2000)
delayed_add(2, 2)