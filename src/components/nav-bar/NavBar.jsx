import "./navbar.css";

export default function NavBar() {

    const profile = require ('./dwight.png')

    return (

        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-github"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img
                    className="topImg"
                    src={profile}
                    alt="D12"
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}