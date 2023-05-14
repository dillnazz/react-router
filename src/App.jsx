import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Meals from "./pages/Meals";
import { ErrorPage } from "./pages/ErrorPage";
import FoodInfo from "./pages/FoodInfo";
import AuthPage from "./pages/AuthPage";

const App = () => {
  // let text = 'Warming, Soup, Beans';
  // let arr = text.split(',');
  // {arr.map((el) => (
  //   <button>{el}</button>
  // )}

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home page</h1>
            </>
          }
        />
        {/* <Route
          path="/meals"
          element={
            <>
            {
               <h1>Home page</h1> 
            }
            </>
          }
        /> */}
        <Route path="/meals/" element={<Meals />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/meals/:id" element={<FoodInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
