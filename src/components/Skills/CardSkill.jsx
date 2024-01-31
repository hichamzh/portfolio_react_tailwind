import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { FaFigma,FaGithub,FaHtml5,FaCss3Alt } from "react-icons/fa";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  export default function CardSkill() {
    const skills = [
      {
        id:1,
        name: 'Github',
        icon: <FaGithub className="h-full w-full"/>,
        description: "Plateforme de développement collaboratif, hébergeant des projets et gérant les versions à l'aide de Git."
      },
      {
        id:2,
        name: 'Vscode',
         icon: <TbBrandVscode className="h-full w-full"/>,
         description: 'Éditeur de code léger, extensible, intégrant Git, diverses extensions, supportant plusieurs langages.'
      },
      {
        id:3,
        name: 'Figma',
         icon: <FaFigma className="h-full w-full"/>,
         description: "Outil de conception collaboratif sur le cloud, pour créer des interfaces utilisateur et collaborer en temps réel."
      },
      {
        id:4,
        name: 'Html5',
         icon: <FaHtml5 className="h-full w-full"/>,
         description: 'Dernière version du langage de balisage, structurant le contenu des pages web.'
      },
      {
        id:5,
        name: 'Css',
         icon: <FaCss3Alt className="h-full w-full"/>,
         description: 'Langage de style permettant de mettre en forme et de présenter visuellement des documents HTML.'
      },
      {
        id:6,
        name: 'JavaScript',
         icon: <IoLogoJavascript className="h-full w-full"/>,
         description: 'Langage de programmation client, ajoutant des fonctionnalités interactives et dynamiques aux pages web.'
      },
    ];

    return (
      <>
         {skills.map((skill) => (
        <React.Fragment key={skill.id}>
      <Card className="mt-6 w-80 max-h-[281px] bg-gradient-to-r from-teal-400 to-indigo-800 text-white">
        <CardBody >
          <div className="h-12 w-12 grid place-items-center mb-4">
          {skill.icon}
          </div>

          <Typography variant="h5" className="mb-2">
            {skill.name}
          </Typography>
          <Typography>
            {skill.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 text-white">
              Voir plus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>

      </Card>
        </React.Fragment>
         ))}
         </>
    );
  }