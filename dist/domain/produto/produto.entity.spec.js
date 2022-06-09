"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_entity_1 = __importDefault(require("./produto.entity"));
const uuid_1 = require("uuid");
describe('teste da entidade do produto ', () => {
    it('criar produto e validar ', () => {
        const esperarId = (0, uuid_1.v4)();
        const esperarNome = "produto 1";
        const esperarValor = 10.00;
        const produto = new produto_entity_1.default(esperarId, esperarNome, esperarValor);
        expect(produto.id).toBe(esperarId);
        expect(produto.nome).toBe(esperarNome);
        expect(produto.preco).toBe(esperarValor);
        // it("deve retornar erro se o nome em branco") {
        //     //
        // })
    });
});
