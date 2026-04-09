import React from "react";
import { Link } from "react-router-dom";
import { Routers } from "../Routes/Routers";

const CONSENT_COOKIE_NAME = "hidezign_cookie_consent";
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const getConsentCookie = () => {
    if (typeof document === "undefined") {
        return null;
    }

    const match = document.cookie.match(
        new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`)
    );

    return match ? decodeURIComponent(match[1]) : null;
};

const setConsentCookie = (choice) => {
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
        choice
    )}; Max-Age=${CONSENT_COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
};

const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const consentChoice = getConsentCookie();
        setIsVisible(
            consentChoice !== "accepted" && consentChoice !== "rejected"
        );
    }, []);

    const handleConsent = (choice) => {
        setConsentCookie(choice);

        if (
            typeof window !== "undefined" &&
            typeof window.hidezignApplyConsent === "function"
        ) {
            window.hidezignApplyConsent(choice);
        }

        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-4 z-[70] px-4 pointer-events-none">
            <div className="mx-auto max-w-5xl rounded-2xl border border-sp-bg1/10 bg-[#F0F0F0]/95 shadow-[0_20px_60px_rgba(14,14,14,0.12)] backdrop-blur-sm pointer-events-auto">
                <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-sp-bg1">
                            Cookies and consent
                        </p>
                        <p className="text-xs leading-6 text-sp-bg1/70 md:text-sm">
                            We use cookies to measure site performance and improve
                            your experience. You can accept or reject analytics and
                            advertising consent.{" "}
                            <Link
                                to={Routers.TERMSOFSERVICE}
                                className="text-sp-primary-s1 underline underline-offset-4"
                            >
                                Learn more
                            </Link>
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 md:gap-3">
                        <button
                            type="button"
                            onClick={() => handleConsent("rejected")}
                            className="rounded-full border border-sp-bg1/15 px-4 py-2 text-sm font-medium text-sp-bg1 transition-colors duration-300 hover:bg-sp-bg1/5"
                        >
                            Reject
                        </button>
                        <button
                            type="button"
                            onClick={() => handleConsent("accepted")}
                            className="rounded-full bg-sp-primary-s1 px-4 py-2 text-sm font-medium text-sp-white-s1 transition-colors duration-300 hover:bg-sp-bg1"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentBanner;
