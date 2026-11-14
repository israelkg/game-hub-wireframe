import type { Jogo } from '../data/jogos'

type CardJogoProps = {
  jogo: Jogo
  favorito: boolean
  onFavoritar: (id: number) => void
}

function CardJogo({ jogo, favorito, onFavoritar }: CardJogoProps) {
  return (
    <article className="card-jogo">
      <div className="card-jogo-capa">
        <img className="card-jogo-imagem" src={jogo.imagem} alt={jogo.nome} />
        <button
          className={favorito ? 'botao-favoritar botao-favoritar-ativo' : 'botao-favoritar'}
          onClick={() => onFavoritar(jogo.id)}
        >
          {favorito ? '♥' : '♡'}
        </button>
      </div>
      <div className="card-jogo-info">
        <h3 className="card-jogo-nome">{jogo.nome}</h3>
        <p className="card-jogo-detalhes">{jogo.genero} · {jogo.ano}</p>
        <p className="card-jogo-nota">★ {jogo.nota.toFixed(1)}</p>
      </div>
    </article>
  )
}

export default CardJogo
