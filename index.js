// code your solution here

function saturdayFun(activity){
    if (activity === "bathe my dog"){
        return "This Saturday, I want to bathe my dog!"
    }else{
        return "This Saturday, I want to roller-skate!"
    }
}

 const mondayWork = function(location){
    if (location === "work from home"){
        return "This Monday, I will work from home."
    }else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(init){
    const text1 = "a hard worker"
    if (init === "*"){
        return function(){
            return `You are ${init}a hard worker${init}!`
        }
    } else if (init === "||"){
        return function(){
            return `You are ${init}a dedicated programmer${init}!`
        }
    }
}
    
    
    