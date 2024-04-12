export default function NewsError() {
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
}
