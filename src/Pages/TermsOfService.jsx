import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MainContent } from "../Content/MainContent";

const sections = [
    {
        title: "1. Acceptance of Terms",
        paragraphs: [
            "By accessing or using the H! Dezign website, contacting our team, or engaging our services, you agree to be bound by these Terms of Service.",
            "If you do not agree with these terms, please do not use this website or submit project information through our forms.",
        ],
    },
    {
        title: "2. Services",
        paragraphs: [
            "H! Dezign provides creative and digital services including web design, UI/UX design, branding, development, consulting, and related strategy support.",
            "Project scope, deliverables, timelines, and payment terms for client work are defined separately in proposals, estimates, contracts, or written approvals.",
        ],
    },
    {
        title: "3. Client Responsibilities",
        paragraphs: [
            "Clients are responsible for providing accurate information, timely feedback, required content, approvals, and lawful access to any third-party platforms needed for the project.",
            "Delays in communication, approvals, or asset delivery may affect delivery schedules and project timelines.",
        ],
    },
    {
        title: "4. Payments and Commercial Terms",
        paragraphs: [
            "All pricing, deposits, milestone payments, and final balances are governed by the signed proposal, invoice, or service agreement for each engagement.",
            "Unless otherwise agreed in writing, work may be paused if invoices remain unpaid beyond the due date.",
        ],
    },
    {
        title: "5. Intellectual Property",
        paragraphs: [
            "Preliminary concepts, working files, internal processes, and unused creative directions remain the property of H! Dezign unless otherwise stated in writing.",
            "Final approved deliverables are transferred or licensed according to the agreed project terms after applicable payments are completed.",
        ],
    },
    {
        title: "6. Revisions and Change Requests",
        paragraphs: [
            "Reasonable revisions may be included depending on the approved scope. Additional rounds of revisions, new features, or scope changes may require revised timelines and additional fees.",
            "Any material change to the agreed scope may be treated as a change request.",
        ],
    },
    {
        title: "7. Third-Party Tools and Platforms",
        paragraphs: [
            "Some projects may rely on third-party services such as hosting providers, analytics tools, CMS platforms, payment gateways, plugins, or design tools.",
            "H! Dezign is not responsible for outages, policy changes, pricing changes, or technical issues caused by third-party providers outside our control.",
        ],
    },
    {
        title: "8. Website Use",
        paragraphs: [
            "You agree not to misuse the website, attempt unauthorized access, interfere with functionality, submit malicious content, or use the site for unlawful purposes.",
            "We reserve the right to restrict access or remove submissions that appear abusive, fraudulent, or harmful.",
        ],
    },
    {
        title: "9. Limitation of Liability",
        paragraphs: [
            "To the maximum extent permitted by law, H! Dezign will not be liable for indirect, incidental, special, or consequential damages arising from use of the website or services.",
            "Our total liability for any claim related to services will be limited to the amount paid to H! Dezign for the specific service giving rise to the claim, unless otherwise required by law.",
        ],
    },
    {
        title: "10. Termination",
        paragraphs: [
            "Either party may terminate a project in accordance with the agreed contract or written commercial terms.",
            "Upon termination, the client remains responsible for payment for work completed, time allocated, and approved expenses incurred up to the termination date.",
        ],
    },
    {
        title: "11. Updates to These Terms",
        paragraphs: [
            "We may update these Terms of Service from time to time. Updated versions will be posted on this page with a revised effective date when appropriate.",
            "Continued use of the website after updates are posted constitutes acceptance of the revised terms.",
        ],
    },
    {
        title: "12. Contact",
        paragraphs: [
            `For questions about these Terms of Service, please contact us at ${MainContent.Email}.`,
        ],
    },
];

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="min-h-screen text-sp-bg1">
            <Helmet>
                <title>Terms of Service | H! Dezign</title>
                <meta
                    name="description"
                    content="Read the Terms of Service for H! Dezign, including website usage, project engagement, payments, intellectual property, and contact details."
                />
                <link rel="canonical" href="https://hidezign.com/terms-of-service" />
            </Helmet>

            <div className="pt-20 py-10 border-b border-sp-bg1 flex flex-col items-center gap-5">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-sp-bg1/60">
                    Legal
                </p>
                <h1 className="w-full text-center text-3xl lg:text-5xl font-medium leading-tight uppercase text-sp-bg1">
                    Terms of Service
                </h1>
                <p className="w-full lg:w-2/3 text-center text-sm md:text-base text-sp-bg1/70">
                    These terms govern the use of the H! Dezign website and outline
                    the general framework for working with our creative agency.
                </p>
            </div>

            <div className="py-10 md:py-14 flex flex-col gap-8">
                <div className="p-6 md:p-8 rounded-2xl border border-sp-bg1/10 bg-white/40">
                    <p className="text-sm text-sp-bg1/70">
                        Effective date: April 10, 2026
                    </p>
                    <p className="mt-3 text-sm md:text-base text-sp-bg1/80">
                        These terms are provided as a general framework for website
                        visitors and prospective clients. If you engage H! Dezign for
                        a project, the signed proposal or agreement will control where
                        any commercial terms differ.
                    </p>
                </div>

                {sections.map((section) => (
                    <section
                        key={section.title}
                        className="p-6 md:p-8 rounded-2xl border border-sp-bg1/10 bg-white/40 flex flex-col gap-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-sp-bg1">
                            {section.title}
                        </h2>
                        <div className="flex flex-col gap-3">
                            {section.paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="text-sm md:text-base leading-7 text-sp-bg1/80"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default TermsOfService;
