"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

interface CompareImageProps {
  leftImage: string;
  rightImage: string;
  rightImageCss?: React.CSSProperties;
  leftImageAlt?: string;
  rightImageAlt?: string;
}

const CompareImage: React.FC<CompareImageProps> = ({
  leftImage,
  rightImage,
  rightImageCss,
  leftImageAlt,
  rightImageAlt,
}) => {
  return (
    <ReactCompareImage
      leftImage={`/images/${leftImage}`}
      rightImage={`/images/${rightImage}`}
      rightImageCss={rightImageCss}
      leftImageAlt={leftImageAlt}
      rightImageAlt={rightImageAlt}
    />
  );
};

export default CompareImage;
