import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API } from "../App";
import Loading from "./Loading";
import Tour from "./Tour";
const Tours = () => {
  const [Tours, setTours] = useState({
    tours: [],
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    const fetchTours = async function () {
      setTours({
        ...Tours,
        isLoading: true,
      });

      try {
        const response = await axios.get(API);
        let result = response.data;
        setTours({
          ...Tours,
          tours: result,
          isLoading: false,
        });
      } catch (error) {
        setTours({ ...Tours, error: error });
      }
    };

    fetchTours();
  }, []);

  let removeTour = (id) => {
    let filteredData = Tours.tours.filter((tour) => {
      return tour.id !== id;
    });

    setTours({ ...Tours, tours: filteredData });
  };

  return (
    <main>
      <div className="tours-container">
        <div className="tours">
          {Tours.isLoading && <Loading />}
          {Tours.tours.length === 0 && !Tours.isLoading && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>No Tours Left</h3>
              <button
                onClick={() => {
                  window.location.reload(false);
                }}
              >
                Refresh
              </button>
            </div>
          )}

          {Tours.tours.map((tour) => {
            return <Tour tour={tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Tours;
