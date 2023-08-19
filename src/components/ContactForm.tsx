"use client";

import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { toast, ToastContainer } from "react-toastify";
import useForm from "@/hooks/useForm";
import { validateForm } from "@/utils/validateForm";

import "react-toastify/dist/ReactToastify.css";

export default function () {
  const [sent, setSent] = useState(false);

  const submit = async () => {
    try {
      const response = await fetch("api/airtable", {
        method: "POST",
        headers: {
          secret: process.env.NEXT_PUBLIC_SITE_SECRET,
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setIsSubmitting(false);
        setSent(true);
        setValues({
          name: "",
          email: "",
          company: "",
          Address: "",
          phone: "",
          source: "",
          message: "",
        });
        toast.success("Form submitted successfully! We will be in touch soon.");
      } else {
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  };

  const {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  }: {
    values: any;
    setValues: any;
    errors: any;
    handleChange: any;
    handleSubmit: any;
    isSubmitting: boolean;
    setIsSubmitting: any;
  } = useForm(submit, validateForm);

  useEffect(() => {
    if (isSubmitting) {
      setSent(false);
    }
  }, [isSubmitting]);

  const renderSubmitButton = () => {
    if (!isSubmitting && !sent) {
      return "send";
    }

    if (!isSubmitting && sent) {
      return "sent!";
    }

    if (isSubmitting) {
      return "...sending";
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl font-extrabold my-4 font-sans">Contact</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Full Name
            </label>
            <input
              className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
                errors.name ? "border-l-4 border-red-700" : ""
              }`}
              id="grid-full-name"
              type="text"
              placeholder="First Last"
              autoComplete="given-name"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              autoFocus
            />
            {errors.name && <p className="text-red-700">{errors.name}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
                errors.email ? "border-l-4 border-red-700" : ""
              }`}
              id="grid-email"
              type="email"
              name="email"
              placeholder="you@email.com"
              value={values.email || ""}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-700">{errors.email}</p>}
          </div>
        </div>
        <div className="w-full py-4">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-company"
          >
            Company
          </label>
          <input
            className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
              errors.company ? "border-l-4 border-red-700" : ""
            }`}
            id="company"
            type="text"
            name="company"
            placeholder="Acme Co."
            value={values.company}
            onChange={handleChange}
          />
          {errors.company && <p className="text-red-700">{errors.company}</p>}
        </div>
        <div className="w-full py-4">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-company"
          >
            Address
          </label>
          <input
            className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
              errors.Address ? "border-l-4 border-red-700" : ""
            }`}
            id="Address"
            type="address"
            name="address"
            placeholder="123 Main St."
            value={values.Address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-red-700">{errors.address}</p>}
        </div>
        <div className="w-full py-4">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-phone"
          >
            Phone
          </label>
          <input
            className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
              errors.phone ? "border-l-4 border-red-700" : ""
            }`}
            id="phone"
            type="tel"
            name="phone"
            placeholder="(512) 555-555"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-700">{errors.phone}</p>}
        </div>
        <div className="w-full py-4">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-source"
          >
            How did you hear about us?
          </label>
          <input
            className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${
              errors.source ? "border-l-4 border-red-700" : ""
            }`}
            id="source"
            type="text"
            name="source"
            placeholder="google, facebook, etc."
            value={values.source}
            onChange={handleChange}
          />
          {errors.source && <p className="text-red-700">{errors.source}</p>}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <p className="text-gray-600 text-xs italic">How can we help you?</p>
            <textarea
              className={`text-black appearance-none block w-full shadow-sm ring-1 ring-inset ring-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${
                errors.message ? "border-l-4 border-red-700" : ""
              }`}
              id="grid-message"
              name="message"
              placeholder="Message"
              value={values.message || ""}
              onChange={handleChange}
              rows={6}
            />
            {errors.message && (
              <p className="text-red-700 mb-3">{errors.message}</p>
            )}
            <button type="submit" className="btn">
              {renderSubmitButton()}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
