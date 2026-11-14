import type { Lancamento } from '../data/lancamentos'

type ItemLancamentoProps = {
  lancamento: Lancamento
}

function ItemLancamento({ lancamento }: ItemLancamentoProps) {
  return (
    <li className="item-lancamento">
      <img className="item-lancamento-imagem" src={lancamento.imagem} alt={lancamento.nome} />
      <div className="item-lancamento-info">
        <div>
          <h3 className="item-lancamento-nome">{lancamento.nome}</h3>
          <p className="item-lancamento-plataforma">{lancamento.plataforma}</p>
        </div>
        <span className="item-lancamento-data">{lancamento.data}</span>
      </div>
    </li>
  )
}

export default ItemLancamento
