const switch1 = () => {
    document.querySelector("#orderHistory").style.display = "block";
    document.querySelector("#tradeHistory").style.display = "none";
};

const switch2 = () => {
    document.querySelector("#tradeHistory").style.display = "block";
    document.querySelector("#orderHistory").style.display = "none";
};

const chart1 = () => {
    document.querySelector("#ltcChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "block";
    document.querySelector("#ethChart").style.display = "none";
};

const chart2 = () => {
    document.querySelector("#ethChart").style.display = "block";
    document.querySelector("#ltcChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "none";
};

const chart3 = () => {
    document.querySelector("#ltcChart").style.display = "block";
    document.querySelector("#ethChart").style.display = "none";
    document.querySelector("#btcChart").style.display = "none";
};

const logIn = (username, email, password) => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
};

const logOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
};

const checkLoggedIn = () => {
    if (localStorage.getItem("infiniteScrollEnabled") === null) {
        return false;
    }
    return true;
};