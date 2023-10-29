import Image from "next/image";
import ParallaxScroll from "./parallaxScroll";

const about = () => {
  return (
    <>
      <ParallaxScroll />
      <div className="container mt-10  block  justify-center items-center text-5xl text-center  h-[100vh] z-10 mx-auto w-full">
      </div>
      <section className=" z-[9999px] relative bg-[#111111] body-font">
        <div className="container px-5 py-24 mx-auto">
        <div class="mb-5 lg:flex items-end justify-start text-start text-3xl font-medium" data-v-ac85f32a=""><h3 class="m-0" >Brand</h3> </div>
          <div className="lg:w-full w-full mx-auto flex justify-center items-center  flex-wrap">
            <div className="mt-10 p-4 w-full md:w-1/2"> 
            <Image
              className="mb-16 py-12"
              src="/Asset.png"
              width={500}
              height={300}
              alt="Picture"
              />
            <div className=" w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aspernatur sunt dolorem id illo quidem delectus eaque accusantium. Accusantium non eum possimus, pariatur tempora quibusdam molestias quos molestiae sequi dignissimos?  </div>
              </div>
            <div className="lg:w-1/2 w-full lg:pl-56 mt-6 lg:mt-0">
              <h1 className=" text-3xl h-28  title-font font-medium ">
                Logo System
              </h1>
              <div className=" mb-4 w-full">
                <a
                  href="/"
                  target="_blank"
                  className="items-center  rounded-lg flex md:inline-flex m-2 py-2 px-2.5 border w-1/2"
                  data-v-ac85f32a=""
                >
                  Lunit logo
                  <i className="icon-download" data-v-ac85f32a=""></i>
                </a>
              <a
                href="/"
                target="_blank"
                className="items-center  rounded-lg flex md:inline-flex m-2 py-2 px-2.5 border w-1/2"
                data-v-ac85f32a=""
                >
                Lunit logo
                <i className="icon-download  text-white"></i>
              </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
