import Head from "next/head";
import Header from "./layout/Header";

interface LayoutProps {
  children: React.ReactNode,
};

export default ({
  children,
}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Buck Bug Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  )
};
