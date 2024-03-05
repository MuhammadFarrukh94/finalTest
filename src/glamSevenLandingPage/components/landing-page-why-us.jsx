export const LandingPageWhyUs = () => {
    const whyUsArray = [{ image: 'shipping.svg', title: 'FREE SHIPING' }, { image: process.env.PUBLIC_URL + '/refund.svg', title: '100% REFUND' }, { image: 'support.svg', title: 'SUPPORT 24/7' }]
    return (
        <section className="rounded-rectangle-node">
            <div className="why-us">
                {whyUsArray.map((item) => (
                    <div className="twitter-logo-frame" key={item.id}>
                        <div className="refund-parent">
                            <img src={process.env.PUBLIC_URL + '/images/' + item.image} alt="Free Shipping" />
                            <div className="refund">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}