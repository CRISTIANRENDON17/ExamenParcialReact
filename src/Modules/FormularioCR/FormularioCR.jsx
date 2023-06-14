import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import UsersContext from '../../Context/UsersContext';


// eslint-disable-next-line react/prop-types
const FormularioCR = ({addMostrar}) => {
    const { players, setPlayers } = useContext(UsersContext);

    const handleStart = () => {
      if (players.name === '' || players.name === undefined) {
          setPlayers('Player1');
        }
        addMostrar(true);
      };
      console.log(players);
      const handlePlayer1Change = (event) => {
        setPlayers(event.target.value);
      };
    

	return (
		<div>
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
        <Typography variant="h3" component="h3" sx={{ display: 'flex', justifyContent: 'center'}}>
            CARD GAME
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
            <TextField
              id="Player1"
              label="Player1"
              variant="outlined"
              value={players.name}
              onChange={handlePlayer1Change}
            />
        </Box>
        <Button variant="contained" onClick={handleStart} >
            Start
        </Button>
			</Box>
		</div>
	);
};

export default FormularioCR;