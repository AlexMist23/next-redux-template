"use client";

/* Core */
import { Provider, useSelector } from "react-redux";

/* Instruments */
import { reduxStore, selectTheme } from "@/lib/redux";

export const Providers = (props: React.PropsWithChildren) => {
  const theme = useSelector(selectTheme);
  return <Provider store={reduxStore}>{props.children}</Provider>;
};
