import { Button, Box } from '@mui/material';
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
	removeBet
}) => {
	console.log(bets);
	const handleDeleteBet = async (bet) => {
		const { data } = await deleteBet(bet._id, uid);
		removeBet(bet._id);
		console.log(data)
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

	return (
		<>
			{bets &&
				bets.map((bet) => (
					<Box>
						<Box
							key={bet._id}
							style={{
								width: '100%',
								fontSize: 16,
								display: 'flex',
								alignItems: 'center',
								padding: '15px 0',
								justifyContent: 'space-around',
							}}
						>
							<span>{bet.name}</span> <span>{bet.amount}</span>{' '}
							<AddIcon
								onClick={() => handleUpdate(bet, true)}
								style={{ cursor: 'pointer' }}
							/>{' '}
							<RemoveIcon
								onClick={() => handleUpdate(bet)}
								style={{ cursor: 'pointer' }}
							/>
						</Box>
					</Box>
				))}
			<Button
				style={{ display: 'block', width: '100%' }}
				onClick={() => signOut(auth)}
				variant="contained"
			>
				Logout
			</Button>
		</>
	);
};

export default Profile;
