import React, { useState } from 'react'
import Alert from '@mui/material/Alert';


const blogadmin = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('blog_title', blog_title);
            formData.append('blog_image', blog_image);
            formData.append('blog_content', blog_content);
            formData.append('email', email);
            formData.append('password', password);

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
                setBlog_image(null); // Reset file input
                setBlog_content('');
                setEmail('');
                setPassword('');
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
    const [blog_image, setBlog_image] = useState(null); // Updated to store the file object
    const [blog_content, setBlog_content] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    };



    return (
        <div>
            <section className="py-16 bg-[#111]">
                <div className="max-w-6xl px-4 mx-auto ">
                    <div className="p-8 px-4 bg-gray-900">
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
                                    {/* File Input */}
                                    <div className="px-4 mb-6">
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
                                    </div>
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

                                    {/* Blog Title */}
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

                                    {/* Blog Content */}
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

                                    {/* Submit Button */}
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
                                                        {/* Loading spinner SVG */}
                                                    </svg>
                                                ) : (
                                                    "Submit"
                                                )}
                                            </button>
                                        </div>

                                        {/* Display Alerts */}
                                        {showAlert && <Alert severity="success">Your blog posted successfully.</Alert>}
                                        {showErrorAlert && <Alert severity="error">Failed to post the blog. Please try again.</Alert>}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default blogadmin;
