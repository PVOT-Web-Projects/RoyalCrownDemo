"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "./bloggs.scss"
import Data from "./data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogsCards from "@/components/blogPosts/blogcards";
import YellowSubmitButton from "../buttons/yellowSubmitButton/YellowSubmitButton";
import FindStoreButton from "../buttons/findstoreButton/findstoreButton";

const BlogPost = ({ readMoreRoute }) => {
  const router = useRouter();

  const handleReadMoreClick = (route) => {
    if (route) {
      router.push(route);
    }
  };
  const [filteredData, setFilteredData] = useState(Data); // State to hold the filtered data
  const [inputValue, setInputValue] = useState("");

  

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const projectsRef = useRef(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(filteredData.slice(startIndex, endIndex));
  }, [currentPage, filteredData]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const filtered = Data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  // const handleSearch = () => {
  //   const filtered = Data.filter((item) =>
  //     item.title.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  //   setCurrentPage(1); // Reset to the first page after search
  // };

  const clearInput = () => {
    setInputValue("");
    setFilteredData(Data); // Reset to all data when input is cleared
    setCurrentPage(1); // Reset to the first page when the input is cleared
  };

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   if (projectsRef.current) {
  //     const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     const projectsRefPosition = projectsRef.current.getBoundingClientRect().top + currentPosition;
  //     const scrollPosition = projectsRefPosition - 0; // Adjust this value as needed
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  //   }
  // };

  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //     const currentPosition = window.scrollY || document.documentElement.scrollTop;
  //     const projectsRefPosition = projectsRef.current.getBoundingClientRect().top + currentPosition;
  //     const scrollPosition = projectsRefPosition - 0; // Adjust this value as needed
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  //     console.log(currentPosition);
  //     console.log(projectsRefPosition);
  //     console.log(scrollPosition);
  // };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);

    // Calculate the scroll position relative to the projectsRef element
    const projectsRefPosition = projectsRef.current.offsetTop;
    const scrollPosition = projectsRefPosition - 20; // Adjust this value as needed

    // Scroll to the projectsRef element with smooth behavior
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    console.log(projectsRefPosition);
    console.log(scrollPosition);
  };

  // const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //     let scrollPosition;
  //     // Determine the scroll position based on window width
  //     if (window.innerWidth <= 1600 && window.innerWidth > 1440) {
  //         scrollPosition = window.innerHeight * 1.14; // Scroll position for 1600px width
  //     } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
  //         scrollPosition = window.innerHeight * 1.12; // Scroll position for 1440px width
  //     } else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
  //         scrollPosition = window.innerHeight * 1; // Scroll position for 1024px width
  //     } else if (window.innerWidth <= 768) {
  //         scrollPosition = window.innerHeight * 1.08; // Scroll position for 768px width
  //     } else {
  //         scrollPosition = window.innerHeight * 1.08; // Default for larger screens
  //     }
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  // };

  return (
    <div ref={projectsRef}>
       <div className="SearchMainContainer">
        <div className="inputContainer">
          <svg
            className="searchIcon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
              fill="#5B3524"
            />
          </svg>
          <input
            className="input"
            name="text"
            placeholder="Search Blogs"
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            // onKeyPress={(e) => e.key === "Enter" && handleSearch()} 
          />
          {inputValue && (
            <button className="close-btn" onClick={clearInput}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="close-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="BlogsInner">
      {filteredData.length > 0 ? (
          displayedData.map((item, index) => (
            <div key={index}>
              <BlogsCards
                item={item}
                handleReadMoreClick={handleReadMoreClick}
                // handleReadMoreClick={() => handleReadMoreClick(item.route)}
              />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>

      <div>
        <Stack spacing={2} justifyContent="center !important">
          <Pagination
            count={Math.ceil(Data.length / itemsPerPage)}
            color="primary"
            shape="rounded"
            page={currentPage}
            size="small"
            variant="outlined"
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
            // showFirstButton    //for showing first button on pagination
            // showLastButton     // for showing last button of pagination
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "transparent",
                border: "1px solid #5B3524",
                color: "#5B3524",
                margin: "0 10px",
                padding: "18px 13px",
                fontSize: "20px",
                borderRadius: "0px",
                transition: "background-color 0.3s, color 0.3s",

                "@media (max-width: 768px)": {
                  margin: "0 9px",
                  padding: "12px 8px",
                  fontSize: "15px",
                },

                "@media (max-width: 425px)": {
                  margin: "0 8px",
                  padding: "12px 8px",
                  fontSize: "12px",
                },

                "&.Mui-selected": {
                  backgroundColor: "#FFF5ED",
                  margin: "0 10px",
                  padding: "18px 13px",
                  fontSize: "20px",
                  color: "#5B3524",
                  border: "none",

                  "@media (max-width: 768px)": {
                    margin: "0 9px",
                    padding: "12px 10px",
                    fontSize: "15px",
                  },

                  "@media (max-width: 425px)": {
                    margin: "0 8px",
                    padding: "12px 10px",
                    fontSize: "12px",
                  },
                },

                "&.Mui-selected:hover": {
                  backgroundColor: "#c1c0c0",
                  color: "black",
                  border: "none",
                },
              },
            }}
          />
        </Stack>
      </div>

      {/* <div style={{ background: "white", height: "100px" }}></div> */}
    </div>
  );
};

export default BlogPost;
