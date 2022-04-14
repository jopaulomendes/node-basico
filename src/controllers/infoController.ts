import { Request, Response } from 'express';

let user = {
    nome: 'João Paulo da Mata Mendes'
}

export const contato = (req: Request, res: Response) => {
    res.render('paginas/contato', {
        user
    });    
}

export const sobre = (req: Request, res: Response) => {
    res.render('paginas/contato', {
        user
    });    
}