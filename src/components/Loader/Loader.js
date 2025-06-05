import React from "react";
import { SkeletonCard, SkeletonGrid } from "./LoaderStyles";

const Loader = ({ count = 6 }) => {
  const keys = useMemo(
    () => Array.from({ length: count }, () => crypto.randomUUID()),
    [count]
  );

  return (
    <SkeletonGrid>
      {keys.map((id) => (
        <SkeletonCard key={id} />
      ))}
    </SkeletonGrid>
  );
};

export default Loader;
