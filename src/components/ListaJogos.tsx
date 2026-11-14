import type { Jogo } from '../data/jogos'
import CardJogo from './CardJogo'

type ListaJogosProps = {
  jogos: Jogo[]
  favoritos: number[]
  onFavoritar: (id: number) => void
}

function ListaJogos({ jogos, favoritos, onFavoritar }: ListaJogosProps) {
  return (
    <div className="grade-jogos">
      {jogos.map((jogo) => (
        <CardJogo
          key={jogo.id}
          jogo={jogo}
          favorito={favoritos.includes(jogo.id)}
          onFavoritar={onFavoritar}
        />
      ))}
    </div>
  )
}

export default ListaJogos
