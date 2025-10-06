import { Link, useLoaderData } from "react-router-dom";
import RightNav from "../components/layoutComponent/RightNav"
import Header from "../components/header";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const  { category_id, title, details, image_url } = data[0];
  //const { _id, title, details, image_url } = news;

  //console.log(data, news);
  return (
    <>
    <Header/>
    <div className="grid grid-cols-12 w-11/12 mx-auto gap-4 font-poppins">
        
      <main className="col-span-9">
        <h2 className="text-xl py-3 font-bold font-poppins">Dragon News</h2>
        <div className="card bg-base-100  shadow-sm">
          <figure className="px-3 pt-10">
            <img
              src={image_url}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">{title}</h2>
            <p>
              {details}
            </p>
            <div className="card-actions pt-2 ">
              <Link to={`/category/${data[0]?.category_id}`} className="btn btn-primary ">BackToCategory</Link>
            </div>
          </div>
        </div>
      </main>
      <aside className="col-span-3"><RightNav/></aside>
    </div>
    </>
  );
};

export default NewsDetails;
