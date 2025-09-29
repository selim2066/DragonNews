import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  
  return (
    <div className="mb-5">
      <h2 className="font-bold text-center">All Category({categories.length})</h2>

      <div className="flex flex-col gap-2 pt-3 px-2">
        {categories.map((category) => (
          <NavLink key={category.category_id} to={`/category/${category.category_id}`} className="btn bg-base-100 shadow-none hover:shadow-sm border-none text-gray-500 mx-auto w-full">{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
