import { useState } from 'react';

import { Box, Button, Typography, Input } from '@mui/material';
import AppModal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Modal = ({ open, setOpen, bet, createBet }) => {
    const [amount, setAmount] = useState('');

    const handleClose = () => setOpen(false);

    const handleChange = (e) => setAmount(e.target.value);

    const submit = () => {
        setAmount('');
        createBet(amount, bet);
    }

    return (
        <div>
            <AppModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add amount for {bet}
                    </Typography>
                    <Input onChange={handleChange} name="amount" value={amount} style={{ width: '100%' }} />
                    <Button style={{ display: 'block', width: '100%', marginTop: 20 }} onClick={submit} variant="contained">BET</Button>
                </Box>
            </AppModal>
        </div>
    );
}

export default Modal;