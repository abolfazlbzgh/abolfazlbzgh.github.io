import React from 'react'
import PageBox from '../components/PageBox/PageBox'
import Information from '../components/Infromation/Information'

export default function notFound() {
    return (
        <PageBox title={'Not found'} >
            <div className='w-full'>

                <section >
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-sm text-center">
                            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary">404</h1>
                            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageBox>
    )
}
