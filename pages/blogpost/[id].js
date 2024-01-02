import React, { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { BASE_URL } from '@/common/base_config';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { Alert } from '@mui/material';
import Truncate from 'react-truncate-html';
import renderHTML from 'react-render-html';


const truncateText = (text, maxLength) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const truncatedContent = doc.body.textContent || '';
  return truncatedContent.slice(0, maxLength) + (truncatedContent.length > maxLength ? '...' : '');
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const Slug = ({ blog }) => {
  function createMarkup(c) {
    return { __html: c };
  }

  const truncateRef = useRef();

  const [submitBlog, setSubmitBlog] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`);
        if (response.ok) {
          const data = await response.json();
          setSubmitBlog(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const formatDays = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now - createdDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    if (secondsDifference < 60) {
      return `${secondsDifference} ${secondsDifference === 1 ? 'second' : 'seconds'} ago`;
    } else if (minutesDifference < 60) {
      return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
      return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    }
  };
  

  return (
    <>
      <section className="bg-[#111]">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-3/4 mx-auto">
            <div className="rounded-lg h-32 overflow-hidden">
              <h1 className={`${roboto.className} mb-4 text-3xl font-bold text-center`}>{blog.blog_title}</h1>
            </div>
            <div className='flex mb-8 text-sky-400 text-lg font-medium'>Recent Post:</div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 p-4 text-center sm:px-8 sm:py-8 border rounded-lg h-full">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900">
                  <Image width={600} height={300} src={"/Asset.png"} alt="Site-Logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">Xis.ai</h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base mb-4">{formatDays(blog.createdAt)}</p>
                  <div className="cursor-pointer w-full text-[#4b5563] flex justify-center items-center mb-4">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61552506112246"
                      aria-label="Facebook"
                    >
                      <FacebookOutlinedIcon fontSize="large" />{" "}
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/xis.ai.official/"
                      aria-label="Instagram"
                    >
                      <InstagramIcon fontSize="large" />{" "}
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/xis-ai/mycompany/"
                      aria-label="Linkedin"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://medium.com/@xis.ai"
                      aria-label="Medium"
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="12.5" r="2.5" stroke="#4b5563" strokeWidth="1.5" />
                        <ellipse cx="13.5" cy="12.5" rx="1.5" ry="2.5" stroke="#4b5563" strokeWidth="1.5" />
                        <ellipse cx="18" cy="12.5" rx="1" ry="2.5" stroke="#4b5563" strokeWidth="1.5" />
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#4b5563" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>

                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@xisaiofficial"
                      aria-label="Youtube"
                    >
                      <YouTubeIcon fontSize="large" />
                    </Link>
                  </div>
                  <p className="text-base">All Posts</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:pb-8 mt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4" dangerouslySetInnerHTML={createMarkup(blog.blog_content)} />

              </div>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="rounded-lg h-full overflow-hidden mb-4">
                <img alt="contentImage" className="object-cover object-center h-full w-full" src={`${BASE_URL}/media/${blog.blog_image}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {submitBlog && submitBlog.length > 0 ? (
              submitBlog.map((item, index) => {
                const truncatedTitle = item.blog_title.slice(0, 40);
                return (
                  <div key={item._id} className="p-4 lg:w-1/3 ">
                    <div className="flex sm:flex-row flex-col">
                      <div className="w-full h-full sm:w-1/2 sm:h-1/2 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
                        <img alt={`content-${index}`} className="flex-shrink-0 rounded-lg w-full h-full md:w-48 md:h-48 object-cover object-center md:mb-0 mb-4" src={`${BASE_URL}${item.blog_image}`} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-xl mb-4">
                          <Link passHref={true} href={`/blogpost/${item._id}`}>
                            {truncatedTitle}
                          </Link>
                        </h3>
                        <Truncate
                          ref={truncateRef}
                          lines={5}
                          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.blog_content, 150)) }}
                        />
                      </div>
                    </div>
                  </div>
                );

                return null;
              })
            ) : (
              <Alert severity="info">You don't have any blog yet.</Alert>
            )}
          </div>

        </div>
      </section> */}
      {/* <div className="container px-5 py-12 mx-auto">
      <div className="p-4 flex flex-col w-full pt-20 lg:pt-4">
            {submitBlog && submitBlog.length > 0 ? (
              submitBlog.map((item, index) => {
                const truncatedTitle = item.blog_title.slice(0, 40);
                // const blog = submitBlog[item];
                // const truncatedContent = blog.blog_content.length > 150
                //     ? blog.blog_content.slice(0, 150) + '...'
                //     : blog.blog_content;
                return (
                  <div key={item._id} className="flex mb-6 w-full">
                    <img alt={`content-${index}`} className="flex-shrink-0 rounded-lg w-full h-full md:w-48 md:h-48 object-cover object-center md:mb-0 mb-4" src={`${BASE_URL}${item.blog_image}`} />
                    <div className="flex-grow pl-4">
                      <h3 className="font-medium text-xl mb-4">
                        <Link passHref={true} href={`/blogpost/${item._id}`}>
                          {truncatedTitle}
                        </Link>
                      </h3>
                      <Truncate
                        ref={truncateRef}
                        lines={5}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.blog_content, 150)) }}
                      />
                    </div>
                  </div>
                );

                return null;
              })
            ) : (
              <Alert severity="info">You don't have any blog yet.</Alert>
            )}
          </div>    
                </div> */}
    </>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;
    const res = await fetch(`${BASE_URL}/blogs/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const blog = await res.json();

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        blog: {},
      },
    };
  }
}
