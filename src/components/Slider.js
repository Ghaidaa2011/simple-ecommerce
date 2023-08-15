import Image1 from "./images/casual-chic-outfits.webp";
import Image2 from "./images/simple-outfit-guide-for-summer-300485-1655148445415-main.700x0c.jpg";
import Image3 from "./images/trendy-casual-outfits-300911-1658723527933-promo.700x0c.jpg";
const Slider = () => {
    return (
        <>
            <div className="slider my-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Image1} className="d-block img-thumbnail height-800 width-800 mx-auto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={Image2} className="d-block img-thumbnail height-800 width-800 mx-auto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={Image3} className="d-block img-thumbnail height-800 width-800 mx-auto" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </>
    );
}

export default Slider;