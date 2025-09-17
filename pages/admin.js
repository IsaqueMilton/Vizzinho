import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Admin(){
  const [requests, setRequests] = useState([])
  const [auth, setAuth] = useState(false)
  const [pass, setPass] = useState('')

  useEffect(()=> {
    const p = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    // nothing here: fetching requests requires Supabase; this page expects you to set ADMIN_PASSWORD in Vercel env
  }, [])

  async function login(e){
    e.preventDefault()
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) setAuth(true)
    else alert('wrong password (set NEXT_PUBLIC_ADMIN_PASSWORD in env to use)')
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Admin</h1>
        {!auth ? (
          <form onSubmit={login} className="space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Admin password" value={pass} onChange={e=>setPass(e.target.value)} />
            <button className="px-4 py-2 border rounded">Login</button>
          </form>
        ) : (
          <div>
            <p className="text-gray-700">If you configured Supabase, you can fetch and approve requests here (this template doesn't include full approval workflow).</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
