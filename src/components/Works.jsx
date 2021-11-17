import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
import { ReactComponent as WWWIcon } from '../assets/www-icon.svg';
import { worksList } from '../worksList.js';
import './works.scss';

export const Works = () => {

  return (
    <div id='works'>

      {worksList.map(({ id, imgUrl, name, description, demoUrl, codeUrl }) => {
        return (
          <div key={id}>
            <div className='container' key={name} loading='lazy'>
              <div className='img-container'>
                <img src={imgUrl} alt={`${name} print screen`} />
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
              <div className='container-overlay'>
                <a href={demoUrl} target='_blank' rel='noreferrer'>
                  <WWWIcon className='social-item' />
                  Demo
                </a>
                <a href={codeUrl} target='_blank' rel='noreferrer'>
                  <GithubIcon className='social-item' />
                  Code
                </a>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};
