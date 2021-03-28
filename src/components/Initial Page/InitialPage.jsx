import style from './style.module.css';
import HomeTop from './HomeTop/HomeTop';
import SearchOrUpload from './SearchOrUpload/SearchOrUpload';
import TrendingTrakcs from './TrendingTracks/TrendingTracks';
import NeverStopListening from './NeverStopListening/NeverStopListening';
import CreatorsTeaser from './CreatorsTeaser/Teaser';
import SignUpTeaser from './SignUpTeaser/Teaser';
import Footer from './Footer/Footer';

export default function Home() {

    return (
        <div className={style.body}>
            <HomeTop />
            <SearchOrUpload />
            <TrendingTrakcs />
            <NeverStopListening />
            <CreatorsTeaser />
            <SignUpTeaser />
            <Footer />
        </div>
    );
}