var example =  
{
    "races": [
        {
            "race":"Orco",
            "passive":["Fuerza bruta","Sangre de Orco", "Otra prueba mas"]
        },
        {
            "race":"Elfo",
            "passive":["Agilidad de angel","Lengua élfica"]
        }
    ]
    
};

example = JSON.stringify(example);
var obj = JSON.parse(example);

function LoadRace() {
    var i;
    var stringFormado = "";

    var x = document.querySelector("body > div.race-select > div.select-selected").innerText;
    if (x == "Orco") {
        for (i = 0; i <= obj.races[0].passive.length-1; i++) {
            stringFormado = "-"+obj.races[0].passive[i] + "<br>" + stringFormado;
        }
        document.querySelector("#imageCharacter").innerText = "Elegiste Orco";
    } 
    if (x == "Humano") {
      document.querySelector("#imageCharacter").innerText = "Elegiste Humano";
    } 
    if (x == "Elfo") {
        for (i = 0; i <= obj.races[1].passive.length-1; i++) {
        stringFormado = "-"+obj.races[1].passive[i] + "<br>" + stringFormado;
        document.querySelector("#imageCharacter").innerText = "Elegiste Elfo";
        }
    }
    document.getElementById("PasivesGained").innerHTML = "Pasivas ganadas:" +"<br>" +stringFormado; 
  }