import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button
  } from "@material-tailwind/react";
  import React from "react";
   
  export default function Card_projet() {
    const projets = [
      {
        id:1,
        name: 'Météo App',
        description: 'Une application météo dynamique développée en HTML, CSS et JavaScript, exploitant une API météo pour fournir des prévisions.',
        link: 'https://meteoappbyhicham.netlify.app/'
      },
    ]
    return (
      <>
      {projets.map((projet) => (
        <React.Fragment key={projet.id}>
      <Card className="max-w-[24rem] relative my-6">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
          >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
            />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {projet.name}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {projet.description}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Hicham Zouit">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="pika.png"
                className="border-2 border-white hover:z-10"
                />
            </Tooltip>
            
          </div>
          <a href={projet.link} target="_blank">
          <Button >Voir Plus</Button>
          </a>
        </CardFooter>
      </Card>
      </React.Fragment>
      ))}
      </>
    );
  }