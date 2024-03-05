import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { getProducts } from '../functions/get-products.function';
import { LandingPageBreadcromb } from './landing-page-breadcrumb';
import { offerFunction } from '../../common/functions/offer-function';
export const LandingPageBestSeller = () => {
  const [featuredProducts, setFeaturedProducts] = useState();
  const helloSearch = () => {
    alert('Hello Search')
  }
  useEffect(() => {
    getProducts().then(res => {
       setFeaturedProducts(res);
      })
      .catch(err => console.error(err));
  }, []);
  return (<>
    <section className="master-card-frame1">
      <div className="paypal-frame1">
        <div className="items-grid-parent">
          <h2 className="best-seller">BEST SELLER</h2>
          <div className="frame-container">
            <div className="frame-wrapper">
              <div className="all-bags-sneakers-belt-sunglas-parent">
                <div className="all-bags-sneakers-container" style={{display:'flex'}}>
                  <span>All</span>
                  <div role="presentation" className='bags2'>
                   <LandingPageBreadcromb />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <ImageList sx={{ width: "100%", height: 932, ml: 3 }} cols={4}>
            {featuredProducts?.map((item) => (
              <ImageListItem key={item.img} cols={1}>
                <img
                  srcSet={item.image}
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '301px', height: '279.1px', objectFit: 'cover' }}
                />
                <ImageListItemBar
                  title={item.title}
                  style={{ width: '301px' }}
                  position="below"
                />
                <div className="rectangle-copy2" style={{ display: 'flex' }}>
                  <div className="ecomm-master-card">
                    <b className="nike-air-max4">{item.category}</b>
                    <div className="paypal-frame2">
                      <b className="b1">{offerFunction(item.price)}</b>
                      <div className="frame-parent1">
                        <div className="frame">${item.price}</div>
                        <b className="off5">24% Off</b>
                      </div>
                    </div>
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>

        </div>
      </div>

    </section>
  </>
  )
}