import React,{ useState , useEffect , useContext } from "react"
/* import { DataContext } from "../components/DataContext" */

import RecipesList from "./RecipesList"
import Header from "./Header"
import "../style/css/recipes.css"
/* import { AiOutlineConsoleSql } from "react-icons/ai" */

const Recipes = (({keyword})=>{
  
  const [recipes,setRecipes] = useState(null)

  /* const [ foodSearch , setFoodSearch ] = useContext(DataContext) *///


  const app_key = "3fccc9350fb72556654b1ff0fa7ea3df"
  const app_id = "30192847"

  useEffect (()=>{
    getRecipes()
  },[keyword])

  const getRecipes = function(){
    fetch(`https://api.edamam.com/search?q=${keyword}&app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.json())
    .then(data=>{
      setRecipes(data.hits)
    })
  }

    return(
        <>
        {/* <Header/> */}
        {recipes && < RecipesList recipes={recipes} />}      
        </>
    )
})

export default Recipes