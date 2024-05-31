import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../actions/blogAction";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { loading, blog } = useSelector((state) => state.blogs);
  const getBlog = blog;
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = getBlog.slice(firstIndex, lastIndex);
  const npage = Math.ceil(getBlog.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid:cols-1 gap-8">
        {records.map((blogValue, index) => {
          return (
            <Link
              to={`/${blogValue._id}`}
              className="p-5 shadow-lg rounded cursor-pointer"
            >
              <div>
                <img src={blogValue.image} className="w-full" />
              </div>
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                {blogValue.title}
              </h3>
              <p className="mb-2 text-gray-600">
                <FaUser className="inline-flex items-center mr-2" />
                {blogValue.author}
              </p>
              <p className="text-sm text-gray-500">
                {blogValue.published_date}
              </p>
            </Link>
          );
        })}
      </div>

      <div class="flex items-center justify-center mt-6 mb-6 ">
        <div class="pagination">
          <div class="inline-flex items-center px-3 py-1 rounded-lg bg-gray-200 mr-1">
            <a href="#" class="page-link" onClick={prePage}>
              Pre
            </a>
          </div>
          {numbers.map((n, i) => (
            <div class="inline-flex items-center px-3 py-1 rounded-lg bg-gray-200 mr-1">
              <a href="#" class="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </div>
          ))}
          <div class="inline-flex items-center px-3 py-1 rounded-lg bg-gray-200">
            <a href="#" class="page-link" onClick={nextPage}>
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default BlogPage;
