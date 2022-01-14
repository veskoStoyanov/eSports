import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import {
	Table,
	TableContainer,
	Paper,
} from '@mui/material';

import MTableHead from './MTableHead';
import MTableRow from './MTableRow';

const useStyles = makeStyles(() => ({
	tableContainer: {
		borderRadius: 15,
		margin: '10px 10px',
	},
	tableHeaderCell: {
		fontWeight: 'bold',
		backgroundColor: '#757de8',
		color: '#fff',
	},
	avatar: {
		backgroundColor: '#fff',
		color: '#757de8',
	},
	name: {
		fontWeight: 'bold',
		color: '#757de8',
	},
	status: {
		fontWeight: 'bold',
		fontSize: '0.75rem',
		color: 'white',
		backgroundColor: 'grey',
		borderRadius: 8,
		padding: '3px 10px',
		display: 'inline-block',
	},
}));

const MTable = ({ matches, generateUnicId, handleOpenModal }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} className={classes.tableContainer}>
			<Table className={classes.table} aria-label="simple table">
				{matches.map((match, i) => (
					<Fragment key={generateUnicId()}>
						{matches[i - 1] && matches[i - 1].sport === match.sport ? (
							<></>
						) : (
							<MTableHead sport={match.sport} classes={classes} />
						)}

            <MTableRow key={match.name} name={match.name} startDate={match.startDate} bets={match.bets} handleOpenModal={handleOpenModal} />
					</Fragment>
				))}
			</Table>
		</TableContainer>
	);
};

export default MTable;
