import { Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { NewsData } from "@/lib/getNews";

export function News({ data }: { data: NewsData }) {
  return (
    <Card className="w-full max-w-[32rem] mx-auto min-h-screen flex flex-col flex-1 snap-center snap-always shrink-0">
      <div className="flex aspect-[1.5] overflow-hidden">
        <img
          alt="Cover image"
          className="object-cover object-center w-full"
          height={400}
          src={data.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "./placeholder.svg";
          }}
        />
      </div>
      <CardContent className="p-4 flex-1">
        <div className="grid gap-2.5">
          <p className="text-xs font-medium tracking-wide uppercase line-clamp-2">
            {data.imageSource}
          </p>
          <h3 className="py-6 text-xl font-semibold leading-none line-clamp-3">
            {data.title}
          </h3>
          <p
            className="py-6 text-sm leading-snug line-clamp-8"
            style={{ overflowWrap: "anywhere" }}
          >
            {data.description}
          </p>
        </div>
        <h3 className="py-6 text-lg font-semibold leading-none line-clamp-3">
          Read More
        </h3>
        <div className="flex items-center gap-2 mt-4">
          {data?.placesToRead?.map((site) => (
            <a href={site.url} target="_blank" key={site.url}>
              <Avatar>
                <img
                  alt={site.siteTitle}
                  className="aspect-square rounded-full object-center object-cover"
                  height={40}
                  src={site.logo}
                  width={40}
                  title={site.siteTitle}
                />
                <span className="sr-only">{site.siteTitle}</span>
              </Avatar>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
