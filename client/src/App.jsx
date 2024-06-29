import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import NewPostPage from "./pages/NewPost";
import SinglePage from "./pages/singlePage";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Loading from "./components/loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/single-page" element={<SinglePage />} />
            <Route path="/new-post" element={<NewPostPage />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
