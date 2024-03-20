import  './Contact.scss'

function Hero() {
    return (
        <>
            <div id="contact" className="contact-section">
                <div className="contact-title">
                    EMAIL ME
                </div>
                <div className="contact-field">
                    <form>
                        <input className="contact-form" type="text"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Hero;