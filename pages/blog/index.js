import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function Blog({ posts }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {posts.map(p => (
            <li key={p.slug}>
              <Link href={'/blog/' + p.slug}><a className="text-blue-600">{p.title}</a></Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.mdx')) : []
  const posts = files.map(f => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8')
    const titleLine = raw.split('\n').find(l => l.startsWith('# ')) || 'Untitled'
    return { slug: f.replace(/\.mdx$/, ''), title: titleLine.replace('# ', '') }
  })
  return { props: { posts } }
}
