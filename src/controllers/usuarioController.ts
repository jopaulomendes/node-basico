import { Request, Response } from 'express';

let user = {
    nome: 'João Paulo da Mata Mendes'
}

export const nome = (req: Request, res: Response) => {
    let usuario: string = req.query.usuario as string;
    let idade: string = req.query.idade as string;

    res.render('paginas/nome', {
        user,
        usuario,
        idade
    });
}

export const idadeForm = (req: Request, res: Response) => {
    res.render('paginas/idade', {
        user
    });
}

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if (req.body.ano) {
        let anoNasc: number = parseInt(req.body.ano as string);    
        let anoAtual: number = new Date().getFullYear(); 
        idade = anoAtual - anoNasc;
        mostrarIdade = true;
    }
    res.render('paginas/idade', {
        user,
        idade,
        mostrarIdade
    });
}