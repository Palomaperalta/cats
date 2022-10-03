import {Link} from 'react-router-dom'
import Switch from "react-switch";
import {useContext} from "react"
import { ThemeContext } from './../App';

function Header({children}){
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div className='header'>
            <div className="title">
                <h1>
                    30 DAYS OF REACT
                </h1>
                <div className="switch">
                    <Switch onChange={() => setTheme(!theme)} checked={theme} />
                </div>
                <div className='route'>
                    <Link className='home' to="/">
                        Home
                    </Link>
                    <Link className='about' to="/about">
                        About
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header