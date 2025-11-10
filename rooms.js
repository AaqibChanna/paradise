let rooms = [
    {img: "standard.jpg", title: "Standard Room", desc: "Our Standard Room offers a cozy and relaxing space with modern comforts. Perfect for couples or solo travelers, it features a soft bed, clean design, and a beautiful garden view to make your stay peaceful and refreshing."},

    {img: "deluxe.jpg", title: "Deluxe Room", desc: "Enjoy extra space and style in our Deluxe Room, featuring elegant décor, a private balcony, and modern amenities. Ideal for couples or families who want both comfort and luxury by the sea."},
    
    {img: "siteview.jpg", title: "Ocean View Suite", desc: "Experience the ultimate seaside escape in our Ocean View Suite. With panoramic views of the ocean, premium interiors, and a private lounge area, it’s perfect for guests seeking relaxation with a touch of luxury."},
    
]

let roomsContainer = document.querySelector('.cards')

rooms.forEach(room => {
    let card = document.createElement("article")
    card.className = "card"

    card.innerHTML = `<img src=${room.img} alt="${room.title}">
          <div class="card-body">
            <h3>${room.title}</h3>
            <p>${room.desc}</p>
          </div>`

    roomsContainer.appendChild(card)
})