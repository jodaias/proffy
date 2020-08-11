import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();


//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informção
//PUT: Atualizar uma informação existente
//DELETE: Deletar um informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.use(cors());
app.use(express.json());
app.use(routes);

//ouve requisições http na porta 3333
app.listen(3333);

