import React, { useEffect, useState } from "react";
import DetailPhoto from "../../components/DetailPhoto";
import { useParams } from "react-router-dom";
import { PhotoType } from "../../core/types";
import { apiUrl } from "../../core/constants";

const PhotoDetailPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PhotoType | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // This code executes an asynchronous request to the API to get photo.
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/photos/${id}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const photoData: PhotoType = await response.json();

        setError(null);
        setData(photoData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Something went wrong...</div>}
      {data && <DetailPhoto {...data} />}
    </div>
  );
};

export default PhotoDetailPage;
