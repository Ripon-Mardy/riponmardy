"use client";
import { useEffect } from "react";

const AdUnit = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div className="ad-container">


      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-2923534099337091"
        data-ad-slot="7247257630"
        data-auto-format="rspv"
        data-full-width=""
      >
        <div overflow=""></div>
      </amp-ad>
    </div>
  );
};

export default AdUnit;
