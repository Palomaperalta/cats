import './MainLayout.css'
import Header from './../Header';

function MainLayout({children}){
    return (
        <div className='mainlayout'>
            <Header />
            <div className='content'>
                {children}
            </div>
        </div>
    )
}
export default MainLayout;