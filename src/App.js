import React from "react";
import "./styles/styles.scss";
import Curso from "./curso";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 50,
    profesor: "Beto Quiroga",
  },
  {
    title: "HTML desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/312172bf-ddba-409b-9aa3-6bf4c758805e.jpg",
    price: 15,
    profesor: "Beto Quiroga",
  },
  {
    title: "Drupal desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    price: 20,
    profesor: "Alvaro Felipe",
  },
  {
    title: "Sass desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/fe88d109-7807-453e-b357-4858af36bf28.jpg",
    price: 30,
    profesor: "Alvaro Felipe",
  },
];

const App = () => (
  <>
    <article className="card">
      {cursos.map((curso) => (
        <Curso
          title={curso.title}
          image={curso.image}
          price={curso.price}
          profesor={curso.profesor}
        />
      ))}
    </article>
  </>
);

export default App;
