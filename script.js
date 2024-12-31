
currentDate = new Date();
refDate = new Date('04/04/2023'); // month day year
diffTime = Math.abs(refDate - currentDate);
diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

var weekType = Math.floor(diffDays / 7) % 3;

document.getElementById("data_oggi").innerHTML = currentDate;
document.getElementById("data_ref").innerHTML = refDate;
document.getElementById("differenza_date").innerHTML = diffDays;
document.getElementById("differenza_date_settimane").innerHTML =  Math.floor(diffDays / 7);
document.getElementById("tipo_settimana").innerHTML = weekType;

var pulisce = document.getElementById('pulisce');
var pausa1 = document.getElementById('pausa1');
var pausa2 = document.getElementById('pausa2');

var citazioni = [
        "Teresa pulisci da brava donna",
        "Fabio ottimo lavoro",
        "Festim pulisci come se stesse per arrivare Paulina"
];
        
var r = Math.floor(Math.random() * citazioni.length);
document.getElementById("citazione").innerHTML = citazioni[r];

var p1 = new String("Fabio");
var p2 = new String("Teresa");
var p3 = new String("Festim");

switch (weekType) {
        case 0:
                document.getElementById("pulisce").innerHTML = p1;
                document.getElementById("pausa1").innerHTML = p2;
                document.getElementById("pausa2").innerHTML = p3;
                break;
        case 1:                
                document.getElementById("pulisce").innerHTML = p3;
                document.getElementById("pausa1").innerHTML = p1;
                document.getElementById("pausa2").innerHTML = p2;
                break;
        case 2:
                document.getElementById("pulisce").innerHTML = p2;
                document.getElementById("pausa1").innerHTML = p3;
                document.getElementById("pausa2").innerHTML = p1;
                break;
}
