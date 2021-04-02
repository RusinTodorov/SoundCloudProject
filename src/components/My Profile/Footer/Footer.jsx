import style from './style.module.css';

export default function Footer() {
    return (
        <div className={style.footer}>
            <p className={style.firstP}>
                Popular searches
                - Directory
                - About us
                - Creator Resources
                - Blog
                - Jobs
                - Developers
                - Help
                - Legal
                - Privacy
                - Cookie Policy
                - Imprint
                - Charts
            </p>
            <p className={style.secondP}>
                Language:
                <span className={style.span}>
                    English (US)
                </span>
            </p>
        </div>
    );
}