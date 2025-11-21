import React, { useEffect, useState } from "react";
import { Routers } from "../Routes/Routers";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import SelectInput from "../Components/SelectInput";
import Checkbox from "../Components/Checkbox";
import { Link } from "react-router-dom";
import { emailValidator, nameValidator } from "../utils/inputValidator";
import Swal from "sweetalert2";
import { camelCaseToReadable } from "../utils/additonalFunc";
import { toast } from "sonner";
import { IoWarningOutline } from "react-icons/io5";
import { submitContactForm } from "../Api/user.api";
import Loader from "../Components/Loader";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const [loading, setLoading] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [payload, setPayload] = useState({
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        projectDescription: "",
    });
    const [formDataErr, setFormDataErr] = useState({});

    const selectOptions = [
        { label: "UI/UX Designing", value: "UI-UX-DESIGN" },
        { label: "Branding & Design System", value: "BRANDING-DESIGN-SYSTEM" },
        { label: "AI & Automation", value: "AI-AUTOMATION" },
        { label: "Development (Web/Mobile)", value: "DEVELOPMENT-WEB-MOBILE" },
        { label: "Consulting", value: "CONSULTING" },
        { label: "Other", value: "OTHER" },
    ];

    const handleChange = (e, field) => {
        const { value } = e.target;

        let error = null;

        if (field === "email") {
            error = emailValidator(value);
        } else if (field === "firstname" || field === "lastname") {
            error = nameValidator(value);
        } else if (field === "service") {
            error =
                value && selectOptions.some((opt) => opt.value === value)
                    ? null
                    : "Please select a valid service";
        } else if (field === "projectDescription") {
            if (!value || value.trim() === "") {
                error = "Project description cannot be empty";
            } else if (value.length < 10) {
                error =
                    "Project description must be at least 10 characters long";
            } else if (value.length > 500) {
                error = "Project description cannot exceed 500 characters";
            } else {
                error = null;
            }
        }

        setFormDataErr({
            ...formDataErr,
            [field]: error,
        });

        setPayload({
            ...payload,
            [field]: value,
        });
    };

    const validateFields = () => {
        let isValid = true;
        let errors = { ...formDataErr };

        Object.keys(payload).forEach((field) => {
            if (!payload[field]) {
                errors[field] = `${camelCaseToReadable(
                    field
                )} can't be empty.`;
                // console.log("false ho gaya")
                isValid = false;
            } else {
                errors[field] = "";
            }
        });
        // console.log(errors, isValid);
        setFormDataErr(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        const isValid = validateFields();
        if (isValid) {
            if (!termsChecked) {
                toast("Terms Not Accepted", {
                    description: "Please accept the Terms of Service before submitting the form.",
                    icon: <IoWarningOutline className="h-4 w-4" />,
                    duration: 5000,
                    classNames: {
                        description: "!text-foreground/80",
                    },
                })
                return;
            } else {
                sendContactForm();
            }
        }
    };

    const resetFunctions = () => {
        setPayload({
            firstname: "",
            lastname: "",
            email: "",
            service: "",
            projectDescription: "",
        });
        setFormDataErr({});
        setTermsChecked(false);
    }

    const sendContactForm = async () => {
        try {
            setLoading(true);
            const response = await submitContactForm(payload)
            toast.success("Details Submitted Successfully", {
                description: response.message || "Detailes submitted, we will get back to you soon.",
                duration: 5000,
                className: "bg-card text-card-foreground border-border"
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Submission Failed", {
                description:
                    error?.response?.data?.message ||
                    "Failed to submit details. Please try again later.",
                duration: 5000,
                className: "bg-card text-card-foreground border-border"
            });
        } finally {
            resetFunctions();
            setLoading(false);
        }
    }

    return (
        <>
            {loading && <Loader />}
            <div className="lg:min-h-screen">
                <div className="pt-20 py-10 border-b border-sp-bg1 flex flex-col items-center gap-5">
                    <h1 className="w-full text-center text-3xl lg:text-5xl font-medium leading-tight uppercase text-sp-bg1">
                        let's talk about <br /> your vision
                    </h1>
                </div>
                <div className="py-10 flex flex-col lg:flex-row gap-10 justify-between items-start">
                    <div className="w-full lg:w-1/2 text-sp-bg1 flex flex-col gap-2">
                        <h1 className="md:w-2/3 text-4xl font-semibold">
                            Say Hi! and tell us about your idea
                        </h1>
                        <p className="text-sm opacity-70">
                            Have a nice work? Reach out, and let's chat.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 text-sp-bg2">
                        <div className="w-full p-7 flex flex-col gap-10 rounded-lg border border-sp-bg1/10">
                            <div>
                                <h1 className="text-sp-bg1 text-lg font-medium">
                                    Personal Data
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row gap-10 w-full">
                                <InputField
                                    label={"First Name*"}
                                    value={payload.firstname}
                                    onChange={(e) => handleChange(e, "firstname")}
                                    error={formDataErr.firstname}
                                    classes="w-full"
                                />
                                <InputField
                                    label={"Last Name*"}
                                    value={payload.lastname}
                                    onChange={(e) => handleChange(e, "lastname")}
                                    error={formDataErr.lastname}
                                    classes="w-full"
                                />
                            </div>

                            <SelectInput
                                label={"Service*"}
                                options={selectOptions}
                                value={payload.service}
                                onChange={(e) => handleChange(e, "service")}
                                error={formDataErr.service}
                                classes="w-full"
                            />

                            <InputField
                                label={"Email*"}
                                value={payload.email}
                                onChange={(e) => handleChange(e, "email")}
                                error={formDataErr.email}
                                type="email"
                                classes="w-full"
                            />

                            <InputField
                                label={"Project Description*"}
                                value={payload.projectDescription}
                                onChange={(e) =>
                                    handleChange(e, "projectDescription")
                                }
                                error={formDataErr.projectDescription}
                                classes="w-full"
                                as="textarea"
                                maxLength={500}
                            />
                        </div>

                        <div className="flex items-center gap-5">
                            <Checkbox
                                checked={termsChecked}
                                onChange={() => setTermsChecked((prev) => !prev)}
                            />
                            <p className="text-sp-bg1/70 text-sm mt-1">
                                By submitting this form, you agree to our{" "}
                                <Link
                                    to="/terms-of-service"
                                    className="text-blue-600"
                                >
                                    Terms of Service
                                </Link>
                            </p>
                        </div>

                        <Button
                            title={"Submit"}
                            onClick={handleSubmit}
                            className="bg-sp-bg1 text-sp-white-s1 px-6 py-2 rounded-full w-max text-base tracking-wider"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
