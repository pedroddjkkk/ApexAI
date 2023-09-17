import { auth } from "@/auth/lucia";
import { LuciaError } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  try {
    const sessionCookie = cookieStore.get("auth_session");
    if (!sessionCookie) redirect("/login");

    const session = await auth.validateSession(sessionCookie?.value);

    if (session.fresh) {
      const sessionCookie = auth.createSessionCookie(session);
      cookieStore.set("auth_session", sessionCookie.value);
    }

    return <main>{children}</main>;
  } catch (e) {
    if (e instanceof LuciaError && e.message === `AUTH_INVALID_SESSION_ID`) {
      cookieStore.delete("auth_session");
      redirect("/login");
    }
  }
}
