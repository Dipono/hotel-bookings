
//import about from './About.module.css';
import Header from '../Header/Header'

function Contacts(){

    return(
        <div className={about.main}>
            <Header></Header>
            <h2>About Company</h2>
              <div className={about.content}>
                <div className={about.card}>
                    <h3>Best Price Guarantee</h3>
                </div>
              </div>
        </div>
    )
}

export default Contacts;
