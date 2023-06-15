import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const UsersContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersProvider = ({ children }) => {

	const [players, setPlayers] = useState({name:'',id:''});
    const [deckofcard, setDeckofcard] = useState([]);
    const [code, setCode] = useState('');
/*  const [deckofcard2, setDeckofcard2] = useState([]);
	const [deckofcardUse, setDeckofcardUse] = useState([]);
	const [deckofcardUse2, setDeckofcardUse2] = useState([]);
    const [win, setWin] = useState({win:false,name:'Empate'});
    */
	useEffect(() => {
		const query = async () => {
            const urlId = `https://deckofcardsapi.com/api/deck/new/`;
			const responseId = await axios(urlId);
			const dataId = responseId.data.deck_id;
            setPlayers(prevState => ({ ...prevState, id: dataId }));
			const url = `https://deckofcardsapi.com/api/deck/${dataId}/draw/?count=52`;
			const response = await axios(url);
			const cardsData = response.data.cards;
			setDeckofcard(cardsData);
            console.log(players);
		};
		query();	
	},[]);

	const data = { 
		players, 
		setPlayers,  
        code, 
        setCode,
        deckofcard
	}

	return (
		<UsersContext.Provider value={data}>{children}</UsersContext.Provider>
	);
};

export { UsersProvider };
export default UsersContext;