"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(aId, aNome, aValor) {
        this._id = aId;
        this._nome = aNome;
        this._preco = aValor;
        this.validar();
    }
    validar() {
        if (this._nome.length == 0) {
            throw new Error("Nome não pode ser em branco");
        }
        return true;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
}
exports.default = Produto;
