'use strict'

function getDate(req, res) {
    var date = new Date();
    date = new Date(date.getTime() - (5 * 3600 * 1000));
    var hour = date.getHours(); hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes(); min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds(); sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1; month = (month < 10 ? "0" : "") + month;
    var day = date.getDate(); day = (day < 10 ? "0" : "") + day;
    const FECHA = year + "-" + month + "-" + day;
    // const FECHA = date.toLocaleDateString('es-MX');
    const HORA = hour;
    const TIME = year + "-" + month + "-" + day + "-" + hour + "-" + min + "-" + sec;

    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let dia = dias[date.getDay() - 1];
    if (dia == null) {
        dia = "Domingo";
    } else {
        dia = dias[date.getDay() - 1];
    }
    console.log(dia);

    date = { date };
    date.date = FECHA;
    date.hour = HORA;
    date.time = TIME;
    date.dia = dia;

    res.status(200).send({ result: 'ok', date: date });
}

function getFibonacci(req, res){
    var a=0;
    var b=1;
    var n = 100;
    var arrayFibo = [];
    for(let i=0; i<n;i++){
    var numeroTemporal=a;
    a=b;
    b=numeroTemporal+b;
    arrayFibo.push(a);
    }
    res.status(200).send({ result: 'ok', fibonacci: arrayFibo });
}

module.exports = {
    getDate,
    getFibonacci
}   