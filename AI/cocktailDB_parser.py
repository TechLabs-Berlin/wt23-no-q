import requests
import pandas as pd
import string

def create_url_list():

  url_list = []
  main_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='


  for i in (string.printable):

    url_list.append(main_url+i)

  return url_list


url_list = create_url_list()


def get_ingredients(cocktail_dict):

  ingredient = cocktail_dict['strIngredient1']
  measure = cocktail_dict['strMeasure1']
  i = 2

  ingredient_list = ""

  while ingredient:

    ingredient_list = str(measure) + str(ingredient) + ", " + ingredient_list
    ingredient = cocktail_dict['strIngredient'+str(i)]
    measure = cocktail_dict['strMeasure'+str(i)]
  
    i = i+1

  return ingredient_list

cocktails_list = []

for url in url_list:

  try:


    r = requests.get(url)


    if r.json()['drinks']:

      for cocktail_dict in r.json()['drinks']: 

        cocktail = {}
        cocktail['Cocktail Name'] = cocktail_dict['strDrink']
        cocktail['Cocktail_tags'] = cocktail_dict["strTags"]
        cocktail['Ingredients'] = get_ingredients(cocktail_dict)
        cocktail['Preparation'] = cocktail_dict['strInstructions']
        cocktail['Alcoholic?'] = cocktail_dict["strAlcoholic"]
        cocktail['Category'] = cocktail_dict['strCategory']

        cocktails_list.append(cocktail)
  except:
      pass


cocktail_df = pd.DataFrame(cocktails_list)
cocktail_df = cocktail_df.drop_duplicates(subset = ["Cocktail Name"], keep = 'first')
cocktail_df.to_csv('cocktailsDB.csv', sep=',')
    
