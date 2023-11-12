import '../css/feed.css';
import user1 from '../images/user1.avif';
import user from '../images/user.png';
import user2 from '../images/user2.avif';
import user3 from '../images/user3.avif';
import user4 from '../images/user4.avif';
import user5 from '../images/user5.avif';
import body1 from '../images/body1.avif';
import body2 from '../images/body2.avif';
import body3 from '../images/body3.avif';
import body4 from '../images/body4.avif';
import coding from '../images/coding.avif';
import body5 from '../images/body5.avif';

import Feedsub from './feedsub.js';

const Feed = () => {
    return(
        <div className='x'>
            <div className='buttons'>
                <button className='posts'>Posts</button>
                <button className='opportunity'>Opportunity</button>
            </div>
            <Feedsub user={user1} username="@ciperschools" name="Ciper School" textmsg="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" bodyimg={body1} commentNo="5" likeNo="2" lastimage={user3}/>
            <Feedsub user={user} username="@vinaytiwari15" name="Vinay Tiwari" textmsg="Your Life Is Happening Right Now: Don't let procrastination take over your life. Be brave and take risks. Your life is happening right now. " bodyimg={coding} commentNo="1" likeNo="5" lastimage={user1}/>
            <Feedsub user={user2} username="@ajitkumar48" name="Ajit Kumar" textmsg="And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, but have not love, I am nothing." bodyimg={body2} commentNo="5" likeNo="2" lastimage={user2}/>
            <Feedsub user={user3} username="@anuragsingh28" name="Anurag Singh" textmsg="The real heroes anyway aren't the people doing things; the real heroes are the people NOTICING things, paying attention." bodyimg={body3} commentNo="3" likeNo="1" lastimage={user5}/>
            <Feedsub user={user4} username="@ashishJha48" name="Ashish Jha" textmsg="Come friends, it's not too late to seek a newer world." bodyimg={body4} commentNo="8" likeNo="7" lastimage={user4}/>
            <Feedsub user={user5} username="@vikaskumar29" name="Vikas Kumar" textmsg="The best discoveries always happened to the people who weren't looking for it. Columbus and America. Pinzon, who stumbled on Brazil while looking for the West Indies. Stanley happening on Victoria Falls. And you. " bodyimg={body5} commentNo="3" likeNo="4" lastimage={user1}/>
        </div>
    )
}

export default Feed;