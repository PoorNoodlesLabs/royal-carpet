import Head from "next/head";
import Default from "./Default";
import config from "../../utils/config";
import OptimizedImage from "../OptimizedImage";
import SEO from "../SEO";
import PlausibleProvider from "next-plausible";

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}

export default (frontmatter) => {
  const url = formatPath(frontmatter.__resourcePath);
  return ({ children }) => {
    return (
      <PlausibleProvider domain="royaltycarpetcleaning.net">
        <Default>
          <SEO
            title={frontmatter.title}
            description={frontmatter.title}
            url={url}
            image={frontmatter.postImage || config.images.default}
          />

          <div className="max-w-screen-lg">
            <figure className="mt-4 mb-16">
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {frontmatter.title}
                </h1>
                <span className="italic">{frontmatter.date} - </span>
                <span className="italic">{frontmatter.readingTime.text}</span>
              </div>
              <OptimizedImage
                classes="w-full md:my-4"
                fileName={frontmatter.postImage || config.images.default}
                altText={frontmatter.altText || "Travis Ueki"}
              />
            </figure>
            <div className="markdown">{children}</div>
            <hr className={`border-white`} />
            <div className="flex mt-3">
              {frontmatter.tags &&
                frontmatter.tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="flex rounded-full border border-white px-2 py-1 text-xs font-bold mr-1"
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>
          </div>
        </Default>
      </PlausibleProvider>
    );
  };
};
