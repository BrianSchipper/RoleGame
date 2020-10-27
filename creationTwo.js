
//muestra todos los valores de localStorage o sea el personaje principal
var i,j,k;
j= "";
for (i=0;i<=localStorage.length-1;i++){
    j ="-" + localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i)) + "<br>" + j; 
}
document.querySelector("#Pet").innerHTML ="Datos del personaje:"+ "<br>"+ j;

//le da el "checked" a un item LI de una UL
var list = document.querySelector('ul');

  list.addEventListener('click', function(ev) {
    if( ev.target.tagName === 'LI'){
         ev.target.classList.toggle('checked');
    }
  }, false);

// muestra los valores dentro de cada nivel de magia
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

