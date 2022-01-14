import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import DrawerApp from '@mui/material/Drawer';
import { Box, Container } from '@mui/material';
import Form from './Form';
import Profile from './Profile';

import { putBets, deleteBet } from '../../modules/api';

// Actions
import { userActions } from '../../store/actions';

const Drawer = ({ toggleDrawer, setToggleDrawer }) => {
    const { user, bets } = useSelector((state) => state.userState);
    const dispatch = useDispatch();
    const { updateBetState, removeBet } = bindActionCreators(
        userActions,
        dispatch
    );
    return (
        <DrawerApp
            anchor="right"
            open={toggleDrawer}
            onClose={() => setToggleDrawer(false)}
        >
            <Box
                sx={{ width: user ? 550 : 250 }}
                role="presentation"
            >
                <Container style={{ marginTop: 50 }}>
                    {user ? <Profile deleteBet={deleteBet}
	            removeBet={removeBet} updateBetState={updateBetState} uid={user.uid} putBets={putBets} bets={bets} signOut={signOut} auth={auth} /> : <Form auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword} signInWithEmailAndPassword={signInWithEmailAndPassword} setToggleDrawer={setToggleDrawer} />}
                </Container>

            </Box>
        </DrawerApp>
    )
}

export default Drawer;