import HomeFooter from "@/sections/public/home-footer";
import HomeTopNav from "@/sections/public/home-top-nav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{
      backgroundImage: "url('https://cdn.discordapp.com/attachments/1083082099994673184/1184651136188289116/Bg-Home.png?ex=658cbf58&is=657a4a58&hm=9969aa3edfc35380e721e3851a7d0bde3788caa208c8130742a8022450f1ab77&')",
      backgroundAttachment: "fixed",
    }}>
      {/* Top nav */}
      <HomeTopNav />
      {children}
      {/* footer */}
      <HomeFooter />
    </main>
  );
}