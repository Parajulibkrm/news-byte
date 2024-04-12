import { News } from "./components/news";
import NewsError from "./components/news-error";
import NewsSkeleton from "./components/news-skeleton";
import { NewsData, extractNewsData } from "./lib/getNews";

import { useQuery } from "@tanstack/react-query";

const AllNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: extractNewsData,
  });
  if (isLoading) return <NewsSkeleton />;

  if (error) return <NewsError />;

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
