import './Contacts.css'

function Contacts() {

    const GetEmail = () => {
        navigator.clipboard.writeText("timofei1233459@gmail.com");
        alert("Email copied");
    }

    const GetNumber = () => {
        navigator.clipboard.writeText("+380661433705");
        alert("Number copied");
    }

    return (
        <div className="ContactsContainer">
            <h1>Contact me</h1>
            <div className="Contacts">
                <div className="ContactRow">
                    <img src={require('./mail_icon.png')} alt={" "}/>
                    <p onClick={GetEmail}>Gmail</p>
                </div>
                <div className="ContactRow" onClick={GetNumber}>
                    <img src={require('./phone_icon.png')} alt={" "}/>
                    <p onClick={GetNumber}>Phone</p>
                </div>
                <div className="ContactRow">
                    <img src={require('./linkedin_icon.png')} alt={" "}/>
                    <a href={'https://www.linkedin.com/in/timofii-averianov-4788ba229/'}>LinkedIN</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;