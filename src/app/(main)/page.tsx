"use client";

import { useSession } from "@/lib/hooks/session";

export default function Home() {
  const { session, loading } = useSession();

  return (
    <main>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <h1>Olá {session ? session.user.userId : ""}</h1>
      )}
    </main>
  );
}
