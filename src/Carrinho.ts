import { Product, Produto } from "./Produto";

export class Carrinho {
  carrinho: Produto[];
  descontoCredito: number;
  descontoDebito: number;

  constructor() {
    this.carrinho = [];
    this.descontoCredito = 0.05;
    this.descontoDebito = 0.07;
  }
  adicionarProdutos(produto: Product) {
    this.carrinho.push(produto);
  }

  removerProduto(idProduto: number) {
    let produtoEncontrado = this.carrinho.filter((produto) => {
      return produto.id !== idProduto;
    });

    if (!produtoEncontrado) {
      return `Produto nao encontrado`;
    }

    this.carrinho = produtoEncontrado;
    return `Produto removido`;
  }

  alterarQuantidade(idProduto: number, quantidade: number) {
    this.carrinho.forEach((produto) => {
      if (produto.id === idProduto) {
        produto.quantidade = quantidade;
        return `Quantidade do produto ${produto.descricao} alterado para ${produto.quantidade}`;
      }

      return `Produto nao encontrado`;
    });
  }

  imprimirCarrinho() {
    return this.carrinho;
  }

  finalizarPedido(formaPagamento: "Debito" | " Credito") {
    let valorTotal: number = 0;
    for (const produto of this.carrinho) {
      valorTotal += produto.valor * produto.quantidade;
    }

    if (formaPagamento === " Credito") {
      valorTotal > 100
        ? (valorTotal -= valorTotal * this.descontoCredito)
        : valorTotal;
      return `Pedido Finalizado. Total R$ ${valorTotal.toFixed(2)}`;
    }

    valorTotal -= valorTotal * this.descontoDebito;
    return `Pedido Finalizado. Total R$ ${valorTotal.toFixed(2)}`;
  }
}
