import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import { useAuth } from "@/common/authProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";
import { BASE_URL } from "@/common/base_config";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

export const ENDPOINT = "https://be.xis.ai";

const jobadmin = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    responsibilities: "",
    benefits: "",

    nature: "",
    country: "",
    duration: "",
    experience: "",

    vacancies: "",
    workingHours: "",
    workingDays: "",
    salary: "",
    deadline: "",

    slug: ""
  });
  const [submittedJobs, setSubmittedJobs] = useState([]);
  const [editJobId, setEditJobId] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState(null);
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");
  const [editedResponsibilities, setEditedResponsibilities] = useState("");
  const [editedBenefits, setEditedBenefits] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const [editWorkingDays, setEditWorkingDays] = useState("");
  const [editWorkingHours, setEditWorkingHours] = useState("");
  const [editVacancies, setEditVacancies] = useState("");
  const [editedDuration, setEditedDuration] = useState("");
  const [editExperience, setEditExperience] = useState("");
  const [editedNature, setEditedNature] = useState("");
  const [editedCountry, setEditedCountry] = useState("");
  const [editDeadline, setEditDeadline] = useState("");

  const [editSlug, setEditSlug] = useState("");

  //   const [editedImage, setEditedImage] = useState(null);
  //   const [editUrl, setEditUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorfromResponse = await response.json();
        setErrorData(errorfromResponse.message);
        console.log(error, "Error", errorfromResponse);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      } else {
        const result = await response.json();
        console.log("Success:", result);

        setSubmittedJobs((prevJobs) => [...prevJobs, result]);

        setFormData({
          title: "",
          desc: "",
          responsibilities: "",
          benefits: "",
          nature: "",
          country: "",
          duration: "",
          experience: "",
          vacancies: "",
          workingHours: "",
          workingDays: "",
          salary: "",
          deadline: "",
          slug: ""
        });

        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/jobs`);
        if (response.ok) {
          const data = await response.json();
          setSubmittedJobs(data);
        } else {
          console.log(error, "Error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [submittedJobs]);

  const handleEdit = (jobId) => {
    setEditJobId(jobId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditJobId(null);
  };



  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const editformData = {
        title: editedTitle,
      desc: editedDesc,
      responsibilities: editedResponsibilities,
      benefits: editedBenefits,
      nature: editedNature,
      country: editedCountry,
      duration: editedDuration,
      experience: editExperience,
      vacancies: editVacancies,
      workingHours: editWorkingHours,
      workingDays: editWorkingDays,
      salary: editSalary,
      deadline: editDeadline,
      slug: editSlug
      }
      const response = await fetch(`${BASE_URL}/jobs/${editJobId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editformData),
      });

      if (!response.ok) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedJob = await response.json();
      console.log("Job updated successfully:", updatedJob);

      handleClose();
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);

      setSubmittedJobs((prevJobs) =>
        prevJobs.map((job) => (job._id === editJobId ? updatedJob : job))
      );
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await fetch(`${BASE_URL}/jobs/${jobId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        // Handle error
      } else {
        const { deletedJob } = await response.json();
        console.log("Job deleted successfully:", deletedJob);

        setSubmittedJobs((prevJobs) =>
          prevJobs.filter((job) => job._id !== jobId)
        );
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    if (editJobId) {
      const job = submittedJobs.find((job) => job._id === editJobId);
      setEditedTitle(job.title);
      setEditedDesc(job.desc);
      setEditedResponsibilities(job.responsibilities);
      setEditedBenefits(job.benefits);
      setEditSalary(job.salary);
      setEditWorkingHours(job.workingHours);
      setEditWorkingDays(job.workingDays);
      setEditVacancies(job.vacancies);
      setEditedDuration(job.duration);
      setEditExperience(job.experience);
      setEditedNature(job.nature);
      setEditedCountry(job.country);
      setEditSlug(job.slug);
      setEditDeadline(job.deadline);
    }
  }, [editJobId]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 600,
    maxHeight: '80vh',
    bgcolor: "#111827",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
  };

  return (
    <>
      <section className="py-16 bg-[#111]">
        <div className="max-w-6xl px-4 mx-auto ">
          <div className="p-8 px-4 bg-gray-900 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
              <div>
                <h2 className="px-4 text-xl font-medium leading-6 text-gray-300">
                  Job Post
                </h2>
                <p className="px-4 mt-1 text-xl  text-gray-400">
                  View / Edit Job
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Title
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="title"
                      placeholder="Enter Title"
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Description
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="desc"
                      placeholder="Enter Description"
                      id="desc"
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          desc: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Responsibilities
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="responsibilities"
                      placeholder="Enter Responsibilities"
                      id="responsibilities"
                      value={formData.responsibilities}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          responsibilities: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Benefits
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="benefits"
                      placeholder="Enter Benefits"
                      id="benefits"
                      value={formData.benefits}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          benefits: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Nature
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="nature"
                      placeholder="Remote/On-site"
                      id="nature"
                      value={formData.nature}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nature: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Country
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="country"
                      placeholder="Enter Country"
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          country: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Duration
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="duration"
                      placeholder="Full Time"
                      id="duration"
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          duration: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Experience
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="experience"
                      placeholder="3 years"
                      id="experience"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experience: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Vacancies
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="vacancies"
                      placeholder="00"
                      id="vacancies"
                      value={formData.vacancies}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vacancies: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Working Hours
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="workingHours"
                      placeholder="09 Am To 05 Pm"
                      id="workingHours"
                      value={formData.workingHours}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workingHours: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Working Days
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="workingDays"
                      placeholder="Monday To Friday"
                      id="workingDays"
                      value={formData.workingDays}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workingDays: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Salary
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="salary"
                      placeholder="$28K - $45K"
                      id="salary"
                      value={formData.salary}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          salary: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Deadline
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="deadline"
                      placeholder="01 July 2024"
                      id="deadline"
                      value={formData.deadline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          deadline: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Slug
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="slug"
                      placeholder="Enter Slug"
                      id="slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          slug: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="px-4">
                    <div className="flex">
                      <button
                        type="submit"
                        className="px-4 py-2 font-medium text-gray-100 bg-[#1e3a8a] rounded-md shadow hover:bg-blue-900"
                      >
                        {loading ? (
                          <svg
                            aria-hidden="true"
                            className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>

                    {showAlert && (
                      <Modal open={true} onClose={() => setShowAlert(false)}>
                        <Box sx={style}>
                          <div className="modal-container">
                            <div className="modal-container">
                              <Alert severity="success">
                                Your Job posted successfully!
                              </Alert>
                            </div>
                          </div>
                        </Box>
                      </Modal>
                    )}
                    {showErrorAlert && (
                      <Modal
                        open={true}
                        onClose={() => setShowErrorAlert(false)}
                      >
                        <Box sx={style}>
                          <div className="modal-container">
                            <div className="modal-container">
                              <Alert severity="error">
                                Failed to post the job. Please try again.
                                {errorData && <p>Error: {errorData}</p>}
                              </Alert>
                            </div>
                          </div>
                        </Box>
                      </Modal>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
              <h3 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">
                All Jobs
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-4">
            {submittedJobs.length
              ? submittedJobs.map((item, index) => {
                  return (
                    <div key={index} className="p-4 md:w-1/4 sm:mb-0 mb-6 border border-purple-900">
                      <h2 className="text-xl font-medium title-font mt-5 mb-6">
                        {item.title}
                      </h2>

                      <button
                        className="bg-red-600 px-4 py-2 mr-2 rounded-full"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-600 px-4 py-2 rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          handleEdit(item._id);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        {editJobId && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modal-container">
                <div className="modal-container">
                  <h2 className="mb-4">Edit Job Post</h2>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Title
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="title"
                      placeholder="Enter Title"
                      id="title"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Description
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="desc"
                      placeholder="Enter Description"
                      id="desc"
                      value={editedDesc}
                      onChange={(e) => setEditedDesc(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Responsibilities
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="responsibilities"
                      placeholder="Enter Responsibilities"
                      id="responsibilities"
                      value={editedResponsibilities}
                      onChange={(e) => setEditedResponsibilities(e.target.value)}
                      required
                    />
                  </div>
              
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Benefits
                    </label>
                    <textarea
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="benefits"
                      placeholder="Enter Benefits"
                      id="benefits"
                      value={editedBenefits}
                      onChange={(e) => setEditedBenefits(e.target.value)}
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Nature
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="nature"
                      placeholder="Enter Nature"
                      id="nature"
                      value={editedNature}
                      onChange={(e) => setEditedNature(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Country
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="country"
                      placeholder="Enter Country"
                      id="country"
                      value={editedCountry}
                      onChange={(e) => setEditedCountry(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Duration
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="duration"
                      placeholder="Enter Duration"
                      id="duration"
                      value={editedDuration}
                      onChange={(e) => setEditedDuration(e.target.value)}
                      required
                    />
                  </div>

              
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Experience
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="experience"
                      placeholder="Enter Experience"
                      id="experience"
                      value={editExperience}
                      onChange={(e) => setEditExperience(e.target.value)}
                      required
                    />
                  </div>

                

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Vacancies
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="vacancies"
                      placeholder="Enter Vacancies"
                      id="vacancies"
                      value={editVacancies}
                      onChange={(e) => setEditVacancies(e.target.value)}
                      required
                    />
                  </div>
               

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Working Hours
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="workingHours"
                      placeholder="Enter Working Hours"
                      id="workingHours"
                      value={editWorkingHours}
                      onChange={(e) => setEditWorkingHours(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Working Days
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="workingDays"
                      placeholder="Enter Working Days"
                      id="workingDays"
                      value={editWorkingDays}
                      onChange={(e) => setEditWorkingDays(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Salary
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="salary"
                      placeholder="Enter Salary"
                      id="salary"
                      value={editSalary}
                      onChange={(e) => setEditSalary(e.target.value)}
                      required
                    />
                  </div>

              
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Deadline
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="deadline"
                      placeholder="Enter Deadline"
                      id="deadline"
                      value={editDeadline}
                      onChange={(e) => setEditDeadline(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Slug
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="slug"
                      placeholder="Enter Slug"
                      id="slug"
                      value={editSlug}
                      onChange={(e) => setEditSlug(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    className="bg-blue-600 px-4 py-2 mr-2 rounded-full"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 px-4 py-2 rounded-full"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        )}
      </section>
    </>
  );
};
export default jobadmin;
