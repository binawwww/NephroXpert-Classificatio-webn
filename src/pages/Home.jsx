import Card from "../ui/Card";
import Title from "../ui/Title";

const content = [
  {
    title: "Pendahuluan",
    description: "Penyakit Ginjal Kronis (PGK) merupakan masalah kesehatan serius yang memerlukan deteksi dini untuk mencegah komplikasi lebih lanjut. Studi ini bertujuan untuk membangun model prediksi PGK menggunakan algoritma Support Vector Machine (SVM) dengan seleksi fitur berbasis logika fuzzy. Data klinis yang dianalisis mencakup indikator krusial seperti hemoglobin, glukosa darah, dan albumin. Model ini diharapkan dapat meningkatkan akurasi dan efisiensi dalam pengambilan keputusan medis."
  },
  {
    title: "Keunggulan Sistem",
    description: "Proyek NephroXpert memberikan kontribusi signifikan dalam penerapan machine learning pada domain data medis. Model ini menunjukkan hasil analisis yang akurat dan efektif dalam memprediksi PGK, sehingga menjadi instrumen yang bernilai bagi tenaga kesehatan dalam proses pengambilan keputusan klinis."
  }
];


export default function Home() {
  return (
    <div className="mt-20 min-h-[80vh]  flex flex-col justify-between">
      <section className="text-center font-extrabold grid ">
        <Title />
        <section className="flex mt-20 flex-col space-y-10">
          <Card cardData={content} />
        </section>
      </section>
      <footer className="text-center">
        <p>
          Made by{" "}
          <span className="text-aquaMarine font-semibold">22.11.4744</span>
        </p>
      </footer>
    </div>
  );
}
