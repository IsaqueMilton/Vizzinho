import fs from 'fs'
import path from 'path'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const data = req.body

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { error } = await supabase.from('access_requests').insert([{
      name: data.name, email: data.email, organization: data.organization, message: data.message
    }])
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  // fallback: save to local file (for dev)
  const outDir = path.join(process.cwd(), 'tmp')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const file = path.join(outDir, `${Date.now()}.json`)
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
  res.status(200).json({ ok: true, fallback: true })
}
