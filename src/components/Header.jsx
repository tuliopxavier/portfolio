import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import "./header.scss";

export const Header = () => {
  return (
    <header>

      <div id="avatar">
        <a href="#home"><img src="https://avatars.githubusercontent.com/u/68478459?v=4" alt="rounded avatar" /></a>
        <span id="divider"></span>
        <a href="#works"><span>works</span></a>
      </div>
      
      <div id="social-items">
        <a href="http://www.github.com/tuliopxavier" target="_blank" rel="noreferrer"><GithubIcon className="social-item" /></a>
        <a href="https://www.linkedin.com/in/tuliopxavier/" target="_blank" rel="noreferrer"><LinkedinIcon className="social-item" /></a>
        <a href="http://www.twitter.com/tuliopxavier" target="_blank" rel="noreferrer"><TwitterIcon className="social-item" /></a>
      </div>

    </header> 
  );
};
