function Destaque() {
  return (
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
  )
}

export default Destaque
