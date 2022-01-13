import { makeStyles } from '@mui/styles';
import LockIcon from '@mui/icons-material/Lock';


const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
        textAlign: 'center',
    },
}));

const TableRow = ({ name, startDate, bets }) => {
    const classes = useStyles();

    return (<tr className={classes.root}>
        <td>{startDate}</td>
        <td style={{ textAlign: 'left' }}>{name}</td>
        <td>{bets[0] || <LockIcon fontSize="small" />}</td>
        <td></td>
        <td>{bets[1] || <LockIcon fontSize="small" />}</td>
    </tr>)
}

export default TableRow;