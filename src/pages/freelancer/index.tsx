import { Card, WrapperCards } from '@styles/pages/freelancer'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Project {
  id: number
  title: string
  image: string
  link: string
}

export default function Freelancer() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    ;(async function () {
      const response = await fetch('http://localhost:3004/projects').then(posts => posts.json())

      setProjects(response)
    })()
  }, [])

  return (
    <>
      <h1>Freelancer</h1>
      <p>Projetos pessoais e freelas</p>
      <WrapperCards>
        {projects.length &&
          projects.map((project: Project) => {
            return (
              <Card key={project.id}>
                <Link href={project.link}>
                  <a>
                    <figure>
                      <img src={project.image} alt={project.title} />
                    </figure>
                    <h2>{project.title}</h2>
                  </a>
                </Link>
              </Card>
            )
          })}
      </WrapperCards>
    </>
  )
}
