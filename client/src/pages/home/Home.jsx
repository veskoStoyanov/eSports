import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';

import { bindActionCreators } from 'redux';

// Styled Components
import { Wrapper } from './Home.style';

import { Button } from '@mui/material';

import Modal from './Modal';
// Modules
import { getSports, postBet, fetchBets } from '../../modules/api';
import { generateUnicId } from '../../modules';

// Actions
import { sportsActions, userActions } from '../../store/actions';

import MTable from './MTable'

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

    const initial = async () => {
        try {
            const { data } = await getSports();
            setInitialSportsState(data);
        } catch (e) {
            console.log(e);
        }
    };

    const getUserBets = async () => {
        if (!user) { return; }
        const { data } = await fetchBets(user.uid);
        changeUserBetsState(data);
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
        try {
            const { data } = await postBet(body, user.uid);
            console.log(data)
            addBet(data);
        } catch (e) {
            console.log(e);
        }
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
                    style={{ backgroundColor: '#757de8' }}
                    onClick={() => sortedByTime ? sortSportsByLeagues() : sortSportsByTime()}
                    variant="contained" color="success" size="large">
                    {sortedByTime ? ' Sort by league' : 'Sort by time'}
                </Button>
            </h1>
            <MTable handleOpenModal={handleOpenModal} generateUnicId={generateUnicId} matches={sports.matches} />
            <Modal createBet={createBet} bet={bet} setOpen={setOpen} open={open} />
        </Wrapper>
    )
};

export default Home;