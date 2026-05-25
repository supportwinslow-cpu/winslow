import Hero from '@/app/(home)/home/Hero'
import Categories from './(home)/home/Categories'
import WhyChooseUs from './(home)/home/WhyChooseUs'
import Testimonials from './(home)/home/Testimonials'
import BrandCompatibility from './(home)/home/BrandCompatibility'
import PromoBanner from './(home)/home/PromoBanner'
import StatsCounter from './(home)/home/StatsCounter'
import VideoPromo from './(home)/home/VideoPromo'

export default function HomePage() {

  return (
    <>
    <h1 className='py-32 font-3xl text-red-500'>
    Hello winslow
    </h1>
      <Hero />
      <Categories />
      <BrandCompatibility />
      <PromoBanner />
      <StatsCounter />
      <VideoPromo />
      <WhyChooseUs />
      <Testimonials />
    </>
  )

}