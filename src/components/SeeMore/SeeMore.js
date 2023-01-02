import React, { useEffect, useState } from 'react';
import DetailsAboutMore from '../DetailsAboutMore/DetailsAboutMore';

const SeeMore = () => {
    const [more , setMore ] = useState([]);
    useEffect(()=>{
        fetch('seeMore.json')
        .then(res=>res.json())
        .then(data=>setMore(data))
    },[])
    return (
        <div>
            <h1>Why you choose us</h1>
            <p className='fw-semibold'>Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at.Boy prosperous increasing surrounded</p>
            <div className='row g-4 my-5'>
                {
                    more.map(details=><DetailsAboutMore
                        key={details.id}
                        details={details}
                    ></DetailsAboutMore>)
                }
            </div>
        </div>
    );
};

export default SeeMore;