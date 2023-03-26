var towns = ['Москва', 'Питер', 'Ульяновск', 'Пятигорск', 'Тольятти', 'Ташкент', 'Якутск', 'Видное', 'Мурманск', 'Махачкала'];
var input = document.getElementById('town');
input.addEventListener("keyup", (e) => {
   removeTown();
   dropMenu.classList.remove('town-list_inactive');
   for (var t of towns) {
      if (t.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
         var townList = document.createElement("li");
         townList.classList.add("town-list__elem");
         townList.style.cursor = "pointer";
         townList.setAttribute("onclick", "townName('" + t + "')");
         var foundTown = "<b>" + t.substring(0, input.value.length) + "</b>";
         foundTown += t.substring(input.value.length);
         townList.innerHTML = foundTown;
         document.querySelector(".town-list").appendChild(townList);
      }
   }
});
var dropMenu = document.getElementById('town-list');
dropMenu.addEventListener('click', (e) => {
   dropMenu.classList.add('town-list_inactive');
});
function townName(val) {
   input.value = val;
}
function removeTown() {
   var elem = document.querySelectorAll(".town-list__elem");
   elem.forEach((i) => {
      i.remove();
   });
}