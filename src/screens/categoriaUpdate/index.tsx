import { useEffect, useState } from "react";
import { buscar } from "../../Service";
import { useParams } from "react-router-dom";
import Categoria from "../../models/categoria/Categoria";

export default function CategoriasUpdate() {
  const { id } = useParams<{ id: string }>(); // Obtém o parâmetro 'id' da URL
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  async function fetchCategoria() {
    try {
      const data = await buscar(`/categorias/${id}`);
      setCategoria(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategoria();
  }, [id]);

  if (!categoria) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Categoria</h1>
      <form>
        <label>Nome:</label>
        <input type="text" value={categoria.nome} />
        <br />
        <label>Descrição:</label>
        <input type="text" value={categoria.descricao} />
        <br />
        <button>Salvar</button>
      </form>
    </div>
  );
}
