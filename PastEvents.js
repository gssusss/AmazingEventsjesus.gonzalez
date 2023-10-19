console.log("jello");

const events = data.events;

const contenedor = document.getElementById("contenedor-past-events");

const today = new Date();

for (let event of events) {
  const eventDate = new Date(event.date);

  if (eventDate < today) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<img src="${event.image}" class="card-img-top h-50" alt="...">
    <div class="card-body">
      <h5 class="card-title text-truncate">${event.name}</h5>
      <p class="card-text ">${event.description} 
      </p>
      <br>
      <div class="d-flex justify-content-evenly ">
        <p class="d-flex fw-bold fs-5"> <img id="iconticket" src='./icons/ticket-perferated-fill.svg' class="" alt="..."> &nbsp; $ ${event.price}</p>
        <div><a href="#" class="btn btn-dark">Details</a></div>
      </div>
    </div>`;

    contenedor.appendChild(card);
  }
}