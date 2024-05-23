import React from 'react'
import PageBox from '../components/PageBox/PageBox'
import Information from '../components/Infromation/Information'
import { Link } from 'react-router-dom'

export default function notFound() {
    return (
        <PageBox title={'Not found'} >
            <div className='w-full'>

                <section >
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-sm text-center">
                            <h1 class="mb-4 text-5xl tracking-tight font-extrabold lg:text-7xl text">404</h1>
                            <p class="mb-4 text-xl tracking-tight font-bold  md:text-2xl text ">Something's missing.</p>
                            <Link to='/' className='mb-4 text-lg font-light gradient px-4 py-2 rounded-full shadow-lg text-white transition-all' >
                                Home Page
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageBox>
    )
}
