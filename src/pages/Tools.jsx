import { useState } from "react";
import Input from "../ui/Input";
import Title from "../ui/Title";
import useKidneyPrediction from "../hooks/useKindeyPrediction";
export default function Tools() {
  const [inputData, setInputData] = useState({
    potassium: "",
    albumin: "",
    blood_glucose_random: "",
    blood_pressure: "",
    blood_urea: "",
    haemoglobin: "",
    serum_creatinine: "",
    sodium: "",
    specific_gravity: "",
    sugar: "",
  });

  const { handleClick, predict, loading } = useKidneyPrediction();

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [mapPlaceholderToKey(placeholder)]: value === "" ? "" : parseFloat(value),
    }));
  };

  const mapPlaceholderToKey = (label) => {
    const keyMap = {
      haemoglobin: "haemoglobin",
      potassium: "potassium",
      Specific_gravity: "specific_gravity",
      Blood_urea: "blood_urea",
      Albumin: "albumin",
      Blood_pressure: "blood_pressure",
      Blood_glucose: "blood_glucose_random",
      Serum_ceratine: "serum_creatinine",
      Sugar_levels: "sugar",
      Sodium: "sodium",
    };
    return keyMap[label] || label;
  };

  return (
    <div className="mt-20 py-10">
      <div className="text-center font-extrabold">
        <Title title={"Insert Data of Kidney Disease"} />
      </div>
      <div className="bg-greyCustom mt-20 w-4xl mx-auto rounded-2xl p-5">
        <h1 className="text-2xl text-center font-extrabold">
          Patient Information Form
        </h1>
        <div className="grid w-3xl mx-auto mt-5 grid-cols-2 gap-5">
          <div className="grid">
            <p>haemoglobin</p>
            <Input
              placeholder={"Rentang Umum 3.1 - 17.8"}
              value={inputData.haemoglobin}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>potassium</p>
            <Input
              placeholder={"Rentang Umum 2.5 - 47.0"}
              value={inputData.potassium}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Specific gravity</p>
            <Input
              placeholder={"Rentang Umum 1.005 - 1.025"}
              value={inputData.specific_gravity}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Blood Urea</p>
            <Input
              placeholder={"Rentang Umum 1.5 - 391.0"}
              value={inputData.blood_urea}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <p>Albumin</p>
            <Input
              placeholder={"Rentang Umum 0.0 - 5.0"}
              value={inputData.albumin}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Blood Pressure</p>
            <Input
              placeholder={"Rentang Umum 50.0 - 180.0"}
              value={inputData.blood_pressure}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Blood glucose</p>
            <Input
              placeholder={"Rentang Umum 22.0 - 490.0"}
              value={inputData.blood_glucose_random}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Serum ceratine</p>
            <Input
              placeholder={"Rentang Umum 0.4 - 76.0"}
              value={inputData.serum_creatinine}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <p>Sugar levels</p>
            <Input
              placeholder={"Rentang Umum 0.0 - 5.0"}
              value={inputData.sugar}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <p>Sodium</p>
            <Input
              placeholder={"Rentang Umum 4.5 - 163.0"}
              value={inputData.sodium}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-end mt-5">
          <button
            onClick={() => handleClick(inputData)}
            className="bg-white px-8 py-0.5 rounded-lg text-black opacity-65"
          >
            Predict
          </button>
        </div>
        {loading && (
          <p className="text-center text-yellow-300 font-semibold mt-4 animate-pulse">
            Predicting...
          </p>
        )}

        {!loading && predict && (
          <div className="text-center mt-6 bg-greyCustom text-white p-4  ">
            <h2 className="text-xl font-bold">Prediction Result:</h2>
            <p
              className={`mt-2 text-2xl font-extrabold ${
                predict.predicted_label === "Positif CKD"
                  ? " text-green-700"
                  : "text-red-700"
              }`}
            >
              {predict.predicted_label.toUpperCase() ?? "UNKNOWN"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
