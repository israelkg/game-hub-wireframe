import './App.css'

function App() {
  return (
    <>
      {/* Cabeçalho */}
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

      <main className="container">
        {/* Jogo em destaque */}
        <section className="destaque">
          <img
            className="destaque-imagem"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg"
            alt="Elden Ring"
          />
          <div className="destaque-conteudo">
            <p className="destaque-tag">Jogo em destaque</p>
            <h1 className="destaque-titulo">Elden Ring</h1>
            <p className="destaque-descricao">
              Explore as Terras Intermédias em um RPG de ação com mundo aberto e chefes desafiadores.
            </p>
            <a className="botao" href="#jogos">Ver mais</a>
          </div>
        </section>

        <div className="conteudo">
          {/* Listagem principal: jogos */}
          <section id="jogos" className="jogos">
            <h2 className="titulo-secao">Jogos</h2>

            <div className="filtros">
              <button className="filtro filtro-ativo">Todos</button>
              <button className="filtro">RPG</button>
              <button className="filtro">Ação</button>
              <button className="filtro">Corrida</button>
              <button className="filtro">Aventura</button>
              <button className="filtro">Esporte</button>
            </div>

            <div className="grade-jogos">
              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg" alt="Elden Ring" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Elden Ring</h3>
                  <p className="card-jogo-detalhes">RPG · 2022</p>
                  <p className="card-jogo-nota">★ 9.5</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg" alt="Baldur's Gate 3" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Baldur's Gate 3</h3>
                  <p className="card-jogo-detalhes">RPG · 2023</p>
                  <p className="card-jogo-nota">★ 9.6</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg" alt="The Witcher 3: Wild Hunt" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">The Witcher 3: Wild Hunt</h3>
                  <p className="card-jogo-detalhes">RPG · 2015</p>
                  <p className="card-jogo-nota">★ 9.3</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg" alt="Red Dead Redemption 2" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Red Dead Redemption 2</h3>
                  <p className="card-jogo-detalhes">Aventura · 2018</p>
                  <p className="card-jogo-nota">★ 9.7</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg" alt="Hollow Knight" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Hollow Knight</h3>
                  <p className="card-jogo-detalhes">Aventura · 2017</p>
                  <p className="card-jogo-nota">★ 9.0</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg" alt="God of War" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">God of War</h3>
                  <p className="card-jogo-detalhes">Ação · 2018</p>
                  <p className="card-jogo-nota">★ 9.4</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg" alt="Hades" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Hades</h3>
                  <p className="card-jogo-detalhes">Ação · 2020</p>
                  <p className="card-jogo-nota">★ 9.2</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg" alt="Cyberpunk 2077" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Cyberpunk 2077</h3>
                  <p className="card-jogo-detalhes">Ação · 2020</p>
                  <p className="card-jogo-nota">★ 8.6</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg" alt="Forza Horizon 5" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Forza Horizon 5</h3>
                  <p className="card-jogo-detalhes">Corrida · 2021</p>
                  <p className="card-jogo-nota">★ 9.2</p>
                </div>
              </article>

              <article className="card-jogo">
                <div className="card-jogo-capa">
                  <img className="card-jogo-imagem" src="https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg" alt="Rocket League" />
                  <button className="botao-favoritar">♡</button>
                </div>
                <div className="card-jogo-info">
                  <h3 className="card-jogo-nome">Rocket League</h3>
                  <p className="card-jogo-detalhes">Esporte · 2015</p>
                  <p className="card-jogo-nota">★ 8.7</p>
                </div>
              </article>
            </div>
          </section>

          {/* Listagem secundária: próximos lançamentos */}
          <section id="lancamentos" className="lancamentos">
            <h2 className="titulo-secao">Próximos lançamentos</h2>

            <ul className="lista-lancamentos">
              <li className="item-lancamento">
                <img className="item-lancamento-imagem" src="https://placehold.co/96x96/1e293b/a78bfa?text=GTA+VI" alt="GTA VI" />
                <div className="item-lancamento-info">
                  <div>
                    <h3 className="item-lancamento-nome">GTA VI</h3>
                    <p className="item-lancamento-plataforma">PS5 · Xbox Series</p>
                  </div>
                  <span className="item-lancamento-data">19/11/2026</span>
                </div>
              </li>

              <li className="item-lancamento">
                <img className="item-lancamento-imagem" src="https://placehold.co/96x96/1e293b/a78bfa?text=Witcher+4" alt="The Witcher 4" />
                <div className="item-lancamento-info">
                  <div>
                    <h3 className="item-lancamento-nome">The Witcher 4</h3>
                    <p className="item-lancamento-plataforma">PC · PS5 · Xbox Series</p>
                  </div>
                  <span className="item-lancamento-data">2027</span>
                </div>
              </li>

              <li className="item-lancamento">
                <img className="item-lancamento-imagem" src="https://placehold.co/96x96/1e293b/a78bfa?text=Intergalactic" alt="Intergalactic" />
                <div className="item-lancamento-info">
                  <div>
                    <h3 className="item-lancamento-nome">Intergalactic</h3>
                    <p className="item-lancamento-plataforma">PS5</p>
                  </div>
                  <span className="item-lancamento-data">A definir</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer id="sobre" className="rodape">
        <div className="container rodape-conteudo">
          <p>© 2026 GameHub · Catálogo de jogos</p>
          <div className="rodape-links">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
