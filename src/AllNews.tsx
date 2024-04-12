import { News } from "./components/news";
import Spinner from "./components/spinner";
import { NewsData, extractNewsData } from "./lib/getNews";

import { useQuery } from "@tanstack/react-query";

const AllNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: extractNewsData,
  });
  if (isLoading)
    return (
      <div className="w-full max-w-[32rem] mx-auto min-h-screen h-screen flex flex-col shrink-0">
        <div className="h-2/5 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
          <Spinner />
        </div>
        <div className="px-4">
          <div className="mt-4 h-4 w-40 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          <div className="mt-10 h-8 w-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>

          <div className="mt-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="my-1 h-4 w-full bg-gray-200 dark:bg-gray-800 animate-pulse"
              ></div>
            ))}
            <div className="my-1 h-4 w-1/2 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          </div>
          <div className="mt-6 h-6 w-32 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          <div className=" mt-6 flex items-center gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className=" h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-full max-w-[32rem] mx-auto min-h-screen flex flex-col flex-1 shrink-0">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              className="fill-rose-500"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>

            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
              An error occurred
            </p>
            <span className="text-sm text-gray-500">Check later</span>
          </div>
        </div>
      </div>
    );

  console.log(data);
  return (
    <>
      {data?.map((news: NewsData, index: number) => (
        <News key={`${news?.image}${index}`} data={news} />
      ))}
    </>
  );
};

export default AllNews;
