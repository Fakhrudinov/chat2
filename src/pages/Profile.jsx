import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../store/Profile/actions";
import { profileSelector } from "../store/Profile/selectors";

const Profile = () => {

  const dispatch = useDispatch();
  const { message, isChecked } = useSelector(profileSelector);

  const handleToggleshowName = () => {
    dispatch(toggleUserNameAction());
  };

  return (
    <div>
      <h3>Profile</h3>
      <div>
        {console.log(isChecked)}
        {console.log(message)}

        <input type="checkbox"  onClick={handleToggleshowName} />
        {isChecked && message}
        
      </div>

    </div>
  )
};

export default Profile;