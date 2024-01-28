export type Product = {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  quantidade: number;
};

export class Produto {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  quantidade: number;

  constructor(produto: Product) {
    (this.id = produto.id),
      (this.descricao = produto.descricao),
      (this.categoria = produto.categoria),
      (this.valor = produto.valor),
      (this.quantidade = produto.quantidade);
  }
}
