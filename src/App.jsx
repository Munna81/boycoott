        import React, { useState } from "react";
        import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
        
        export default function App() {
          const [bookList] = useState([
            { id: 1, title: "SOAP", publishYear: 2007 },
            { id: 2, title: "SHAMPOO", publishYear: 2000 },
            { id: 3, title: "MOBILE", publishYear: 2003 },
            { id: 4, title: "RICE", publishYear: 1996 },
            { id: 5, title: "SUGER", publishYear: 1998 },
            { id: 6, title: "OIL", publishYear: 2005 },
            { id: 7, title: "LAPTOP", publishYear: 2010 },
            { id: 8, title: "COSMETIC", publishYear: 2014 },
          ]);
        
          const [productList] = useState([
            { id: 1, title: "SOAP", publishYear: 2007 },
            { id: 2, title: "SHAMPOO", publishYear: 2000 },
            { id: 3, title: "MOBILE", publishYear: 2003 },
            { id: 4, title: "RICE", publishYear: 1996 },
            { id: 5, title: "SUGER", publishYear: 1998 },
            { id: 6, title: "OIL", publishYear: 2005 },
            { id: 7, title: "LAPTOP", publishYear: 2010 },
            { id: 8, title: "COSMETIC", publishYear: 2014 },
          ]);
        
          return (
            <Router>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-8">Item Viewer</h1>
                <Routes>
                  <Route
                    path="/"
                    element={<Home bookList={bookList} productList={productList} />}
                  />
                  <Route
                    path="/books/:id"
                    element={<Details list={bookList} type="Book" />}
                  />
                  <Route
                    path="/products/:id"
                    element={<Details list={productList} type="Product" />}
                  />
                </Routes>
              </div>
            </Router>
          );
        }
        
        function Home({ bookList, productList }) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Books Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">International Product</h2>
                <div className="flex flex-wrap gap-4">
                  {bookList.map((book) => (
                    <Link
                      to={`/books/${book.id}`}
                      key={book.id}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                       {book.title}
                    </Link>
                  ))}
                </div>
              </div>
        
              {/* Products Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Local Product</h2>
                <div className="flex flex-wrap gap-4">
                  {productList.map((product) => (
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                       {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        
        function Details({ list, type }) {
          const { id } = useParams();
          const item = list.find((i) => i.id === parseInt(id));
        
          return (
            <div className="mt-8 bg-gray-100 p-4 rounded shadow">
              {item ? (
                <div>
                  <h3 className="text-lg font-bold mb-2">{type} Details</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Title:</span> {item.title}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Publish Year:</span> {item.publishYear}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">Item not found.</p>
              )}
            </div>
          );
        }
