import React from "react";

let toDate = new Date(2024,3,25,22,30);
let hours = toDate.getHours();
let words = "";
let clr;

if(hours >= 1 && hours <= 12){
    clr = {color : "green"}
    words = "Good Morning!";
}else if(hours >= 12 && hours <17){
    clr = {color : "blue"}
    words = "Good Afternoon!";
}else if(hours >= 17 && hours <20){
    clr = {color : "orange"}
    words = "Good Evening!";
}else{
    words = "Good Night!";
}

const timeZone = () => {
    return <div>
            <h1 className="text-center text-3xl font-semibold text-gray-500 mt-10 border border-8 border-green-800 outline-double inline-block px-10 py-5 rounded-2xl">Hello Sir, <span className="text-red-600" style={clr}>{words}</span></h1>
        </div>
}

export default timeZone;