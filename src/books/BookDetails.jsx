import React from 'react'

function BookDetails() {
    return (
        <div className='mt-20 lg:mt-40 2xl:w-[50%] xl:w-[70%] md:w-[80%]  mx-auto px-3'>
            <div className='flex md:flex-row flex-col justify-between py-5 gap-8'>
                <div className='relative sm:w-[18%]'>
                    <img className='sm:w-full sm:h-full' src="https://coverimages.igi-global.com/cover-images/covers/9781668499535.webp" alt="" />
                    <img className='absolute -bottom-[14px] -left-[10px]' src="https://coverimages.igi-global.com/images/free-preview-arrow.png" alt="" />
                </div>
                <div className='sm:w-[82%]'>
                    <h1 className='text-2xl text-black font-medium'>History and Educational Philosophy for Social Justice and Human Rights</h1>
                    <p className='mt-3 text-blue-800'>Jahid Siraz Chowdhury, Kumarashwaran Vadevelu, A.F.M. Zakaria, Abdullah Al-Mamun, Sajib Ahmed</p>

                    <div className='text-sm mt-3 flex flex-wrap flex-col'>
                        <p><span className='text-gray-500'>Indexed In: </span>SCOPUS</p>
                        <div className='flex gap-1 flex-wrap [&>p]:border-r '>
                            <p className='pr-3'><span className='text-gray-500'>Release Date: </span>March, 2024</p>
                            <p className='px-3'><span className='text-gray-500'>Copyright: </span>© 2024</p>
                            <p className='px-3'><span className='text-gray-500'>Pages: </span>277</p>
                        </div>

                        <p><span className='text-gray-500'>DOI: </span>10.4018/978-1-6684-9953-5</p>

                        <div className='flex gap-1 flex-wrap [&>p]:border-r '>
                            <p className='pr-3'><span className='text-gray-500'>ISBN13: </span>9781668499535</p>
                            <p className='px-3'><span className='text-gray-500'>ISBN10: </span>1668499533</p>
                            <p className='px-3'><span className='text-gray-500'>ISBN13 Softcover: </span>9798369346600</p>
                            <p className='px-3'><span className='text-gray-500'>EISBN13: </span>9781668499542</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <h1 className='bg-gray-500 text-white text-2xl px-3'>Description</h1>

                <div className='my-5 [&>p]:my-3 text-sm'>
                    <p>
                        In the complex landscape of educational philosophy and policy, a difficult challenge arises — the entwined issues of racism and other demographic differences, and evolving education policies. Traditional historical accounts fall short of addressing the broader historical patterns that underscore these challenges, particularly their colonial legacy. The need for a fresh perspective becomes evident, one that transcends chronology and delves into the intricate dynamics shaping contemporary educational thought.
                    </p>
                    <p>
                    Differences in teaching philosophy have become a contentious focal point, revealing the deep-seated struggles within public institutions, particularly schools. Tensions and conflicts surrounding differences persist both in structuring these institutions and in civil society, necessitating an initiative-taking response. The prevailing skepticism and fatalism regarding the potential of democratic societies, public policies, and education itself are challenges that demand a comprehensive solution. <b>History and Educational Philosophy for Social Justice and Human Rights</b> contends that these tensions are not insurmountable obstacles; rather, they are the very crucibles from which civic-moral learning and an inclusive democracy can emerge.
                    </p>
                    <p>
                    <strong>History and Educational Philosophy for Social Justice and Human Rights</strong> emerges as a groundbreaking solution to this conundrum. Through a broad developmental and historical lens, the book provides a fresh perspective on the role of differences as the core, content, and subject of education. It advocates for cultural resistance and a permanent political struggle by political-cultural minorities and social movements, while also challenging public institutions, especially schools, to actively embrace and utilize differences in their foundational work. By engaging with the tensions and struggles around differences, the book contends that institutions can transform, becoming agents of positive change, and contributing to the foundation of an inclusive and participatory democracy. This book invites scholars and educators to not only understand the challenges but to actively participate in shaping a future where differences are not merely acknowledged but celebrated within the realms of education and society at large.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails