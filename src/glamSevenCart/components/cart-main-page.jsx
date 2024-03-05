import {Footer} from '../../common/components/footer.jsx'
import {HeaderMainMenu} from '../../common/components/header-main-menu.jsx';
import {HeaderTopBar} from '../../common/components/header-top-bar.jsx';
import { CartBody } from './cart-body.jsx';
export const CartMainPage = () => {
    return (
        <div className="landing-page">
        <header className="input-field">
            <div className="footer-area">
                <HeaderTopBar cart={true}/>
                <HeaderMainMenu />
            </div>
        </header>
        <CartBody />
        <Footer />
    </div>
    )
}