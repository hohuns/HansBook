import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Img1 from "../../public/assets/gift.png";
import Img2 from "../../public/assets/ad.png";
import Img3 from "../../public/assets/person/1.jpeg";
import Img4 from "../../public/assets/person/2.jpeg";
import Img5 from "../../public/assets/person/3.jpeg";
import Img6 from "../../public/assets/person/4.jpeg";
import Img7 from "../../public/assets/person/5.jpeg";
import Img8 from "../../public/assets/person/6.jpeg";

interface ProfileType {
  profile: () => JSX.Element;
}

const Rightbar = ({ profile }: ProfileType | any) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={Img1} alt="" className="birthdayImg" />
          <span className="birhdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birth day
          </span>
        </div>
        <img src={Img2} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={Img3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img4} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img8} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img5} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img6} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img7} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
