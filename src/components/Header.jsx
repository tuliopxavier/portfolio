import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import "./header.scss";

export const Header = () => {
  // hide nav menu when scrolling down
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    prevScrollpos > currentScrollPos ?
		(document.getElementById('header').style.top = '0rem') :
		(document.getElementById('header').style.top = '-5rem');
    
    prevScrollpos = currentScrollPos;
  };

  return (
    <header id='header'>

      <div id="avatar">
        <span id="avatar" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img alt="Tulio's avatar" src="https://avatars.githubusercontent.com/u/68478459?v=4"/></span>
        {/* <span id="divider"></span> */}
        {/* <span id="works-link" onClick={() => {window.scrollTo(0, window.innerHeight)}} >works</span> */}
      </div>
      
      <div id="social-items">
        <a href="https://calendly.com/tuliopxavier/mentoring" target="_blank" rel="noreferrer"><span id="schedule-mentoring"> schedule mentoring </span></a>
        <a href="http://www.github.com/tuliopxavier" target="_blank" rel="noreferrer" aria-label='link to github profile'><GithubIcon className="social-item"/></a>
        <a href="https://www.linkedin.com/in/tuliopxavier/" target="_blank" rel="noreferrer" aria-label='link to linkedin profile'><LinkedinIcon className="social-item" aria-label='classical linkedin flat icon' /></a>
        <a href="http://www.twitter.com/tuliopxavier" target="_blank" rel="noreferrer" aria-label='link to twitter profile'><TwitterIcon className="social-item" aria-label='classical twitter flat icon' /></a>
      </div>

    </header> 
  );
};
