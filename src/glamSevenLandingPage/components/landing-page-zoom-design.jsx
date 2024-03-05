export const LandingPageZoomDesign = () => {
    return (
        <>
        <section className="rounded-rectangle-copy">
    <div className="search">
      <img
        className="rectangle-1-copy-10"
        alt=""
        src="./public/rectangle-1-copy-10.svg"
      />
      <img
        className="rectangle-1-copy-19"
        alt=""
        src="./public/rectangle-1-copy-19.svg"
      />
      <div className="infomation-wrapper">
        <div className="infomation5">
          <div className="adidas-men-running-sneakers-wrapper">
            <h1 className="adidas-men-running-container">
              <p className="adidas-men-running">Adidas Men Running</p>
              <p className="sneakers2">Sneakers</p>
            </h1>
          </div>
          <div className="performance-and-design-taken-parent">
            <div className="performance-and-design">
              Performance and design. Taken right to the edge.
            </div>
            <div className="frame-wrapper1">
              <div className="shop-now-parent">
                <div className="shop-now">SHOP NOW</div>
                <img
                  className="frame-child"
                  loading="lazy"
                  alt=""
                  src="./public/rectangle-14.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="input-field-frame">
      <img className="pic-icon2" alt="" src="./public/pic@2x.png" />
      <img
        className="shoes-shoe-png-transparent-sho-icon"
        alt=""
        src={process.env.PUBLIC_URL + '/shoeNew.png'}
      />
    </div>
  </section></>
    )}