import React from "react";
import { SkeletonCard, SkeletonGrid } from "./LoaderStyles";

const Loader = ({ count = 6 }) => {
  return (
    <SkeletonGrid>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </SkeletonGrid>
  );
};

export default Loader;
