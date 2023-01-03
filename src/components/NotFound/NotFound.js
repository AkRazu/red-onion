import React from 'react';
import notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;