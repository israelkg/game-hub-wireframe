import type { Lancamento } from '../data/lancamentos'
import ItemLancamento from './ItemLancamento'

type ListaLancamentosProps = {
  lancamentos: Lancamento[]
}

function ListaLancamentos({ lancamentos }: ListaLancamentosProps) {
  return (
    <section id="lancamentos" className="lancamentos">
      <h2 className="titulo-secao">Próximos lançamentos</h2>

      <ul className="lista-lancamentos">
        {lancamentos.map((lancamento) => (
          <ItemLancamento key={lancamento.id} lancamento={lancamento} />
        ))}
      </ul>
    </section>
  )
}

export default ListaLancamentos
