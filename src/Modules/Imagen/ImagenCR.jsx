import { useContext, useState } from "react";
import UsersContext from "../../Context/UsersContext";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

const ImagenCR = () => {
    const { players, code, setCode, deckofcard  } = useContext(UsersContext);
    const [contador, setContador] = useState(0);
    const [Gano, setGano] = useState({win:false,url:'',code:''});
    const handleStart = () => {
      //  console.log('Validation');
      //  console.log('Codigo: '+code);
      //  console.log(deckofcard);

        const numero = code[0];
        const letra = code[1];
      //  console.log('Numero:'+numero+'  Letra:'+letra);
        const obtenerContrario = obtenerContrarioFuncion(letra);
      //  console.log('Letra contraria: ' + obtenerContrario);
        if(contador < 51){
            setContador(contador+1);
            const nuevoCodigo = numero+obtenerContrario;
         //   console.log('Nuevo Codigo: '+ nuevoCodigo);
         //   console.log(deckofcard[contador].code)
            if(deckofcard[contador].code === nuevoCodigo){
         //       console.log('Gano');
                setGano({win:true, url:deckofcard[contador].image,code:deckofcard[contador].code})
              
            }
        }
    };

    const obtenerContrarioFuncion = (letra) =>{
        let text = '';
        if(letra === 'C'){
            text = 'D';
        }else if(letra === 'D'){
            text = 'C';
        }else if(letra === 'H'){
            text = 'S';
        }else if(letra === 'S'){
            text = 'H';
        }
        return text;
    }
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
            <Grid container spacing={2} columns={20} sx={{ mt: 2,  display: 'flex', justifyContent: 'center', }}>
                <Card>
                    <CardActionArea>
                    <CardMedia
                    component="img"
                    value = {Gano.code}
                    image={Gano.url}
                    alt="Card Image"
                    />
                    </CardActionArea>
                </Card>
            </Grid>
            <br></br>
            <Box
				component='form'
				sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                <Button variant="contained" onClick={handleStart} >
                    Start
                </Button>
            </Box>
        </Container>
    </div>
  )
}

export default ImagenCR;