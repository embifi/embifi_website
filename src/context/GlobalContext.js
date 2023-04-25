import React, {useState, createContext, useRef } from "react";

export const GlobalInfo = createContext();

const GlobalContext = ({ children }) => {
  const home = useRef();
  const services = useRef();
  const whyUs = useRef();
  const contactUs = useRef();
  const quote = useRef();
  const [detailedBlog, setDetailedBlog] = useState({
    blog_title: "",
    image: "",
    blogs: [  {para_title: "",
    body: ""}]
  })

  return (
    <GlobalInfo.Provider
      value={{
        home,
        services,
        whyUs,
        contactUs,
        quote,
        blogState: [detailedBlog, setDetailedBlog],
      }}
    >
      {children}
    </GlobalInfo.Provider>
  );
};

export default GlobalContext;



