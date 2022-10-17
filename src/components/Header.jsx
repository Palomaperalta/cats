/** @jsxImportSource @emotion/react */
import {Link} from 'react-router-dom'
import Switch from "react-switch";
import {useContext} from "react"
import { ThemeContext } from './../App';
import * as styles from './Header.styles'

function Header({children}){
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div css={styles.header}>
            <div css={styles.title}>
                        <div css={styles.themeswitch}>
                            <h1>
                                30 DAYS OF REACT
                            </h1>
                            <div className="div-switch">
                                <Switch onChange={() => setTheme(!theme)} checked={theme} />
                            </div>
                        </div>
                <div css={styles.route}>
                    <Link css={styles.home} to="/">
                        Home
                    </Link>
                    <Link css={styles.about} to="/about">
                        About
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header