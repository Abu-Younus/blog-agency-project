import { useState, useEffect } from "react";

const Slider = () => {
  const blogContent = [
    {
      image: "https://img.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table-photography-hobby-concept_53876-24773.jpg?t=st=1733601810~exp=1733605410~hmac=beeb6d7139f24812acc5b512e89c21e9c75d7ef0f92cecf94ed0db1bde63cee2&w=740",
      title: "Discover Your Passion",
      description:
        "Find the stories and inspiration that ignite your curiosity.",
      link: "/blog/nature-beauty",
    },
    {
      image: "https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?t=st=1733601909~exp=1733605509~hmac=e44a12ceecaee0aa42985a505629933affd28dce79d245ff7920bc84f7b613d4&w=740",
      title: "Innovate and Create",
      description:
        "Transform ideas into action with the latest insights.",
      link: "/blog/adventure-awaits",
    },
    {
      image: "https://img.freepik.com/premium-photo/elearning-online-education-internet-encyclopedia-concept-open-laptop-book-compilation_1022944-11955.jpg?w=826",
      title: "Connect with Visionaries",
      description:
        "Join a community of thinkers and dreamers like you.",
      link: "/blog/find-serenity",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % blogContent.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [blogContent.length]);

  const currentContent = blogContent[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Images */}
      {blogContent.map((content, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${content.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={content.title}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-center mb-4">
          {currentContent.title}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center max-w-lg">
          {currentContent.description}
        </p>
        <a
          href={currentContent.link}
          className="inline-block bg-yellow-300 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-yellow-400"
        >
          Read More
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full focus:outline-none"
        aria-label="Previous Slide"
        onClick={() =>
          setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + blogContent.length) % blogContent.length
          )
        }
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full focus:outline-none"
        aria-label="Next Slide"
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % blogContent.length)
        }
      >
        &#8594;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {blogContent.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-yellow-300" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
