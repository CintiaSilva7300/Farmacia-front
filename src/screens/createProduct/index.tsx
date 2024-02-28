import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export default function CreateProduct() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [foto, setFoto] = useState("");
  const [categoriaNome, setCategoriaNome] = useState("");
  const [categoriaDescricao, setCategoriaDescricao] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Função para buscar as categorias da API
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(
          "https://farmaciaapi-0496.onrender.com/categorias"
        );
        setCategorias(response.data);
        console.log("Categorias:", categorias);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      // Encontrar o objeto completo da categoria com base no nome selecionado
      const categoriaSelecionada = categorias.find(
        (cat) => cat.nome === categoriaNome
      );

      // Verificar se a categoria foi encontrada
      if (!categoriaSelecionada) {
        console.error("Categoria selecionada não encontrada");
        return;
      }

      // Enviar os dados para a API
      const response = await axios.post(
        "https://farmaciaapi-0496.onrender.com/produtos",
        {
          nome,
          descricao,
          laboratorio,
          preco,
          quantidade,
          foto,
          categoria: categoriaSelecionada, // Enviar o objeto completo da categoria
        }
      );

      console.log("Produto cadastrado com sucesso!");
      console.log("Dados do produto cadastrado:", response.data);

      // Limpar os campos do formulário após o cadastro
      setNome("");
      setDescricao("");
      setLaboratorio("");
      setPreco("");
      setQuantidade("");
      setFoto("");
      setCategoriaNome("");
      setCategoriaDescricao("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 style={{ fontSize: 30 }}>Cadastrar Produto</h1>
          <form className="form" id="cadastroForm" onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <label>Laboratório:</label>
            <input
              type="text"
              id="laboratorio"
              name="laboratorio"
              value={laboratorio}
              onChange={(e) => setLaboratorio(e.target.value)}
            />

            <label>Preço:</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />

            <label>Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <label>Foto:</label>
            <input
              type="text"
              id="foto"
              name="foto"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />

            {/* <label>Nome da Categoria:</label>

            <input
              type="text"
              id="categoriaNome"
              name="categoriaNome"
              value={categoriaNome}
              onChange={(e) => setCategoriaNome(e.target.value)}
            />

            <label>Descrição da Categoria:</label>
            <input
              type="text"
              id="categoriaDescricao"
              name="categoriaDescricao"
              value={categoriaDescricao}
              onChange={(e) => setCategoriaDescricao(e.target.value)}
            /> */}

            <label>Categoria:</label>
            <select
              value={categoriaNome}
              onChange={(e) => setCategoriaNome(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </option>
              ))}
            </select>
            <br />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
