import { MenuIcon } from '@heroicons/react/solid'
import { NextComponentType } from 'next'

export const Header: NextComponentType = () => {
    return (
            <header>
                <div className='bg-red-600/50 z-0 flex flex-row justify-between items-center h-20'>
                <h1 className='text-2xl z-40 text-white mt-4 ml-20 font-bold'>Wornhole</h1>
                <MenuIcon className='w-7 mr-5 cursor-pointer mt-4 text-white' />
                </div>
            </header>
    // <div className='bg-black h-[100px]'>
    //     <div>
    //     <div className='flex-1 flex-row'>
    //       <div className='mt-5 flex flex-row justify-between'>
    //       <h1 className='text-white w-20 text-xl'>WornHole</h1>
    //       </div>
    //     </div>
    //     </div>
    //   </div>
    )
}
