import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import "./header.scss";

export const Header = () => {
  let prevScrollpos = window.pageYOffset;
  
  // hide nav menu when scrolling down
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('header').style.top = '0rem';
    } else {
      document.getElementById('header').style.top = '-5rem';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header id='header'>

      <div id="avatar">
        <a href="#home"><img src="https://avatars.githubusercontent.com/u/68478459?v=4" alt="circular profile black and white avatar smiling" /></a>
        <span id="divider"></span>
        <a href="#works"><span>works</span></a>
      </div>
      
      <div id="social-items">
        <a href="http://www.github.com/tuliopxavier" target="_blank" rel="noreferrer" ariaLabel='classial github flat icon'><GithubIcon className="social-item"/></a>
        <a href="https://www.linkedin.com/in/tuliopxavier/" target="_blank" rel="noreferrer" ariaLabel='classical linkedin flat icon'><LinkedinIcon className="social-item"/></a>
        <a href="http://www.twitter.com/tuliopxavier" target="_blank" rel="noreferrer" ariaLabel='classical twitter flat icon'><TwitterIcon className="social-item"/></a>
      </div>

    </header> 
  );
};
