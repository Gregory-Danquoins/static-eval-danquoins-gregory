import { Hero } from "./components/hero";
import ToolCard from "./components/tool-card";
import WhyCard from "./components/why-card";
import secu from "../../public/secu-comp.jpg";
import colab from "../../public/colab-comp.jpg";
import access from "../../public/access-comp.jpg";
import productivity from "../../public/productivity-comp.jpg";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <h2 className="mt-32">Pourquoi choisir WorkSphere ?</h2>
      <div className="why pt-6 flex flex-col items-center justify-center gap-6 md:flex-row p-32 mt-6">
        <WhyCard
          title={"Productivité maximale"}
          sentence={"Un espace de travail optimisé sans distractions."}
          image={productivity}
        ></WhyCard>
        <WhyCard
          title={"Colaboration facile"}
          sentence={"Des outils intuitifs pour travailler en équipe."}
          image={colab}
        ></WhyCard>
        <WhyCard
          title={"Sécurité garantie"}
          sentence={"Données protégées avec un chifrement avancé."}
          image={secu}
        ></WhyCard>
        <WhyCard
          title={"Accessible partout"}
          sentence={"Compatible avec tous vos appareils, sans limites."}
          image={access}
        ></WhyCard>
      </div>

      <div className="tools w-full bg-gray-100 mt-6 flex flex-col items-center justify-center gap-6 m p-32">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="size-64 p-4 rounded-2xl mb-12">
            <h2 className="text-left">Outils essentiels</h2>
            <p className="text-text text-left">
              Des fonctionnalités conçues pour améliorer votre efficacité et
              simplifier votre quotidien. Profitez d’un espace de travail
              optimisé pour mieux organiser vos tâches et collaborer sans
              effort.
            </p>
          </div>
          <ToolCard
            number={"01"}
            title={"Agenda intelligent"}
            sentence={
              "Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
            }
          ></ToolCard>
          <ToolCard
            number={"02"}
            title={"Outils de productivité"}
            sentence={
              "Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
            }
          ></ToolCard>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <ToolCard
            number={"03"}
            title={"Communication fluide"}
            sentence={
              "Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
            }
          ></ToolCard>
          <ToolCard
            number={"04"}
            title={"Tableau de bord"}
            sentence={
              "Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
            }
          ></ToolCard>
          <ToolCard
            number={"05"}
            title={"Partage facile"}
            sentence={
              "Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
            }
          ></ToolCard>
        </div>
      </div>
    </div>
  );
}
