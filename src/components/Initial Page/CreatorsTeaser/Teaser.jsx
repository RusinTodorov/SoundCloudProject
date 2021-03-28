import style from './style.module.css';

export default function Teaser() {

    return (
        <div className={style.divWraper}>
            <div className={style.insideDiv}>
                <div className={style.title}>
                    Calling all creators
                </div>
                <p className={style.details}>
                    Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?
                </p>
                <div>
                    <a className={style.moreBtn} 
                    href="https://creators.soundcloud.com" 
                    target="_blank" 
                    rel="noreferrer">
                        Find out more
                    </a>
                </div>
            </div>
        </div>
    );
}