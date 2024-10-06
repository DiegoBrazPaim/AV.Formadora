export interface Gasto {
    id: string;
    descricao: string;
    valor: number;
    tipo: 'despesa' | 'receita'; // Despesa ou Receita
    categoria: string;  // Exemplo: Alimentação, Transporte, etc.
    data: string;  // Data do gasto
  }
  