export default function Hamburger() {
  return (
      <div
          id="hamburger"
          className="w-60 h-24 flex flex-col items-center justify-center 
          cursor-pointer">
          <span
              className="block w-10 h-1 border-3 bg-slate-700 my-1"></span>
          <span
              className="block w-10 h-1 border-3 bg-slate-700 my-1"></span>
          <span
              className="block w-10 h-1 border-3 bg-slate-700 my-1"></span>
      </div>  )
}