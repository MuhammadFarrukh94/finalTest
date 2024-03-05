import './cart.css'
import {useEffect,useState} from 'react'
import { getProducts } from '../../glamSevenLandingPage/functions/get-products.function';
import QuantityInput from '../../common/components/increment';
import DeleteIcon from '@mui/icons-material/Delete';
export const CartBody = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => {
           setFeaturedProducts(res[0]);
          })
          .catch(err => console.error(err));
      }, []);
    return (
        <div className="westernunion-frames">
        <div className="paypal-frame">
          <div className="master-card-frame">
            <div className="subtotal-section">
              <div className="voucher-code-input1">
                <div className="shipping-fee-coupon">
                  <div className="product">PRODUCT</div>
                  <div className="divider-line">
                    <div className="price">PRICE</div>
                    <div className="checkout-button">
                      <div className="qty">QTY</div>
                    </div>
                    <div className="unit-price">UNIT PRICE</div>
                  </div>
                </div>
              </div>
              <img
                className="divider-icon"
                loading="lazy"
                alt=""
                src="./public/divider.svg"
              />
              <div className="rectangle-divider" />

            </div>
            <div className="subtotal-label">
              <div className="shipping-fee-label">
              <DeleteIcon color='error'/>
                <div className="subtotal-container">
                  <img className="pic-icon" alt="" src="./public/pic.svg" />

                  <img
                    className="product-image-icon"
                    loading="lazy"
                    alt=""
                    src={featuredProducts?.image}
                  />
                </div>
                <div className="base-frame1">
                  <div className="nike-airmax-2701">{featuredProducts?.title}</div>
                </div>
              </div>
              <div className="icon-frame-parent">
                <div className="icon-frame1">
                  <div className="e-comm-text">${featuredProducts.price}</div>
                </div>
                <div className="footer-section">
                  <div className="icon-coin-inscrease"><QuantityInput /></div>
                  <div className="frame-subtotal">
                    <img
                      className="rectangle-11-copy-3"
                      alt=""
                      src="./public/rectangle-11-copy-3.svg"
                    />
                  </div>
                </div>
                <div className="icon-frame2">
                  <div className="bbaeacceeafc">${featuredProducts?.price}</div>
                </div>
              </div>
            </div>
            <img
              className="divider-icon1"
              loading="lazy"
              alt=""
              src="./public/divider.svg"
            />
          </div>
          <div className="outer-divider">
            <div className="subtotal-with-coupon">
              <div className="form">
                <div className="search-wrapper">
        <div className="search1">
          <div className="rounded-rectangle-3" />
            <div className="search-query">Voucher code</div>
          <button className="frame-b" onClick={()=>alert('hello Redeem')}>
            <div className="search2">Redeem</div>
          </button>
        </div>
      </div>
              </div>
              <div className="subtotal-items1">
                <div className="no">
                  <div className="subtotal-shipping-coupon-frame1">
                    <div className="subtotal">Subtotal</div>
                    <div className="shipping-fee">Shipping fee</div>
                    <div className="coupon">Coupon</div>
                  </div>
                  <div className="subtotal-shpping-info">
                    <div className="additional-text">${featuredProducts.price}</div>
                    <div className="subtotal-shpping-info1">
                      <div className="no-number">$20</div>
                    </div>
                    <div className="subtotal-shpping-info2">
                      <div className="no1">No</div>
                    </div>
                  </div>
                </div>
                <div className="divider-line2">
                  <img
                    className="divider-icon3"
                    loading="lazy"
                    alt=""
                    src="./public/divider-3.svg"
                  />
                </div>
                <div className="total-amount">
                  <h2 className="total">TOTAL</h2>
                  <div className="div1">${featuredProducts.price + 20}</div>
                </div>
                <button className="t-o-t-a-l-f-r-a-m-e" onClick={()=>alert('Check Out')}>
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}