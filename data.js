var backgroundJson ={
    "background":[
        {
            "name": "Acólito",
            "items":["100 de oro", "un mapa","una biblia"],
        },
        {
            "name": "Charlatan",
            "items":["200 de oro", "una flauta","una biblia"],
        },
        {
            "name": "Criminal",
            "items":["900 de oro", "bomba de humo"],
        },
    ]
};

var spellsJson ={
    "spells":[
        {
            "name": "Amistad con los animales",
            "castingTime": "1 action",
            "range": "30 pies",
            "components":"V, S, M (un trozo de comida)",
            "duration": "24 hours",
            "description":"Este conjuro te permite convencer a una bestia que pueda verte y escucharte de que no pretendes hacerle daño. Si su Inteligencia es 4 o superior, el conjuro falla. Si no, la bestia debe superar una tirada de salvación de Sabiduría para no quedar hechizada mientras dura el conjuro. Si tú o uno de tus compañeros daña al objetivo, el conjuro termina.",
        },
        {
            "name":"Buenas bayas",
            "castingTime": "1 action",
            "range": "touch",
            "components": "V, S, M (un ramito de muérdago)",
            "duration": "instantaneous",
            "description": "En tu mano aparecen hasta diez bayas imbuidas con magia mientras dura el conjuro. Una criatura puede usar su acción para comerse una baya. Comerse una baya hace que se recupere 1 punto de golpe y ofrece suficiente alimento como para mantener a una criatura durante 1 día.Las bayas pierden su poder si no se consumen en 24 horas después de lanzar el conjuro."
        }]
};

var racesJson =  
{
    "races": [
        {
            "race":"Orco",
            "passive":["Ability Score Inerease","Age", "Aligment",  "Size", "Speed","Darkvision","Menacing","Relentless Endurance","Savage Attacks","Languages"],
            "characteristics":[2,1,0,0,1,0],
        },
        {
            "race":"Elfo",
            "passive":["Ability Score Inerease","Age", "Aligment",  "Size", "Speed", "DarkVision","Keen Senses","Fey Ancestry","Trance","Languages"],
            "characteristics":[1,1,0,0,0,3],
        },
        {
            "race":"Humano",
            "passive":["Ability Score Inerease","Age", "Aligment",  "Size", "Speed","Languages"],
            "characteristics":[1,1,1,1,1,1],
        },
        {
            "race":"Enano",
            "passive":["Ability Score Inerease","Age", "Aligment",  "Size", "Speed", "DarkVision", "Dwarven Resilience", "Dwarven Combat Training", "Tool proficiency", "Stonecunning", "Languages"],
            "characteristics":[1,1,1,0,0,0],
        }
    ]
    
};

var classesJson =  
{
    "classes": [
        {
            "class":"Druida",
            "traitsAvailable":["Arcana","Animal Handling", "Insight","Medicine", "Nature", "Perception","Religion", "Survival"],
            "maxTraitsToChoose":2,
            /*Features*/ 
            "passive":["Druidic","Spellcastig"],
            "spells": {
                0:["Druidcraft","Guidance","Mending","Poison spray", "Produce flame","Resistance","shillelgalph","Thorn Whip"],
                1:["Amistad con los animales","Buenas bayas",  "Crear o destruir agua",
                "Curar heridas", "Detectar magia", "Detectar veneno y enfermedad","Enmarañar",
                "Fuego feérico","Hablar con los animales", "Hechizar persona",
                "Nube brumosa",  "Onda atronadora",  "Palabra curativa",
                "Purificar comida y bebida", "Salto", "Zancada prodigiosa"],
                    2:["sarasa1-level2","sarasa2-level2"],

            },
            "spellsSlot": [2,2],
            "hitDice":8,
        },
        {
            "class":"Guerrero",
            "traitsAvailable":["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation","Perception","Survival"],
            "maxTraitsToChoose":2,
            "passive":["Fighting style","Second Wind"],
            "hitDice":10,
        },
        {
            "class":"Mago",
            "traitsAvailable":["Arcana", "History", "Insight","Investigation", "Medicine", "Religion"],
            "maxTraitsToChoose":2,
            "passive":["Spellcasting","Arcane Recovery"],
            "spells": {
                0:["Contacto electrizante",
                    "Cuchichear mensaje",
                    "Ilusión menor",
                    "Impacto verdadero",
                    "Luces danzantes",
                    "Luz",
                    "Mano del mago",
                    "Prestidigitación",
                    "Rayo de escarcha",
                    "Rayo de fuego",
                    "Remendar",
                    "Rociar veneno",
                    "Salpicadura de ácido",
                    "Toque helado"],


                1:[ "Alarma",
                    "Armadura de mago",
                    "Caer como una pluma",
                    "Comprensión idiomática",
                    "Detectar magia",
                    "Disco flotante",
                    "Disfrazarse",
                    "Dormir",
                    "Encontrar familiar",
                    "Escritura ilusoria",
                    "Escudo",
                    "Falsa vida",
                    "Grasa",
                    "Hechizar persona",
                    "Identificar",
                    "Imagen silenciosa",
                    "Manos ardientes",
                    "Nube brumosa",
                    "Onda atronadora",
                    "Protección contra el mal y el bien",
                    "Proyectil mágico",
                    "Retirada expeditiva",
                    "Rociada de color",
                    "Salto",
                    "Sirviente invisible",
                    "Terribles carcajadas",
                    "Zancada prodigiosa"],
                "level2":["sarasa1-level2","sarasa2-level2"],

            },
            "spellsSlot": [3,2],
            "hitDice":6,
        },
        {
            "class":"Monje",
            "traitsAvailable":["Acrobatics", "Athletics", "History","Insight", "Religion", "Stealth"],
            "maxTraitsToChoose":2,
            "passive":["Unarmored Defese","Martial Arts"],
            "hitDice":8,
        }
    ]
    
};

