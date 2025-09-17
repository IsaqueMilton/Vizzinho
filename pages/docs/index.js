import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function DocsIndex() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Docs</h1>
        <p className="text-gray-700 mb-6">Documentation and guides. Example docs below.</p>

        <ul className="space-y-3">
          <li><Link href="/docs/getting-started"><a className="text-blue-600">Getting started</a></Link></li>
          <li><Link href="/docs/model-card"><a className="text-blue-600">Model card</a></Link></li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
