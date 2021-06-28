# Project Overview

Site that provides a randomized search function which returns all info from an API database needed to create the cocktail displayed each time the search button is pressed. 

## Cocktails Connoisseur 

www.cocktailcns.com

## Project Description

Website that allows users to search random cocktails and get an image with the ingredients for a different cocktail each time they search. 

## API and Data Sample

The Cocktail DB
www.thecocktaildb.com/api/json/v1/1/random.php

```
{
    "drinks": [
        {
            "idDrink": "17206",
            "strDrink": "Mint Julep",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Collins glass",
            "strInstructions": "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.",
            "strInstructionsES": null,
            "strInstructionsDE": "In einem Highball-Glas die Minze, den Zucker und das Wasser vorsichtig verrühren. Füllen Sie das Glas mit gebrochenem Eis, fügen Sie Bourbon hinzu und rühren Sie gut um, bis das Glas gut gefrostet ist. Mit einem Minzzweig garnieren.",
            "strInstructionsFR": null,
            "strInstructionsIT": "In un bicchiere highball pestare delicatamente la menta, lo zucchero e l'acqua.\r\nRiempite il bicchiere con ghiaccio tritato, aggiungete il Bourbon e mescolate bene fino a quando il bicchiere sarà ben glassato.\r\nGuarnire con un rametto di menta.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
            "strIngredient1": "Mint",
            "strIngredient2": "Bourbon",
            "strIngredient3": "Powdered sugar",
            "strIngredient4": "Water",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "4 fresh ",
            "strMeasure2": "2 1/2 oz ",
            "strMeasure3": "1 tsp ",
            "strMeasure4": "2 tsp ",
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": null,
            "strImageAttribution": null,
            "strCreativeCommonsConfirmed": "No",
            "dateModified": "2015-08-18 15:15:12"
        }
    ]
}
```

## Wireframes

<img width="353" alt="LWL wireframe" src="https://user-images.githubusercontent.com/82413689/122941528-77233e00-d343-11eb-87b1-beb92c54b672.png">

#### MVP 

- Event listener for random cocktail recipes 
- Append API images, ingredients, and instructions
- Removal of previous api call data (ingredients, instructions, etc) 

#### PostMVP  

- Add search bar & text input to search by ingredient

## Project Schedule

| Date  | Project Tasks                                                                   |Task Status |
|-------|---------------------------------------------------------------------------------|------------|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes                              | Incomplete |
|June 22| Project Approval / Core App Structure (HTML CSS)                                | Incomplete |
|June 23| Javascript / API integration                                                    | Incomplete |
|June 24| Fine tuning (verify everything is operational and clean up webpage appearance)  | Incomplete |
|June 25| Work on any issues or blockers and final testing                                | Incomplete |
|June 28| Presentations                                                                   | Incomplete |

## Priority Matrix

![Screen Shot 2021-06-21 at 8 01 53 PM](https://user-images.githubusercontent.com/82413689/122937429-fa429500-d33f-11eb-98af-c30614425f6a.png)

## Timeframes

|   Date    |    Component     | Priority | Estimated Time | Time Invested | Actual Time |
|-----------|------------------|----------|----------------|---------------|-------------|
|  June 21  | Project Proposal |   High   |      8hrs      |   8hrs        |   8hrs      |
|  June 22  | HTML             |   High   |      4hrs      |   2hrs        |   2hrs      |
|  June 22  | CSS              |   High   |      4hrs      |   6hrs        |   6hrs      |
|  June 23  | Javascript       |   High   |      4hrs      |   4hrs        |   4hrs      |
|  June 23  | API integration  |   High   |      4hrs      |   4hrs        |   4hrs      |
|  June 24  | Fine tuning      |   High   |      8hrs      |   8hrs        |   8hrs      |
|  June 25  | Blockers         |   High   |      8hrs      |   4hrs        |   4hrs      |
|  June 28  |     Total        |   High   |     40hrs      |  36hrs        |  36hrs      |

## Code Snippet

```
//appending first four ingredients w/ quantity in same string
      const strIngredient1 = document.createElement('h4')
      strIngredient1.textContent = `${renderList[i].strMeasure1}` + ' - ' + `${renderList[i].strIngredient1}`
      drinkList.append(strIngredient1)

      const strIngredient2 = document.createElement('h4')
      strIngredient2.textContent = `${renderList[i].strMeasure2}` + ' - ' + `${renderList[i].strIngredient2}`
      drinkList.append(strIngredient2)

      const strIngredient3 = document.createElement('h4')
      strIngredient3.textContent = `${renderList[i].strMeasure3}` + ' - ' + `${renderList[i].strIngredient3}`
      drinkList.append(strIngredient3)

      const strIngredient4 = document.createElement('h4')
      strIngredient4.textContent = `${renderList[i].strMeasure4}` + ' - ' + `${renderList[i].strIngredient4}`
      drinkList.append(strIngredient4)
      ```

## Change Log

No significant changes made.