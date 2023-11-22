import Button from "../../components/button/Button"

function Home() {
  return (
    <>
            <div className="bg-red-100 flex justify-center flex-grow min-[50vh]:">
                <div className="container grid grid-cols-2 text-red-600">
                    <div className="flex flex-col gap-4 items-left justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-xl">Nossa farmácia irá lhe ajudar a econtrar o seu medicamento com os melhores preços</p>
                        <div className="flex justify-left gap-4">
                            <Button category="primary">                              
                                Conheça nossos produtos
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img 
                            src="https://i.imgur.com/t8g6zMW.png" 
                            alt="Imagem da Página Home" 
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Home