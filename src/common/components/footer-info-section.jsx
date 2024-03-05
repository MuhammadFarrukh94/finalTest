export const FooterInfoSection = ({ title, className }) => (
    <div className={className}>
      <div className={title}><b>{title}</b></div>
      <div className={`${className}-container`}>
        <p className="about-us">About Us</p>
        <p className="infomation">Infomation</p>
        <p className="privacy-policy">Privacy Policy</p>
        <p className="terms-conditions">Terms & Conditions</p>
      </div>
    </div>
  );