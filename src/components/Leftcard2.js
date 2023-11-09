import '../css/leftcard2.css'
import LeftCard2Sub from './LeftCard2Sub.js';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


const Leftcard2 = () => {
    return (
        <div className="card">
           <LeftCard2Sub  Icon={HomeIcon} text="Home"/>
           <LeftCard2Sub active Icon={PeopleIcon} text="Community"/>
           <LeftCard2Sub  Icon={SearchIcon} text="Search"/>
           <LeftCard2Sub  Icon={VideoLibraryIcon} text="Courses"/>
        </div>
    )
}

export default Leftcard2;