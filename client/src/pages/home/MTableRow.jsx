import { makeStyles } from '@mui/styles';

import { Grid, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles(() => ({
    name: {
        textAlign: 'left',
        cursor: 'pointer',
        '&:hover': {
            color: 'red',
        }
    }
}));

const MTableRow = ({ name, startDate, bets, handleOpenModal }) => {
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow >
                <TableCell>
                    <Grid container>
                        <Grid item md={2}>
                            <Typography>
                                {startDate}
                            </Typography>
                        </Grid>
                        <Grid item sm={4} md={4} lg={4}>
                            <Typography onClick={() => handleOpenModal(name)} className={classes.name} color="textSecondary" variant="body2">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item sm={2} md={2} lg={2}>
                            <Typography color="textSecondary" variant="body2">
                                {bets ? bets[0] : <LockIcon />}
                            </Typography>
                        </Grid>
                        <Grid item sm={2} md={2} lg={2}></Grid>
                        <Grid item sm={2} md={2} lg={2}>
                            <Typography color="textSecondary" variant="body2">
                                {bets ? bets[1] : <LockIcon />}
                            </Typography>
                        </Grid>
                    </Grid>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default MTableRow;