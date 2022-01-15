import {
    TableCell,
    TableHead,
    TableRow,
    Grid,
    Typography,
} from '@mui/material';

const MTableHead = ({ sport, classes }) => (
    <TableHead>
        <TableRow>
            <TableCell className={classes.tableHeaderCell}>
                <Grid container>
                    <Grid item sm={6} md={6} lg={6}>
                        <Typography>{sport}</Typography>
                    </Grid>
                    <Grid item sm={2} md={2} lg={2}>
                        <Typography color="textSecondary" variant="body2">
                            1
                        </Typography>
                    </Grid>
                    <Grid item sm={2} md={2} lg={2}>
                        <Typography color="textSecondary" variant="body2">
                            X
                        </Typography>
                    </Grid>
                    <Grid item sm={2} md={2} lg={2}>
                        <Typography color="textSecondary" variant="body2">
                            2
                        </Typography>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    </TableHead>
);

export default MTableHead;