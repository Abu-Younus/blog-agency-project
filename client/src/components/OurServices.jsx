import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchServices() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/services`
        );
        if (response.data.success) {
          setServices(response.data.data);
        } else {
          throw new Error("Failed to fetch services.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="py-16 bg-gray-50 px-2">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Our Services
        </h2>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500 text-lg">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
              <div
                key={service._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image?.imageURL || "/images/fallback-image.jpg"}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description.length > 100
                      ? `${service.description.substring(0, 100)}...`
                      : service.description}
                  </p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
