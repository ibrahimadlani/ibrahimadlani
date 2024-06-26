"use client";

import React from 'react';
import Head from "next/head";
import Header from "../components/Panel/Header";
import Main from "../components/Panel/Main";
/**
 * Home component for the homepage layout.
 * This component renders the Header and Main components side by side on large screens.
 * It uses flexbox for layout and includes responsive gap spacing.
 *
 * @returns {JSX.Element} The Home component.
 */

export const Home = () => {

  return (
    <>
      <Head>
        <title>Ibrahim Adlani - Software Engineer</title>
        <meta name="description" content="Ibrahim Adlani's portfolio showcasing projects and skills in software engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ibrahim Adlani - Software Engineer" />
        <meta property="og:description" content="Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:url" content="https://www.ibrahimadlani.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ibrahim Adlani - Software Engineer" />
        <meta name="twitter:description" content="Explore the projects and skills of Ibrahim Adlani, a software engineer specialized in Django, Restful APIs, Python, and JavaScript." />
        <meta name="twitter:image" content="/images/profile.jpg" />
      </Head>

      <div className="lg:flex lg:justify-between lg:gap-4 transition">
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;