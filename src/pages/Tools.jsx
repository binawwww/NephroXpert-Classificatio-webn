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
  console.log(inputData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value, // Store as string to allow typing dots and partial numbers
    }));
  };

  // Process data when predicting (convert to numbers)
  const handlePredict = () => {
    const processedData = {};
    Object.keys(inputData).forEach(key => {
      const value = inputData[key];
      processedData[key] = value === "" ? "" : parseFloat(value) || 0;
    });
    console.log("Processed data for prediction:", processedData);
    handleClick(processedData);
  };

  return (
    <div className="mt-10 sm:mt-20  py-5 sm:py-10  sm:px-6 lg:px-8">
      <div className="text-center font-extrabold">
        <Title title={"Insert Data of Kidney Disease"} />
      </div>
      
      <div className="bg-greyCustom mt-10 sm:mt-20 w-full max-w-xl sm:max-w-6xl mx-auto rounded-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl text-center font-extrabold text-white mb-6">
          Patient Information Form
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Haemoglobin</p>
            <Input
              name="haemoglobin"
              placeholder="Rentang Umum 3.1 - 17.8"
              value={inputData.haemoglobin}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.haemoglobin !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.haemoglobin}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Potassium</p>
            <Input
              name="potassium"
              placeholder="Rentang Umum 2.5 - 47.0"
              value={inputData.potassium}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.potassium !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.potassium}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Specific Gravity</p>
            <Input
              name="specific_gravity"
              placeholder="Rentang Umum 1.005 - 1.025"
              value={inputData.specific_gravity}
              onChange={handleChange}
              type="number"
              step="0.001"
            />
            {inputData.specific_gravity !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.specific_gravity}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Blood Urea</p>
            <Input
              name="blood_urea"
              placeholder="Rentang Umum 1.5 - 391.0"
              value={inputData.blood_urea}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.blood_urea !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.blood_urea}
              </div>
            )}
          </div>

          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Albumin</p>
            <Input
              name="albumin"
              placeholder="Rentang Umum 0.0 - 5.0"
              value={inputData.albumin}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.albumin !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.albumin}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Blood Pressure</p>
            <Input
              name="blood_pressure"
              placeholder="Rentang Umum 50.0 - 180.0"
              value={inputData.blood_pressure}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.blood_pressure !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.blood_pressure}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Blood Glucose</p>
            <Input
              name="blood_glucose_random"
              placeholder="Rentang Umum 22.0 - 490.0"
              value={inputData.blood_glucose_random}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.blood_glucose_random !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.blood_glucose_random}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Serum Creatinine</p>
            <Input
              name="serum_creatinine"
              placeholder="Rentang Umum 0.4 - 76.0"
              value={inputData.serum_creatinine}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.serum_creatinine !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.serum_creatinine}
              </div>
            )}
          </div>

          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Sugar Levels</p>
            <Input
              name="sugar"
              placeholder="Rentang Umum 0.0 - 5.0"
              value={inputData.sugar}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.sugar !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.sugar}
              </div>
            )}
          </div>
          
          <div className="grid">
            <p className="text-white font-medium mb-1 text-sm sm:text-base">Sodium</p>
            <Input
              name="sodium"
              placeholder="Rentang Umum 4.5 - 163.0"
              value={inputData.sodium}
              onChange={handleChange}
              type="number"
              step="0.1"
            />
            {inputData.sodium !== "" && (
              <div className="text-xs text-yellow-400 mt-1">
                Value: {inputData.sodium}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center sm:text-end mt-6">
          <button
            onClick={handlePredict}
            className="bg-white px-6 sm:px-8 py-2 rounded-lg text-black opacity-65 hover:opacity-100 transition-opacity font-medium w-full sm:w-auto"
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
          <div className="text-center mt-6 bg-gray-800 text-white p-4 rounded-lg mx-auto max-w-md">
            <h2 className="text-lg sm:text-xl font-bold">Prediction Result:</h2>
            <p
              className={`mt-2 text-xl sm:text-2xl font-extrabold ${
                predict.predicted_label === "Positif CKD"
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {predict.predicted_label?.toUpperCase() ?? "UNKNOWN"}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-sm sm:text-base">Probabilities:</p>
              <p className="text-green-400 text-sm sm:text-base">
                Negative CKD: {predict.probabilities['Negatif CKD']}
              </p>
              <p className="text-red-400 text-sm sm:text-base">
                Positive CKD: {predict.probabilities['Positif CKD']}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}