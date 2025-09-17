import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RequestAccess(){
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' })

  async function handleSubmit(e){
    e.preventDefault()
    const res = await fetch('/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) setSent(true)
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Request Access</h1>
        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input className="w-full p-3 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="w-full p-3 border rounded" placeholder="Organization" value={form.organization} onChange={e=>setForm({...form, organization:e.target.value})} />
            <textarea className="w-full p-3 border rounded" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
            <button className="btn-primary" type="submit">Request access</button>
          </form>
        ) : (
          <div className="p-4 bg-green-50 border rounded">Thanks — your request was submitted.</div>
        )}
      </main>
      <Footer />
    </>
  )
}
