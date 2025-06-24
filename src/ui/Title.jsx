export default function Title({ title }) {
  return (
    <>
      <h1 className="text-5xl text-aquaMarine mb-3">
        Nephro
        <span className="text-teal">Xpret</span>
      </h1>
      {title ? (
        <h4 className="text-xl">{title}</h4>
      ) : (
        <h4 className="text-xl">
          Kidney Disease Prediction
        </h4>
      )}
    </>
  );
}
