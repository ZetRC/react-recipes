import React, { useState,useEffect } from "react"
import RecipesList from "./components/RecipesList"
import Header from "./components/Header.js"
import "./style/style.css"

function App() {

  const app_key = "3fccc9350fb72556654b1ff0fa7ea3df"
  const app_id = "30192847"

  const [recipes,setRecipes] = useState(null)

  useEffect (()=>{
    getRecipes()
  },[])

  const getRecipes = function(){
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.json())
    .then(data=>{
      setRecipes(data.hits)
      
    })
  }

  return (
    <div className="App">
      <Header/>
      {recipes && < RecipesList recipes={recipes} />}      
    </div>
  );
}

export default App;
