

const RightSub = ({username, date, text, image}) => {
    return (
        <div className='eachRow'>
            <div className='usernameandday'>
                <div className='user'>{username}</div>
                <div className='day'>{date}</div>
            </div>
            <div className='textandImage'>
                <p className='text'>{text}</p>
                <div className='image'><img src={image} /></div>
            </div>
        </div>
    )
}

export default RightSub;