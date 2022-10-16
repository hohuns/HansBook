import "./closeFriend.css";

interface userType {
  user: {
    id: number;
    profilePicture: string;
    username: string;
  };
}

const CloseFriend = ({ user }: userType) => {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
