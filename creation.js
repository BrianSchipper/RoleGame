var correctCards = 0;
$( init );

function init() {

  // Reset the game
  correctCards = 0;// para validacion
  $('#cardPile').html( '' );
  $('#characteristicsSlots').html( '' );
  localStorage.clear();

  // Crea  la pila de cartas en desorden
  var numbers = [ 8, 10, 12, 14, 16, 18 ];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<numbers.length; i++ ) {
    $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }
  var wordsIds = ['str','agi','con','int', 'kno', 'cha'];
  var words = [ 'Fue', 'Agi', 'Con', 'Int', 'Sab', 'Car' ];
  for ( var i=1; i<= words.length; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'stat', i ).attr('id',wordsIds[i-1]).appendTo( '#characteristicsSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop(event, ui) {
  
  //slotNumber numero del slot, cardNumber numero en la tarjeta
  var slotCharacteristic = $(this).data('stat');
  var cardNumber = ui.draggable.data('number');

  //ui.draggable.draggable('disable'); // que no puedas mover la carta
  //$(this).droppable('disable'); // hace que no puedas dejar ninguna carta en ese slot
  ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' }); // pega la carta en el espacio
  ui.draggable.draggable('option', 'revert', false); // evita que vuelva la carta si esta en posicion 
  localStorage.setItem($(this).attr('id'),cardNumber);
  correctCards++; //incrementa la cantidad de cartas correctas
}

var race, classDD, i, j, selElmnt, a, b, c;
race = document.getElementsByClassName("race-select");
for (i = 0; i < race.length; i++) {
  selElmnt = race[i].getElementsByTagName("select")[0];
  /*por cada elemento, crea un DIV que actua como selected */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  race[i].appendChild(a);
  /*por cada elemento, crea un DIV que tiene un option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*por cada opcion,crea un div que actua como item option */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*cuando selecciono, actualizo el original select box,
        y el item seleccionado*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  race[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*al hacer click en el select box, cierra las demas box,
      y abre/cierra el box seleccionado actualmente:*/
      LoadRace();
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
// Ver como actual el race-select, mismo comportamiento
classDD = document.getElementsByClassName("class-select");
for (i = 0; i < classDD.length; i++) {
  selElmnt = classDD[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  classDD[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  classDD[i].appendChild(b);
  a.addEventListener("click", function(e) {
      LoadClass();
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  /* Cierra todas las boxes en el doc excepto la actual seleccionada*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*Si el usuario hace click fuera del select box, cierro todas las selecct boxes*/
document.addEventListener("click", closeAllSelect);

// Agregar el "checked" cuando hago click

var list = document.querySelector('ul');

  list.addEventListener('click', function(ev) {
    if( ev.target.tagName === 'LI'){
      if(ev.target.classList.length > 2){
         total--; 
         ev.target.classList.toggle('checked');
        } 
      else  if(ev.target.classList.length <= 2 && total < class_obj.classes[0].maxTraitsToChoose) 
        {total++;ev.target.classList.toggle('checked')}
    }
  }, false);

function increaseValue(x) {
  var value = parseInt(document.getElementById(x.id).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(x.id).value = value;
}

function decreaseValue(x) {
  var value = parseInt(document.getElementById(x.id).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(x.id).value = value;
}

function loadSkillsRaceClass(){

  var selector = "";
  var listOfSkills = "";
  localStorage.setItem("skills",listOfSkills);

  for (var i = 1; i<= 16;i++){
    selector =  "#myUL > li:nth-child(" + i + ")";

    if(document.querySelector(selector).classList.length == 3){
      listOfSkills = document.querySelector(selector).innerText + "," + listOfSkills;
      localStorage.setItem("skills",listOfSkills);
    } 
  }
  
}

function loadCharacter() {
  
  if (typeof(Storage) !== "undefined") {
    
    localStorage.setItem("name", document.querySelector("#name").value);
    localStorage.setItem("level",1);
    /*Cargo los stats iniciales del personaje */
    var a;  
    a = parseInt(localStorage.getItem("str")) + parseInt(document.querySelector("#strPlus").innerHTML)
    localStorage.setItem("str",a);
    a = parseInt(localStorage.getItem("agi")) + parseInt(document.querySelector("#agiPlus").innerHTML)
    localStorage.setItem("agi",a);
    a = parseInt(localStorage.getItem("con")) + parseInt(document.querySelector("#conPlus").innerHTML)
    localStorage.setItem("con",a);
    a = parseInt(localStorage.getItem("int")) + parseInt(document.querySelector("#intPlus").innerHTML)
    localStorage.setItem("int",a);
    a = parseInt(localStorage.getItem("kno")) + parseInt(document.querySelector("#knoPlus").innerHTML)
    localStorage.setItem("kno",a);
    a = parseInt(localStorage.getItem("cha")) + parseInt(document.querySelector("#chaPlus").innerHTML)
    localStorage.setItem("cha",a);

    localStorage.setItem("class",document.querySelector("body > div.class-select > div.select-selected").innerText);
    localStorage.setItem("race",document.querySelector("body > div.race-select > div.select-selected").innerText);
    
    /* Cargo la vida y la vida maxima */
    var b,modificador,valor;
    valor =parseInt(localStorage.getItem("con"));
    if (valor <10 ){modificador = Math.floor(valor/2 -5)} else {modificador = Math.ceil(valor/2 -5)};

    b = parseInt(localStorage.getItem("currentHitPoints")) + modificador
    localStorage.setItem("currentHitPoints",b);
    b = parseInt(localStorage.getItem("maxHitPoints")) + modificador
    localStorage.setItem("maxHitPoints",b);
    
    /*Calculo de iniciativa */
    valor =parseInt(localStorage.getItem("agi"));
    modificador = Math.floor(valor/2 -5);
    localStorage.setItem("initiative",modificador);

    //localStorage.setItem("speed","esta en la info de raza");
    localStorage.setItem("status","Great");
    /* Seleccionados en la parte 1 de creacion de personaje, por raza y clase  */
    loadSkillsRaceClass();
    
    /* se eligen en la parte 2 de creacion de personaje */
    localStorage.setItem("spells","hardcore");
    localStorage.setItem("items","Aun mas hardcore");    
    localStorage.setItem("armourClass","hacer cuenta");

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}