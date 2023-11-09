import '../css/leftcard2sub.css';

const LeftCard2Sub = ({Icon, text, active}) => {
    return(
        <div className={`eachrow ${active && "active"}`}>
            <Icon className="icon"/>
            <h2 className='text'>{text}</h2>
        </div>
    )
}

export default LeftCard2Sub;