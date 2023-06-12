import Person from '../assets/images/pexels-jeffrey-reed-769745.jpg';

export default function Profile(): JSX.Element {
  return (
    <article className="w-full flex flex-col items-center justify-center">
      <img
        className="w-28 h-28 object-cover rounded-full"
        src={Person}
        alt="person"
        width=""
        height=""
      />
      <div className="mt-4">
        <h2 className="font-light text-xl text-white">Jeffrey Reed</h2>
        <h3 className="mt-2 border-2 rounded text-center text-white">
          <span>Balance$</span>
        </h3>
      </div>
    </article>
  );
}
