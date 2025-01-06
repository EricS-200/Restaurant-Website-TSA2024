import Link from "next/link";

/* 
Used for reference page.

Usage: 

import...

<Citation 
    type="Article/video/image/etc..." 
    author="John Doe"
    authorLink="https://..." 
    source="(platform) unsplash/NY times/pixabay/etc"
    sourceLink="https://..."
/>

author, authorLink may be left blank if unknown.

*/

export default function Citation({
  type,
  author = "Unknown Author",
  authorLink = "",
  source,
  sourceLink,
}) {
  let authorTag = undefined;
  if (authorLink == "") {
    authorTag = author;
  } else {
    authorTag = (
      <Link
        target="_blank"
        href={authorLink}
        className="text-blue-500 hover:underline"
      >
        {author}
      </Link>
    );
  }

  return (
    <>
      <p className="capitalize inline-block">{type}</p> by {authorTag} from{" "}
      <Link
        target="_blank"
        href={sourceLink}
        className="text-blue-500 hover:underline"
      >
        {source}
      </Link>
      .
    </>
  );
}
