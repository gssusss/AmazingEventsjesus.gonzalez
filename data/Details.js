const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("_id")

const events = data.events;

let findEvents = events.find(event => event._id == id)

const contenedorDetails = document.getElementById("contenedor-details");


function crearCard(event) {

    const cardDetails = document.createElement("div");

    cardDetails.classList.add("card");
    cardDetails.style.height ="auto";
    cardDetails.style.width = "auto";
    cardDetails.innerHTML = `<div class="row g-0 ">
    <div class="col-md-4 text-center">
      <img src=" ${event.image} " class="img-fluid h-100 rounded-start " alt="...">
    </div>
    <div class="col-md-8 text-center">
      <div class="card-body h-100">
        <h3 class="card-title"> ${event.name} </h3>
        <p class="card-text fs-4"> ${event.description} </p>
        <p class="card-text"> Category ↔ ${event.category} </p>
        <p class="card-text"> Place ↔ ${event.place} </p>
        <p class="card-text"> Date ↔ ${event.date} </p>
        <p class="card-text"> Capacity ↔ ${event.capacity} </p>
        <p class="card-text"> Estimate ↔ ${event.estimate} </p>
        <p class="card-text"> Assistance ↔ ${event.assistance} </p>
        <p class="card-text"> <img id="iconticket" src='./icons/ticket-perferated-fill.svg' class="" alt="..."> Price ↔ ${event.price} <img id="iconticket" src='./icons/ticket-perferated-fill.svg' class="" alt="..."></p>
      </div>
    </div>
  </div>`;

    contenedorDetails.appendChild(cardDetails);

}

crearCard(findEvents);












/* const card = document.createElement("div")

card.classList.add("card")

card.innerHTML = `<img src="${event.image}" class="card-img h-100 img-fluid"
      alt="Food Fair">
 

  <div class="card-body">
      <h5 class="card-title"> ${event.name} </h5>
      <p class="card-text">Enjoy your favorite dishes from different countries in a unique event
          for the whole family.</p>
      <p class="card-text"><strong>Date:</strong> 2022-12-12</p>
      <p class="card-text"><strong>Category: ${event.category}:</strong> Food Fair</p>
      <p class="card-text"><strong>Place:</strong> Room A</p>
      <p class="card-text">Capacity: ${event.capacity}/> 45,000</p>
      <p class="card-text"><strong>Assistance: ${event.assistance}</strong> 42,756</p>
      <p class="card-text"><strong>Price:</strong> $5</p>
  
 
</div>`

contenedor.appendChild(card)


*/