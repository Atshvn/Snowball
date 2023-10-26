import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  About,
  Contact,
  Home,
  Project,
  NewsPages,
  NewsDetailPages,
  Service,
  PrivacyPolicy,
  TermsAndConditions
} from "../pages";
import { Wrapper } from "./Wrapper";
import { Header } from "../components";
import { Footer } from "../layout";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dieu-khoan-va-dieu-kien" element={<TermsAndConditions />} />
          <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicy />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/du-an" element={<Project />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/tin-tuc" element={<NewsPages />} />
          <Route path="/tin-tuc/:id" element={<NewsDetailPages />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};
