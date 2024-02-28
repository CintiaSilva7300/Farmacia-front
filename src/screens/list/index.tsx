import { useEffect, useState } from "react";
import Produto from "../../models/produto/Produto";
import "./style.css";
import { buscar } from "../../Service";

export function List() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function list() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    list();
    console.log(produtos);
  }, [produtos.length]);

  return (
    <>
      <div className="containerCard">
        {produtos.map((item) => (
          <div className="card" style={{ width: "15rem", height: "20rem" }}>
            <h2 className="card-title">{item.nome}</h2>
            <p className="card-content">{item.descricao}</p>
            <p className="card-content">{item.laboratorio}</p>
            <p className="card-content">{item.preco} R$ </p>
            <p className="card-content">
              Disponiveis: {item.quantidade} unidades
            </p>

            <img src={item.foto} alt="" width={100} height={100} />

            <p className="card-content">Categoria: {item.categoria?.nome}</p>
            <p className="card-content">
              Categoria: {item.categoria?.descricao}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
