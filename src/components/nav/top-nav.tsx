import { Menu, Search } from 'lucide-react';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';

interface PropTypes {
  onMenu: () => void;
  menu: string | null | undefined;
}

export default function TopNav({ onMenu, menu }: PropTypes) {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-full lg:w-[calc(100vw-290px)] backdrop-blur-sm'></div>
      <div className='h-[100px] t-0 flex flex-row right-0 items-center justify-between px-8 fixed w-full lg:w-[calc(100vw-290px)]'>
        <div className='flex flex-row items-center gap-x-8'>
          <div className='lg:hidden drop-shadow-lg rounded-full w-[50px] h-[50px] bg-white flex items-center justify-center cursor-pointer'>
            <Menu size={28} onClick={() => onMenu()} />
          </div>
        </div>
        <Popover defaultOpen open={open} onOpenChange={(open) => setOpen(open)}>
          <PopoverTrigger>
            <div className='rounded-full w-[50px] h-[50px] bg-white border-primary-500 border-2 drop-shadow-lg cursor-pointer'>
            </div>
          </PopoverTrigger>
          <PopoverContent className='w-auto'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row items-center gap-x-4'>
                <div className='flex flex-col'>
                  <p className='text-sm font-bold'>Nome do usuário</p>
                  <p className='text-xs'>
                    <span className='text-primary-500'>#</span>1234
                  </p>
                </div>
              </div>
              <hr />
              <div className='flex flex-col gap-y-2 '>
                <Button size={"sm"} className='justify-start bg-white text-neutral-500 hover:bg-primary-50'>Perfil</Button>
                <Button size={"sm"} className='justify-start bg-white text-neutral-500 hover:bg-primary-50'>Configurações</Button>
                <Button size={"sm"} className='justify-start bg-white text-neutral-500 hover:bg-primary-50'
                  onClick={() => {
                    // remove o cookie auth_session
                    document.cookie = "auth_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                    // redireciona para a página de login
                    window.location.href = '/login'
                  }}
                >Sair</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}