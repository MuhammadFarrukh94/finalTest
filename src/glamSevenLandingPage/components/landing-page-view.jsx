import { Footer } from '../../common/components/footer.jsx'
import { HeaderMainMenu } from '../../common/components/header-main-menu.jsx';
import { LandingPagePromotion } from './landing-page-promotion.jsx';
import { HeaderTopBar } from '../../common/components/header-top-bar.jsx';
import { LandingPageZoomDesign } from './landing-page-zoom-design.jsx';
import { LandingPageFeaturedProducts } from './landing-page-featured-products.jsx';
import { LandingPageWhyUs } from './landing-page-why-us.jsx';
import { LandingPageBestSeller } from './landing-page-best-seller.jsx';

export const LandingPageView = () => {
    return (
        <div className="landing-page">
            <header className="input-field">
                <div className="footer-area">
                <HeaderTopBar cart={false}/>
                    <HeaderMainMenu />
                </div>
            </header>
            <LandingPagePromotion />
            <LandingPageBestSeller />
            <LandingPageZoomDesign />
            <LandingPageWhyUs />
            <LandingPageFeaturedProducts />
            <Footer />
        </div>
    )
}