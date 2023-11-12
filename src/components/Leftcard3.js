import "../css/leftcard3.css"
import LeftCard3Sub from "./LeftCard3Sub.js";
import plutonn from '../images/plutonn.png'
import user1 from '../images/user1.avif';
import user2 from '../images/user2.avif';
import user3 from '../images/user3.avif';
import user4 from '../images/user4.avif';
import user5 from '../images/user5.avif';
import AddIcon from '@mui/icons-material/Add';


const Leftcard3 = () => {
    return(
        <div className="card">
            <LeftCard3Sub user={plutonn} username="@ciperschools" name="Ciper School" Icon={AddIcon} ftext="Follow"/>
            <LeftCard3Sub user={user1} username="@anurag4820" name="Anurag Singh" Icon={AddIcon} ftext="Follow"/>
            <LeftCard3Sub user={user2} username="@vinay15012" name="Vinay Tiwari" Icon={AddIcon} ftext="Follow"/>
            <LeftCard3Sub user={user3} username="@ajit12f838" name="Ajit Kumar" Icon={AddIcon} ftext="Follow"/>
            <LeftCard3Sub user={user4} username="@ashish1240" name="Ashish Jha" Icon={AddIcon} ftext="Follow"/>
            <LeftCard3Sub user={user5} username="@anshul4823" name="Anshul Kumar" Icon={AddIcon} ftext="Follow"/>
        </div>
    )
}

export default Leftcard3;