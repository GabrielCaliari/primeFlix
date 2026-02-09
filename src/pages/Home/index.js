import React from "react";
import ListFilmes from "../ListFilmes";

function Home() {
  return (
    <div className="home">
      <ListFilmes title="Melhor avaliação" fetchUrl="movie/top_rated" />
      <ListFilmes title="Em cartaz" fetchUrl="/movie/now_playing" />
      <ListFilmes title="Populares" fetchUrl="movie/popular" />
      <ListFilmes title="Em breve" fetchUrl="movie/upcoming" />
    </div>
  )
}


export default Home;

