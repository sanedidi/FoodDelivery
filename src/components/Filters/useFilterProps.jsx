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
          img: "https://telegra.ph/file/a61d16c431391e56ae892.png",
        }));

        const additionalImageUrls = {
          2: "https://telegra.ph/file/5d0ab79339c1e60833aa2.png",
          3: "https://telegra.ph/file/825c38cdf15ec4ba077f1.png",
          4: "https://telegra.ph/file/04882b66da5d2d0f0d890.png",
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
