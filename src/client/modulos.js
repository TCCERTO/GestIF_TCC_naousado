const modulos = [
  {
    id: 'csti',
    name: 'CSTI',
    color: '#222',
    menu: [
      {
        text: 'Início',
        href: '/csti',
        icon: 'fa fa-home'
      },
      {
        text: 'Reports',
        href: '/csti/reports',
        icon: 'fa fa-clipboard'
      },
      {
        text: 'Administração',
        icon: 'fa fa-cog',
        submenu: [
          {
            text: 'Usuários',
            href: '/csti/usuarios',
            icon: 'fa fa-id-card'
          },
          {
            text: 'Logs',
            href: '/csti/logs',
            icon: 'fa fa-list'
          },
          {
            text: 'Sobre',
            href: '/sobre',
            icon: 'fa fa-info'
          }
        ]
      }
    ]
  },
  {
    id: 'direcao',
    name: 'Direção',
    color: '#00abc9',
    menu: [
      {
        text: 'Início',
        href: '/direcao',
        icon: 'fa fa-home'
      }
    ]
  },
  {
    id: 'cotp',
    name: 'COTP',
    color: '#1CC43A',
    menu: [
      {
        text: 'Início',
        href: '/cotp',
        icon: 'fa fa-home'
      },
      {
        text: 'Dependências',
        href: '/cotp/dependencias',
        icon: 'fa fa-address-card'
      },
      {
        text: 'Monitorias',
        href: '/cotp/monitorias',
        icon: 'fa fa-book'
      }
    ]
  }
]

export default modulos
