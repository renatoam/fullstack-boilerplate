export const MENU_OPTIONS = [
  {
    id: '#001',
    label: 'Blog',
    link: '/blog'
  },
  {
    id: '#002',
    label: 'Sobre mim',
    link: '/about',
    sub: [
      {
        id: '#021',
        label: 'Experiência Profissional',
        link: '/background'
      },
      {
        id: '#022',
        label: 'Hobbies',
        link: '/hobbies'
      }
    ]
  },
  {
    id: '#003',
    label: 'Estudos',
    link: '/learning',
    sub: [
      {
        id: '#031',
        label: 'Aprendendo de mim',
        link: '/learning-from-me'
      },
      {
        id: '#032',
        label: 'Aprendendo Comigo',
        link: '/learning-with-me'
      },
      {
        id: '#033',
        label: 'Desafios e Testes',
        link: '/challenges'
      }
    ]
  },
  {
    id: '#004',
    label: 'Projetos',
    link: '/projects',
    sub: [
      {
        id: '#041',
        label: 'Freelancer',
        link: '/freelancer'
      },
      {
        id: '#042',
        label: 'Pessoais',
        link: '/pessoais'
      }
    ]
  },
  {
    id: '#005',
    label: 'Contratar',
    link: '/hire'
  }
]
