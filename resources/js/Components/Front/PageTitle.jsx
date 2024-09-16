export default function ({ title }) {
  return (
    <h1 className="text-xl font-bold">
      <span className="bg-white text-primary p-2 uppercase -rotate-2 inline-block">
        {title}
      </span>
    </h1>
  );
}
