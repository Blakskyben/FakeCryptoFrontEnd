const switch1 = ()=>{
    document.querySelector("#orderHistory").style.display = "block";
    document.querySelector("#tradeHistory").style.display = "none";
}

const switch2 = ()=>{
    document.querySelector("#tradeHistory").style.display = "block";
    document.querySelector("#orderHistory").style.display = "none";
}

const chart1 = ()=>{
    document.querySelector("#priceChart").style.display = "block";
    document.querySelector("#depthChart").style.display = "none";
}

const chart2 = ()=>{
    document.querySelector("#depthChart").style.display = "block";
    document.querySelector("#priceChart").style.display = "none";
}