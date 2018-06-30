const onStart = ()=>{
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
    }

    var trace = {
    x: unpack(rows, 'Date'),
    close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995], 
    high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004], 
    low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995], 
    open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004], 
    // cutomise colors
    increasing: {line: {color: 'green'}},
    decreasing: {line: {color: 'red'}},

    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
    };

    var data = [trace];

    var layout = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
        rangeslider: {
            visible: false
        }
    }
    };

    Plotly.plot('graph', data, layout);
    });
}

onStart();



const switch1 = ()=>{
    document.querySelector("#orderHistory").style.display = "block";
    document.querySelector("#tradeHistory").style.display = "none";
}

const switch2 = ()=>{
    document.querySelector("#tradeHistory").style.display = "block";
    document.querySelector("#orderHistory").style.display = "none";
}

const chart1 = ()=>{
    document.querySelector("#depthChart").style.display = "none";
    document.querySelector("#priceChart").style.display = "block";
    document.querySelector(".changeId1").setAttribute("id","graph");
    document.querySelector(".changeId2").setAttribute("id","none");
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
    }

    var trace = {
    x: unpack(rows, 'Date'),
    close: unpack(rows, 'AAPL.Close'),
    high: unpack(rows, 'AAPL.High'),
    low: unpack(rows, 'AAPL.Low'),
    open: unpack(rows, 'AAPL.Open'),

    // cutomise colors
    increasing: {line: {color: 'green'}},
    decreasing: {line: {color: 'red'}},

    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
    };

    var data = [trace];

    var layout = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
        rangeslider: {
            visible: false
        }
    }
    };

    Plotly.plot('graph', data, layout);
    });
}

const chart2 = ()=>{
    document.querySelector("#depthChart").style.display = "block";
    document.querySelector("#priceChart").style.display = "none";
    document.querySelector(".changeId1").setAttribute("id","none");
    document.querySelector(".changeId2").setAttribute("id","graph");
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
    }

    var trace = {
    x: unpack(rows, 'Date'),
    close: unpack(rows, 'AAPL.Close'),
    high: unpack(rows, 'AAPL.High'),
    low: unpack(rows, 'AAPL.Low'),
    open: unpack(rows, 'AAPL.Open'),

    // cutomise colors
    increasing: {line: {color: 'green'}},
    decreasing: {line: {color: 'red'}},

    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
    };

    var data = [trace];

    var layout = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
        rangeslider: {
            visible: false
        }
    }
    };

    Plotly.plot('graph', data, layout);
    });
}
