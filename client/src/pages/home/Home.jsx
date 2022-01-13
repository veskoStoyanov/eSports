import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';

import { bindActionCreators } from 'redux';

// Styled Components
import { Wrapper } from './Home.style';

import { Button } from '@mui/material';
import TableHead from './TableHead';
import TableRow from './TableRow';
// Modules
import { getSports, generateUnicId } from '../../modules/api';

// Actions
import { sportsActions } from '../../store/actions';

const useStyles = makeStyles(() => ({
    table: {
        width: '100%',
        '& tr': {
            padding: '5px 0'
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { setInitialSportsState, changeSportsState } = bindActionCreators(
        sportsActions,
        dispatch
    );

    const { sports } = useSelector((state) => state.sportsState);
    
    const [sortedByTime, setSortedByTime] = useState(true);

    const initial = async () => {
        try {
            const { data } = await getSports();
            setInitialSportsState(data);
        } catch (e) {
            console.log(e);
        }
    };

    const sortSportsByTime = () => {
        setSortedByTime(true);
        const matches = sports.matches.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        changeSportsState({ ...sports, matches });
    };

    const sortSportsByLeagues = () => {
        setSortedByTime(false);
        const matches = sports.matches.sort((a, b) => a.sport.localeCompare(b.sport));
        changeSportsState({ ...sports, matches })
    };

    useEffect(() => {
        initial();
    }, []);

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
                    variant="contained" color="success" size="large">
                    {sortedByTime ? ' Sort by league' : 'Sort by time'}
                </Button>
            </h1>

            <table className={classes.table}>
                {
                    sports.matches.map((match, i) => <Fragment key={generateUnicId()}>

                        {
                            sports.matches[i - 1] && sports.matches[i - 1].sport === match.sport ? <></> : (<TableHead sport={match.sport} />)
                        }

                        <TableRow
                            name={match.name}
                            startDate={match.startDate}
                            bets={match.bets}
                        />
                    </Fragment>)
                }

            </table>
        </Wrapper>
    )
};

export default Home;