import { List, ListItem, Badge } from '@tremor/react';
import { Bot, ChevronDown, ChevronUp, Cpu, Home, Lock, Plus, Rocket, Settings, Settings2, ShieldAlert, UserCog, UserCog2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const items = [
  {
    title: 'Admin',
    icon: (
      <ShieldAlert />
    ),
    children: [
      {
        title: 'AIs',
        path: '/ai-config',
        new: false,
        icon: (
          <Cpu />
        ),
        children: [
          {
            title: 'Cadastro',
            path: '/ai-config/register',
            new: false,
            icon: (
              <Plus />
            )
          },
        ]
      },
      {
        title: 'Whatsapp',
        path: '/whats-config',
        new: false,
        icon: (
          <Bot />
        )
      },
    ]
  },
  {
    title: 'Dashboard',
    icon: (
      <Rocket />
    ),
    children: [
      {
        title: 'Home',
        path: '/',
        icon: (
          <Home />
        )
      },
    ]

  }
] as Item[];

type Item = {
  title: string;
  path: string;
  icon: React.ReactNode;
  new?: boolean;
  children?: Item[];
};

const NavList: React.FC = () => {
  const pathname = usePathname();
  return (
    <div >
      <div className='text-white pt-2'>
        {items.map((item, index) => (
          <Item key={index} item={item} pathname={pathname} />
        ))}
      </div>
    </div>
  );
}



export default NavList;


import { cva, type VariantProps } from "class-variance-authority"
import { Button } from '../ui/button';

function Item({ item, pathname }: { item: Item, pathname: string }) {

  const ItemListVariant = cva(
    "px-4 flex flex-row items-center justify-between text-white/90 font-bold hover:bg-secondary-500 hover:text-white rounded-lg after",
    {
      variants: {
        active: {
          true: "bg-secondary-500 text-white",
          false: "",
        },
        visible: {
          true: "visible",
          false: "invisible",
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  )

  const ItemChildrenOpen = cva(
    "pl-4 pt-1",
    {
      variants: {
        active: {
          true: "",
          false: "h-0",
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  )

  const [open, setOpen] = useState<boolean[]>(Array(item.children?.length).fill(false));

  const handleOpen = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  }

  return (
    <div>
      <ul className='flex flex-col px-4'>
        <ListItem className="flex flex-row items-center justify-start font-bold">
          {item.icon}
          <span className="ml-2 text-lg ">{item.title.toUpperCase()}</span>
        </ListItem>
        {item.children && (
          <div className='w-full flex flex-col gap-1'>
            {item.children.map((child, index) => {

              const itemActive = pathname === child.path;

              const childrenActive = child.children?.filter(child2 => pathname === child2.path).length ? true : false;
              return (
                <div key={index}>
                  <Link href={child.path}>
                    <ListItem key={index} className={ItemListVariant({ active: itemActive || childrenActive && !open[index] })}>
                      <div className="flex flex-row items-center justify-start">
                        {child.icon}
                        <span className="ml-2 text-[16px] text-white">{child.title}</span>
                      </div>
                      <div className='flex justify-center items-center'>
                        {child.new && <Badge size={"sm"} className='text-primary-500 font-bold bg-white'>
                          New
                        </Badge>}
                        {child.children && <Button className='text-white bg-transparent hover:bg-transparent rounded-full p-0 h-4'
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleOpen(index)
                          }}
                        >
                          {open[index] ? <ChevronUp /> : <ChevronDown />}
                        </Button>}
                      </div>
                    </ListItem>
                  </Link>
                  <div className={ItemChildrenOpen({ active: open[index] })}>
                    {child.children && child.children.map((child2, index2) => {

                      const itemActive = pathname === child2.path;

                      return (
                        <Link href={child2.path} key={index}>
                          <ListItem key={index2} className={ItemListVariant({ active: itemActive, visible: open[index] })}>
                            <div className="flex flex-row items-center justify-start">
                              {child2.icon}
                              <span className="ml-2 text-[16px]">{child2.title}</span>
                            </div>
                            {child2.new && <Badge size={"sm"} className='text-primary-500 font-bold bg-white'>
                              New
                            </Badge>}
                          </ListItem>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </ul>
      <hr className='border-white/20 my-2' />
    </div>
  )
} 