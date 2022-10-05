import "./header.css";

export default function Header() {

    const bg = require ('./hero.jpg')
    
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React and Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src={bg}
                alt=""
            />
        </div>
    )
}