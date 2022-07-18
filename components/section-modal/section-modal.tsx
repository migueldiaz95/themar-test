import { NextComponentType } from "next"

export const SectionModal: NextComponentType = () => {
  return (
    <section className='w-full text-center'>
      <div className="max-w-md mx-auto mt-10 mr-10 ml-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center">
        <div className="md:flex">
          <div className="p-8">
            <a href="#" className="block mt-1 text-xl text-center leading-tight font-bold text-black hover:underline">Simple, private file sharing</a>
            <p className="mt-2 text-slate-500">Wormhole lets you share files with end-to-end encryption and a link that automatically expires. So you can keep what you share private and make sure your stuff does not stay online forever.</p>
          </div>

          <div className='group m-5 flex justify-center items-center flex-col border-2 border-dotted border-black w-auto h-225 md:h-420 cursor-pointer rounded-lg'>
            <button type="button" className="text-black mt-20 md:w-auto bg-purple-200 w-60 h-10 px-4 py-2 rounded-lg">Select files to send</button>
            <p className="mb-20">Or drag stuff here</p>
          </div>

        </div>
      </div>
    </section>
  )
}


// <div>
    //   <div className="mt-10">
    //     <div className='bg-black opacity-80 w-100 h-100 rounded-lg m-10'>
    //       <div className='m-5'>
    //         <div>
    //           <div className='h-80 rounded-md'>
    //             <h2 className='text-white text-center m-10 font-bold text-2xl'>Simple, private file sharing</h2>
    //             <p className='m-3 text-white'>Wormhole lets you share files with end-to-end encryption and a link that automatically expires. So you can keep what you share private and make sure your stuff does not stay online forever.</p>
    //           </div>
    //         </div>
    //         <div>
    //           <a className='text-white' href="">aqui hay un enlace</a>
    //         </div>
    //       </div>
    //       <div>
    //         <div className='text-center'>
    //           <div className='bg-yellow-700'>
    //             <div>
    //               <button className='text-white'>Select files to send</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='text-center'>
    //         <div className='text-white'>
    //           send up to 10GB
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
