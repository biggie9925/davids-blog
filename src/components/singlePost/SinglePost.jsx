import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg" alt="d12" />
                <h1 className="singlePostTitle">
                    Dwight Howard
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>David</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}