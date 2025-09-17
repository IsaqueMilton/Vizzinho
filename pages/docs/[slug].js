import fs from 'fs'
import path from 'path'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'

export default function DocPage({ source }) {
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
  const docsDir = path.join(process.cwd(), 'content', 'docs')
  const files = fs.readdirSync(docsDir)
  const paths = files.filter(f => f.endsWith('.mdx')).map(f => ({ params: { slug: f.replace(/\.mdx$/, '') }}))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const docsDir = path.join(process.cwd(), 'content', 'docs')
  const filePath = path.join(docsDir, params.slug + '.mdx')
  const sourceRaw = fs.readFileSync(filePath, 'utf8')
  const mdxSource = await serialize(sourceRaw, { mdxOptions: { remarkPlugins: [remarkGfm] } })
  return { props: { source: mdxSource } }
}
