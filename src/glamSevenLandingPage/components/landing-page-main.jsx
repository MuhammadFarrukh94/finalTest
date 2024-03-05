import { Footer } from '../../common/components/footer.jsx'
import { HeaderMainMenu } from '../../common/components/header-main-menu.jsx';
import { LandingPagePromotion } from './landing-page-promotion.jsx';
import { HeaderTopBar } from '../../common/components/header-top-bar.jsx';
import { LandingPageZoomDesign } from './landing-page-zoom-design.jsx';
import { LandingPageFeaturedProducts } from './landing-page-featured-products.jsx';
import { LandingPageWhyUs } from './landing-page-why-us.jsx';
import { LandingPageBestSeller } from './landing-page-best-seller.jsx';
import { CartMainPage } from '../../glamSevenCart/components/cart-main-page.jsx'
import { Route, Routes } from 'react-router-dom';
import { LandingPageView } from './landing-page-view.jsx';
export const LandingPageMain = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPageView />} />
      <Route path={'/cart'} element={<CartMainPage />} />
    </Routes>

  )
}