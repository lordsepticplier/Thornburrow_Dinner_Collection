import NetInfo from '@react-native-community/netinfo'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import AppButton from '../../../components/appButton'
import Content from '../../../components/Content'
import MiniTitle from '../../../components/MiniTitle'
import Screen from '../../../components/screen'
import Title from '../../../components/Title'
import { db } from '../../Firebase'

const offline = {
  '1':{
    name: "Pizza",
    ingredients: "Pizza base, Tomato paste, Cheese, Toppings",
    steps: "1. preheat oven to pizza setting 2.Put paste on pizza base 3. put toppings on pizza base how you want them chopped up 4. put cheese on 5.put source of choice on 6.cook for 12 mins in oven",
    notes: "Harry likes"
  },
  '2':{
    name: "Teriyaki Chicken",
    ingredients: "600g diced boneless chicken breast 2 Tablespoons cooking oil 2 cups uncooked rice Sesame seeds (optional) Sauce Ingredients: ½ Cup Soy Sauce ½ Cup water 3 Tablespoons brown sugar 2 Tablespoons rice vinegar ½ teaspoon sesame oil 1 teaspoon grated ginger 2 teaspoons crushed garlic 2 Tablespoons honey 3 teaspoons cornflour",
    steps: "1.Cook rice as per packet/rice cooker directions. 2.While rice is cooking add all the sauce ingredients into a medium sized jug and mix until completely combined. 3.In a frying pan, heat cooking oil on high, add chicken until cooked, reduce heat to low, stir in the sauce mixture, keep on a low simmer, stirring every now and then until rice is cooked. 4.Serving rice into a bowl add desired amount of chicken on top with a good amount of the sauce, sprinkle with sesame seeds. ",
    notes: "none"
  },
  '3':{
    name: "Chicken Pot Pie",
    ingredients: "600g diced (small) boneless chicken breast 2 Tablespoons cooking oil 4 sheets premade flaky puff pastry 1 egg (beaten) 1 jar alfredo sauce 3 cups frozen peas and corn (optional)",
    steps: "1.Take out the pastry sheets from the freezer, separate to let them defrost while cooking. 2.Preheat oven fan bake 220 degrees celsius, cover a large baking tray with baking paper, set aside. 3.Pour the alfredo sauce into a large mixing bowl. 4.Heat oil in a pan on high, add chicken, once cooked, drain any liquid. 5.Add cooked chicken to the sauce, also add the frozen vegetables (optional) and combine. 6.Place a thawed pastry sheet on a baking tray, scoop ¼ of the chicken mixture onto the centre of the sheet, fold the corners up and over, creating like an envelope, push down all seams, cut in some small air vents in the pastry then brush with egg. 7.Cook in the oven for 30 to 40 minutes. ",
    notes: "Harry likes without peas"
  }
}
export default function Recipe() {
  const [isConnected, setIsConnected] = useState(null);
  useEffect (() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, [])
  const router = useRouter();
  const [recipe, setRecipe] = useState([])
  const params = useLocalSearchParams()
  const item = params.item
  const docID = doc(db, 'recipes', item )
  useEffect (() => {
      if (isConnected === true) {
        const fetchId = async () => {
          const recipe = await getDoc(docID);
          setRecipe(recipe.data())
        }
        fetchId()
      } if (isConnected === false){
        const details= offline[item]
        setRecipe(details)
      }
    }, [isConnected, item, docID])
  
  return (
    <Screen>
      <Title>{recipe.name}</Title>
      <MiniTitle>Ingredients:</MiniTitle>
      <Content>{recipe.ingredients}</Content>
      <MiniTitle>Steps:</MiniTitle>
      <Content>{recipe.steps}</Content>
      <MiniTitle>Notes:</MiniTitle>
      <Content>{recipe.notes}</Content>
      <AppButton disabled={!isConnected} title="Edit" onPress={()=>{router.push({pathname:'Thornburrow_Dinner_Collection/recipes/edit', params:{item:item}});}}/>
    </Screen>
  )
}