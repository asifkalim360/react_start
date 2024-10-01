import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/asifkalim360')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    })
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers:{data.followers}
            <img src="https://avatars.githubusercontent.com/u/110036251?v=4" alt="Git hub" width={300} />
        </div>
    )
}

export default Github