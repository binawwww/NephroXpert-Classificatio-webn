export default function CardDocs({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={`${item.span} p-5 space-y-5 rounded-3xl text-center bg-greyCustom`}>
            <h1 className="text-xl text-aquaMarine font-bold">{item.title}</h1>
            <p className="text-gray-400">{item.description}</p>
        </div>
      ))}
    </>
  );
}
