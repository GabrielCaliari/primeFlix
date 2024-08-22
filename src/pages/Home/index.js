import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css';
import Slider from "react-slick";
import MovieCard from "../MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home ({title}) {
const [filmes, setFilmes] = useState([])

useEffect(() => {

  async function loadFilmes(){
    const response = await api.get("movie/top_rated", {
      params: {
        api_key: "41b1f3e2d5344c88f4603f16bab7a13d",
        language: "pt-BR",
        page: 1
      }
    })
      setFilmes(response.data.results.slice(0, 10))
  }
  loadFilmes()
}, [])

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


  return(
      <div className="listaFilmes">
        <h2>{title}</h2>
           <Slider {...settings}>
             {filmes.map((filme) => (
                <MovieCard key={filme.id} filme={filme}/>
                ))}
           </Slider>
      </div>
  )
}

export default Home
