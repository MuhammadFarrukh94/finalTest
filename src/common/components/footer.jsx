import { EComLog } from "./e-com-log";
import { FooterInfoSection } from "./footer-info-section";
export const Footer = () => {
    return (
        <section className="footer1">
            <footer className="footer-item" />
            <div className="frame-c">
                <div className="frame-d">
                    <div className="facebook-icon2">
                        <div className="lorem-ipsum-text">
                            <EComLog />
                            <div className="lorem-ipsum-is1">
                                Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever.Since the 1500s, when an unknown printer.
                            </div>
                        </div>
                    </div>
                    <div className="header-frame">
                        <div className="follow-us-parent">
                            <div className="follow-us1"><b>Follow Us</b></div>
                            <div className="since-the-1500s1">
                                Since the 1500s, when an unknown printer took a galley of type and
                                scrambled.
                            </div>
                            <div className="contact-details-frame">
                                <div className="infomation-frame1">
                                    <img
                                        className="facebook-icon3"
                                        alt=""
                                        src="./public/facebook.svg"
                                    />
                                    <img
                                        className="twitter-icon2"
                                        alt=""
                                        src="./public/twitter.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-account-frame3">
                        <div className="contact-us1"><b>Contact Us</b></div>
                        <div className="e-comm-45781">
                            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-left-frame">
                <div className="infomation-left-frame">
                    <div className="header-middle-frame">
                        <FooterInfoSection title="Infomation" className="information-frame-b" />
                        <FooterInfoSection title="Service" className="about-us-terms-b" />
                        <FooterInfoSection title="My Account" className="footer-contact-us" />
                        <FooterInfoSection title="Our Offers" className="offer-showcase" />
                    </div>
                </div>
                <div className="master-card-frame3">
                    <div className="rectangle-divider" />
                    <div className="paypal-frame3">
                        <div className="master-card-frame4">
                            <div className="ecommerce-theme-by1">
                                © 2018 Ecommerce theme by www.bisenbaev.com
                            </div>
                        </div>
                        <div className="footer-info">
                            <img
                                className="western-union-icon1"
                                loading="lazy"
                                alt=""
                                src= {process.env.PUBLIC_URL +"images/westernunion.svg"}
                            />
                            <div className="westernunion-paypal-frame">
                                <div className="shape-327-group">
                                    <img
                                        className="shape-327-icon2"
                                        alt=""
                                        src={process.env.PUBLIC_URL +"images/shape-327.svg"}
                                    />
                                    <img
                                        className="shape-329-icon2"
                                        alt=""
                                        src={process.env.PUBLIC_URL +"images/shape-329.svg"}
                                    />
                                    <img
                                        className="shape-329-icon3"
                                        alt=""
                                        src={process.env.PUBLIC_URL +"images/shape-329-1.svg"}
                                    />
                                </div>
                                <div className="mastercard1">MasterCard</div>
                            </div>
                            <img
                                className="paypal-icon1"
                                loading="lazy"
                                alt=""
                                src={process.env.PUBLIC_URL +"images/paypal.svg"}
                            />
                            <div className="westernunion-paypal-frame1">
                                <div className="shape-327-container">
                                    <img
                                        className="shape-327-icon3"
                                        alt=""
                                        src={process.env.PUBLIC_URL +'images/shape-327-1.svg'}
                                    />
                                    <div className="shape-328-group">
                                        <img
                                            className="shape-328-icon2"
                                            alt=""
                                            src="./public/shape-328.svg"
                                        />
                                        <img
                                            className="shape-328-icon3"
                                            alt=""
                                            src={process.env.PUBLIC_URL+"images/shape-328-1.svg"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}