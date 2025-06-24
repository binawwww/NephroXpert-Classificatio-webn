import Card from "../ui/Card";
import Title from "../ui/Title";

const content = [
  {
    title: "Introduction",
    description: "Chronic Kidney Disease (CKD) is a serious health problem that requires early detection to prevent complications. This study aims to build a CKD prediction model using the Support Vector Machine (SVM) algorithm with fuzzy logic-based feature selection. The clinical data used include indicators such as hemoglobin, blood glucose, and albumin. This model is expected to help make medical decisions more accurately and efficiently."
  },
  {
    title: "Features",
    description: "The NephroXpert project adds insight into the application of machine learning to medical data. This model shows accurate and effective analysis results in predicting CKD, making it useful for clinical decision making."
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
