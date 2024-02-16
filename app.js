//Esto es para cargar primero todo como vimos anteriormente
document.addEventListener('DOMContentLoaded', () => {

  /*
  Primero creamos todas las variables necesarias
  */


  //lista con todas las cartas
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  //Esto es para mas adelante hacer todas las comparaciones y funcionamiento del programa
  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //creamos el tablero con la cartas
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) { //recorremos el array con las cartas
      const card = document.createElement('img')
      card.setAttribute('src', 'images/linus.jpeg') //etiqueta img con source
      card.setAttribute('data-id', i) //Vamos asignando los id desde 0
      card.addEventListener('click', flipCard) //evento que llama a flipCard (mas abajo)
      grid.appendChild(card)
    }
  }

  //Funcion para ver si son iguales o no
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) { //Caso en el que son iguales
      cards[optionOneId].setAttribute('src', 'images/linus.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/linus.jpeg')
      alert('Has hecho click en la misma imagen!!!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) { //Son iguales
      alert('Has encontrado dos cartas iguales jeje')
      //Quitamos las cartas
      cards[optionOneId].setAttribute('src', 'images/white.png') //Aqui ponemos las cartas en blanco
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else { //Son distintas
      cards[optionOneId].setAttribute('src', 'images/linus.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/linus.jpeg')
      alert('nah bro siguen intentandolo')
    }
    //Vaciamos los arrays usados para comparar los elegidos
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) { //Si encontramos todas
      resultDisplay.textContent = 'Ole mi niño ahi que eh un maquina!'
    }
  }

  //Funcion flipCard para cuando le damos la vuelta a una carta
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    /*
      Con el push metemos los elementos en las listas, en este caso
      cardsChosen y cardsChosenId
    */
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img) //Se muestran
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard() //Funcion para crear el tablero
})
