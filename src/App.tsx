import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Filtros from './components/Filtros'
import ListaJogos from './components/ListaJogos'
import ListaLancamentos from './components/ListaLancamentos'
import Rodape from './components/Rodape'
import { generos, jogos } from './data/jogos'
import { lancamentos } from './data/lancamentos'

function App() {
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos')
  const [favoritos, setFavoritos] = useState<number[]>([])

  const jogosFiltrados =
    generoSelecionado === 'Todos'
      ? jogos
      : jogos.filter((jogo) => jogo.genero === generoSelecionado)

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <>
      <Cabecalho />

      <main className="container">
        <Destaque />

        <div className="conteudo">
          <section id="jogos" className="jogos">
            <h2 className="titulo-secao">Jogos</h2>
            <Filtros
              generos={generos}
              generoSelecionado={generoSelecionado}
              onSelecionar={setGeneroSelecionado}
            />
            <ListaJogos
              jogos={jogosFiltrados}
              favoritos={favoritos}
              onFavoritar={alternarFavorito}
            />
          </section>

          <ListaLancamentos lancamentos={lancamentos} />
        </div>
      </main>

      <Rodape />
    </>
  )
}

export default App
