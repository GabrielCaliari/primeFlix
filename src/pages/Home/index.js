import React from "react";
import ListFilmes from "../ListFilmes";

function Home() {
  return (
    <div>
      <ListFilmes title="Melhor avaliação" fetchUrl="movie/top_rated" style={{ margin: '100px' }}/>
      <ListFilmes title="Mais assistidos" fetchUrl="/movie/now_playing"/>
      <ListFilmes title="Populares" fetchUrl="movie/popular"/>
      <ListFilmes title="Em breve" fetchUrl="movie/upcoming"/>
    </div>
  )
}


export default Home;

