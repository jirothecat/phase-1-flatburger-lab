// index.js

// Callbacks / Deliverable #2 solution
const displayBurgerDetails = (burger) => {
    const imageElement = document.getElementById('image')
    imageElement.src = burger.image
   
    const nameElement = document.getElementById('name')
    nameElement = burger.name
    
    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = burger.number_in_cart

    // Add code

     document.getElementById('restaurant-menu')
};

const addToCart = () => {
    // Add code
}

// Deliverable #1 solution
const addBurgerNamesToMenu = () => {
   fetch("http://localhost:3000/burgers")
   .then(response => response,json())
   .then(burgers => {
        burgers.forEach(burger => {
            const spanElement = document.createElement('span')
            spanElement.textContent = burger.name
            const restaurantMenuElement = document.getElementById('restaurant-menu')
            restaurantMenuElement.appendChild(spanElement)

            spanElement.addEventListener('click', () => {
                displayBurgerDetails(burger)
            })
        })
   })
    // Add code
};

const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
        addBurgerNamesToMenu()
    // Invoke addBurgerNamesToMenu here
    // Invoke addToCart here
}
}
main()
