type FiltrosProps = {
  generos: string[]
  generoSelecionado: string
  onSelecionar: (genero: string) => void
}

function Filtros({ generos, generoSelecionado, onSelecionar }: FiltrosProps) {
  return (
    <div className="filtros">
      {generos.map((genero) => (
        <button
          key={genero}
          className={genero === generoSelecionado ? 'filtro filtro-ativo' : 'filtro'}
          onClick={() => onSelecionar(genero)}
        >
          {genero}
        </button>
      ))}
    </div>
  )
}

export default Filtros
