import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
// Styled Components
import { Wrapper } from './Home.style';

// Modules
import { getSports } from '../../modules/api';

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

    const initial = async () => {
        try {
            const { data } = await getSports();
            console.log(data)
            setSports(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        initial();
    }, []);

    if (!sports) {
        return <></>;
    }

    return (
        <Wrapper>
                <h1>{sports.name}</h1>

                <table className={classes.table}>

                    {
                        sports?.events.map(event => <div key={event.id} style={{ width: '100%' }}>
                            <tr className={classes.tableHead}>
                                <th style={{textAlign: 'left'}}>{event.name}</th>
                                <th>1</th>
                                <th>X</th>
                                <th>2</th>
                            </tr>
                            {
                                event.matches.map(match => (
                                    <tr className={classes.matches} style={{ width: '100%' }} key={match.name}>
                                        <td>{match.startDate}</td>
                                        <td style={{textAlign: 'left'}}>{match.name}</td>
                                        <td>{match.bets[0]}</td>
                                        <td></td>
                                        <td>{match.bets[1]}</td>
                                    </tr>
                                ))
                            }
                        </div>)
                    }

                </table>
        </Wrapper>
    )
};

export default Home;