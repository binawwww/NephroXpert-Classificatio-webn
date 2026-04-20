import CardDocs from "../ui/CardDocs";
import Title from "../ui/Title";

const content = [
  {
    span: "col-span-2",
    title: "Tentang NephroXpert",
    description:
      "NephroXpert merupakan sistem pendukung keputusan medis yang dirancang untuk deteksi dini Penyakit Ginjal Kronis (PGK). Sistem ini mengintegrasikan algoritma Support Vector Machine (SVM) dengan seleksi fitur berbasis logika fuzzy untuk memproses data klinis seperti hemoglobin, glukosa, dan albumin. Fokus utama sistem ini adalah menyediakan prediksi yang cepat dan akurat guna membantu tenaga medis mengidentifikasi pasien berisiko tinggi secara prematur.",
  },
  {
    span: "col-span-1",
    title: "Permasalahan",
    description:
      "Identifikasi PGK sering kali terlambat akibat kompleksitas analisis data klinis serta keterbatasan alat bantu prediktif. Selain itu, banyaknya fitur data yang tidak relevan dalam dataset medis kerap menurunkan tingkat akurasi diagnosis konvensional.",
  },
  {
    span: "col-span-1",
    title: "Metodologi Penelitian",
    description:
      "Penelitian ini mengembangkan sistem prediksi PGK bernama NephroXpert yang mengoptimalkan algoritma SVM dan seleksi fitur logika fuzzy. Data klinis pasien dikategorisasi untuk meningkatkan presisi model. Evaluasi performa dilakukan secara komprehensif melalui metrik akurasi, presisi, recall, dan F1-score.",
  },
  {
    span: "col-span-1",
    title: "Dataset",
    description:
      "Dataset bersumber dari Kaggle, terdiri dari 400 observasi dengan 26 variabel (12 numerik dan 14 kategorikal). Fitur utama meliputi usia, tekanan darah (bp), berat jenis urin (sg), albumin (al), kadar gula (su), dan identitas pasien (id). Data ini digunakan sebagai landasan pengembangan model klasifikasi machine learning.",
  },
  {
    span: "col-span-1",
    title: "Model Prediksi",
    description:
      "NephroXpert mengimplementasikan Support Vector Machine (SVM) untuk mengklasifikasikan status PGK. Model diperkuat dengan seleksi fitur berbasis logika fuzzy untuk mereduksi noise dan memilih parameter klinis paling signifikan. Transformasi data numerik ke dalam kategori dilakukan guna meningkatkan efisiensi komputasi dan akurasi prediksi.",
  },
  {
    span: "col-span-2",
    title: "Kesimpulan",
    description:
      "NephroXpert berhasil mengimplementasikan model prediksi PGK yang tangguh melalui sinergi algoritma SVM dan seleksi fitur logika fuzzy. Sistem ini terbukti mampu menyederhanakan data klinis yang kompleks menjadi informasi prediktif yang krusial bagi efektivitas deteksi dini penyakit ginjal.",
  },
];

export default function Docs() {
  return (
    <div className="mt-20">
      <div className="text-center font-extrabold">
        <Title title={"Documentation & Information"} />
      </div>
      <section className="mt-20 pb-20 w-4xl mx-auto grid gap-5 grid-cols-2">
        <CardDocs data={content} />
      </section>
    </div>
  );
}
