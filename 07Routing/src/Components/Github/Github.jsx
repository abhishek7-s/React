import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const {userId} = useParams()
    let data = useLoaderData()
    /* OR */
    // let [data , setdata] = useState(useLoaderData())
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${userId}`)
    //     .then((res)=>(res.json()))
    //     .then((res)=>(setdata(res)))
    // },[])


  return (
    <>
    <h1>{userId}</h1>
      <div className='flex gap-5 justify-center items-center bg-gray-600'>
        <img src={data.avatar_url} className='h-40'/>
        <h1 className='text-4xl text-white'>Github userId : {data.login}</h1>

        <h1 className='text-4xl text-white'>Github followers: {data.followers}</h1>

      </div>
    </>
  )
}

export default Github

export const gitLoader = async ()=>{
    const response = await fetch(`https://api.github.com/users/abhishek7-s`)
    return response.json()

}