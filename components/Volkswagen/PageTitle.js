import React from "react";
import Head from "next/head";

const PageTitle = ({ page }) => {
  return (
    <Head>
      <title>{page} | Volkswagen T-Cross 2022</title>
    </Head>
  );
};

export default PageTitle;
