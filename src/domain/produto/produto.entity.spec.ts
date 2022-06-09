import Produto from './produto.entity'
import{v4 as uuid} from "uuid"



describe('teste da entidade do produto ', () => {
    it('criar produto e validar ',  ()  => {
 const esperarId = uuid()
 const esperarNome = "produto 1"
 const esperarValor = 10.00
 const produto = new Produto(
     esperarId,
     esperarNome,
     esperarValor,
 )
 expect(produto.id).toBe(esperarId)
 expect(produto.nome).toBe(esperarNome)
 expect(produto.preco).toBe(esperarValor)

        // it("deve retornar erro se o nome em branco") {
        //     //
        // })
    })
});