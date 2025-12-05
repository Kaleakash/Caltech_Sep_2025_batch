function display3() {
    console.log("display3 function part of fil2 module - default export")
}

function display4() {
    console.log("display4 function part of fil2 module - non default export")
}
function display5() {
    console.log("display5 function part of fil2 module - non default export")
}

export default display3;
export {display4,display5};