export default function DestinationSearch() {

    return (
        <section className='destination-search-sec'>
            <div className="container">
                <div className="destination-search-wrapper">

                    <h4 className="dest-srch-title">Where you want to go?</h4>
                    <form className="dest-srch-form">
                        <input id="dest-srch-form-where" type="text" placeholder="Where to go?" />
                        <input type="date" />
                        <select name="travel" id="travel-type">
                            <option value="travelType">Travel Type</option>
                            <option value="sameOption">Same Option</option>
                            <option value="anotherOption">Another Option</option>
                        </select>
                        <a href="#" className="dest-srch-form-btn btn">Search</a>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}