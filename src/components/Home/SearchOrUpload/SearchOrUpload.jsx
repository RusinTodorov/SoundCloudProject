import style from './style.module.css';
import { Link } from 'react-router-dom';

export default function SearchOrUpload() {
    
    function search(e) {
        // to do show results in Search Page
    }

    return (
        <div className={style.searchOrUploadDiv}>
            <span>
                <span>
                    <form className={style.form} onSubmit={search}>
                        <input className={style.input}
                         placeholder="Search for artists, bands, tracks, podcasts" 
                         type="search" name="search" autoComplete="off" />
                <button className={style.submit} type="submit">Search</button>
                    </form>
                </span> 
                or 
                <Link to="/Upload" className={style.linkToUpload}>Upload your own</Link>
            </span>
        </div>
    );
}