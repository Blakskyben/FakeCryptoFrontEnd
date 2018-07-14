const switch1 = ()=>{
    document.querySelector("#orderHistory").style.display = "block";
    document.querySelector("#tradeHistory").style.display = "none";
}

const switch2 = ()=>{
    document.querySelector("#tradeHistory").style.display = "block";
    document.querySelector("#orderHistory").style.display = "none";
}

const chart1 = ()=>{
    document.querySelector("#ltcChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "block";
    document.querySelector("#ethChart").style.display = "none";
}

const chart2 = ()=>{
    document.querySelector("#ethChart").style.display = "block";
    document.querySelector("#ltcChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "none";
}

const chart3 = ()=>{
    document.querySelector("#ltcChart").style.display = "block";
    document.querySelector("#ethChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "none";
}

const dropdown = () => {
    $("#drop").toggle();
}
const dropdown1 = () => {
    $("#placeOrders").attr("class","BTC");
    $("#drop").toggle();
}
const dropdown2 = () => {
    $("#placeOrders").attr("class","ETH");
    $("#drop").toggle();
}
const dropdown3 = () => {
    $("#placeOrders").attr("class","LTC");
    $("#drop").toggle();
}

const sell = () => {
    if($("#placeOrders").attr("class")=="BTC"){
        console.log("Place BTC Sell Order.");
    } else if($("#placeOrders").attr("class")=="ETH"){
        console.log("Place ETH Sell Order.");
    } else if($("#placeOrders").attr("class")=="LTC"){
        console.log("Place LTC Sell Order.");
    } else {
        alert("Please select a Cryptocurrency.");
    }
}

const buy = () => {
    if($("#placeOrders").attr("class")=="BTC"){
        console.log("Place BTC Buy Order.");
    } else if($("#placeOrders").attr("class")=="ETH"){
        console.log("Place ETH Buy Order.");
    } else if($("#placeOrders").attr("class")=="LTC"){
        console.log("Place LTC Buy Order.");
    } else {
        alert("Please select a Cryptocurrency.");
    }
}