import React from 'react';

const BaseHoc = (Component) => ({...props}) => {
    return (
        <div>
            <h1>This is our navbar</h1>
            <Component {...props} />
            <h1>This is our footer</h1>
        </div>
    )
};

export default BaseHoc;