import popularPlacesData from "./popularPlacesData"

export default function PopularPlaces() {

    return (
        <section className="popular-places-sec">
            <div className="container">
                <div className="popular-places-wrapper">

                    <div className="popular--top-info">
                        <h3 className="popular--top-title">Popular Places</h3>
                        <p className="popular--top-info">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                    </div>

                    <div className="popular-places-bottom-place">
                        {popularPlacesData.map((data) => {
                            return (
                                <div className="pop-places-bottom-places-box">
                                    <a href="#">
                                        <img className="pop-places-bottom-places-img" src={`assets/popularPlacesAssets${data.pic}`} alt={data.place} />
                                        <div className="pop-places-bottom-info">
                                            <h3 className="pop-places-bottom-place">{data.place}</h3>
                                            <p className="pop-places-bottom-country">{data.country}</p>
                                            <div className="pop-places-bottom-reviews-area">
                                                <p className="pop-places-bottom-reviews">{data.reviews}</p>
                                                <p className="pop-places-bottom-days"><i class="fa-regular fa-clock" style={{ color: '#7a838b' }}></i>{data.days}</p>
                                            </div>
                                        </div>
                                        <a href="#" className="pop-places-bottom-price">{data.price}</a>
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                    <div className="popular-places-btn-area">
                        <a href="#" className="pop-places-more-btn btn">More Places</a>
                    </div>

                </div>
            </div>

        </section>
    )
}


