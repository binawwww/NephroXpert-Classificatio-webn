import * as Icons from "lucide-react";
export default function Card({ cardData }) {
  return (
    <div className="flex gap-5 justify-center">
      {cardData.map((item, index) => {
        return (
          <div
            key={index}
            className="py-5 px-8 text-center rounded-2xl bg-greyCustom w-1/2 space-y-2"
          >
            <h1 className="font-bold text-aquaMarine text-2xl">{item.title}</h1>
            <p className="text-gray-400">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
