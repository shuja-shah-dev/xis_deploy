import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
const router = useRouter();
const {slug} = router.query

  return (
    <div className='flex'>
      <h1 className='text-xl font-bold'>Title of the page {slug}</h1>
      <div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut soluta nam nisi eligendi quia nemo facilis repellendus aspernatur, reiciendis, quaerat quis provident.
      </div>
    </div>
  )
}

export default slug
