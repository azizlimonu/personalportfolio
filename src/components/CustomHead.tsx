import Head from 'next/head';
import React from 'react';

interface CustomHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const CustomHead = ({ title, description, url, image }: CustomHeadProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Head>
  )
}

export default CustomHead;