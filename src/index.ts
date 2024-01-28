import { Carrinho } from "./Carrinho";
import { Produto } from "./Produto";

const produto1 = new Produto({
  id: 1,
  descricao: "Camisa Preta",
  categoria: "Roupa",
  quantidade: 2,
  valor: 190,
});

const produto2 = new Produto({
  id: 2,
  descricao: "Short Praia",
  categoria: "Roupa",
  quantidade: 3,
  valor: 50,
});

const produto3 = new Produto({
  id: 3,
  descricao: "Capa de Celular",
  categoria: "Informatica",
  quantidade: 1,
  valor: 20,
});

const produto4 = new Produto({
  id: 4,
  descricao: "Caneta",
  categoria: "Materias Escolares",
  quantidade: 1,
  valor: 50,
});

const carrinho = new Carrinho();

carrinho.adicionarProdutos(produto1);
carrinho.adicionarProdutos(produto2);
carrinho.adicionarProdutos(produto3);
carrinho.adicionarProdutos(produto4);

carrinho.alterarQuantidade(3, 2);

carrinho.removerProduto(4);

console.log(carrinho.imprimirCarrinho());

console.log(carrinho.finalizarPedido("Debito"));
