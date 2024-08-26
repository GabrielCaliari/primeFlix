import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./favoritos.css"
import { toast } from "react-toastify";

function Favoritos ({filme}) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);

  }, [])

  function excluirFilme(id){
      const filtroFilmes = filmes.filter((item) => {
          return (item.id !== id);
      })

      setFilmes(filtroFilmes);
      localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
      toast.success("Filme removido com sucesso!")
  }

  return(
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo...</span>}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}
                style={{ width: '300px', height: '200px', objectFit: 'contain', borderRadius: '10px', marginRight: '10px', objectPosition: 'center' }}
                />
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`} style={{ marginRight: '20px' }}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)} >Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos
