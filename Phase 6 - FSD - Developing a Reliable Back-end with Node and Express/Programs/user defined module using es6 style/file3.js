export function display6() {
    console.log("display6 function export on function level - normal function style ")
}

export let display7 = function() {
        console.log("display7 function export on function level - expression function style ")
}

export let display8 = ()=>console.log("display8 function export on function level - arrow function style ")
