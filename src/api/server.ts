import express, {Express, Request, Response}  from "express";
import bodyParser, { BodyParser } from "body-parser";
import { v4 as uuid} from 'uuid'
import Produto from "../domain/produto/produto.entity";
import ProdutoRepository from "../domain/produto/produto.repository";

const app: Express = express()
app.use(bodyParser.json())
const port = 3000;

const produtoRepository = new ProdutoRepository();
const basePath = '/api/produtos'
app.get(basePath, (reg: Request, res: Response) => {
    res.send(produtoRepository.buscarTodos())

})

app.post(basePath, (reg: Request, res: Response) => {
    const body = reg.body as Produto
    const produto = new Produto(uuid(), body.nome, body.preco)
    produtoRepository.salvar(produto)
    res.status(201).send()
})
app.listen(port, () => {
    console.log('server on!')
})
