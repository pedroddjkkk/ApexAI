import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function HomeTopNav() {

  const [openNav, setOpenNav] = useState(false)

  return (
    <div className='flex flex-row justify-between items-center py-4 bg-[#f0f0f381] backdrop-blur-md fixed lg:w-2/3 w-11/12 px-4'>
      <div className="h-[66px] w-[250px]" style={{
        backgroundImage: "url('https://cdn.discordapp.com/attachments/1048010244795678771/1169737777072590969/AIPEX_LOGO_light.png?ex=65567e32&is=65440932&hm=c5661bf76a5eefe78815e6821382ada234a600cf63469015c12599c68a586890&')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} />
      <div className='flex gap-8 font-semibold text-neutrals-500'>
        <Link href="/">
          Preços
        </Link>
        <Link href="/">
          Sobre
        </Link>
        <div className='flex gap-1'>
          <span>
            Mais
          </span>
          <div onClick={() => { setOpenNav(!openNav) }} className='justify-center items-center flex p-1' >
            {openNav ? <FaChevronDown /> :
              <FaChevronUp />}
          </div>
        </div>
      </div>
      <div className='flex gap-3'>
        <Button className='rounded-full bg-white text-neutrals-500 hover:bg-primary-500/10'>
          Entrar
        </Button>
        <Button className='rounded-full bg-primary-500 hover:bg-secondary-500'>
          Cadastrar
        </Button>
      </div>
    </div>
  )
}