import React from "react";

import { Loader, LoaderGrid } from "./styled_components/Loader";

export const LoadingState = () => {
  return (
    <LoaderGrid>
      <Loader />
    </LoaderGrid>
  );
};
