export interface PlaceToRead {
  siteTitle?: string;
  logo?: string;
  url?: string;
}
export interface NewsData {
  image?: string;
  title?: string;
  description?: string;
  placesToRead?: PlaceToRead[];
  imageSource?: string;
}

async function getHTML(url: string) {
  try {
    const response = await fetch(url);
    return await response.text();
  } catch (error) {
    console.error("Error fetching HTML:", error);
    return null;
  }
}

async function extractNewsData() {
  const url = import.meta.env.VITE_NEWS_URL;
  if (!url) {
    console.error("NEWS_URL is not set.");
    return;
  }
  const html = await getHTML(url);
  if (!html) {
    console.error("HTML is null or empty.");
    return;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const newsData: NewsData[] = [];

  doc
    .querySelectorAll(
      "#news-stories-list-wrapper > .news-stories-list-story > .news-story-item"
    )
    .forEach((element) => {
      if (!element) return;
      const image = (
        element?.querySelector(".news-image-wrapper") as HTMLDivElement
      )?.style?.backgroundImage.replace(/^url\(['"](.+)['"]\)/, "$1");
      const imageSource = (
        element?.querySelector(".news-story-image-source") as HTMLDivElement
      )?.textContent?.trim();
      const title = (
        element?.querySelector(".news-story-title") as HTMLElement
      )?.textContent?.trim();
      const description = (
        element?.querySelector(".text-lg") as HTMLElement
      )?.textContent?.trim();
      const placesToRead: PlaceToRead[] = [];
      element.querySelectorAll(".source-items > abbr").forEach((abbr) => {
        const siteTitle = (abbr as HTMLElement)?.title;
        const logo = abbr.querySelector("img")?.src;
        const url = (
          abbr.querySelector("a") as HTMLAnchorElement
        )?.href?.replace(import.meta.env.VITE_REDIRECT_URL, "");
        placesToRead.push({ siteTitle, logo, url });
      });

      newsData.push({ image, title, description, placesToRead, imageSource });
    });
  return newsData;
}

export { extractNewsData };
