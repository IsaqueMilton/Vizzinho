import fs from 'fs'
import path from 'path'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'

export default function BlogPost({ source }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.mdx')) : []
  const paths = files.map(f => ({ params: { slug: f.replace(/\.mdx$/, '') }}))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const filePath = path.join(dir, params.slug + '.mdx')
  const raw = fs.readFileSync(filePath, 'utf8')
  const mdxSource = await serialize(raw, { mdxOptions: { remarkPlugins: [remarkGfm] } })
  return { props: { source: mdxSource } }
}
