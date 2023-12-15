import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import Link from 'next/link';
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';







const Featured = () => {
    return (
        <div className="container mx-auto px-5 py-24 items-center ">
            <div className="flex w-full flex-col lg:items-center lg:text-center items-center text-center mb-20">
                <h1
                    className={`${roboto.className} title-font text-3xl font-bold mb-4`}
                >
                    Discover Nice Articles Here
                </h1>
                <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis fugit ea at magni quod dolorem totam aperiam temporibus?</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                    <h2 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Featured</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row space-y-2 items-center justify-center max-w-7xl w-full">
                    <div className="w-full md:w-1/2 h-96 mr-0 md:mr-4 overflow-hidden rounded-lg relative ">
                        <img src="/lightsai.jpg" alt="AI LIGHTS" className="h-full w-full " />
                        <div
                            className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                            <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mx-2 h-96 ">
                        <div className="flex flex-col space-y-4">
                            <div className="h-48 w-full overflow-hidden relative rounded-lg ">
                                <img src="/lightsai.jpg" alt="LIGHTS AI" className="h-full w-full rounded-lg" />
                                <div
                                    className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                                    <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                    </p>
                                </div>
                            </div>
                            <div className="h-48 w-full flex space-x-4 ">
                                <div className="h-full w-1/2 overflow-hidden relative rounded-lg">
                                    <img src="/generateai.jpg" alt="Generate AI1" className="h-full w-full rounded-lg" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                                    <div className="absolute inset-0 flex items-center z-10 p-6  justify-center">
                                        <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        </p>
                                    </div>
                                </div>
                                <div className="h-full w-1/2 overflow-hidden relative rounded-lg">
                                    <img src="/generateai.jpg" alt="Generate AI2" className="h-full w-full rounded-lg" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                                    <div className="absolute inset-0 flex items-center z-10 p-6  justify-center">
                                        <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TrendingBlog = ({ blogs }) => {

    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);


    const handleDelete = async (blogId) => {
        try {

            const response = await fetch(`http://localhost:5000/blogs/${blogId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 3000);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);

        } catch (error) {
            console.error('Error deleting blog:', error.message);
        }
    };

    const [editBlogId, setEditBlogId] = useState(null);
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    const handleEdit = (blogId) => {
        setEditBlogId(blogId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditBlogId(null);
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5000/blogs/${editBlogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    blog_title: editedTitle,
                    blog_content: editedContent,
                }),
            });

            if (!response.ok) {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            handleClose();
            setEditedTitle('')
            setEditedContent('')
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        } catch (error) {
            console.error('Error updating blog:', error.message);
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#111827',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: "10px",
        p: 4,
    };

    return (
        <>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h3 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">All Blogs</h3>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {Object.keys(blogs).map((item) => {
                        const blog = blogs[item];
                        const shortenedContent = blog.blog_content.slice(0, 150) + (blog.blog_content.length > 150 ? '...' : '');
                        return (
                            <div key={blog._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="/truckai.jpg" />
                                </div>
                                <h2 className="text-xl font-medium title-font mt-5">{blog.blog_title}</h2>
                                <p className="text-base leading-relaxed mt-2 mb-4">{shortenedContent}</p>
                                <button
                                    className='bg-red-600 px-4 py-2 mr-2 rounded-full'
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className='bg-blue-600 px-4 py-2 rounded-full'
                                    onClick={() => handleEdit(blog._id)}
                                >
                                    Edit
                                </button>
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
                                                    <h2>Edit Blog Post</h2>
                                                    <div className="px-4 mb-6">
                                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Title</label>
                                                        <input
                                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                                            type="text"
                                                            name="blog_title"
                                                            placeholder="Enter Blog Title"
                                                            id="blog_title"
                                                            value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="px-4 mb-6">
                                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400">Content</label>
                                                        <textarea
                                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                                            name="blog_content"
                                                            rows="5"
                                                            id="blog_content"
                                                            value={editedContent} onChange={(e) => setEditedContent(e.target.value)}
                                                            placeholder="Enter Blog Content here..."
                                                            required
                                                        />
                                                    </div>
                                                    <button className='bg-blue-600 px-4 py-2 mr-2 rounded-full' onClick={handleUpdate}>Update</button>
                                                    <button className='bg-red-600 px-4 py-2 rounded-full' onClick={handleClose}>Cancel</button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                )}
                            </div>
                        );
                    })}
                    {!Object.keys(blogs).length && (
                        <Alert severity="info">You don't have any blogs yet.</Alert>
                    )}
                    {showAlert && (
                        <Modal
                            open={true}
                            onClose={() => setShowAlert(false)}
                        >
                            <Box sx={style}>
                                <div className="modal-container">
                                    <div className="modal-container">
                                        <Alert severity="success">Blog deleted successfully!</Alert>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}
                    {showError && (
                        <Modal
                            open={true}
                            onClose={() => setShowError(false)}
                        >
                            <Box sx={style}>
                                <div className="modal-container">
                                    <div className="modal-container">
                                        <Alert severity="error">Sorry, there was an issue deleting the blog. Please try again later.</Alert>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}

                    {alert && (
                        <Modal
                            open={true}
                            onClose={() => setAlert(false)}
                        >
                            <Box sx={style}>
                                <div className="modal-container">
                                    <div className="modal-container">
                                        <Alert severity="success">Blog updated successfully!</Alert>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}
                    {error && (

                        <Modal
                            open={true}
                            onClose={() => setError(false)}
                        >
                            <Box sx={style}>
                                <div className="modal-container">
                                    <div className="modal-container">
                                        <Alert severity="error">Sorry, there was an issue updating the blog. Please try again later.</Alert>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    );
};




const LatestBlog = () => {

    const data = [
        {
            title: "Blogs",
            content: "Our product ensures early detection of defects, Minimizing the risk of recalls.",
        },
        {
            title: "Blogs",
            content: "Our product ensures early detection of defects, Minimizing the risk of recalls.",
        },
    ]
    const lblogs = [
        {
            title: "Organize the Content",
            content: "Bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        },
        {
            title: "Organize the Content",
            content: "Bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        },

    ]

    return (
        <>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h4 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Latest Post</h4>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="/truckai.jpg" />
                                </div>
                                <Link href={'/blogpost/latest-blogs'}>
                                    <h2 className="text-xl font-medium title-font mt-5">{item.title}</h2>
                                </Link>
                                <p className="text-base leading-relaxed mt-2">{item.content}</p>
                            </div>
                        )
                    })}

                    <div className="p-4 lg:w-1/3">
                        {lblogs.map((item, index) => {
                            return (
                                <div key={index} className="flex sm:flex-row mb-6">
                                    <img alt="Robotic AI1" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/roboticArm.png" />
                                    <div className="flex-grow pl-4 sm:pl-8">
                                        <h4 className="font-medium text-xl mb-4">{item.title}</h4>
                                        <p className="mb-4 text-sm">{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}


const Blogadmin = ({ blogs }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('blog_title', blog_title);
            formData.append('blog_image', blog_image);
            formData.append('blog_content', blog_content);
            setLoading(true);

            const response = await fetch(`http://localhost:5000/blogs`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server Error:', errorData);
                setShowErrorAlert(true);
                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 3000);
            } else {
                const result = await response.json();
                console.log('Success:', result);
                setBlog_title('');
                setBlog_image(null);
                setBlog_content('');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const [blog_title, setBlog_title] = useState('');
    const [blog_image, setBlog_image] = useState(null);
    const [blog_content, setBlog_content] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBlog_image(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'blog_title') {
            setBlog_title(value);
        } else if (name === 'blog_content') {
            setBlog_content(value);
        }
        // else if (e.target.name == 'email') {
        //     setEmail(e.target.value)
        // }
        // else if (e.target.name == 'password') {
        //     setPassword(e.target.value)
        // }
    };

    const controller = useRouter();
    const { accessToken } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!accessToken) {
            router.replace('/login');
        }
    }, [accessToken, router]);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#111827',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: "10px",
        p: 4,
    };

    return accessToken ? (

        <>
            <section className="py-16 bg-[#111]">
                <div className="max-w-6xl px-4 mx-auto ">
                    <div className="p-8 px-4 bg-gray-900 rounded-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                            <div>
                                <h2 className="px-4 text-xl font-medium leading-6 text-gray-300">Blog Post
                                </h2>
                                <p className="px-4 mt-1 text-xl  text-gray-400">
                                    View / Edit Post
                                </p>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
                                    {/* <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Email</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                            type="email"
                                            name="email"
                                            placeholder="Admin Email"
                                            id="email"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Password</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                            id="password"
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div> */}
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="blog_image">
                                            Upload file
                                        </label>
                                        <input
                                            className="block w-full text-sm border border-gray-200 rounded cursor-pointer file:hover:bg-gray-900 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 file:text-gray-300 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 dark:text-gray-400 bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-800 "
                                            type="file"
                                            name="blog_image"
                                            id="blog_image"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Title</label>
                                        <input
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                            type="text"
                                            name="blog_title"
                                            placeholder="Enter Blog Title"
                                            id="blog_title"
                                            value={blog_title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="px-4 mb-6">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400">Content</label>
                                        <textarea
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 bg-gray-800"
                                            name="blog_content"
                                            rows="5"
                                            id="blog_content"
                                            value={blog_content}
                                            onChange={handleChange}
                                            placeholder="Enter Blog Content here..."
                                            required
                                        />
                                    </div>
                                    <div className="px-4">
                                        <div className="flex">
                                            <button
                                                type="submit"
                                                className="px-4 py-2 font-medium text-gray-100 bg-[#1e3a8a] rounded-md shadow hover:bg-blue-900">
                                                {loading ? <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" >
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg> : "Submit"}
                                            </button>
                                        </div>
                                        {showAlert &&
                                            <Modal
                                                open={true}
                                                onClose={() => setShowAlert(false)}
                                            >
                                                <Box sx={style}>
                                                    <div className="modal-container">
                                                        <div className="modal-container">
                                                            <Alert severity="success">Your blog posted successfully!</Alert>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        }
                                        {showErrorAlert &&
                                            <Modal
                                                open={true}
                                                onClose={() => setShowErrorAlert(false)}
                                            >
                                                <Box sx={style}>
                                                    <div className="modal-container">
                                                        <div className="modal-container">
                                                            <Alert severity="error">Failed to post the blog. Please try again.</Alert>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        }
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <TrendingBlog blogs={blogs} />
            </section>
        </>
    ) : (
        <>
            <Box
                sx={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "30%",
                        width: "35%",
                        flexDirection: "column",
                    }}
                >
                    <Typography sx={{ width: "100%", textAlign: "Center" }}>Permission Denied.</Typography>
                    <Typography sx={{ width: "100%", textAlign: "Center" }}>Please Login to continue.</Typography>
                    <button
                        id="login"
                        aria-label="Login to your account"
                        onClick={(_) => {
                            controller.push("/admin");
                        }}
                        className="w-full lg:w-1/2 text-white bg-sky-500 hover:bg-sky-500 mt-10 focus:ring-1 focus:outline-none focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
                    >
                        Login
                    </button>
                </Box>
            </Box>
        </>
    );
}

export default Blogadmin;

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/blogs');

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const blogs = await res.json();

        return {
            props: {
                blogs,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: {
                blogs: [],
            },
        };
    }
};