import React from 'react'
import { IdentityContextProvider } from "react-netlify-identity-widget";
export const wrapRootElement = ({element}) => {
  return <IdentityContextProvider url="https://jam-subscription.netlify.app">{element}</IdentityContextProvider>;
};
