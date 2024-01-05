"use client";

import { SessionProvider } from "next-auth/react";

const Providder = ({ children, Session }) => {
  return <SessionProvider session={Session}>{children}</SessionProvider>;
};

export default Providder;
