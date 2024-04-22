import { useState, useEffect } from "react";
import axios from "axios";

export const useFilterProps = () => {
  const [filters, setFilters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://delivery-q991.onrender.com/api/v1/product/category/"
        );
        const formattedData = response.data.map((item) => ({
          id: item.id,
          desc: item.name_ru,
          img: "https://telegra.ph/file/1cceb1e3ad50d76e3c823.png",
        }));

        const additionalImageUrls = {
          2: "https://telegra.ph/file/8516aadf3af389ffb4f31.png",
          3: "https://telegra.ph/file/04882b66da5d2d0f0d890.png",
          4: "https://telegra.ph/file/a61d16c431391e56ae892.png",
        };

        formattedData.forEach((item) => {
          if (additionalImageUrls[item.id]) {
            item.img = additionalImageUrls[item.id];
          }
        });

        setFilters(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return {
    filters,
    activeIndex,
    setActiveIndex,
  };
};
