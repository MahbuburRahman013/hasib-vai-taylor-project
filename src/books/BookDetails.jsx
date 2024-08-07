import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

function BookDetails() {

    const [arr, setArr] = useState([]);
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                const slugData = data.find((book) => book.slug === slug);
                setArr(slugData);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <>

                <div className='min-h-screen flex justify-center items-center'>
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </div>

            </>
        )
    }


    return (
        <div className='mt-20 lg:mt-40 2xl:w-[50%] xl:w-[70%] md:w-[80%]  mx-auto px-3'>
            <div className='flex md:flex-row flex-col justify-between py-5 gap-8'>
                <div className='relative sm:w-[18%]'>
                    <img className='sm:w-full sm:h-full w-[70%]' src={arr?.img} alt="" />
                    {/* <img className='absolute -bottom-[14px] -left-[10px]' src="https://coverimages.igi-global.com/images/free-preview-arrow.png" alt="" /> */}
                </div>
                <div className='sm:w-[82%]'>
                    <h1 className='text-2xl text-black font-medium'>{arr?.title}</h1>
                    <p className='mt-3 text-blue-800'>{arr?.wName}</p>

                    <div className='text-sm mt-3 flex flex-wrap flex-col'>
                        <p><span className='text-gray-500'>Indexed In: </span></p>
                        <div className='flex gap-1 flex-wrap [&>p]:border-r '>
                            <p className='pr-3'><span className='text-gray-500'>Release Date: </span></p>
                            <p className='px-3'><span className='text-gray-500'>Copyright: </span></p>
                            <p className='px-3'><span className='text-gray-500'>Pages: </span></p>
                        </div>

                        <p><span className='text-gray-500'>DOI: </span></p>

                        <div className='flex gap-1 flex-wrap [&>p]:border-r '>
                            <p className='pr-3'><span className='text-gray-500'>ISBN13: </span></p>
                            <p className='px-3'><span className='text-gray-500'>ISBN10: </span></p>
                            <p className='px-3'><span className='text-gray-500'>ISBN13 Softcover: </span></p>
                            <p className='px-3'><span className='text-gray-500'>EISBN13: </span></p>
                        </div>

                    </div>
                    <div className='mt-4'>
                        <Link to={'/contact-us'}>
                        <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            PRE ORDER NOW
                        </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <h1 className='bg-gray-500 text-white text-2xl pb-1 px-3'>Description</h1>

                <div className='my-5 text-sm'>
                    <p className="mt-5" dangerouslySetInnerHTML={{ __html: arr?.des }}></p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails