interface Contacts {
  id: number;
  title: string;
  type: string;

}

export const contactsList: Contacts[] = [
  {
    id: 1,
    title: '+7 999 123 45 67',
    type: 'tel'
  },
  {
    id: 2,
    title: 'hello@cyberia.studio',
    type: 'mailto'
  },
  {
    id: 3,
    title: 'ул.Ярных, д.35, оф.10',
    type: 'text'
  }
]