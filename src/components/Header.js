import ChickenImg from "../assets/ChickenImg.jpg"

const Header = (()=>{
    return(
        <div className="header">
            <div className="headerMessage">
                <h1>DELICIOUS CHICKEN RECIPES FOR DINNER!</h1>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel deserunt deleniti doloribus ex </h3>
            </div>
            <div className="headerContent">
                <div className="imageContainer">
                    <img src={ChickenImg} alt="" />
                </div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <h1>Lorem, ipsum.</h1>                
            </div>
        </div>
    )
})

export default Header