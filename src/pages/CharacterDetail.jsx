import './CharacterDetail.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {

    const { idPersonagem } = useParams()

    const [character, setCharacter] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.disneyapi.dev/character/${idPersonagem}`);
                const personagem = response.data.data;
                setCharacter(personagem)
            } catch (error) {
                console.log('Erro ao obter detalhes da personagem:', error);
            }
        }
        fetchData()
    }, [idPersonagem])

    return (
        <div className='containerDetail'>
            <h3>Página de Detalhes</h3>
            <br></br>
            <h3>ID: { idPersonagem }</h3>
            <h3>Nome: { character?.name }</h3>
            <br></br>
            <img src={ character?.imageUrl } width="500px"></img>
            <br></br>
            <a href="/home/1">Voltar para home</a>
        </div >

    );
}

export default CharacterDetail;