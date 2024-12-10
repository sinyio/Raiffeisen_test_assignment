import { FC } from "react";
import { PageLayoutProps } from "./types";
import { Body, Header } from "vienna-ui";
import { Container, Layout } from "./styled";

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header size={"m"} />
      <Body>
        <Container>{children}</Container>
      </Body>
    </Layout>
  );
};
