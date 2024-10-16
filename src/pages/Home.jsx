import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsLetter'
import Sale from '../components/Sale'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Sale/>
      <LatestCollection />
      <NewsletterBox/>
    </div>
  )
}

export default Home