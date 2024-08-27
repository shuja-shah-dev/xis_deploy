import React, { useRef, useState } from "react";
import { BASE_URL_STRAPI } from "@/common/base_config";
import { useRouter } from "next/router";

const ApplyForm = () => {
  const router = useRouter();
  const { jobTitle } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    Applying_For: jobTitle || "",
    resume: null,
  });

  const [modal, setModal] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({
        ...formData,
        resume: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.resume
    ) {
      setModal({
        show: true,
        type: "error",
        message: "Please fill in all fields and upload your resume.",
      });
      return;
    }

    const fd = new FormData();

    // Append text fields
    fd.append("data[name]", formData.name);
    fd.append("data[email]", formData.email);
    fd.append("data[phone]", formData.phone);
    fd.append("data[country]", formData.country);
    fd.append("data[Applying_For]", formData.Applying_For);
    fd.append("files.resume", formData.resume);

    try {
      const response = await fetch(`${BASE_URL_STRAPI}/api/applies`, {
        method: "POST",
        body: fd,
      });

      if (response.ok) {
        setModal({
          show: true,
          type: "success",
          message: "Form submitted successfully.",
        });
        console.log("Form submitted successfully");

        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          Applying_For: jobTitle || "",
          resume: null,
        });
        fileInputRef.current.value = ""; // Clear file input
      } else {
        setModal({
          show: true,
          type: "error",
          message: "Form submission error.",
        });
        console.error("Form submission error");
      }
    } catch (error) {
      setModal({
        show: true,
        type: "error",
        message: "Error: " + error.message,
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-24 min-[2300px]:w-[65%] mx-auto">
      <h1 className="font-Inter text-4xl md:text-7xl text-center font-bold">
        APPLY HERE
      </h1>
      <div className="py-16 w-[80%] mx-auto font-poppins">
        <form
          onSubmit={handleSubmit}
          className="md:space-y-20 space-y-10 text-base md:text-xl"
        >
          <div className="flex md:flex-row flex-col justify-between gap-10 md:gap-20">
            <div className="flex flex-col gap-4 md:w-1/2">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="md:text-lg text-sm p-2 bg-inherit border-b border-[#808080] text-[#808080]"
              />
            </div>

            <div className="flex flex-col gap-4 md:w-1/2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="md:text-lg text-sm p-2 bg-inherit border-b border-[#808080] text-[#808080]"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between gap-10 md:gap-20">
            <div className="flex flex-col gap-4 md:w-1/2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="md:text-lg text-sm p-2 bg-inherit border-b border-[#808080] text-[#808080]"
              />
            </div>

            <div className="flex flex-col gap-4 md:w-1/2">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter country"
                value={formData.country}
                onChange={handleChange}
                required
                className="md:text-lg text-sm p-2 bg-inherit border-b border-[#808080] text-[#808080]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <label htmlFor="resume">Upload Your Resume</label>
            <div
              className="w-full md:w-[70%] mx-auto border-dashed border-2 rounded-xl border-[#808080]"
              style={{ background: "rgba(217, 217, 217, 0.10)" }}
            >
              <p className="text-[#6E68F8] text-center my-4 md:text-lg text-sm">
                Click the button below
              </p>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  onClick={handleFileUploadClick}
                  className="bg-gradient-to-r from-[#393E83] to-[#301667] text-white py-2 px-6 mb-4 md:text-lg text-sm rounded-sm"
                >
                  Upload File
                </button>
              </div>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                ref={fileInputRef}
                className="hidden"
              />

              {formData.resume && (
                <p className="text-center mb-4 md:text-md text-xs">
                  Selected file: {formData.resume.name}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-[224px] h-[55px] md:text-lg text-sm cursor-pointer rounded-md p-3 text-center bg-gradient-to-r from-[#393E83] to-[#301667]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`bg-gradient-to-r from-[#393E83] to-[#301667] p-6 rounded shadow-lg ${
              modal.type === "success" ? "border-green-600" : "border-red-600"
            } border`}
          >
            <h2 className="text-xl font-bold mb-4">
              {modal.type === "success" ? "Success" : "Error"}
            </h2>
            <p className="text-base">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="mt-4 bg-slate-900 p-2 rounded text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
