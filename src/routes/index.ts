import { contato, sobre } from './../controllers/infoController';
import { home } from '../controllers/homeController';
import { Router } from 'express';
import { idadeAction, idadeForm, nome } from '../controllers/usuarioController';

const router = Router();

let user = {
    nome: 'João Paulo da Mata Mendes'
}

router.get('/', home);

router.get('/contato', contato);
router.get('/sobre', sobre);

router.get('/nome', nome);
router.get('/idade', idadeForm);
router.post('/idade-resultado', idadeAction);

export default router;