import React from 'react';
import Head from 'next/head';

const prod = process.env.NODE_ENV === 'production';
const BASE_URL = prod ? '/uk-public-holidays' : '';

const Meta = () => (
  <Head key="app-meta">
    <title>UK Public Holidays</title>
    <link rel="icon" href={`${BASE_URL}/favicon.ico`} />
    <link rel="apple-touch-icon" sizes="152x152" href={`${BASE_URL}/apple-touch-icon.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`${BASE_URL}/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`${BASE_URL}/favicon-16x16.png`} />
    {/* <link rel="manifest" href={`${BASE_URL}/site.webmanifest`} /> */}
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"></meta>
  </Head>
);

export default Meta;