export default function Newsletter () {

    return (
        <section className="newsletter-sec">
            <div className="container">
                <div className="newsletter-wrapper">

                    <div className="newsletter-left">
                        <h2>Subscribe Our Newsletter</h2>
                        <p>Subscribe newsletter to get offers and about new places to discover.</p>
                    </div>

                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email" />
                        <a href="#" className="newsletter-btn btn">Subscribe</a>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}