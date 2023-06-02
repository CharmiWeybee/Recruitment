import ChangePassword from "../../auth/components/ChangePassword";
import ProfileDetails from "./ProfileDetails";

export interface Props {}
const MyProfile: React.FC<Props> = () => {
  return (
    <div>
      <ProfileDetails />
      <ChangePassword />
    </div>
  );
};

export default MyProfile;
