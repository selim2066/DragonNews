import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Page = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <h1>category page: {data.length}</h1>
        </div>
    );
};

export default Page;