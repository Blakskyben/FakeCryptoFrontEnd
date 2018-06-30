const onStart = ()=>{
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
