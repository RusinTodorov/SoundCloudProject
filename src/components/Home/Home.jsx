import style from './style.module.css';
import Categories from './Categories/Categories';
import { useSelector } from 'react-redux';

export default function Home() {

    const allTracks = useSelector(state => state.allTracks)

    return (
        <>
            <div className={style.body}>
                <Categories
                    title="Party"
                    details="Popular tracks from the SoundCloud community"
                    data={allTracks.slice(12, 18)} />
                <Categories
                    title="Charts: Top 50"
                    details="The most played tracks on SoundCloud this week"
                    data={allTracks.slice(18, 24)} />
                <Categories
                    title="Workout"
                    details="Popular tracks from the SoundCloud community"
                    data={allTracks.slice(24, 30)} />
                <Categories
                    title="Charts: New & hot"
                    details="Up-and-coming tracks on SoundCloud"
                    data={allTracks.slice(30, 36)} />
                <Categories
                    title="Chill"
                    details="Popular tracks from the SoundCloud community"
                    data={allTracks.slice(36, 42)} />
            </div>
        </>
    );
}