
export default function FormRow({ type, text, name, placeholder }) {
  return (
      <div
          className="flex items-start justify-start flex-col mt-4">
          <label
              htmlFor={name}
              className="text-slate-900 font-semibold mb-2 ml-2">
              {text}
          </label>
          <input
              id={name}
              type={type}
              className="rounded font-semibold w-full 
              border outline-0 px-2 py-2 mx-2 placeholder:font-normal opacity-80"
              name={name}
              placeholder={placeholder}
          />
      </div> 
  )
}