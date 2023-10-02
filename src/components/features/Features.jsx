import featuresData from "./featuresData"

export default function Features() {

    return (
        <section className="features-sec">
            <div className="container">
                <div className="features-wrapper">

                    <div className="features-area">
                        {featuresData.map((data) => {
                            return (
                                <div className="features-box">
                                    <div className="features-icon-area">
                                        <img className="features--icon" src={`assets/featuresAssets/${data.pic}`} />
                                    </div>
                                    <div className="features-info">
                                        <h3 className="features-title">{data.title}</h3>
                                        <p className="features-details">{data.details}</p>
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