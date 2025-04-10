// TODO : remove eslint-disable after work
/* eslint-disable */
import Header from "@components/common/header/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";

const HeaderContainer: React.FC = () => {
  const { pathname } = useRouter();
  const [isConnected, setIsConnected] = useState(true);
  return <Header pathname={pathname} isConnected={isConnected} />;
};

export default HeaderContainer;
