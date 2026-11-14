export type Lancamento = {
  id: number
  nome: string
  plataforma: string
  data: string
  imagem: string
}

export const lancamentos: Lancamento[] = [
  {
    id: 1,
    nome: 'GTA VI',
    plataforma: 'PS5 · Xbox Series',
    data: '19/11/2026',
    imagem: 'https://placehold.co/96x96/1e293b/a78bfa?text=GTA+VI',
  },
  {
    id: 2,
    nome: 'The Witcher 4',
    plataforma: 'PC · PS5 · Xbox Series',
    data: '2027',
    imagem: 'https://placehold.co/96x96/1e293b/a78bfa?text=Witcher+4',
  },
  {
    id: 3,
    nome: 'Intergalactic',
    plataforma: 'PS5',
    data: 'A definir',
    imagem: 'https://placehold.co/96x96/1e293b/a78bfa?text=Intergalactic',
  },
]
