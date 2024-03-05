export const LandingPagePromotion = () => {
  return (
    <section className="promotion-image-parent">
    <img
      className="promotion-image-icon"
      loading="lazy"
      alt=""
      src={process.env.PUBLIC_URL + '/promotion-image@2x.png'}
    />
    {/* <h1 className="title">
      <p className="super-flash-sale">Super Flash Sale</p>
      <p className="off">50% Off</p>
    </h1> */}
  </section>
  );
}