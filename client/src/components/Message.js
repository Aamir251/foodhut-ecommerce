import React from 'react';

const Message = ({error}) => {
    return (
        <p className='font-bold opacity-50 error'>{error}</p>
    );
}

export default Message;
