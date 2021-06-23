const button = document.querySelector('button')
const drinkList = document.querySelector('.menu')

async function getData() {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const renderList = (response.data.drinks)
    console.log(renderList)
    for (i = 0; i < renderList.length; i++) {

      const drinkComps = document.createElement('div')
      drinkList.append(drinkComps)
      console.log(drinkComps)

      const strDrinkThumb = document.createElement('img')
      strDrinkThumb.setAttribute('src', renderList[i].strDrinkThumb)
      strDrinkThumb.style.width = '200px'
      strDrinkThumb.style.height = 'auto'
      drinkList.append(strDrinkThumb)


      const strDrinks = document.createElement('h3')
      strDrinks.textContent = `${renderList[i].strDrink}`
      drinkList.append(strDrinks)
      console.log(strDrinks)

      const strGlass = document.createElement('h5')
      strGlass.textContent = `${renderList[i].strGlass}`
      drinkList.append(strGlass)

      const strIngredient1 = document.createElement('h6')
      strIngredient1.textContent = `${renderList[i].strMeasure1}` + ' - ' + `${renderList[i].strIngredient1}`
      drinkList.append(strIngredient1)

      const strIngredient2 = document.createElement('h6')
      strIngredient2.textContent = `${renderList[i].strMeasure2}` + ' - ' + `${renderList[i].strIngredient2}`
      drinkList.append(strIngredient2)

      const strIngredient3 = document.createElement('h6')
      strIngredient3.textContent = `${renderList[i].strMeasure3}` + ' - ' + `${renderList[i].strIngredient3}`
      drinkList.append(strIngredient3)

      const strIngredient4 = document.createElement('h6')
      strIngredient4.textContent = `${renderList[i].strMeasure4}` + ' - ' + `${renderList[i].strIngredient4}`
      drinkList.append(strIngredient4)
    }
    return response
  }
  catch (error) {
    console.error(error)
  }
}

button.addEventListener('click', event => {
  event.preventDefault()
  removeDrink()
  getData()
})

function removeDrink() {
  while (drinkList.lastChild) {
    drinkList.removeChild(drinkList.lastChild)
  }
}