import "./post.css";

export default function Post() {

    const image = require ('./test.jpg')

    return (
        <div className="post">
            <img
                className="postImg"
                src={image}
                alt=""
            />
            <div className="postInfo">
                {/* <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Tech</span>
                </div> */}
                <span className="postTitle">Lorem Ipsum</span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>
    )
}