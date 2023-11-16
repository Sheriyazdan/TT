import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"; // Infinite Scroll is a component provided by the react-infinite-scroll-component library, which automatically processes infinite scrolling based on the data provided.
import useDebounce from "../../core/hooks/useDebounce";
import Photo from "../../components/Card";
import Input from "../../components/Input";
import { PhotoType } from "../../core/types";
import { apiUrl } from "../../core/constants";

const MainPage = () => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    fetchData();
  }, [debouncedSearchTerm]);

  const fetchData = async () => {
    // This code executes an asynchronous request to the API to get photos.
    try {
      const response = await fetch(
        `${apiUrl}/photos?_page=${page}&_limit=10&q=${debouncedSearchTerm}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: PhotoType[] = await response.json();

      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setHasMore(data.length > 0);
      setPage((prevPage) => prevPage + 1);
      setError(null);
      setSearchPerformed(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
    }
  };

  const handleSearch = (value: string) => {
    // This code handles the photo search event. When changing the value of a search query, it sets a new search term, resets the current page to the first one, clears the array of photos, and sets the searchPerformed flag to false to indicate that a new search has been started.
    setSearchTerm(value);
    setPage(1);
    setPhotos([]);
    setSearchPerformed(false);
  };

  return (
    <div className="container">
      <Input onChangeInput={(e) => handleSearch(e.target.value)} />
      <h1>All Photos</h1>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<></>}
      >
        <div className="photos">
          {error && <p className="error-message">An error has occurred 😕</p>}

          {searchPerformed && photos.length === 0 ? (
            <h2>Didn't find a photo 😕</h2>
          ) : (
            photos.map((photo) => <Photo key={photo.id} {...photo} />)
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
