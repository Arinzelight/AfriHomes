import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/dashboard/DashBoard";
import UserUpdate from "./pages/dashboard/UserUpdate";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import NewPostPage from "./pages/NewPost";
import SinglePage from "./pages/singlePage";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Loading from "./components/loading";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/single-page/:id" element={<SinglePage />} />
            <Route path="/search" element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path="/new-post" element={<NewPostPage />} />
            </Route>
            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Route>
          {/* Add the 404 route at the end */}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/userupdate" element={<UserUpdate />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
