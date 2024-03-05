import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export const LandingPageFeaturedProducts = () => {
  const [featuredProducts,setFeaturedProducts] = useState();
    const helloSearch = () => {
        alert('Hello Search')
    }
    useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
    .then(res => {
      const firstThreeProducts = res.data.slice(0, 3);
      setFeaturedProducts(firstThreeProducts);
      console.log(firstThreeProducts);
    })
    .catch(err => console.error(err));
}, []);
    {console.log(featuredProducts)}
    return (
        <section className="our-offers-frame2">
    <div className="westernunion-paypal-frames-gro">
      <div className="search-container">
        <div className="container-frame">
          <h2 className="featured-products">FEATURED PRODUCTS</h2>
        </div>
        
        <div className="text-input-field1">
          <div className="label1">
            <div className="separator-line">
              <div className="button">
                <div className="rounded-rectangle-shape">
                  <img
                    className="rectangle-1-copy-25"
                    loading="lazy"
                    alt=""
                    src={featuredProducts && featuredProducts[0]?.image}
                  />
                </div>
              </div>
              <div className="blue-swade-nike">{featuredProducts && featuredProducts[0].title}</div>
              <div className="contact-us-info-wrapper">
                <div className="contact-us-info">
                  <img
                    className="rectangle-1-copy-251"
                    loading="lazy"
                    alt=""
                    src={featuredProducts && featuredProducts[1]?.image}
                  />
                </div>
              </div>
            </div>
            <img
              className="rate-icon5"
              loading="lazy"
              alt=""
              src="./public/rate-5.svg"
            />
            <div className="privacy-policy4">
              <div className="terms-of-service">{featuredProducts && featuredProducts[0].price}</div>
              <div className="search-bar-container">
              </div>
            </div>
          </div>
          <div className="label2">
            <div className="blue-swade-nike-sneakers-parent">
              <div className="blue-swade-nike1">{featuredProducts && featuredProducts[1].title}</div>
              <div className="inner-frame-wrapper">
                <div className="inner-frame">
                  <img
                    className="rectangle-1-copy-252"
                    loading="lazy"
                    alt=""
                    src={featuredProducts && featuredProducts[2]?.image}
                  />
                </div>
              </div>
            </div>
            <img
              className="rate-icon6"
              loading="lazy"
              alt=""
              src="./public/rate-5.svg"
            />
            <div className="parent5">
              {/* <div className="div6">$499</div> */}
            </div>
          </div>
          <div className="label3">
            <div className="blue-swade-nike2">{featuredProducts && featuredProducts[2].title}</div>
            <img
              className="rate-icon7"
              loading="lazy"
              alt=""
              src="./public/rate-5.svg"
            />
            <div className="parent7">
              {/* <div className="div8">$499</div> */}
              
            </div>
          </div>
        </div>
      </div>
      <div className="search-wrapper">
        <div className="search1">
          <div className="rounded-rectangle-3" />
            <div className="search-query">Search query...</div>
          <button className="frame-b" onClick={helloSearch}>
            <div className="search2">Search</div>
          </button>
        </div>
      </div>
      
    </div>
  </section>)
}