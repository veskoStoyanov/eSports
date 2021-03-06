import { useState } from 'react';

import { Button, FormControl, FormHelperText, Input, InputLabel, Box } from '@mui/material';

const Form = ({ setToggleDrawer, createUserWithEmailAndPassword, auth, signInWithEmailAndPassword }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, state.email, state.password);
            setToggleDrawer(false);
        } catch (e) {
            console.log(e)
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, state.email, state.password);
            setToggleDrawer(false);
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <Box>
                {
                    Object.keys(state).map(x => (
                        <FormControl key={x}>
                            <InputLabel htmlFor="my-input">{x}</InputLabel>
                            <Input
                                value={state[x]}
                                onChange={handleChange}
                                id={`my-${x}`}
                                name={x}
                                type={x === 'password' ? x : 'text'}
                                aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">We'll never share your {x}.</FormHelperText>
                        </FormControl>
                    ))
                }

                <Box style={{ marginTop: 20 }} >
                    <Button style={{ display: 'block', width: '100%' }} onClick={handleLogin} variant="contained">Login</Button>
                    <FormHelperText style={{ textAlign: 'center' }}>Or</FormHelperText>
                    <Button style={{ display: 'block', width: '100%' }} onClick={handleRegister} variant="contained">Register</Button>
                </Box>
            </Box>
        </>
    )
};

export default Form;