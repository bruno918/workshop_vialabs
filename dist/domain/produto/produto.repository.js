"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockDados = [];
class ProdutoRepository {
    salvar(produto) {
        mockDados.push(produto);
    }
    buscarTodos() {
        return mockDados;
    }
}
exports.default = ProdutoRepository;
