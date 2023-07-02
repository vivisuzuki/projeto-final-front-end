import './NumberPages.css'
import { useEffect, useState } from "react";

const NumberPages = ({ info, paginaAtual }) => {
    const [anterior, setAnterior] = useState();
    const [proximo, setProximo] = useState();
    const [ultimo, setUltimo] = useState();

    const paginacao = () => {
        const totalDePaginas = parseInt(info?.totalPages);
        setUltimo(totalDePaginas)

        let tmpAnterior = parseInt(paginaAtual) - 1;
        let tmpProximo = parseInt(paginaAtual) + 1;

        if (tmpAnterior <= 0) {
            tmpAnterior = parseInt(paginaAtual);
        }
        console.log(tmpProximo, totalDePaginas)
        if (parseInt(tmpProximo) > parseInt(totalDePaginas)) {
            tmpProximo = totalDePaginas;
        }
        setAnterior(tmpAnterior);
        setProximo(tmpProximo);
    };

    useEffect(() => {
        paginacao()
    }, [])

    return (
        <div className="containerPages">
            <br></br>
            <br></br>
            <a href={ `/home/1` }>Ir Para o Primeiro </a>
            <a href={ `/home/${anterior}` }>Anterior </a>
            <a href={ `/home/${proximo}` }>Próximo </a>
            <a href={ `/home/${ultimo}` }> Ir Para o Último</a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default NumberPages;