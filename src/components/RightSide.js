import '../css/rightSide.css'
import coding from '../images/coding.avif'
import post1 from '../images/post1.avif';
import post2 from '../images/post2.avif';
import post3 from '../images/post3.avif';
import post4 from '../images/post4.avif';
import post5 from '../images/post5.avif';
import post6 from '../images/post6.avif';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RightSub from './RightSub.js';

const RightSide = () => {
    return(
        <div className="right">
            <div className='trendingPosts'>
                <div className='header'>
                    <TrendingUpIcon style={{color : 'red', marginRight : '10px'}}/>
                    <h2>Trending Posts</h2>
                </div>
                <div className='slider'>
                    <RightSub username="coderschools" date="2 days ago" text="It’s funny. I met a man once who did a lot of mountain climbing. I asked him which was harder" image={post1}/>
                    <RightSub username="vinaytiwari14" date="1 days ago" text="It doesnt matter how many times you get knocked down. All that matters is you get up one more time" image={post2}/>
                    <RightSub username="ajitkumar255" date="2 months ago" text="Grace is what picks me up and lifts my wings high above and I fly! Grace always conquers! Be " image={post3}/>
                    <RightSub username="vaishanvi520" date="1 week ago" text="Having an eye for beauty isn't the same thing as a weakness...except possibly when it comes to you." image={post4}/>
                    <RightSub username="susheel4278" date="8 days ago" text="Are you on our side...and want to be different, or are you on that side and want to throw a football at my head!" image={post5}/>
                    <RightSub username="anuragkumar" date="1 year ago" text="When things break, it's not the actual breaking that prevents them from getting back together again." image={post6}/>
                    <RightSub username="jyotiprakash" date="1 minute ago" text="If it can be destroyed by the truth, it deserves to be destroyed by the truth." image={coding}/>

                </div>
            </div>
            <div></div>
        </div>
    )
}

export default RightSide;