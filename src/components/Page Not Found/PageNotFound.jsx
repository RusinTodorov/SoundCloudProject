import Header from './Header/Header';
import Footer from './Footer/Footer';
import img from './Page Not Found.png';

export default function PageNotFound() {

    return (
    <>
    <Header />
    <div style={{marginLeft: '237px'}}>
        <img src={img} alt="404 Error Page" />
    </div>
    <Footer />
    </>
    );
} 