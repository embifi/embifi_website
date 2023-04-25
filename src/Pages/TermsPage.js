import {Container} from "@mui/system";
import React, {useEffect, useRef, useState} from "react";
import Header from "../Components/PlainHeader";
import "./Style.css";
import HttpsIcon from "@mui/icons-material/Https";
import FooterComp from "../Components/Footer";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import TermsUse from "../Components/TermsUse";

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <div className="privacy-head-div">
                <Container>
                    <p className="privacy-heading">
                        <HttpsIcon className="mb-1 me-1" style={{fontSize: "40px"}}/>
                        TERMS OF USE
                    </p>
                </Container>
            </div>
            <Container className="privacy-container pt-3 pb-5">
                <div
                    className="privacy-content">
                    <TermsUse/>
                </div>
            </Container>
            <FooterComp/>
        </>
    );
};

export default TermsPage;
