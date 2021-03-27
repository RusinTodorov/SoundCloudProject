import style from './style.module.css';
import HomeTop from './HomeTop/HomeTop';
import SearchOrUpload from './SearchOrUpload/SearchOrUpload';
import TrendingTrakcs from './TrendingTracks/TrendingTracks';

export default function Home1() {

    return (
        <div className={style.body}>
            <HomeTop />
            <SearchOrUpload />
            <TrendingTrakcs />
        </div>
    );
}