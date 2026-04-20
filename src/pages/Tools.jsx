import { useState } from "react";
import Input from "../ui/Input";
import Title from "../ui/Title";
import useKidneyPrediction from "../hooks/useKindeyPrediction";

export default function Tools() {
  const [inputData, setInputData] = useState({
    haemoglobin: "",
    packed_cell_volume: "",
    specific_gravity: "",
    serum_creatinine: "",
    appetite: "",
    hypertension: "",
    blood_urea: "",
    diabetes_mellitus: "",
    sodium: "",
    albumin: "",
    red_blood_cell_count: "",
    aanemia: "",
  });

  const { handleClick, predict, loading } = useKidneyPrediction();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePredict = () => {
    const processedData = {};
    Object.keys(inputData).forEach((key) => {
      const value = inputData[key];
      // Field kategorikal tetap string, numerik dikonversi
      const kategorikalFields = [
        "appetite",
        "hypertension",
        "diabetes_mellitus",
        "aanemia",
      ];
      if (kategorikalFields.includes(key)) {
        processedData[key] = value;
      } else {
        processedData[key] = value === "" ? "" : parseFloat(value) || 0;
      }
    });
    handleClick(processedData);
  };

  const handleReset = () => {
    setInputData({
      haemoglobin: "",
      packed_cell_volume: "",
      specific_gravity: "",
      serum_creatinine: "",
      appetite: "",
      hypertension: "",
      blood_urea: "",
      diabetes_mellitus: "",
      sodium: "",
      albumin: "",
      red_blood_cell_count: "",
      aanemia: "",
    });
  };

  return (
    <div className="mt-10 sm:mt-20 py-5 sm:py-10 sm:px-6 lg:px-8">
      <div className="text-center font-extrabold">
        <Title title={"Prediksi Penyakit Ginjal Kronis"} />
      </div>

      <div className="bg-greyCustom mt-10 sm:mt-20 w-full max-w-xl sm:max-w-6xl mx-auto rounded-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="text-xl sm:text-2xl text-center font-extrabold text-white mb-2">
          Formulir Data Pasien
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Masukkan nilai laboratorium pasien untuk memprediksi risiko penyakit
          ginjal kronis
        </p>

        {/* Seksi: Penanda Darah */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-600 pb-2 mb-4">
          Penanda Darah
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Hemoglobin{" "}
              <span className="text-gray-400 font-normal">(3.1–17.8)</span>
            </p>
            <Input
              name="haemoglobin"
              placeholder="cth. 13.8"
              value={inputData.haemoglobin}
              onChange={handleChange}
              step="0.1"
              unit="g/dL"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Volume Sel Darah Merah{" "}
              <span className="text-gray-400 font-normal">(20–55)</span>
            </p>
            <Input
              name="packed_cell_volume"
              placeholder="cth. 42"
              value={inputData.packed_cell_volume}
              onChange={handleChange}
              step="1"
              unit="%"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Jumlah Sel Darah Merah{" "}
              <span className="text-gray-400 font-normal">(2.1–8.0)</span>
            </p>
            <Input
              name="red_blood_cell_count"
              placeholder="cth. 5.0"
              value={inputData.red_blood_cell_count}
              onChange={handleChange}
              step="0.1"
              unit="juta/cmm"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Ureum Darah{" "}
              <span className="text-gray-400 font-normal">(1.5–391)</span>
            </p>
            <Input
              name="blood_urea"
              placeholder="cth. 30"
              value={inputData.blood_urea}
              onChange={handleChange}
              step="0.1"
              unit="mg/dL"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Kreatinin Serum{" "}
              <span className="text-gray-400 font-normal">(0.4–76)</span>
            </p>
            <Input
              name="serum_creatinine"
              placeholder="cth. 1.0"
              value={inputData.serum_creatinine}
              onChange={handleChange}
              step="0.1"
              unit="mg/dL"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Natrium{" "}
              <span className="text-gray-400 font-normal">(4.5–163)</span>
            </p>
            <Input
              name="sodium"
              placeholder="cth. 140"
              value={inputData.sodium}
              onChange={handleChange}
              step="0.1"
              unit="mEq/L"
            />
          </div>
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Albumin <span className="text-gray-400 font-normal">(0–5)</span>
            </p>
            <Input
              name="albumin"
              placeholder="cth. 0"
              value={inputData.albumin}
              onChange={handleChange}
              step="0.1"
            />
          </div>
        </div>

        {/* Seksi: Analisis Urin */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-600 pb-2 mb-4">
          Analisis Urin
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Berat Jenis Urin{" "}
              <span className="text-gray-400 font-normal">(1.005–1.025)</span>
            </p>
            <Input
              name="specific_gravity"
              placeholder="cth. 1.020"
              value={inputData.specific_gravity}
              onChange={handleChange}
              step="0.001"
            />
          </div>
        </div>

        {/* Seksi: Status Klinis */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-600 pb-2 mb-4">
          Status Klinis
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {/* Nafsu Makan — value tetap bahasa Inggris */}
          <div>
            <p className="text-white font-medium mb-1 text-sm">Nafsu Makan</p>
            <select
              name="appetite"
              value={inputData.appetite}
              onChange={handleChange}
              className="w-full h-[38px] px-3 bg-white text-black border border-gray-200 rounded-lg text-sm outline-none cursor-pointer"
            >
              <option value="">Pilih…</option>
              <option value="good">Baik</option>
              <option value="poor">Buruk</option>
            </select>
          </div>

          {/* Hipertensi — value tetap bahasa Inggris */}
          <div>
            <p className="text-white font-medium mb-1 text-sm">Hipertensi</p>
            <select
              name="hypertension"
              value={inputData.hypertension}
              onChange={handleChange}
              className="w-full h-[38px] px-3 bg-white text-black border border-gray-200 rounded-lg text-sm outline-none cursor-pointer"
            >
              <option value="">Pilih…</option>
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>

          {/* Diabetes Melitus — value tetap bahasa Inggris */}
          <div>
            <p className="text-white font-medium mb-1 text-sm">
              Diabetes Melitus
            </p>
            <select
              name="diabetes_mellitus"
              value={inputData.diabetes_mellitus}
              onChange={handleChange}
              className="w-full h-[38px] px-3 bg-white text-black border border-gray-200 rounded-lg text-sm outline-none cursor-pointer"
            >
              <option value="">Pilih…</option>
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>

          {/* Anemia — value tetap bahasa Inggris */}
          <div>
            <p className="text-white font-medium mb-1 text-sm">Anemia</p>
            <select
              name="aanemia"
              value={inputData.aanemia}
              onChange={handleChange}
              className="w-full h-[38px] px-3 bg-white text-black border border-gray-200 rounded-lg text-sm outline-none cursor-pointer"
            >
              <option value="">Pilih…</option>
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-end gap-3 mt-2">
          <button
            onClick={handleReset}
            className="px-5 py-2 rounded-lg border border-gray-500 text-gray-300 text-sm hover:bg-gray-700 transition-colors"
          >
            Atur Ulang
          </button>
          <button
            onClick={handlePredict}
            disabled={loading}
            className="bg-white px-6 py-2 rounded-lg text-black text-sm font-medium hover:opacity-90 disabled:opacity-40 transition-opacity"
          >
            {loading ? "Memproses…" : "Prediksi →"}
          </button>
        </div>

        {/* Hasil Prediksi */}
        {!loading && predict && (
          <div className="mt-6 border border-gray-600 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-600">
              <span className="text-white font-medium text-sm">
                Hasil prediksi
              </span>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  predict.predicted_label === "Positif CKD"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {predict.predicted_label}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="bg-gray-700 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Positif CKD</p>
                <p className="text-xl font-medium text-red-400">
                  {predict.probabilities["Positif CKD"]}
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Negatif CKD</p>
                <p className="text-xl font-medium text-green-400">
                  {predict.probabilities["Negatif CKD"]}
                </p>
              </div>
            </div>
            {predict.note && (
              <div className="mx-4 mb-4 flex items-start gap-2 bg-yellow-50 border border-yellow-300 rounded-lg px-4 py-3">
                <span className="text-yellow-500 mt-0.5 text-base leading-none">
                  ⚠️
                </span>
                <p className="text-yellow-800 text-xs leading-relaxed">
                  {predict.note}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
