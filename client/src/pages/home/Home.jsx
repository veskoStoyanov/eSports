import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@mui/styles';

// Components
import { Button } from '@mui/material';
import { Wrapper } from './Home.style';
import Modal from './Modal';
import MTable from './MTable'

import { generateUnicId } from '../../modules';

// Actions
import { sportsActions, userActions } from '../../store/actions';

const useStyles = makeStyles(() => ({
    table: {
        width: '100%',
        '& tr': {
            padding: '5px 0'
        }
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const Home = ({ setToggleDrawer }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { setInitialSportsState, changeSportsState } = bindActionCreators(
        sportsActions,
        dispatch
    );

    const { changeUserBetsState, addBet } = bindActionCreators(
        userActions,
        dispatch
    );

    const { sports } = useSelector((state) => state.sportsState);
    const { user } = useSelector((state) => state.userState);

    const [sortedByTime, setSortedByTime] = useState(true);
    const [open, setOpen] = useState(false);
    const [bet, setBet] = useState('');

    const initial = async () => setInitialSportsState();

    const getUserBets = async () => {
        if (!user) { return; }
        changeUserBetsState(user.uid);
    }

    const sortSportsByTime = () => {
        setSortedByTime(true);
        const matches = sports.matches.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        changeSportsState({ ...sports, matches });
    };

    const sortSportsByLeagues = () => {
        setSortedByTime(false);
        const matches = sports.matches.sort((a, b) => a.sport.localeCompare(b.sport));
        changeSportsState({ ...sports, matches });
    };

    const handleOpenModal = (bet) => {
        if (!user) {
            setToggleDrawer(true);
            return;
        }

        setOpen(true);
        setBet(bet);
    };

    const createBet = async (amount, name) => {
        setOpen(false);
        setBet('');
        const body = {
            amount,
            name,
        }

        addBet(body, user.uid);
    };

    useEffect(() => {
        initial();
    }, []);

    useEffect(() => {
        getUserBets();
    }, [user]);

    if (!sports) {
        return <></>;
    }

    return (
        <Wrapper>
            <h1
                className={classes.title}>
                {sports.name}
                <Button
                    onClick={() => sortedByTime ? sortSportsByLeagues() : sortSportsByTime()}
                    variant="contained" color="primary" size="large">
                    {sortedByTime ? ' Sort by league' : 'Sort by time'}
                </Button>
            </h1>
            <MTable handleOpenModal={handleOpenModal} generateUnicId={generateUnicId} matches={sports.matches} />
            <Modal createBet={createBet} bet={bet} setOpen={setOpen} open={open} />
        </Wrapper>
    )
};

export default Home;