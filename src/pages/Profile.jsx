import { useDispatch, useSelector } from "react-redux";
import { checkedChange, selectCheckBox } from '../store/profileSlice';

const Profile = () => {
  const isChecked = useSelector(selectCheckBox);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Profile</h3>
      <div>
        {console.log(isChecked)}

        <input type="checkbox"  onClick={() => dispatch(checkedChange())} />
        {isChecked && 'Отмечен'}
        
      </div>
    </div>
  )
};

export default Profile;