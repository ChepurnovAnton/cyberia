interface NavList {
  name: string;
  link: string;
  id: number;
}

export const navList: NavList[] = [
  { name: 'Агенство', link: '/agency', id: 1 },
  { name: 'Услуги', link: '/services', id: 2 },
  { name: 'Кейсы', link: '/cases', id: 3 },
  { name: 'Блог', link: '/blog', id: 4 },
  { name: 'Контакты', link: '/contacts', id: 5 }
]

