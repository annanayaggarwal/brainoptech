import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "../../actions/blogAction";
import { useDispatch, useSelector } from "react-redux";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, blog } = useSelector((state) => state.blogDetails);

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  const blogValue = blog;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-7xl mx-auto my-12">
          <div className="lg:w-3/4 mx-auto">
            <div>
              <img
                src={blogValue.image}
                alt=""
                className="w-full mx-auto rounded"
              />
            </div>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {blogValue.title}
            </h2>
            <p className="mb-3 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {`${blogValue.author}+` | `  + ${blogValue.published_date}`}
            </p>
            <p className="text-base text-gray-500 mb-6">{blogValue.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
