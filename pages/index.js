import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Vizzinho — Modelos e ferramentas de IA</h1>
        <p className="text-lg text-gray-700 mb-8">
          Página institucional com downloads, docs e guias para desenvolvedores — inspirada no Llama.com.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/downloads"><a className="btn-primary">Downloads</a></Link>
          <Link href="/docs"><a className="px-6 py-3 border rounded-md">Docs</a></Link>
          <Link href="/request-access"><a className="px-6 py-3 border rounded-md">Request Access</a></Link>
        </div>

        <section className="mt-16 text-left">
          <h2 className="text-2xl font-bold mb-4">Model cards</h2>
          <p className="text-gray-700">Cada modelo tem sua página com parâmetros, instruções e links para download.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
