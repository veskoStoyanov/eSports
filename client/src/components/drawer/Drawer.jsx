import { useSelector } from 'react-redux';

import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import DrawerApp from '@mui/material/Drawer';
import { Box, Container } from '@mui/material';
import Form from './Form';
import Profile from './Profile';

const Drawer = ({ toggleDrawer, setToggleDrawer }) => {
    const { user } = useSelector((state) => state.userState);

    return (
        <DrawerApp
            anchor="right"
            open={toggleDrawer}
            onClose={() => setToggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <Container style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
                    {user ? <Profile signOut={signOut} auth={auth} /> : <Form auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword} signInWithEmailAndPassword={signInWithEmailAndPassword} setToggleDrawer={setToggleDrawer} />}
                </Container>

            </Box>
        </DrawerApp>
    )
}

export default Drawer;