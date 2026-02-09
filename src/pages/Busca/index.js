import { useState } from "react";
import api from "../../services/api";
import MovieCard from "../MovieCard";
import "./busca.css";

function Busca() {
  const [query, setQuery] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);

  async function handleBuscar(e) {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setBuscou(true);
    try {
      const response = await api.get("/search/movie", {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY || "41b1f3e2d5344c88f4603f16bab7a13d",
          language: "pt-BR",
          query: query.trim(),
          page: 1,
        },
      });
      setFilmes((response.data.results || []).filter((f) => f.poster_path));
    } catch (err) {
      setFilmes([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="busca-page">
      <h1 className="busca-title">Buscar filmes</h1>
      <form className="busca-form" onSubmit={handleBuscar}>
        <input
          type="text"
          className="busca-input"
          placeholder="Digite o nome do filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="busca-btn" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {loading && (
        <div className="busca-loading">
          <div className="loading-spinner" />
          <p>Carregando resultados...</p>
        </div>
      )}

      {!loading && buscou && (
        <div className="busca-resultados">
          {filmes.length === 0 ? (
            <p className="busca-vazio">Nenhum filme encontrado para &quot;{query}&quot;</p>
          ) : (
            <>
              <p className="busca-count">{filmes.length} resultado(s)</p>
              <div className="busca-grid">
                {filmes.map((filme) => (
                  <MovieCard key={filme.id} filme={filme} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Busca;
