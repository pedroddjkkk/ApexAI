import { auth } from "@/auth/lucia";
import { SideNav } from "@/components/nav/side-nav";
import { isRedirectError } from "@/lib/utils";
import { LuciaError } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

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

    return (
      <div>
        <SideNav>
          <div className="flex flex-col h-[calc(100vh-100px)] pt-[100px]">
            {children}
          </div>
        </SideNav>
      </div>
    );
  } catch (e) {
    if (isRedirectError(e)) throw e;
    if (e instanceof LuciaError && e.message === `AUTH_INVALID_SESSION_ID`) {
      redirect("/login");
    }
  }
}
