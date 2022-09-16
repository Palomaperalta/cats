import {Link} from 'react-router-dom'

function Header({children}){
    return (
        <div className='header'>
            <div className="title">
                <h1>
                    30 DAYS OF REACT
                </h1>
                <div className="day"> 
                    DAY 20
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