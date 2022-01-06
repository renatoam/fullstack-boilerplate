import Link from 'next/link'

export default function LearningFromMe() {
  return (
    <main>
      <h1>Aprendendo de mim</h1>
      <nav>
        <ul>
          <Link href="/learning/learning-from-me/forms">
            <a>
              <li>Forms</li>
            </a>
          </Link>
        </ul>
      </nav>
    </main>
  )
}
