import { worksList } from '../utils/worksList.js';
import './works.scss';

export const Works = () => {

  return (
    <section id='works'>

      {worksList.map((item) => {
        return (
        <article key={item.id} className='work-container'>
          <a href={item.repo} target='_blank' rel="noreferrer"><h3>{item.name}</h3></a>
          <a href={item.demo} target='_blank' rel="noreferrer">See project online</a>
          <p>{item.description}</p>
          <ul>
            {item.topics.map((tag) => {
              return(
                <li key={tag}>{tag}</li>
              )
            })}
          </ul>
          <p><span className='dot' style={{backgroundColor: `${item.color}`}} ></span>{item.language}</p>

        </article>
      )})}

    </section>
  );
};
