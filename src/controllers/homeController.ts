import { Produto } from './../models/Produto';
import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    
    let user = {
        nome: 'João Paulo da Mata Mendes'
    }
    let idade: number = 17;
    let mostrarIdade: boolean = false;

    if (idade >= 18) {
        mostrarIdade = true;
    }

    let list = Produto.getAll();
    let listProcutosCaro = Produto.getPrecoMaior(15);
    let listProdutosBarato = Produto.getPrecoMenor(10);

    res.render('paginas/home', {
        user,
        idade,
        mostrarIdade,
        produtos: list,
        caros: listProcutosCaro,
        baratos: listProdutosBarato,
        frases:[
            'Bom dia, flor do dia',
            'Tenha um excelente dia'
        ]
    });
};