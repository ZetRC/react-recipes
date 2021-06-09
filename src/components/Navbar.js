import { Link } from "react-router-dom"
import appLogo from "../assets/appLogo.png"
import "../style/css/navbar.css"
import React , { useState , useEffect} from "react"
import {IoIosArrowDown} from "react-icons/io"
import {BsSearch} from "react-icons/bs"
import { FaBars } from "react-icons/fa"

const Navbar = (({changeSearch})=>{

    const [mobileNavbar , setMobileNavbar] = useState(false)
    const [query, setQuery] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");
    
    useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 500);
    return () => clearTimeout(timeOutId);
    }, [query]);

    const toggleNavbar = (()=>{
        setMobileNavbar(!mobileNavbar)
    })

    const createNewPath = ((event)=>{
        setMobileNavbar(!mobileNavbar)
        const message = event.target.getAttribute('data-value')
        changeSearch(message)
        
    })

    const handleSearchbarRequest = (()=>{
        setMobileNavbar(!mobileNavbar)
        changeSearch(displayMessage)
    })

    return(
        <>
        <div className="navbar">
            <FaBars id="navToggler" onClick={toggleNavbar}/>
            <Link to="/" className="appLogo" onCLick={toggleNavbar}>
                <img src={appLogo} alt="" />
            </Link>
            <div className={`navbarContent ${mobileNavbar ? "" : "hiddenNavbar"}`}>
                <div className="navbarLinks">

                <Link to="/" className="nav-element" onClick={toggleNavbar}>
                    <div>Home</div>
                </Link>
                <div className="nav-element">
                    <div className="nav-element">
                        Recipes
                        <IoIosArrowDown/>
                    </div>
                    <div className="dropdownBox" >
                        <Link to="/recipes" data-value="lunch" onClick={createNewPath}>Lunch</Link>
                        <Link to="/recipes" data-value="breakfast" onClick={createNewPath}>Breakfast</Link>
                        <Link to="/recipes" data-value="dinner" onClick={createNewPath}>Dinner</Link>
                        <Link to="/recipes" data-value="drinks" onClick={createNewPath}>Drinks</Link>
                        <Link to="/recipes" data-value="dessert" onClick={createNewPath}>Desserts</Link>
                        <Link to="/recipes" data-value="snack" onClick={createNewPath}>Snacks</Link>
                    </div>
                </div>
                <div href="" className="nav-element">
                    <div>Quick & Easy</div>
                    <IoIosArrowDown/>    
                    <div className="dropdownBox">
                        <Link to="/recipes" data-value="soup" onClick={createNewPath}>Soup</Link>
                        <Link to="/recipes" data-value="pasta" onClick={createNewPath}>Pasta</Link>
                        <Link to="/recipes" data-value="salad" onClick={createNewPath}>Salad</Link>
                        <Link to="/recipes" data-value="dessert" onClick={createNewPath}>Dessert</Link>
                        <Link to="/recipes" data-value="main dish" onClick={createNewPath}>Main Dish</Link>
                        <Link to="/recipes" data-value="vegetable" onClick={createNewPath}>Vegetables</Link>
                    </div>
                </div>
                <div href="" className="nav-element">
                    <div>Healthy Labels</div>
                    <IoIosArrowDown/>    
                    <div className="dropdownBox">
                        <Link to="/recipes" data-value="low carbs" onClick={createNewPath}>Low carbs</Link>
                        <Link to="/recipes" data-value="low calories" onClick={createNewPath}>low calories</Link>
                        <Link to="/recipes" data-value="low fat" onClick={createNewPath}>low fat</Link>
                        <Link to="/recipes" data-value="high protein" onClick={createNewPath}>hight protein</Link>
                        <Link to="/recipes" data-value="vegan" onClick={createNewPath}>vegan</Link>
                    </div>
                </div>
                <Link to="/about" className="nav-element" onClick={toggleNavbar}>About</Link>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search your own recipe!" className="form-control" value={query}
                    onChange={event => setQuery(event.target.value)}/>
                    <Link to="/recipes" onClick={handleSearchbarRequest} >
                        <BsSearch />
                    </Link>
                </div>
            </div>
            
        </div>
        </>
    )
})

export default Navbar