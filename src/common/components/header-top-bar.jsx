import { useNavigate } from 'react-router-dom';
export const HeaderTopBar = (props) => {
  const { cart } = props
  const navigate = useNavigate();
  const handleProfile = () => {
    alert('My profile')
  }
  return (
    <div className="contact-us-block">
      <div className="social-media-link">
        <div className="logo-container">
          <div className="en1">EN</div>
        </div>
        <div className="nested-frame">
          <img
            className="arrow-down-icon2"
            loading="lazy"
            alt=""
            src={process.env.PUBLIC_URL + 'images/arrow-down1.svg'}
          />
        </div>
        <div className="logo-container1">
          <div className="usd1">USD</div>
        </div>
        <div className="label">
          <img
            className="arrow-down-icon3"
            loading="lazy"
            alt=""
            src={process.env.PUBLIC_URL + "images/arrow-down-11.svg"}
          />
        </div>
        <img
          className="profile-close-2-icon1"
          loading="lazy"
          alt=""
          src={process.env.PUBLIC_URL + "images/profile-close-21.svg"}
        />
        <div className="my-profile1" onClick={handleProfile}>My profile</div>
        {!cart ? <div className="cart1">
          <div className="cart-child" />
          <div className="user-account">
            <div className="payment-option" />
            <div className="card-icon">
              <img
                className="system-icon24pxcart"
                loading="lazy"
                alt=""
                src={process.env.PUBLIC_URL + "images/system-icon24pxcart.svg"}
                onClick={() => navigate('/cart')}
                style={{ cursor: 'pointer' }}
              />
              <b className="shape-container">2</b>
            </div>
          </div>
        </div> : null}
        <div className="box">
          <div className="items1">Items</div>
          <div className="copyright-message">$0.00</div>
        </div>
        <img
          className="search-icon1"
          loading="lazy"
          alt=""
          src={process.env.PUBLIC_URL + "images/searchicon1.svg"}
        />
      </div>
    </div>
  )
}