import React from "react";
import PageTitle from "@/components/Volkswagen/PageTitle";
import Banner from "@/components/Volkswagen/Banner";
import Features from "@/components/Volkswagen/Features";
import RequestAVisit from "@/components/Volkswagen/RequestAVisit";
import Featuresdeux from "@/components/Volkswagen/Featuresdeux";
import Gallery from "@/components/Volkswagen/Gallery";
import FooterOne from "@/components/Volkswagen/FooterOne";

export default function Home ()  {
  return (
    <>
      <Banner />
      <Featuresdeux />
      <RequestAVisit />
    </>
  );
}
