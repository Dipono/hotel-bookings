
import { useNavigate } from 'react-router-dom'
import home from './Home.module.css';
import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { AiTwotoneCar, AiTwotoneShop } from 'react-icons/ai';
import image1 from '../../../assets/pexels-thorsten-technoman-338504.jpg';
import image2 from '../../../assets/pexels-donald-tong-189296.jpg';


function Home() {
const navigate = useNavigate()

const book_now = () =>{
    navigate('/home_book')
}

    return (
        <div className={home.home}>
            <div className={home.header}>
                <Header></Header>
                <div className={home.companyName}>
                    <h1>Lebute hotel</h1>
                    <button className={home.book} onClick={book_now}>Book Now</button>
                </div>
            </div>
            <div className={home.headerEnd}>
                <div className={home.tapIcon}>
                    <label>Vehicle </label>
                    <span className='react-icon'><AiTwotoneCar size={20} /></span>
                </div>
                <div className={home.tapIcon}>
                    <label>Shops </label>
                    <span className='react-icon'><AiTwotoneShop size={20} /></span>
                </div>
            </div>
            <div className={home.searchBooking}>
                <div className={home.searchBookingValues}>
                    
                </div>
            </div>
            <div className={home.content}>
                <div className={home.left}>
                    <div className={home.image}>
                        <img src={image1} alt={image1} />
                    </div>
                    <div className={home.image} id={home.image2}>
                        <img src={image2} alt={image2} />
                    </div>
                </div>
                <div className={home.right}>
                    <h2>Welcome to Lebute Hotel Resort</h2>
                    <label>The Lebute hotel is the right choice for the one who is in need for relaxation and a convinient position from where to
                        explore surroundings<br /><br />
                        The rooms are rearranged from 1st floor to 4th floor. On the top floor there is charming terrace or solarium  available
                        for the used of guests from where you can enjoy the view.
                    </label>
                </div>
            </div>
            
            <div className={home.footer}>
                {/* <Footer></Footer> */}

            </div>
        </div>
    )
}

export default Home;