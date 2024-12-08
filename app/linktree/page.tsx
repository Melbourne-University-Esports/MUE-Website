import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import LinkBar from '../components/LinkBar'

const LinkPage = () => {
  return (
    <>
        <Navbar />
            <div className="mt-12 px-5 py-8 md:px-80 flex flex-col justify-center items-center bg-white">
                <LinkBar title="🎮MUE Membership 2025! 🎮" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/" image="/logos/icons/umsu.png"/>
                <div className='mt-12 flex flex-col justify-center items-center'>
                    <p className='text-3xl mb-12'>🙌 JOIN US 🙌</p>
                </div>
                <LinkBar title="👾 MUE Discord Server 👾" link="https://discord.gg/VvXuE2NGX6" image="/logos/icons/discord.png"/>
                <LinkBar title="📸MUE Instagram📸" link="https://www.instagram.com/melbuniesports/" image="/logos/icons/instagram.png"></LinkBar>
                <LinkBar title="MUE 小红书" link="https://www.xiaohongshu.com/user/profile/6596163500000000220065a5" image="/logos/icons/w.webp"></LinkBar>
                <LinkBar title="📸MUE Instagram📸" link="https://www.instagram.com/melbuniesports/" image="/logos/icons/instagram.png"></LinkBar>
                <LinkBar title="📸MUE Instagram📸" link="https://www.instagram.com/melbuniesports/" image="/logos/icons/instagram.png"></LinkBar>
            </div>
        <Footer />
    </>
  )
}

export default LinkPage