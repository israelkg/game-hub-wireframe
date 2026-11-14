export type Jogo = {
  id: number
  nome: string
  genero: string
  ano: number
  nota: number
  imagem: string
}

export const generos = ['Todos', 'RPG', 'Ação', 'Corrida', 'Aventura', 'Esporte']

export const jogos: Jogo[] = [
  {
    id: 1,
    nome: 'Elden Ring',
    genero: 'RPG',
    ano: 2022,
    nota: 9.5,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
  },
  {
    id: 2,
    nome: "Baldur's Gate 3",
    genero: 'RPG',
    ano: 2023,
    nota: 9.6,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
  },
  {
    id: 3,
    nome: 'The Witcher 3: Wild Hunt',
    genero: 'RPG',
    ano: 2015,
    nota: 9.3,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
  },
  {
    id: 4,
    nome: 'Red Dead Redemption 2',
    genero: 'Aventura',
    ano: 2018,
    nota: 9.7,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
  },
  {
    id: 5,
    nome: 'Hollow Knight',
    genero: 'Aventura',
    ano: 2017,
    nota: 9.0,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg',
  },
  {
    id: 6,
    nome: 'God of War',
    genero: 'Ação',
    ano: 2018,
    nota: 9.4,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
  },
  {
    id: 7,
    nome: 'Hades',
    genero: 'Ação',
    ano: 2020,
    nota: 9.2,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
  },
  {
    id: 8,
    nome: 'Cyberpunk 2077',
    genero: 'Ação',
    ano: 2020,
    nota: 8.6,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
  },
  {
    id: 9,
    nome: 'Forza Horizon 5',
    genero: 'Corrida',
    ano: 2021,
    nota: 9.2,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
  },
  {
    id: 10,
    nome: 'Rocket League',
    genero: 'Esporte',
    ano: 2015,
    nota: 8.7,
    imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
  },
]
