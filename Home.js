console.log("hello");

const events = data.events

const contenedor = document.getElementById("contenedor-cards")

const card = document.createElement("div")
card.classList.add("card")
/* card.style.width = "18rem"; */
card.innerHTML = `<img src="./img/music_concert.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title text-truncate">Live Concerts World wide</h5>
  <p class="card-text text-truncate">Enjoy live music from your favorite artists at our wide and exciting
    concerts.
    Our company organizes large and exciting concerts with the world's most popular artists.
  </p>
  <div class="d-flex justify-content-between">
    <p class="d-flex">$ 10</p>
    <a href="#" class="btn btn-outline-dark">Details</a>
  </div>
</div>`

contenedor.appendChild(card)


