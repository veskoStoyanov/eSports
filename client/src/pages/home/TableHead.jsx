import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 1fr',
        textAlign: 'center',
        backgroundColor: 'grey',
    },
}));

const TableHead = ({ sport }) => {
    const classes = useStyles();

    return (<thead>
        <tr className={classes.root}>
        <th style={{ textAlign: 'left' }}>{sport}</th>
        <th>1</th>
        <th>X</th>
        <th>2</th>
    </tr>
    </thead>)
}

export default TableHead;