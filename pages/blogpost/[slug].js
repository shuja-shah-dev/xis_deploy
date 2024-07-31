import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { BASE_URL } from "@/common/base_config";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { HeroBlob } from "@/components/HeroSection";
import { Head } from "next/document";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const Slug = ({ blog }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  function createMarkup(c) {
    return { __html: c };
  }

  const formatDays = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now - createdDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (secondsDifference < 60) {
      return `${secondsDifference} ${
        secondsDifference === 1 ? "second" : "seconds"
      } ago`;
    } else if (minutesDifference < 60) {
      return `${minutesDifference} ${
        minutesDifference === 1 ? "minute" : "minutes"
      } ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} ${
        hoursDifference === 1 ? "hour" : "hours"
      } ago`;
    } else {
      return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
    }
  };

  const $chemaMarkup = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    headline: blog.blog_title,
    description: blog.blog_content.slice(0, 150),
    datePublished: blog.createdAt,
    author: {
      "@type": "Person",
      name: "xis.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "xis.ai",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/media/site_xis_logo_default_please_dont_delete.png`, // Change as needed
      },
    },
    image: `${BASE_URL}/media/${blog.blog_image}`,
    url: currentUrl,
  });

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: $chemaMarkup }}
        />
      </Head>
      <section className="relative">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            bottom: "2%",
            zIndex: "-1",
            right: "10%",
          }}
          key={"UniqueElementor1"}
        />
        <HeroBlob
          sx={{
            right: "10%",
            top: "-300px",
            zIndex: "-1",
            right: "100px",
          }}
          key={"NormalSizedBlob"}
        />
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-3/4 mx-auto">
            <div className="rounded-lg sm:h-32 overflow-hidden">
              <h1
                className={`${roboto.className} mb-4 text-3xl font-bold text-center`}
              >
                {blog.blog_title}
              </h1>
            </div>
            <div className="flex mb-8 text-sky-400 text-lg font-medium">
              Recent Post:
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 p-4 text-center sm:px-8 sm:py-8 border rounded-lg h-full">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900">
                  <Image
                    width={600}
                    height={300}
                    src={"/Asset.png"}
                    alt="Site-Logo"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">
                    xis.ai
                  </h2>
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        currentUrl
                      )}`}
                      aria-label="Linkedin"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Link>

                    <Link
                      target="_blank"
                      href="https://medium.com/@xis.ai"
                      aria-label="Medium"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="7.5"
                          cy="12.5"
                          r="2.5"
                          stroke="#4b5563"
                          strokeWidth="1.5"
                        />
                        <ellipse
                          cx="13.5"
                          cy="12.5"
                          rx="1.5"
                          ry="2.5"
                          stroke="#4b5563"
                          strokeWidth="1.5"
                        />
                        <ellipse
                          cx="18"
                          cy="12.5"
                          rx="1"
                          ry="2.5"
                          stroke="#4b5563"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                          stroke="#4b5563"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
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
                <div className="">
                  <div className="rounded-lg h-full overflow-hidden mb-4">
                    <img
                      alt="contentImage"
                      className="object-cover object-center  w-full"
                      src={`${BASE_URL}/media/${blog.blog_image}`}
                    />
                  </div>
                </div>
                <div
                  className="leading-relaxed text-lg mb-4 myCustomDiv blog-content"
                  dangerouslySetInnerHTML={createMarkup(blog.blog_content)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

// export async function getServerSideProps(context) {
//   try {
//     const { name } = context.params;
//     const res = await fetch(`${BASE_URL}/blogs/${name}`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const blog = await res.json();

//     return {
//       props: {
//         blog: blog[0],
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         blog: {},
//       },
//     };
//   }
// }
export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/blogs`);
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`${BASE_URL}/blogs/${params.slug}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const blog = await res.json();

    return {
      props: {
        blog: blog[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        blog: {},
      },
    };
  }
}
