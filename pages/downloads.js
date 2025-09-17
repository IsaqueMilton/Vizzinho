import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const SAMPLE_MODELS = [
  { id: 'v1', name: 'Vizzinho-Base-7B', size: '13.4 GB', desc: 'Modelo base para tarefas gerais' },
  { id: 'v1-ll', name: 'Vizzinho-Lite-3B', size: '6.1 GB', desc: 'Mais rápido, menos memória' },
]

export default function Downloads(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Downloads</h1>
        <div className="grid gap-4">
          {SAMPLE_MODELS.map(m => (
            <div key={m.id} className="p-4 border rounded-md flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="px-4 py-2 border rounded">Details</a>
                <a href="#" className="btn-primary">Download</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
