import "./home.scss";

export const Home = () => {
  return (
    <div id="home">
      <p>Hi, I'm <span className='color-motion'>Túlio Xavier</span>.</p>
      <p>I am a brazilian <span className='color-motion'>front-end developer</span> with a background in design and a keen eye for digital solutions, based in Salvador, Brazil. <a href="mailto:tuliopxavier@gmail.com" target='_blank' rel="noreferrer">Let's talk</a>.</p>
      <p>Studying Computer Science bachelor degree and building projects with Typescript, Javascript, React, Sass, Styled Components ecosystem.</p>
    </div>
    // <div id="home">
    //   <p>Hi, I'm <span>Túlio Xavier</span>.</p>
    //   <p>I am a brazilian <span>front-end developer</span>, graphic designer and art director with a keen eye for digital solutions, based in Salvador, Brazil.</p>
    //   <p>Studying Computer Science bachelor degree and building projects with Javascript/React/Sass/Styled Components ecosystem.</p>
    // </div>
  );
};
