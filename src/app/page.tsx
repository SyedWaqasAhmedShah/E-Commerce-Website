// /app/index.tsx

import React from 'react';
import Slider from './components/Slider';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import ShopexOffer from './components/ShopexOffer';
import UniqueFeatures from './components/UniqueFeatures';
import TrendingProducts from './components/TrendingProducts';
import DiscountItem from './components/DiscountItem';
import TopCategories from './components/TopCategories';

export default function HomePage() {
  return (
    <div>
        <Slider/>
        <FeaturedProducts/>
        <LatestProducts/>
        <ShopexOffer/>
        <UniqueFeatures/>
        <TrendingProducts/>
        <DiscountItem/>
        <TopCategories/>
    </div>
  )
}
