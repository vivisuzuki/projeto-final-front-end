import { useEffect, useState } from 'react';
import './CharacterList.css'
import CharacterTable from '../components/CharacterTable';
import NumberPages from '../components/NumberPages';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterList = () => {

    const [lista, setLista] = useState()
    const [info, setInfo] = useState()

    const { pagina } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.disneyapi.dev/character?page=${pagina}`);
                const lista = response.data.data;
                setLista(lista)
                const info = response.data.info;
                setInfo(info)
                console.log(info)
                console.log(lista);
            } catch (error) {
                console.log('Erro ao obter lista de personagens:', error);
            }
        }
        fetchData()
        console.log("Número da página", pagina)
    }, [pagina])

    return (
        <div className='container'>
            <h3>Página de Lista de personagens</h3>
            <CharacterTable dadosPersonagens={ lista } />
            <NumberPages info={ info } paginaAtual={ pagina } />
        </div>
    );
}


export default CharacterList;