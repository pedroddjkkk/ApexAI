import NavList from "./navList";

export function SidNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row left-0 w-full relative justify-end">

      <div className="w-[280px] fixed left-0 ">
        <div className="h-[100px]" style={{
          backgroundImage: "url('https://cdn.discordapp.com/attachments/1048010244795678771/1169737777072590969/AIPEX_LOGO_light.png?ex=65567e32&is=65440932&hm=c5661bf76a5eefe78815e6821382ada234a600cf63469015c12599c68a586890&')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginRight: "16px",
          marginLeft: "16px",
        }}>
        </div>
        <div className="bg-primary-500 h-[calc(100vh-100px)]">
          <NavList />
        </div>
      </div>
      <div className="flex flex-col w-[calc(100vw-280px)]">
        {children}
      </div>
    </div>
  );

}