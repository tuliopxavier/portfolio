import { ReactComponent as Copyleft } from "../assets/copyleft.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <small> <Copyleft /> Copyleft 2023</small> 
      <p>Reach out: <a href="mailto:tuliopxavier@gmail.com"><span className='color-motion'>tuliopxavier@gmail.com</span></a></p>
    </footer>
  );
};
