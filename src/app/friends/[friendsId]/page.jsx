import React from 'react';

const FriendsDetailPage = async ({params}) => {
    const friendsId = await params; 
    console.log('params', friendsId )
    return (
        <div>
            <h2>Friends Detail</h2>
        </div>
    );
};

export default FriendsDetailPage;