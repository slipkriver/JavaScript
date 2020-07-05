const diaHoy = new Date();
let valor;

//MES
valor = diaHoy.getMonth();

//DIA
valor = diaHoy.getDate();
// valor = diaHoy.getDay();

//AÑO
valor = diaHoy.getFullYear();

//MINUTOS
valor = diaHoy.getMinutes();

//HORA
valor = diaHoy.getHours();

valor = diaHoy.setFullYear(1011);
valor = diaHoy.getFullYear();

console.log(valor);