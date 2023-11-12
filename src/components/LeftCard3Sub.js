import "../css/leftcard3sub.css"


const LeftCard3Sub = ({user, username, name, Icon, ftext}) => {
    return (
        <div className="row"> 
            <div className="user">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="text">
                    <span className="username">{username}</span>
                    <span className="name">{name}</span>
                </div>
            </div>
            <div className="follow">
                <div className="icon"><Icon /></div>
                <div className="text">{ftext}</div>
            </div>
        </div>
    )
}

export default LeftCard3Sub;