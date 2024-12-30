interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Book Assistant',
    description: `Help you find Bible versers using voice capture.`,
    href: 'https://verse.suns-online.com/',
  },
  {
    title: 'Nuxt-Tailwind Starter Blog',
    description: `A port of Nextjs-Tailwind Starter Blog. Built with Next.js, Tailwind CSS.`,
    href: 'https://github.com/ooasis/tailwind-nuxtjs-starter-blog',
  },
]

export default projectsData
