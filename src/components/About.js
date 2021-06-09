import "../style/css/about.css"
import codeChunkImg from "../assets/code-chunk-img.png"

const About = (()=>{
    return(
        <>
        <div className="about">
            <section>
                <h2>About this website</h2>
                <h5>
                    With this app you will be able to find awesome recipes by clicking a sector from dropdown or using the searchbar.The site will return 10 recipes with an image,nutrition data and ingredients list for each one.
                </h5>                
            </section>
            <section>
                <h2>Purpose of this website</h2>
                <h5>
                    This site was created with the only purpose of coding skills practicing,
                    <a href="https://zetrc.github.io/portfolio/" target="_blank" rel="noopener noreferrer"> here </a>
                    you will find more projects just like this one 
                </h5>                
            </section>
            <section>
                <h2>API</h2>
                <h5>This app uses the edamam API,you can check the documentation 
                    <a href="https://developer.edamam.com/" target="_blank" rel="noopener noreferrer"> here</a>
                </h5>
                <img src={codeChunkImg} alt="" />

            </section>
            <section className="toolsBox">
                <h2>Tools</h2>
                <h5>These are languages and libraries that i used to create this website:</h5>
                <div class="tools-cont">
                    <ul >
                        <li><p>React.js</p></li>
                        <li><p>React router</p></li>
                        <li><p>HTML</p></li>
                        <li><p>CSS</p></li>
                        <li><p>SASS</p></li>
                        
                    </ul>
                    <ul >
                        <li><p>Javascript</p></li>
                        <li><p>Figma</p></li>
                        <li><p>Bootstrap(only css)</p></li>
                        <li><p>Git</p></li>
                        <li><p>Photopea</p></li>            
                    </ul>
                </div>
            </section>
        </div>
        </>
    )
})

export default About