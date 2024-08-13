import { useEffect, useState } from "react";
import api from "../../services/api";


function Home () {
const [filmes, setFilmes] = useState([])

useEffect(() => {

  async function loadFilmes(){
    const response = await api.get("movie/now_playing", {
      params: {
        api_key: "41b1f3e2d5344c88f4603f16bab7a13d",
        language: "pt-BR",
        page: 1
      }
    })
    console.log(response);
  } 
  loadFilmes()
}, [])

  return(
    <div>
      <h1>Bem vindo a home</h1>
    </div>
  )
}

export default Home