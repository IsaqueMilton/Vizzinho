export default function Footer(){
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Vizzinho — built with ❤️
      </div>
    </footer>
  )
}
