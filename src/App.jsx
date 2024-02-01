import React from "react"
import { useState } from "react"
import Lws from "./assets/lws-logo-en.svg"
import Star from "./assets/star.svg"
import Book from "./assets/book.png"

export default function App({onSearch}) {
  const [bookList,setBookList] = useState([
    {id:1,title:"Javascript",publishYear:2007},
    {id:2,title:"Python",publishYear:2000},
    {id:3,title:"jquery",publishYear:2003},
    {id:4,title:"Html",publishYear:1996},
    {id:5,title:"Css",publishYear:1998},
    {id:6,title:"React",publishYear:2005},
    {id:7,title:"Script",publishYear:2010},
    {id:8,title:"Laravel",publishYear:2014}
]);
const [inputText, setInputText] = useState("");
const [searchResult,setSearchResult] = useState(bookList);
const [onFav,setOnFav] = useState([]);
  function handlerInput (event)  {
    event.preventDefault();
    const lowerInput = inputText.toLowerCase();
    const result= bookList.filter((book) =>book.title.toLowerCase() === lowerInput)
    console.log(result);
    setSearchResult(result);
 }; 
    function handelNumAscending () {
    const numAscending = [...bookList].sort((a, b) => a.publishYear - b.publishYear);
    console.log(numAscending);
    setSearchResult(numAscending);
    }
    function handelNumDescending () {
    const numDescending = [...bookList].sort((a, b) => b.publishYear - a.publishYear);
    console.log(numDescending);
    setSearchResult(numDescending);
    }
    function handelAscending () {
    const strAscending = [...bookList].sort((a, b) => a.title.localeCompare(b.title) );
     console.log(strAscending);
     setSearchResult(strAscending);
    }
    function handelDecending () {
     const strDescending = [...bookList].sort((a, b) =>b.title.localeCompare(a.title)
    );
    console.log(strDescending);
    setSearchResult(strDescending);
    }
    function handelOnFav (id) {
      if (!onFav.includes(id)){
        setOnFav([...onFav,id])
      } else {
        const index = onFav.indexOf(id)
        onFav.splice(index,1)
        setOnFav([...onFav])
      }
          // setOnFav([...onFav,id])
           //setOnFav(onFav.includes(b.id) ? "unfavourte" : "favriote"
    }
     return (
      <>
      <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        
        <a href="/">

          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={Lws}
            alt="Lws"
          />
        </a>
        
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_33_142)">
            <path
              d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
              stroke="#1C4336"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
              stroke="#1C4336"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_142">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </nav>
    <main className="my-10 lg:my-14">
      
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div
          className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
        >
          
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2
              className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
            >
              Trending Books of the Year
            </h2>
            
            <form>
              <div className="flex">
                <div
                  className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
                  
                >
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                    placeholder="Search Book"
                    required
                    value={inputText}
                    onChange={() => setInputText(event.target.value)}
                  />
                  <div className="absolute right-0 top-0 flex h-full items-center">
                    <button
                      onClick={handlerInput}
                      type="submit"
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        ariaHidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
          </div>
      
          <div className="flex items-stretch space-x-3">
          
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              onChange={h => {
                if(h.target.value === "name_asc"){
                  return handelAscending()
                } else if(h.target.value === "name_desc") {
                  return handelDecending()
                } else if (h.target.value === "year_asc") {
                  return handelNumAscending()
                } else if (h.target.value === "year_desc") {
                  return handelNumDescending()
                }
              }}
            >
              <option value="">Sort</option>
              <option value="name_asc"> (A-Z)</option>
              <option value="name_desc"> (Z-A)</option>
              <option value="year_asc"> (Oldest)</option>
              <option value="year_desc">(Newest)</option>
            </select>

          </div>
        </div>
      </header>
      
      <div
        className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
            {searchResult.map(b => <div className="space-y-3">
          
             <div
               className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
             >
               <img className="max-w-[144px]" src={Book} alt="book name" />
             </div>
             
             <div className="space-y-3">
               <h4 className="text-lg font-bold lg:text-xl">{b.title}</h4>
               <p className="text-xs lg:text-sm">By : <span>{b.id}</span></p>
               <div className="flex items-center justify-between">
                 <h4 className="text-lg font-bold lg:text-xl">{b.publishYear}</h4>
                 
                 <div className="flex items-center space-x-1">
                 <img src={Star}></img>
                   <img src={Star}></img>
                   <img src={Star}></img>
                   <img src={Star}></img>
                   <span className="text-xs lg:text-sm">(4 Star)</span>
                 </div>
                 
               </div>
   
               <div className="flex items-center gap-3 text-xs lg:text-sm">
                 <button
                   className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-5 w-5"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                     />
                   </svg>
   
                   Add to Cart
                 </button>
                 <button
                   className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                   onClick ={() => handelOnFav(b.id)}
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-5 w-5"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   {onFav.includes(b.id) ? "unfavourte" : "favriote"}
                 </button>
               </div>
             </div>
           </div>
             )}
    
      </div>
      </main>
      <footer className="py-6 md:py-8">
    <div className="container mx-auto">
      <p className="text-center text-sm lg:text-base">
        Copyright ©2023 | All rights reserved by Learn with Sumit
      </p>
    </div>
  </footer>
    </>
  )
  }
