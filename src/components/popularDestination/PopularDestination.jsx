import popularDestinationData from "./popularDestinationData";

export default function PopularDestination() {

    return (
        <section className="popular-destination-sec">
            <div className="container">
                <div className="popular-destination-wrapper">

                    <div className="popular--top-info">
                        <h3 className="popular--top-title">Popular Destination</h3>
                        <p className="popular--top-info">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                    </div>

                    <div className="popular-destination-bottom-dest">
                        {popularDestinationData.map((data) => {
                            return (
                                <div className="pop-dest-bottom-dest-box">
                                    <img className="pop-dest-bottom-dest-img" src={`assets/popularDestinationAssets${data.pic}`} alt={data.location} />
                                    <div className="pop-dest-bottom-info">
                                        <h3 className="pop-dest-bottom-location">{data.location}</h3>
                                        <p className="pop-dest-bottom-places">{data.places}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </section>
    )
}