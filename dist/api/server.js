"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const uuid_1 = require("uuid");
const produto_entity_1 = __importDefault(require("../domain/produto/produto.entity"));
const produto_repository_1 = __importDefault(require("../domain/produto/produto.repository"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = 3000;
const produtoRepository = new produto_repository_1.default();
const basePath = '/api/produtos';
app.get(basePath, (reg, res) => {
    res.send(produtoRepository.buscarTodos());
});
app.post(basePath, (reg, res) => {
    const body = reg.body;
    const produto = new produto_entity_1.default((0, uuid_1.v4)(), body.nome, body.preco);
    produtoRepository.salvar(produto);
    res.status(201).send();
});
app.listen(port, () => {
    console.log('server on!');
});
