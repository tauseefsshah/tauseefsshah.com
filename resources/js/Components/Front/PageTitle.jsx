export default function ({ title }) {
  return (
    <h1 className="text-xl font-bold">
      <span className="inline-block -rotate-2 bg-white p-2 uppercase text-primary">
        {title}
      </span>
    </h1>
  );
}
