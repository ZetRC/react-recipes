import "../style/css/footer.css"
import { FaFacebookF , FaPinterestP , FaAngleDoubleUp } from "react-icons/fa"
import { AiOutlineTwitter , AiFillInstagram } from "react-icons/ai"

const Footer = (()=>{

    const scrollUp = (()=>{
        window.scrollTo(0,0);
    })

    return(
        <>
        <footer>
            <section className="footerTop">
                <FaAngleDoubleUp class="scroll-btn" onClick={scrollUp}/>
                <div className="socialMediaContent">
                    <FaFacebookF/>
                    <AiOutlineTwitter/>
                    <AiFillInstagram/>
                    <FaPinterestP/>
                </div>
                <div className="relatedLinksContent">
                    <small>contact</small>
                    <small>blog</small>
                    <small>catering</small>
                    <small>delivery</small>
                </div>
            </section>
            <section className="footerBottom">
                <h6>Healthy fast-casual food, crafted in Mexico</h6>
                <small>ReciPie all rights reserved</small>
            </section>
        </footer>
        </>
    )
})

export default Footer