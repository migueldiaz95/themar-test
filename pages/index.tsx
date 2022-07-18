import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SectionModal, Footer, Header } from '../components'
import { MenuIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col bg-purple-900 w-auto max-h-screen'>
      <Header />
      <SectionModal />
      <Footer />
    </div>
  )
}

export default Home
