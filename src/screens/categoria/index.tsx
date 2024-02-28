import { useEffect, useState } from "react";
import { buscar } from "../../Service";
import Categoria from "../../models/categoria/Categoria";
import "./style.css";
import { Link } from "react-router-dom";

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria | null>(null);

  async function list() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    list();
  }, []);

  function handleEditar(categoria: Categoria) {
    setCategoriaSelecionada(categoria);
  }

  return (
    <div className="containerCard">
      {categorias.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "20rem", height: "10rem" }}
        >
          <h2 className="card-title">{item.nome}</h2>
          <p className="card-content">{item.descricao}</p>
          <div className="card-buttons">
            <Link to={`/categoria/${item.id}`}>
              {/* Passando a categoria selecionada para a função handleEditar */}
              <button onClick={() => handleEditar(item)}>Editar</button>
            </Link>
            <button>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
