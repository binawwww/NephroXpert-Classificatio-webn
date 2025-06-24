import CardDocs from "../ui/CardDocs";
import Title from "../ui/Title";

const content = [
  {
    span: "col-span-2",
    title: "About NephroXpert",
    description:
      "NephroXpert is a medical decision support system for early detection of chronic kidney disease (CKD). The system uses SVM algorithm and fuzzy logic-based feature selection to process clinical data such as hemoglobin, glucose, and albumin. The goal is to provide fast and accurate predictions to help medical personnel identify at-risk patients early.",
  },
  {
    span: "col-span-1",
    title: "Problems",
    description:
      "CKD detection is often delayed due to complicated clinical data analysis and lack of predictive tools. In addition, many data features are irrelevant, reducing diagnostic accuracy.",
  },
  {
    span: "col-span-1",
    title: "Research",
    description:
      "This study develops a chronic kidney disease (CKD) prediction system called nephroXpert using the Support Vector Machine (SVM) algorithm and fuzzy logic-based feature selection. Patient clinical data is categorized to improve model accuracy. Evaluation is carried out by measuring accuracy, precision, recall, and F1-score to assess system performance.",
  },
  {
    span: "col-span-1",
    title: "Dataset",
    description:
      "This Kaggle dataset contains 400 rows and 26 columns, with 12 numeric and 14 categorical. The target column is classification (CKD or not). Some of the column names in this data include: age, bp (blood pressure), sg (specific gravity), al (albumin), su (sugar), and id. This dataset is taken from the Kaggle platform and used to build a machine learning-based CKD classification model.",
  },
  {
    span: "col-span-1",
    title: "Model",
    description:
      "NephroXpert uses Support Vector Machine (SVM) to classify CKD and non-CKD data. The model is enhanced with fuzzy logic-based feature selection to select the most relevant clinical features. Numeric data is categorized for easier analysis and improved prediction accuracy.",
  },
  {
    span: "col-span-2",
    title: "Conclusion",
    description:
      "NephroXpert berhasil membangun model prediksi CKD yang akurat menggunakan SVM dan seleksi fitur berbasis fuzzy logic. Sistem ini mampu menyederhanakan data klinis menjadi informasi prediktif yang bermanfaat bagi deteksi dini penyakit ginjal.",
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
