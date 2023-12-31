const eventsArray = data.events;
const checkboxCont = document.getElementById("searchbar-checkbox");
const contenedor = document.getElementById("contenedor-cards");
const buscador = document.getElementById("buscador");
let categories = [];
categories = Array.from(new Set(eventsArray.map(event => event.category.replace(" ", "-"))));



function checkBoxx(allCategories) {
  
  allCategories.forEach(category => {
    
    const cboxdiv = document.createElement('div');
    cboxdiv.classList.add("d-flex");
    cboxdiv.innerHTML = `<input type="checkbox" class="btn-check" id=${category} value=${category} autocomplete="off">
    <label class="btn btn-outline-dark" for=${category}>${category.replace("Food-Fair", "Foods").replace("Music-Concert", "Concerts").replace("Costume-Party", "Costume").replace("Book-Exchange", "Books")}</label>`;

    checkboxCont.appendChild(cboxdiv);

    
  }
  );
  
}
checkBoxx(categories);





function eventsFilter(eventCategories) {

  let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)
  /* console.log(checked); */
  let filterEvents = []

  eventCategories.forEach(categories => {
    checked.forEach(category => {
      if (category == categories.category.replace(" ", "-")) {
        filterEvents.push(categories)
      }
    })
  })
  if (eventsFilter.length == 0) {
    filterEvents.push(eventCategories)
  }
  console.log(eventCategories);
  console.log(filterEvents);
  return filterEvents
}


function crearCard(allEvents) {
  if(allEvents.length==0){
      contenedor.innerHTML = `<h2>No se encontro su busqueda</h2>`
    }else{
    contenedor.innerHTML = ""
    allEvents.forEach(event => {  
    const card = document.createElement("div")

    card.classList.add("card")

    card.innerHTML = `<img src="${event.image}" class="card-img-top h-50" alt="...">
<div class="card-body">
  <h5 class="card-title ">${event.name}</h5>
  <p class="card-text ">${event.description} 
  </p>
  
  <div class="card-footer d-flex justify-content-evenly ">
    <p class="d-flex fw-bold fs-5"> <img id="iconticket" src='./icons/ticket-perferated-fill.svg' class="" alt="..."> &nbsp; $ ${event.price} &nbsp;</p>
    <div><a href="./Details.html?_id=${event._id}" class="btn btn-dark">Details</a></div>
  </div>
</div>`;

    contenedor.appendChild(card)
  })
}
}


crearCard(eventsArray)


checkboxCont.addEventListener('change',()=>{ 
  let filtro = eventsFilter(eventsArray)

  crearCard(filtro)

})