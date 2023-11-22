import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <nav className="
      w-full bg-white text-red-600 flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to='/' className='hover:underline font-bold'>Farmácia</Link>
        <div className="flex gap-4">
          <Link to='/postagens' className='hover:underline'>Produtos</Link>
          <Link to='/temas' className='hover:underline'>Categorias</Link>
          <Link to='/perfil' className='hover:underline'>Minha conta</Link>
          <Link to='' className='hover:underline'>Sair</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar