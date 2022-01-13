import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

// Styled Components
import { Wrapper } from './Home.style';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';

// Modules
import { getSports, generateUnicId } from '../../modules/api';

const useStyles = makeStyles(() => ({
    table: {
        width: '100%',
        '& tr': {
            padding: '5px 0'
        }
    },
    tableHead: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 1fr',
        textAlign: 'center',
        backgroundColor: 'grey',
    },
    matches: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
        textAlign: 'center',
    }
}));

const Home = () => {
    const classes = useStyles();
    const [sports, setSports] = useState(null);
    const [sortedByTime, setSortedByTime] = useState(true);

    const initial = async () => {
        try {
            const { data } = await getSports();
            console.log(data)
            setSports(data);
        } catch (e) {
            console.log(e);
        }
    };

    const sortSportsByTime = () => {
        setSortedByTime(true);
        setSports((prev) => {
            prev.matches = prev.matches.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
            return prev;
        })
    };

    const sortSportsByLeagues = () => {
        setSports((prev) => {
            prev.matches = prev.matches.sort((a, b) => a.sport.localeCompare(b.sport));
            return prev;
        });
        setSortedByTime(false);
    };

    useEffect(() => {
        initial();
    }, []);

    if (!sports) {
        return <></>;
    }

    return (
        <Wrapper>
            <h1 className={classes.title}>{sports.name} <Button
                onClick={() => sortedByTime ? sortSportsByLeagues() : sortSportsByTime()}
                variant="contained" color="success" size="large">
                {sortedByTime ? ' Sort by league' : 'Sort by time'}
            </Button></h1>

            <table className={classes.table}>
                {
                    sports.matches.map((match, i) => <div key={generateUnicId()} style={{ width: '100%' }}>

                        {
                            sports.matches[i - 1] && sports.matches[i - 1].sport === match.sport ? <></> : (<tr className={classes.tableHead}>
                                <th style={{ textAlign: 'left' }}>{match.sport}</th>
                                <th>1</th>
                                <th>X</th>
                                <th>2</th>
                            </tr>)
                        }
                        <tr className={classes.matches} style={{ width: '100%' }} key={generateUnicId()}>
                            <td>{match.startDate}</td>
                            <td style={{ textAlign: 'left' }}>{match.name}</td>
                            <td>{match.bets[0] || <LockIcon fontSize="small" />}</td>
                            <td></td>
                            <td>{match.bets[1] || <LockIcon fontSize="small" />}</td>
                        </tr>
                    </div>)
                }



            </table>
        </Wrapper>
    )
};

export default Home;