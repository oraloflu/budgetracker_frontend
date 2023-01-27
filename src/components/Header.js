import Hamburger from "./Hamburger";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
  return (
      <header
          className="shadow-md font-mono bg-slate-100 
          h-20 py-4 px-4 bottom-28
          flex items-center justify-between"
      >
         <Hamburger />
          <div className="w-36 h-24"></div>
        <HeaderTitle />
      </header>
  )
}