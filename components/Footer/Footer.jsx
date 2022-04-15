import Link from "next/link";
import styles from "../Footer/footer.module.css";
import { BsPhone } from "react-icons/Bs";
import { FaMapMarkerAlt } from "react-icons/Fa";
import { AiOutlineMail } from "react-icons/Ai";




const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="/">© Copyright 2021 Dungys Bar</Link>
        <p><BsPhone style={{fontSize: "30px"}}/> (320) 333-3214</p>
        
      <p> <FaMapMarkerAlt style={{fontSize: "30px"}}/> Montevideo, Uruguay 56265</p>
      <p> <AiOutlineMail style={{fontSize: "30px"}}/><Link href=""> DungysLiquorLLC@live.com </Link></p>
    </div>
  );
};

export default Footer;
