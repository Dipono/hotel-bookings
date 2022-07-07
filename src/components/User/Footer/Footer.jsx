
import star from '../../assets/star.png';
import footer from './Footer.module.css';
function Footer(){

    return(
        <div className={footer.main}>
            <h2>Why Choose Us</h2>
              <div className={footer.content}>
                <div className={footer.card}>
                    <img src={star} alt={star} className={footer.icon}/>
                    <h3>Best Price Guarantee</h3>
                </div>
              </div>

        </div>
    )
}

export default Footer;
