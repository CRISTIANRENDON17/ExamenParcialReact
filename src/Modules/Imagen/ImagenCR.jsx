import { useContext } from "react";
import UsersContext from "../../Context/UsersContext";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ImagenCR = () => {
    const { players, setPlayers, code, setCode, deckofcard  } = useContext(UsersContext);

    const handlePlayer1Change = (event) =>{
        setCode(event.target.value);
    }
    console.log(code);
  return (
    <div>
        <Container maxWidth="xl">
            <Typography variant="h3" component="h2" sx={{ display: 'flex', justifyContent: 'center', mt: 4, fontFamily: 'Arial', fontWeight: 'bold'}}>
                Player: {' '+players.name}
            </Typography>
            <Box
				component='form'
				sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    '& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
            >   
                
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    <TextField
                        id="CodeCard"
                        label="CodeCard"
                        variant="outlined"
                        value={code}
                        onChange={handlePlayer1Change}
                    />
                </Box>
                <Button variant="contained" /*onClick={handleStart}*/ >
                    Start
                </Button>
            </Box>
        </Container>
    </div>
  )
}

export default ImagenCR;