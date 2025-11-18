import React, { useEffect, useState } from 'react'
import { Routers } from '../Routes/Routers'
import Button from "../Components/Button";
import InputField from '../Components/InputField';
import SelectInput from '../Components/SelectInput';
import Checkbox from '../Components/Checkbox';
import { Link } from 'react-router-dom';
import { emailValidator, nameValidator } from '../utils/inputValidator';
import Swal from 'sweetalert2';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const [loading, setLoading] = useState(true);
    const [payload, setPayload] = useState({
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        projectDescription: "",
    });
    const [errors, setErrors] = useState({});

    const selectOptions = [
        { label: "Web Development", value: "web-development" },
        { label: "Mobile App Development", value: "mobile-app-development" },
        { label: "UI/UX Design", value: "ui-ux-design" },
        { label: "Digital Marketing", value: "digital-marketing" },
        { label: "Other", value: "other" },
    ];

    const handleChange = (e, field) => {
        const { value } = e.target;

        let error = null;
        if (field === "email") {
            error = emailValidator(value);
        } else if (field === "firstname" || field === "lastname") {
            error = nameValidator(value);
        }

        setErrors({
            ...errors,
            [field]: error,
        });

        setPayload({
            ...payload,
            [field]: value,
        });
    };


    // const handleSubmit = async (e) => {
    //     try {
    //         // Map username to name if backend expects 'name'
    //         const response = await updateUserProfile({
    //             firstname: payload.firstname,
    //             lastname: payload.lastname,
    //             email: payload.email,
    //             service: payload.service,
    //             projectDescription: payload.projectDescription,
    //         });
    //         Swal.fire({
    //             icon: "success",
    //             title: "Profile Updation",
    //             text: response?.message || "Profile Updated Successfully",
    //             timer: 2000,
    //         });
    //         // setIsEditing(false);
    //     } catch (error) {
    //         console.log(error);
    //         Swal.fire({
    //             icon: "error",
    //             title: "Profile Updation Failed",
    //             text: error?.response?.data?.message || "Something went wrong!",
    //         });
    //     } finally {
    //         // dispatch(setLoading(false));
    //     }
    // }

    return (
        <div className='lg:min-h-screen'>
            <div className="pt-20 py-10 border-b border-sp-bg1 flex flex-col items-center gap-5">
                <h1 className="w-full text-center text-3xl lg:text-5xl font-medium leading-tight uppercase text-sp-bg1">
                    let's talk about  <br /> your vision
                </h1>
            </div>
            <div className='py-10 flex flex-col lg:flex-row gap-10 justify-between items-start'>
                <div className="w-full lg:w-1/2 text-sp-bg1 flex flex-col gap-2">
                    <h1 className='md:w-2/3 text-4xl font-semibold'>Say Hi! and tell us about your idea</h1>
                    <p className='text-sm opacity-70'>Have a nice work? Reach out, and let's chat.</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-5 text-sp-bg2">
                    <div className='w-full p-7 flex flex-col gap-10 rounded-lg border border-sp-bg1/10'>
                        <div>
                            <h1 className='text-sp-bg1 text-lg font-medium'>Personal Data</h1>
                            <p className='text-sp-bg1/70 text-sm'>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 w-full'>
                            <InputField label={"First Name*"} classes='w-full' />
                            <InputField label={"Last Name*"} classes='w-full' />
                        </div>

                        <SelectInput label={"Service*"} options={selectOptions} />

                        <InputField label={"Email*"} type="email" classes='w-full' />

                        <InputField label={"Project Description*"} classes='w-full' />
                    </div>

                    <div className='flex items-center gap-5'>
                        <Checkbox />
                        <p className='text-sp-bg1/70 text-sm mt-1'>By submitting this form, you agree to our <Link to="/terms-of-service" className='text-blue-600'>Terms of Service</Link></p>
                    </div>

                    <Button title={"Submit"} className="bg-sp-bg1 text-sp-white-s1 px-6 py-2 rounded-full w-max text-base tracking-wider" />

                </div>
            </div>
        </div>
    )
}

export default ContactUs