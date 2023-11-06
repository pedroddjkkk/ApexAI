import { List, ListItem, Badge } from '@tremor/react';
import { Bot, Cpu, Home, Lock, Rocket, Settings, Settings2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const items = [
  {
    title: 'Admin',
    icon: (
      <ShieldAlert />
    ),
    children: [
      {
        title: 'Configuração Empresa',
        path: '/company-config',
        icon: (
          <Settings2 />
        )
      },
      {
        title: 'Perfis',
        path: '/profiles',
        icon: (
          <Lock />
        )
      },
      {
        title: 'AIs Configs',
        path: '/ai-config',
        new: true,
        icon: (
          <Cpu />
        )
      },
      {
        title: 'Whatsapp Configs',
        path: '/whats-config',
        new: true,
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
  children?: {
    title: string;
    path: string;
    icon: React.ReactNode;
    new?: boolean;
  }[];
};

const NavList: React.FC = () => {
  return (
    <div >
      <List className='px-4 text-white'>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </List>
    </div>
  );
}

export default NavList;

function Item({ item }: { item: Item }) {

  return (
    <ul className='flex flex-col'>
      <ListItem className="flex flex-row items-center justify-start font-bold">
        {item.icon}
        <span className="ml-2 text-xl">{item.title}</span>
      </ListItem>
      {item.children && (
        <div className='w-full'>
          {item.children.map((child, index) => (
            <Link href={child.path} key={index}>
              <ListItem key={index} className="px-4 flex flex-row items-center justify-between text-white font-bold hover:bg-secondary-500 rounded-md">
                <div className="flex flex-row items-center justify-start">
                  {child.icon}
                  <span className="ml-2 text-[16px]">{child.title}</span>
                </div>
                {child.new && <Badge size={"sm"} className='text-primary-500 font-bold bg-white'>
                  New
                </Badge>}
              </ListItem>
            </Link>
          ))}
        </div>
      )}
    </ul>
  )
} 