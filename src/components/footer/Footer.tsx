import { LinkedinLogo, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"

function Footer() {

  return (
    <footer className="flex justify-center bg-red-600 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Farmácia | Copyright: {}</p>
        <div className="flex gap-2 mt-4">
          <p className="text-lg">Acesse nossas redes sociais</p>
          <LinkedinLogo size={32} weight="bold" />
          <InstagramLogo size={32} weight="bold" />
          <FacebookLogo size={32} weight="bold" />
        </div>
      </div>
    </footer>
  )
}

export default Footer