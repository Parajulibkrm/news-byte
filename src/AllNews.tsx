import { News } from "./components/news";
import { NewsData, extractNewsData } from "./lib/getNews";

import { useQuery } from "@tanstack/react-query";

const AllNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: extractNewsData,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <>
      {data?.map((news: NewsData, index: number) => (
        <News key={index} data={news} />
      ))}
    </>
  );
};

export default AllNews;
