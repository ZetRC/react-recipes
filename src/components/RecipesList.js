import ModalContent from "./ModalContent"   
import React,{ useState , useEffect} from "react";

function RecipesList ({recipes}){

    const [ modal,showModal] = useState("customModalWrapper hide")

    const [ modalData,setModalData] = useState(recipes[1])

    const [ bodyScroll , setBodyScroll] = useState("auto")

    document.body.style.overflow = bodyScroll;
    
    return(
        <div className="recipeList">
            <div className="container">
                <div className="row">
                    {recipes.map(recipe=>(
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="recipeContent" key={recipe.recipe.label} 
                            onClick={()=>{
                            showModal("customModalWrapper")
                            setModalData(recipe)
                            setBodyScroll("hidden")
                            }} >
                                <img src={recipe.recipe.image} alt="" />
                                <h5>{recipe.recipe.label}</h5>
                                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptatem quo sunt eum ipsum nesciunt cum neque molestias eius cumque distinctio asperiores aut ullam excepturi delectus, sapiente ut fuga. Ipsam vitae iusto sapiente natus adipisci accusantium dignissimos id ratione quos blanditiis dicta explicabo molestias possimus aliquam, temporibus, quae beatae assumenda!</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={modal}>
                <div className="modal-bg" onClick={()=>{
                    setBodyScroll("auto")
                    showModal("customModalWrapper hide")
                }
                }></div>
                <div className="modalContent">
                    <i onClick={()=>{
                        showModal("customModalWrapper hide")
                        setBodyScroll("auto")
                    }} class="fas fa-times"></i>
                    <ModalContent recipeData={modalData}/>
                </div>
            </div>
        </div>
    )
}

export default RecipesList