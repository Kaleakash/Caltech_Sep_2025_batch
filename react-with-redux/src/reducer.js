
let initialState = {
    n:200,
    fname:"Akash",
    product:{pid:100,pname:"TV",price:56000},
    skillSet:["Java","Python"]
}

function reducer(state=initialState,action){

    // base upon action we can do the changes on state variable 
    //console.log("I Came Here!")
    //console.log(action)
    if(action.type=="INCREMENT"){
        // 1st parameter ... state initial state (all other value of states)
        // the property which we want to change 
        // new value 
        //return {...state,n:400}
        return {...state,n:state.n+1}
    }
    if(action.type=="DYNAMIC_INCREMENT"){
        // 1st parameter ... state initial state (all other value of states)
        // the property which we want to change 
        // new value 
        console.log(action)
        //return {...state,n:400}
        return {...state,n:action.payload}
    }
    if(action.type=="DECREMENT"){
        // 1st parameter ... state initial state (all other value of states)
        // the property which we want to change 
        // new value 
        //return {...state,n:400}
        return {...state,n:state.n-1}
    }
    if(action.type=="CHANGE_PRODUCT_DETAILS"){
        console.log("event fired")
        // one property change 
        //return {...state,product:{...state.product,pid:101}}
        // change all property value 
        return {...state,product:{...state.product,pid:101,pname:"Sony TV",price:58000}}
    }
    return state;
}


export default reducer;


