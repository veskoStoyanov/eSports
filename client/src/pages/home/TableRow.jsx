import { makeStyles } from '@mui/styles';
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
        textAlign: 'center',
    },
    name: {
        textAlign: 'left',
         cursor: 'pointer',
         '&:hover': {
             color: 'red',
         }
    }
}));

const TableRow = ({ name, startDate, bets, handleOpenModal }) => {
    const classes = useStyles();

    return (<tbody>
        <tr className={classes.root}>
            <td>{startDate}</td>
            <td onClick={() => handleOpenModal(name)} className={classes.name}>{name}</td>
            <td>{bets[0] || <LockIcon fontSize="small" />}</td>
            <td></td>
            <td>{bets[1] || <LockIcon fontSize="small" />}</td>
        </tr>
    </tbody>)
}

export default TableRow;