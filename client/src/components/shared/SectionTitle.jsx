export default function SectionTitle({title}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-xl font-semibold tracking-widest">
        {title}
      </h2>
      <div className="w-20 h-0.5 bg-gray-300 mx-auto mt-3"></div>
    </div>
  );
}