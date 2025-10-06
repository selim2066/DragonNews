// import React from 'react';

// const Newscard = ({news}) => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Newscard;

import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, _id } = news;
  console.log(title);

  return (
    <div className="card bg-base-100 shadow-xl border py-2 my-10">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-xs">
          <FaShareAlt className="text-gray-500" />
        </button>
      </div>

      {/* Title */}
      <h2 className="px-4 font-bold text-lg leading-snug">{title}</h2>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full h-96 object-cover "
        />
      </figure>

      {/* Details */}
      <div className="card-body px-4 py-2">
        <p className="text-sm text-gray-600 line-clamp-3">{details.slice(0,150)}...{" "}</p>
        <Link to={`/news/${_id}`} className="text-primary">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm">
        <div className="flex items-center gap-2 text-orange-500 font-medium">
          <FaStar className="text-orange-500" />
          {rating?.number}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