racesJson = JSON.stringify(racesJson);
var race_obj = JSON.parse(racesJson);

classesJson = JSON.stringify(classesJson);
var class_obj = JSON.parse(classesJson);

spellsJson = JSON.stringify(spellsJson);
var spells_obj = JSON.parse(spellsJson);

backgroundJson = JSON.stringify(backgroundJson);
var background_obj = JSON.parse(backgroundJson);

/*
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
*/
//metodo que mer permite buscar una posision dentro del JSON para una clase en particular
function LookForPositionFromClass (a){

    var x;
    for (x=0;x<=class_obj.classes.length-1; x++){
        if (a == class_obj.classes[x].class) { return x; }
    }
}

function LoadRace() {
    var i;
    var stringFormado = "";
    var x = document.querySelector("body > div.race-select > div.select-selected").innerText;
    var k = 0;
    var max = race_obj.races.length;
    
    for (k; k <= max -1 ;k++)
    {
        if (x == race_obj.races[k].race) {
            for (i = 0; i <= race_obj.races[k].passive.length-1; i++) {
                stringFormado = "-"+race_obj.races[k].passive[i] + "<br>" + stringFormado;
            }
            document.querySelector("#imageCharacter").innerText = "Elegiste "+race_obj.races[k].race;
            document.querySelector("#strPlus").innerText= "+" +race_obj.races[k].characteristics[0]
            document.querySelector("#agiPlus").innerText= "+" +race_obj.races[k].characteristics[1]
            document.querySelector("#conPlus").innerText= "+" +race_obj.races[k].characteristics[2]
            document.querySelector("#intPlus").innerText= "+" +race_obj.races[k].characteristics[3]
            document.querySelector("#knoPlus").innerText= "+" +race_obj.races[k].characteristics[4]
            document.querySelector("#chaPlus").innerText= "+" +race_obj.races[k].characteristics[5]
        }
    } 
    document.getElementById("pasivesGainedRace").innerHTML = "Pasivas ganadas por raza:" +"<br>" +stringFormado; 
}

  function LoadClass() {
    var i,w;
    var stringFormado= "";
    var x = document.querySelector("body > div.class-select > div.select-selected").innerText;

        for (w=0;w<=class_obj.classes.length-1; w++){

        if (x == class_obj.classes[w].class) {

            localStorage.setItem("class",class_obj.classes[w].class);
            localStorage.setItem("currentHitPoints",class_obj.classes[w].hitDice);
            localStorage.setItem("maxHitPoints",class_obj.classes[w].hitDice);
            
            /*Setteo en 0 a total y vacio lo checkeado, m*/
            total = 0;
            var listAllSkills = document.getElementById("myUL").getElementsByTagName("li");         
            for(k=0; k<= listAllSkills.length-1;k++)
            {
                if (listAllSkills[k].classList.length == 3){listAllSkills[k].classList.toggle("checked")}
            } 

            var listOwnSkills = class_obj.classes[w].traitsAvailable;
            var arrAllSkills= [];
            //Escribo los skills ganados
            for (i = 0; i <= class_obj.classes[w].passive.length-1; i++) {
                stringFormado = "-"+class_obj.classes[w].passive[i] + "<br>" + stringFormado;  
            }
            //paso los elementos LI a un array que puedo manejar y desabilito los elementos
            for (i= 0; i< listAllSkills.length; i++){
                arrAllSkills.push( listAllSkills[i].innerText);
                listAllSkills[i].classList.toggle('disabled');
            }
            //Habilito los skills que la clase puede utilizar
            for (i= 0; i<= listOwnSkills.length; i++){
                if (arrAllSkills.includes(listOwnSkills[i])){
                   // console.log("Incluye el skill "+listOwnSkills[i]);          
                    listAllSkills[arrAllSkills.indexOf(listOwnSkills[i])].classList.toggle('enabled');  
                }
                else{
                    
                }

            }
        }
        }
        document.getElementById("pasivesGainedClass").innerHTML = "Pasivas ganadas por clase:" +"<br>" +stringFormado;
}

function LoadSpells(){
    
    try 
    {
        LoadSpellsPerClass();
    }
    catch(error)
    { console.log("esta clase no usa magias"); }

}

function LoadSpellsPerClass() {

    var i,ul,docfrag,spellsList;
    var classSelected = LookForPositionFromClass( localStorage.getItem("class"));
    var levelSpells = ['spellsList0','spellsList1','spellsList2']
    
    //hago un ciclo para cada nivel de magias
    for (j=0;j<= levelSpells.length-1;j++) 
    {
        //cargo las magias de nivel correspondiente a la lista de su nivel
        // para el ul de hechizos nivel j 
        ul = document.getElementById(levelSpells[j]);
        // mientras de la clase "classSelected", los "spells" de nivel i esten definidos, los cargo
            docfrag = document.createDocumentFragment();
            spellsList = class_obj.classes[classSelected].spells[j];

            spellsList.forEach(function(e) {
            var li = document.createElement("li");
            li.textContent = e;
            docfrag.appendChild(li);
            });
            //i++;
            ul.appendChild(docfrag);
    }    
    
}

function random(){   
    var i;
    var backgroud_pj = document.querySelector("#backgroundCharacter").selectedIndex;
    var items = "Items del personaje:";

    for (i=0; i <=background_obj.background[backgroud_pj].items.length -1; i++){
        items = items + "<br>"+ "-"+ background_obj.background[backgroud_pj].items[i];
    }
    document.getElementById("#itemsForBackground").innerHTML = items;
}