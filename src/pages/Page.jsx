import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newscard from '../components/Newscard';

const Page = () => {
    const {data:news} = useLoaderData()
    console.log(news)
    return (
        <div>
            <h1>category page: {news.length}</h1>
            {
               news.map((singleNews)=>(
                <Newscard key={singleNews._id} news={singleNews}></Newscard>
               )) 
            }
        </div>
    );
};

export default Page;