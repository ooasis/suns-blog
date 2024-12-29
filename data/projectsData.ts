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
]

export default projectsData
