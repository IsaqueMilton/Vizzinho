import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 border-b">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/"><a className="text-xl font-bold">Vizzinho</a></Link>
        <nav className="flex gap-4 items-center">
          <Link href="/downloads"><a>Downloads</a></Link>
          <Link href="/docs"><a>Docs</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/request-access"><a className="btn-primary">Request Access</a></Link>
        </nav>
      </div>
    </header>
  )
}
