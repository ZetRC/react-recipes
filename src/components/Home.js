import "../style/css/home.css"
import {Link} from "react-router-dom"
import homeMainBoard from "../assets/homeMainBoard.png"
import recipesImg from "../assets/recipesImg.jpg"
import codeImg from "../assets/codeImg.jpg"
import fruits from "../assets/fruits.jpg"

const Home = (()=>{
    return(
        <>
        <Link to="/recipes" className="mainBoard">
            <img src={homeMainBoard} alt="" />
        </Link>
        <div className="contentContainer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <span>
                            <div className="img-cont">
                                <img src={recipesImg} alt="" />
                            </div>
                            <Link to="/recipes">
                                <h4>Check our healthy recipes</h4>
                            </Link>
                            <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloremque, saepe beatae veniam accusantium veritatis?</h6>
                        </span>
                    </div>
                    <div className="col-12 col-lg-4">
                        <span>
                            <div className="img-cont">
                                <img src={fruits} alt="" />
                            </div>
                            <Link to="/recipes">
                                <h4>Check our Nutrition Analisis Page</h4>
                            </Link>
                            <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloremque, saepe beatae veniam accusantium veritatis?</h6>
                        </span>
                    </div>
                    <div className="col-12 col-lg-4">
                        <span>
                            <div className="img-cont">
                                <img src={codeImg} alt="" />
                            </div>
                            <Link to="/about">
                                <h4>Find Out how all this was done</h4>
                            </Link>
                            <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloremque, saepe beatae veniam accusantium veritatis?</h6>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
})

export default Home