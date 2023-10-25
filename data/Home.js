const eventsArray = data.events;

const contenedor = document.getElementById("contenedor-cards");

function crearCard(allEvents) {
  for (let event of allEvents) {
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
</div>`

    contenedor.appendChild(card)
  }
}


crearCard(eventsArray)