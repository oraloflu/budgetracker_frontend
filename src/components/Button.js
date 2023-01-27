export default function Button({text, onclick}) {
  return (
      <div className="w-full h-12 mx-auto mt-8">
          <button
              type="button"
              className="rounded hover:scale-95 transition-all 
              w-full h-11 mx-2 outline-0 border cursor-pointer
              font-semibold text-base"
              onClick={onclick}
          >
              {text}
          </button>
      </div>
  )
}