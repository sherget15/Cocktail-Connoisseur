// const { default: axios } = require("axios")

// const button = document.querySelector('button')
// const drinkList = document.querySelector('.menu')

// async function getData() {
//   try {
//     const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//     const renderList = (response.data.drinks)
//     console.log(renderList)
//     for (i = 0; i < renderList.length; i++) {

//       //creating new div to append to
//       const drinkComps = document.createElement('div')
//       drinkList.append(drinkComps)
//       console.log(drinkComps)

//       //drinkComps -> Comps = Components

//       //appending drink image to div
//       const strDrinkThumb = document.createElement('img')
//       strDrinkThumb.setAttribute('src', renderList[i].strDrinkThumb)
//       strDrinkThumb.style.width = '200px'
//       strDrinkThumb.style.height = 'auto'
//       drinkList.append(strDrinkThumb)

//       //appending drink name
//       const strDrinks = document.createElement('h2')
//       strDrinks.textContent = `${renderList[i].strDrink}`
//       drinkList.append(strDrinks)
//       console.log(strDrinks)

//       //appending glass type to use for drink
//       const strGlass = document.createElement('h3')
//       strGlass.textContent = `${renderList[i].strGlass}`
//       drinkList.append(strGlass)

//       //appending first four ingredients w/ quantity in same string
//       const strIngredient1 = document.createElement('h4')
//       strIngredient1.textContent = `${renderList[i].strMeasure1}` + ' - ' + `${renderList[i].strIngredient1}`
//       drinkList.append(strIngredient1)

      // const strIngredient1 = document.createElement('p')
      // strIngredient1.textContent = `${drinkData[i].strMeasure1}` + ' - ' + `${drinkData[i].strIngredient1}`
      // drinkList.append(strIngredient1)



//       const strIngredient2 = document.createElement('h4')
//       strIngredient2.textContent = `${renderList[i].strMeasure2}` + ' - ' + `${renderList[i].strIngredient2}`
//       drinkList.append(strIngredient2)

//       const strIngredient3 = document.createElement('h4')
//       strIngredient3.textContent = `${renderList[i].strMeasure3}` + ' - ' + `${renderList[i].strIngredient3}`
//       drinkList.append(strIngredient3)

//       const strIngredient4 = document.createElement('h4')
//       strIngredient4.textContent = `${renderList[i].strMeasure4}` + ' - ' + `${renderList[i].strIngredient4}`
//       drinkList.append(strIngredient4)
//     }
//     return response
//   }
//   catch (error) {
//     console.error(error)
//   }
// }

// button.addEventListener('click', event => {
//   event.preventDefault()
//   removeDrink()
//   getData()
// })

// function removeDrink() {
//   while (drinkList.lastChild) {
//     drinkList.removeChild(drinkList.lastChild)
//   }
// }

//------- ^ OLD ^ ----------

const button = document.querySelector('button')
const drinkList = document.querySelector('.menu')

const grabDrinks = async (ingredient) => {
  try {
    const nonAlc = document.querySelector('#non-alc')
    if (nonAlc.checked === true) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic`
      const response = await axios.get(url)
      drinkLoop(response)
    } else {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      const response = await axios.get(url)
      drinkLoop(response)
    }
  } catch (error) {
    console.error(error)
  }
}

// Populate drink array and create div containers for each drink
function drinkLoop (response) {
  const drinkData = response.data.drinks
  for (let i=0; i < drinkData.length; i++) {

    //Create container div
    const drinkDiv = document.createElement('div')

    //Create and append div for drink name/title based off Drink id
    const drinkName = document.createElement('div')
    drinkDiv.setAttribute('class', 'drink-container')

    const strDrinkThumb = document.createElement('img')
    strDrinkThumb.setAttribute('src', drinkData[i].strDrinkThumb)
    strDrinkThumb.style.width = '200px'
    strDrinkThumb.style.height = 'auto'
    drinkDiv.setAttribute('id', drinkData[i].idDrink)
    drinkName.setAttribute('style', 'width: 200px; background: #20201d; color: #fff; padding: 5px; opacity: 0.85;')
    drinkName.innerText = drinkData[i].strDrink
    drinkList.appendChild(drinkDiv)
    drinkDiv.appendChild(drinkName)
    drinkDiv.append(strDrinkThumb)
    grabDrinkData(drinkData[i].idDrink)
  }
}

button.addEventListener('click', (e => {
  e.preventDefault()

  //Remove results from previous searches
  removeResults(drinkList)
  const ingredient = document.querySelector('#ingredient-box').value

  //Retrieves drink id and image for background
  grabDrinks(ingredient)
  // backgroundChange(ingredient)

  //Reset ingredient search input
  document.querySelector('#ingredient-box').value = ''
}))

//Remove results from previous searches 
function removeResults(node) {
  while(node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

//Gather instructions and ingredients after drink has been sorted by ingredient and populated on page
const grabDrinkData = async (drinkID) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
    const response = await axios.get(url)
    const drinkData = response.data.drinks[0]

    //Clear out null values & set array to a string
    const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = drinkData
    let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15]
    
    let stringIngredient = arrayIngredient.toString().replaceAll(',', ' ').trim()
    const id = drinkData.idDrink
    
    // const strIngredient = document.createElement('p')
    // strIngredient1.textContent = `${drinkData[i].strMeasure1}` + ' - ' + `${drinkData[i].strIngredient1}`
    // drinkList.append(strIngredient1)
    

    //Get the div that already contains the drinkName to append instructions & ingredients
    const drinkDiv = document.getElementById(id)
    const drinkIngInstr = document.createElement('div')
    const strDrinkThumb = document.createElement('img')
    const drinkIngredients = document.createElement('div')
    const drinkInstructions = document.createElement('div')

    //Set the ingredients & instructions to this container to allow hover pseudo-class 
    drinkIngInstr.setAttribute('class', `container`)
    drinkDiv.append(drinkIngInstr)
    // strDrinkThumb.setAttribute('class', `container`)
    // drinkDiv.append(strDrinkThumb)
    // drinkPic.setAttribute('class', `ingredient-container`)
    drinkIngredients.setAttribute('class', `ingredient-container`)
    drinkInstructions.setAttribute('class', `ingredient-container`)

    // const strIngredient1 = document.createElement('p')
    // strIngredient1.textContent = `${drinkData[i].strMeasure1}` + ' - ' + `${drinkData[i].strIngredient1}`
    // drinkList.append(strIngredient1)




    drinkIngInstr.append(drinkIngredients)
    drinkIngInstr.append(drinkInstructions)
    drinkIngredients.innerText = stringIngredient
    const instructions = drinkData.strInstructions.toString()
    drinkInstructions.innerText = instructions

    //API providing incorrect image for this drink
    const wrongPicture = document.getElementById('17122')
    if(wrongPicture !== null) {
      wrongPicture.innerText = 'Sorry, this is NOT a picture of this drink...'
      wrongPicture.style = 'display: flex; justify-content: center; align-content: center; background: black; color: white;'
    }
  } catch (error) {
    console.error(error)
  }
}