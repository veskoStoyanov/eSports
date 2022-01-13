import { Button } from "@mui/material";

const Profile = ({ signOut, auth }) => {
    return <Button style={{ display: 'block', width: '100%' }} onClick={() => signOut(auth)} variant="contained">Logout</Button>
};

export default Profile;