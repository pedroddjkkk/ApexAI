import { useEffect, useState } from "react";
import axios from "axios";

export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unlogged, setUnlogged] = useState(false);

  useEffect(() => {
    async function loadSession() {
      const { data } = await axios.get("/api/auth/session");

      if (data.session) {
        setSession(data.session);
      } else if (data.error === "No session found") {
        setUnlogged(true);
      }

      setLoading(false);
    }

    loadSession();
  }, []);

  return { session, loading, unlogged };
}
