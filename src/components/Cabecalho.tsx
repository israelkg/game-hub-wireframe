function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <div className="logo">
          <span className="logo-icone">GH</span>
          <span>GameHub</span>
        </div>

        <nav className="menu">
          <a href="#jogos">Jogos</a>
          <a href="#lancamentos">Lançamentos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <button className="botao-menu">☰</button>
      </div>
    </header>
  )
}

export default Cabecalho
