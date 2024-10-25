"use client";

import React from 'react';
import Header from "../components/Panel/Header";
import Main from "../components/Panel/Main";
/**
 * Home component for the homepage layout.
 * This component renders the Header and Main components side by side on large screens.
 * It uses flexbox for layout and includes responsive gap spacing.
 *
 * @returns {JSX.Element} The Home component.
 */

const metadata = {
  title: "Ibrahim Adlani - Software Engineer",
  description: "Ibrahim Adlani's portfolio showcasing projects and skills in software engineering.",
  ogTitle: "Ibrahim Adlani - Software Engineer",
  ogDescription: "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
  ogImage: "/images/profile.jpg",
  ogUrl: "https://www.ibrahimadlani.com",
  twitterCard: "summary_large_image",
  twitterTitle: "Ibrahim Adlani - Software Engineer",
  twitterDescription: "Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript.",
  twitterImage: "/images/profile.jpg"
}

export const Home = () => {

  return (
    <>
      <div className="lg:flex lg:justify-between lg:gap-4 transition w-screen">
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;