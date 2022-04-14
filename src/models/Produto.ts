type Produto = {
    titulo: string,
    preco: number
}

const data: Produto[] = [
    { titulo: 'Carne', preco: 45 },
    { titulo: 'Ovos', preco: 15 },
    { titulo: 'Feijão', preco: 10 },
    { titulo: 'Macarrão', preco: 5 },
    { titulo: 'Arroz', preco: 7.5 }
];

export const Produto = {
    getAll: (): Produto[] => {
        return data;
    },

    getPrecoMaior: (preco: number): Produto[] =>{
        return data.filter(item => item.preco >= preco);
    },

    getPrecoMenor: (preco: number): Produto[] =>{
        return data.filter(item => item.preco <= preco);
    }
};