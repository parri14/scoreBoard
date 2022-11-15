let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homePoints = 0
let guestPoints = 0

function add1Home() {
    homePoints += 1
    homeEl.textContent = homePoints
}

function add2Home() {
    homePoints += 2
    homeEl.textContent = homePoints
}

function add3Home() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function add1Guest() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function add2Guest() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function add3Guest() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = homePoints 
    guestEl.textContent = guestPoints
}