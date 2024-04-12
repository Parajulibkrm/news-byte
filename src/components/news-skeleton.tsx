import Spinner from "./spinner";

export default function NewsSkeleton() {
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
}
