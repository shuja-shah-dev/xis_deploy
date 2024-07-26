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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const ENDPOINT = "https://be.xis.ai";

const Blogadmin = () => {
  // const router = useRouter();
  // const controller = useRouter();
  // const { accessToken } = useAuth();

  const [formData, setFormData] = useState({
    blog_title: "",
    blog_content: "",
    blog_image: null,
    blog_name: "",
  });
  const [submittedBlogs, setSubmittedBlogs] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
 const [errorData, setErrorData] = useState(null);
  const [showError, setShowError] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [editUrl, setEditUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formDataObj = new FormData();
      formDataObj.append("blog_title", formData.blog_title);
      formDataObj.append("blog_content", formData.blog_content);
      formDataObj.append("blog_image", formData.blog_image);
      formDataObj.append("blog_name", formData.blog_name);

      const response = await fetch(`${BASE_URL}/blogs`, {
        method: "POST",
        body: formDataObj,
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

        setSubmittedBlogs((prevBlogs) => [...prevBlogs, result]);

        setFormData({
          blog_title: "",
          blog_content: "",
          blog_image: null,
          blog_name: "",
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
        const response = await fetch(`${BASE_URL}/blogs`);
        if (response.ok) {
          const data = await response.json();
          setSubmittedBlogs(data);
        } else {
          console.log(error, "Error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [submittedBlogs]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      blog_image: file,
    }));
  };

  const handleEdit = (blogId) => {
    setEditBlogId(blogId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditBlogId(null);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedImage(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();

      formDataObj.append("blog_title", editedTitle);
      formDataObj.append("blog_content", editedContent);
      formDataObj.append("blog_name", editUrl);

      if (editedImage) {
        formDataObj.append("blog_image", editedImage);
      }

      const response = await fetch(`${BASE_URL}/blogs/${editBlogId}`, {
        method: "PUT",
        body: formDataObj,
      });

      if (!response.ok) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedBlog = await response.json();
      console.log("Blog updated successfully:", updatedBlog);

      handleClose();
      setEditedTitle("");
      setEditedContent("");
      setEditUrl("");
      setEditedImage(null);

      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);

      setSubmittedBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === editBlogId ? updatedBlog : blog))
      );
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        // Handle error
      } else {
        const { deletedBlog } = await response.json();
        console.log("Blog deleted successfully:", deletedBlog);

        setSubmittedBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    if (editBlogId) {
      const blog = submittedBlogs.find((blog) => blog._id === editBlogId);
      setEditedTitle(blog.blog_title);
      setEditedContent(blog.blog_content);
    }
  }, [editBlogId]);



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#111827",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };

  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedIndex = text.indexOf(" ", maxLength);
    return text.substring(0, truncatedIndex) + "...";
  };

  function createMarkup(c) {
    return { __html: c };
  }

  // useEffect(() => {
  //   console.log(formData, "as the form data");
  // });

  return (
    <>
      <section className="py-16 bg-[#111]">
        <div className="max-w-6xl px-4 mx-auto ">
          <div className="p-8 px-4 bg-gray-900 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
              <div>
                <h2 className="px-4 text-xl font-medium leading-6 text-gray-300">
                  Blog Post
                </h2>
                <p className="px-4 mt-1 text-xl  text-gray-400">
                  View / Edit Post
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="px-4 mb-6">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="blog_image"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm border border-gray-200 rounded cursor-pointer file:hover:bg-gray-900 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 file:text-gray-300 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 dark:text-gray-400 bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-800 "
                      type="file"
                      name="blog_image"
                      id="blog_image"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Title
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="blog_title"
                      placeholder="Enter Blog Title"
                      id="blog_title"
                      value={formData.blog_title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          blog_title: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      Content
                    </label>
                    <ReactQuill
                      className="quill-editor my-custom-quill"
                      theme="snow"
                      value={formData.blog_content}
                      onChange={(value) =>
                        setFormData({
                          ...formData,
                          blog_content: value,
                        })
                      }
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          ["bold", "italic", "underline", "strike"],
                          ["link", "image", "video", "color"],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                          ["clean"],
                        ],
                      }}
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Preffered Name
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="blog_name"
                      placeholder="Enter Preffered Name"
                      id="blog_name"
                      value={formData.blog_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          blog_name: e.target.value,
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
                                Your blog posted successfully!
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
                                Failed to post the blog check your image file.
                                Name should also be unique. Please try again.
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
                All Blogs
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {submittedBlogs.length
              ? submittedBlogs.map((item, index) => {
                  return (
                    <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img
                          alt={`content-${index}`}
                          className="object-cover object-center h-full w-full"
                          src={`${BASE_URL}${item.blog_image}`}
                        />
                      </div>
                      <h2 className="text-xl font-medium title-font mt-5">
                        {item.blog_title}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={createMarkup(
                          item.blog_content
                        )}
                        className="text-base leading-relaxed mt-2 mb-4"
                      ></p>
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

        {editBlogId && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modal-container">
                <div className="modal-container">
                  <h2 className="mb-4">Edit Blog Post</h2>
                  <div className="px-4 mb-6">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="blog_image"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm border border-gray-200 rounded cursor-pointer file:hover:bg-gray-900 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 file:text-gray-300 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 dark:text-gray-400 bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-800 "
                      type="file"
                      name="blog_image"
                      id="blog_image"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      Title
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="blog_title"
                      placeholder="Enter Blog Title"
                      id="blog_title"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      {" "}
                      URL
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                      type="text"
                      name="blog_name"
                      placeholder="Enter URL"
                      id="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      required
                    />
                  </div>

                  <div
                    className="px-4 mb-6"
                    style={{
                      height: "300px",
                      overflow: "auto",
                    }}
                  >
                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">
                      Content
                    </label>
                    <ReactQuill
                      className="quill-editor my-custom-quill"
                      theme="snow"
                      value={editedContent}
                      onChange={(value) => setEditedContent(value)} // Use 'value' directly, not 'e.target.value'
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          ["bold", "italic", "underline", "strike"],
                          ["link", "image", "video", "color"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["clean"],
                        ],
                      }}
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
  ) 
};
export default Blogadmin;

// export async function getServerSideProps() {
//     try {
//         const res = await fetch(`${BASE_URL}/blogs`);

//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const blogs = await res.json();
//         return {
//             props: {
//                 blogs,
//             },
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//         return {
//             props: {
//                 blogs: [],
//             },
//         };
//     }
// };
