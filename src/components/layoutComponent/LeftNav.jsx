import React, { useEffect, useState } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  //  {
  //     "category_id": "01",
  //     "category_name": "Breaking News"
  //   },
  return (
    <div className="mb-5">
      <h2 className="font-bold text-center">All Category({categories.length})</h2>

      <div className="flex flex-col gap-2 pt-3 px-2">
        {categories.map((category) => (
          <button key={category.category_id} className="btn border-none text-gray-500 mx-auto w-full">{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
