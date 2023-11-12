import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import '../css/feedsub.css';

const Feedsub = ({user, username, name, textmsg, bodyimg, commentNo, likeNo, lastimage }) => {
    return(
        <div className='feedCard'>
                <div className="row"> 
                    <div className="user">
                        <div className="image">
                            <img src={user} alt="user"/>
                        </div>
                        <div className="text">
                            <span className="username">{username} </span>
                            <span className="name">{name}</span>
                        </div>
                    </div>
                    <div className="follow">
                        <div className="icon"><AddIcon /></div>
                        <div className="text">Follow</div>
                        <div className='icon2'><MoreVertIcon /></div>
                    </div>
                </div>
                <div className='text2'>
                    <p>{textmsg}</p>
                </div>
                <div className='mainImage'>
                    <img src={bodyimg} alt='main Image' />
                </div>
                <div className='lastrow'>
                    <div className='lone'>
                        <div className='icontext'>
                            <div className='licon'><ChatIcon /></div>
                            <div className='ltext'>{commentNo}</div>
                        </div>

                        <div className='icontext'>
                            <div className='licon'><ThumbUpIcon /></div>
                            <div className='ltext'>{likeNo}</div>
                        </div>

                        <div className='icontext'>
                            <div className='licon'><ShareIcon /></div>
                            
                        </div>

                    </div>
                    <div className='ltwo'>
                        <img src={lastimage} alt='user' />
                    </div>
                </div>
            </div>
    )
}

export default Feedsub;