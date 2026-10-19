export type Project = {
  id: string
  title: string
  kind: string
  summary: string
  description: string
  highlights: string[]
  tags: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'historicke-mapy',
    image: '/project-images/detekce-img.png',
    title: 'Detekce objektů v historických mapách',
    kind: 'Bakalářská práce',
    summary: 'Detekce a klasifikace objektů v historických mapách.',
    description:
      'Bakalářská práce. Model hledá a třídí objekty na historických mapách.',
    highlights: ['Python a počítačové vidění', 'Detekce a klasifikace objektů'],
    tags: ['Python', 'Počítačové vidění'],
  },
  {
    id: 'umej-komin',
    title: 'Komíny',
    image: '/project-images/komin-img.png',
    kind: 'Provoz',
    summary: 'Evidence zakázek, plán part a revizní protokoly.',
    description:
      'Nástroj pro kominickou firmu. Vedoucí v něm plánuje práci, technik v terénu vidí dnešní zakázky, protokol o revizi se skládá do PDF a rok po kontrole odchází připomínka e-mailem.',
    highlights: [
      'Zákazníci, zakázky, fotky a archiv změn',
      'Týdenní plán po partách a mapa výjezdů',
      'PDF protokol a e-mail rok po kontrole',
      'React, Node a PostgreSQL na Cloud Run',
    ],
    tags: ['React', 'Node', 'PostgreSQL'],
  },
  {
    id: 'army-tabor',
    image: '/project-images/army-img.png',
    title: 'Army Tábor',
    kind: 'Web',
    summary: 'Web letního tábora s přihláškou a administrací.',
    description:
      'Veřejná stránka s programem a aktualitami, online přihláška, která odejde e-mailem organizátorce, a administrace pro texty, články a přehled přihlášek.',
    highlights: [
      'Úvod, informace o táboře a kontakt',
      'Přihláška s e-mailovou notifikací',
      'Admin pro obsah a seznam přihlášek',
    ],
    tags: ['Next.js', 'SQLite', 'TypeScript'],
    liveUrl: 'https://army-tabor.cz',
  },
  {
    id: 'kominictvi-web',
    image: '/project-images/komin-img.png',
    title: 'Kominictví Nácovský',
    kind: 'Web',
    summary: 'Prezentace rodinné firmy, ceník a poptávka.',
    description:
      'Jedna stránka, na které je vidět, co firma dělá, kolik to stojí a jak probíhá zakázka. Nezávazná poptávka je ve formuláři, nasazení běží na Vercelu.',
    highlights: [
      'Služby, ceník a postup práce',
      'Poptávka bez přechodu na jiný web',
      'Responzivní layout na Vercelu',
    ],
    tags: ['React', 'TypeScript', 'Vite'],
    liveUrl: 'https://kominictvi-web.vercel.app',
    githubUrl: 'https://github.com/jachymthegoat/kominictvi-web',
  },
  {
    id: 'blupikova-knihovna',
    image: '/project-images/blupik-img.png',
    title: 'Blupíkova Knihovna',
    kind: 'Aplikace',
    summary: 'Pixel-art knihovna, kterou po náměstí vodí Blupík.',
    description:
      'Tři domy na náměstí — Chci přečíst, Právě čtu a Přečtené. Blupík dojde ke dveřím nebo po žebříku ke knize, než se otevře detail. Knihy zůstávají v prohlížeči, bez účtu a bez serveru.',
    highlights: [
      'Náměstí na celou obrazovku a interiér s poličkami',
      'Hřbet knihy má barvu a ornament podle křídla',
      'V křídle Právě čtu jsou nejvýš tři knihy',
      'Canvas pixel engine a ukládání do localStorage',
    ],
    tags: ['React', 'TypeScript', 'Canvas'],
    githubUrl: 'https://github.com/jachymthegoat/blupikova-knihovna',
  },
  {
    id: 'finance-tracker',
    image: '/project-images/finance-img.png',
    title: 'Finance Tracker',
    kind: 'Desktop',
    summary: 'Majetek, dluhy a čisté jmění na jedné ploše.',
    description:
      'Desktopová aplikace, která drží přehled jmění z dat na disku. Žádný účet, žádný cloud, čísla zůstávají v počítači.',
    highlights: [
      'Majetek, dluhy a čisté jmění',
      'Data se neodesílají ven z počítače',
      'Electron, bez registrace',
    ],
    tags: ['Electron', 'JavaScript'],
    githubUrl: 'https://github.com/jachymthegoat/Finance-Tracker',
  },
  {
    id: 'infernal',
    image: '/project-images/infernal-img.png',
    title: 'Infernal',
    kind: 'Hra',
    summary: 'Pixel-art hra z Ludum Dare, za tři dny ve třech.',
    description:
      'Průchod levely, boj s nepřáteli a obtížnost, která roste s postupem. Hru jsme složili tříčlenný tým během herního jamu v Pythonu a Pygame.',
    highlights: [
      'Ludum Dare, tři dny',
      'Levely, boj a rostoucí obtížnost',
      'Pixel-art a Pygame',
    ],
    tags: ['Python', 'Pygame'],
    githubUrl: 'https://github.com/jachymthegoat/Infernal',
  },
  {
    id: 'ufc-review',
    image: '/project-images/ufc-img.png',
    title: 'UFC Review',
    kind: 'Web',
    summary: 'Recenze zápasů na vlastním PHP frameworku.',
    description:
      'Portál, kde se hodnotí zápasy a zápasníci. Role, recenze i hlasování jedou přes vlastní MVC. Hlas se zapíše AJAXem, stránka se nenačítá znovu.',
    highlights: [
      'Vlastní MVC v PHP a MySQL',
      'Role a hodnocení zápasníků',
      'Hlasování bez reloadu stránky',
    ],
    tags: ['PHP', 'MySQL', 'MVC'],
    githubUrl: 'https://github.com/jachymthegoat/UFC-Review-Website',
  },
  {
    id: 'bigint-calculator',
    image: '/project-images/bigint-img.png',
    title: 'Bigint Calculator',
    kind: 'CLI',
    summary: 'Kalkulačka pro celá čísla bez horní hranice.',
    description:
      'Konzolový program v C. Číslo může být libovolně dlouhé, dá se převést mezi soustavami a aritmetický výraz v infixovém zápisu se vyhodnotí přímo v terminálu.',
    highlights: [
      'Celá čísla bez stropu typu',
      'Převody mezi číselnými soustavami',
      'Vyhodnocení infixového výrazu',
    ],
    tags: ['C', 'Algoritmy'],
    githubUrl: 'https://github.com/jachymthegoat/Bigint-Calculator',
  },
]
