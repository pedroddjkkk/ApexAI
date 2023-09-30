"use client";

import { useSession } from "@/lib/hooks/session";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const { session, loading } = useSession();
  const router = useRouter();

  return (
    <main>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <div>
          <h1>Olá {session ? session.user.email : ""}</h1>
          <button
            onClick={async () => {
              await axios.post("/api/auth/logout");
              router.push("/login");
            }}
          >
            Deslogar
          </button>
        </div>
      )}
    </main>
  );
}
