import { Fragment } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Profile = ({
	signOut,
	auth,
	bets,
	putBets,
	uid,
	updateBetState,
	deleteBet,
	removeBet,
}) => {
	const handleDeleteBet = async (bet) => {
		try {
			await deleteBet(bet._id, uid);
			removeBet(bet._id);
		} catch (e) {
			console.log(e);
		}
	};
	const handleUpdate = async (bet, shouldAdd) => {
		const amount = shouldAdd ? +bet.amount + 5 : +bet.amount - 5;
		if (amount <= 0) {
			handleDeleteBet(bet);
			return;
		}

		const { data } = await putBets({ id: bet._id, amount }, uid);
		updateBetState(data);
	};

	const handleLoggedOut = async () => {
		console.log('start logged out...');
		await signOut(auth)
		console.log('logged out...');
	}

	return (
		<>
			<Grid container>
				{bets &&
					bets.map((bet) => (
						<Fragment key={bet._id}>
							<Grid item sm={8} md={8} lg={8}>
								<Typography color="textSecondary" variant="body2">
									{bet.name}
								</Typography>
							</Grid>
							<Grid item sm={2} md={2} lg={2}>
								<Typography color="textSecondary" variant="body2">
									{bet.amount}
								</Typography>
							</Grid>
							<Grid item sm={1} md={1} lg={1}>
								<Typography color="textSecondary" variant="body2">
									<AddIcon
										onClick={() => handleUpdate(bet, true)}
										style={{ cursor: 'pointer' }}
									/>
								</Typography>
							</Grid>
							<Grid item sm={1} md={1} lg={1}>
								<Typography color="textSecondary" variant="body2">
									<RemoveIcon
										onClick={() => handleUpdate(bet)}
										style={{ cursor: 'pointer' }}
									/>
								</Typography>
							</Grid>
						</Fragment>
					))}
			</Grid>
			<Button
				style={{ display: 'block', width: '100%' }}
				onClick={handleLoggedOut}
				variant="contained"
			>
				Logout
			</Button>
		</>
	);
};

export default Profile;
