import React , {useState} from "react"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style/css/generalLayout.css"
import { BrowserRouter as Router , Switch , Route} from "react-router-dom"

function App() {

  const [ keyword , setKeyword ] = useState("vegan") 
  

  return (
    <>
    <Router>
          <Navbar changeSearch={keyword=>setKeyword(keyword)}/>
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/recipes" >
                  <Recipes keyword={keyword}/>
              </Route>
              <Route path="/recipes" component={Recipes}/>
              <Route path="/about" component={About}>
              </Route>
        </Switch> 
        <Footer/>
    </Router>
    </>
  );
}

export default App;
