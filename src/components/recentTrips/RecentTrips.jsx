import recentTripsData from "./recentTripsData";

export default function RecentTrips() {

    return (
        <section className="recent-trips-sec">
            <div className="container">
                <div className="recent-trips-wrapper">

                    <div className="popular--top-info">
                        <h3 className="popular--top-title">Recent Trips</h3>
                    </div>

                    <div className="recent-trips-area">
                        {recentTripsData.map((item) => {
                            return (
                                <div className="recent-trips-box">
                                    <img className="recent-trips-image" src={`assets/recentTripsAssets/${item.pic}`} alt="Recent" />
                                    <div className="recent-trips-info">
                                        <p className="recent-trips-date">{item.date}</p>
                                        <h3 className="recent-trips-title"><a href="#">{item.title}</a></h3>
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