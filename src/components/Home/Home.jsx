import style from './style.module.css';
import Header from './Header/Header';
import Categories from './Categories/Categories';
import Data from './Data/Data';

export default function Home() {
    return (
        <>
            <Header />
            <div className={style.body}>
                <Categories
                    title="Party"
                    details="Popular tracks from the SoundCloud community"
                    data={Data.slice(0, 6)} />
                <Categories
                    title="Charts: Top 50"
                    details="The most played tracks on SoundCloud this week"
                    data={Data.slice(6, 12)} />
                <Categories
                    title="Workout"
                    details="Popular tracks from the SoundCloud community"
                    data={Data.slice(12, 18)} />
                <Categories
                    title="Charts: New & hot"
                    details="Up-and-coming tracks on SoundCloud"
                    data={Data.slice(18, 24)} />
                <Categories
                    title="Chill"
                    details="Popular tracks from the SoundCloud community"
                    data={Data.slice(24, 30)} />
            </div>
        </>
    );
}