'use client'
import { useSession } from "@/lib/hooks/session";
import React from 'react';

// import { Container } from './styles';

export default function LayutAdmin({ children }: { children: React.ReactNode; }) {
  const { session, loading } = useSession();

  return loading ? <div >Carregando...</div> : children
}
