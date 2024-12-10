import { FC } from "react";
import { LoaderContainer, Spinner } from "./styled";

export const Loader: FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};
