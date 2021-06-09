
const ModalContent = (({recipeData})=>{
    const ingredients = recipeData.recipe.ingredientLines
    const nutritionalData = recipeData.recipe.totalNutrients

    return(        
        <>
            <div className="modalHeader">
                <h2>{recipeData.recipe.label}</h2>
            </div>
            <div className="modalMainBox">
                <img src={recipeData.recipe.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"}} />
                <div className="mealDataBox">
                    <h5>Nutritional Data</h5>
                    <h6>{`Calories : ${Math.floor(recipeData.recipe.calories)}`}</h6>
                    <h6>{`${nutritionalData.CHOLE.label} : ${Math.floor(nutritionalData.CHOLE.quantity)} ${nutritionalData.CHOLE.unit}` }</h6>
                    <h6>{`${nutritionalData.CHOCDF.label} : ${Math.floor(nutritionalData.CHOCDF.quantity)} ${nutritionalData.CHOCDF.unit}` }</h6>
                    <h6>{`${nutritionalData.FAT.label} : ${Math.floor(nutritionalData.FAT.quantity)} ${nutritionalData.FAT.unit}` }</h6>
                    <h6>{`${nutritionalData.PROCNT.label} : ${Math.floor(nutritionalData.PROCNT.quantity)} ${nutritionalData.PROCNT.unit}` }</h6>
                    <h6>{`${nutritionalData.NA.label} : ${Math.floor(nutritionalData.NA.quantity)} ${nutritionalData.NA.unit}` }</h6>
                    <h6>{`${nutritionalData.SUGAR.label} : ${Math.floor(nutritionalData.SUGAR.quantity)} ${nutritionalData.SUGAR.unit}` }</h6>
                    <h6>{`${nutritionalData.FIBTG.label} : ${Math.floor(nutritionalData.FIBTG.quantity)} ${nutritionalData.FIBTG.unit}` }</h6>
                </div>
            </div>
            <div className="ingredientsBox">
                <h5>Ingredients:</h5>
                <ul>
                    {ingredients.map(ingredient=>(
                    <li >{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="directionsBox">
                <h5>Directions:</h5>
                <div className="recipeStep">
                    <h6>
                        <i class="fas fa-check-square fa-fw"></i>
                        Step 1
                    </h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reiciendis ipsam. Ipsum nulla dolore harum impedit quis quam praesentium cumque delectus mollitia labore?</div>
                </div>
                <div className="recipeStep">
                    <h6>
                        <i class="fas fa-check-square fa-fw"></i>
                        Step 2
                    </h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores maxime illum pariatur libero culpa aperiam assumenda perferendis neque quo similique repellendus esse eum blanditiis odit sit quibusdam, sunt non eligendi doloribus ex eveniet?</div>
                </div>
                <div className="recipeStep">
                    <h6>
                        <i class="fas fa-check-square fa-fw"></i>
                        Step 3
                    </h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores maxime illum pariatur libero culpa aperiam assumenda perferendis neque quo similique repellendus</div>
                </div>
            </div>    
        </>       
    )
})

export default ModalContent