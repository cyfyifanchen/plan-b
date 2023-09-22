import Image from 'next/image'
import MainPage from './main'
import Footer from './footer'
import BlogPage from './blog'

export default function home() {
  return (
    <>
      <MainPage />
      <BlogPage />
      <Footer />
    </>
  )
}
