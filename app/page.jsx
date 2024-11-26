import Image from "next/image";

function generateLoremIpsum(wordCount) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const words = loremIpsum.split(" ");
    let result = [];
    for (let i = 0; i < wordCount; i++) {
        result.push(words[i % words.length]);
    }
    return result.join(" ");
}

export default function Home() {
  return (
      <div className="bg-green-700 flex items-center justify-center pt-20 px-44">
          This is the homepage
          <br/>
          {generateLoremIpsum(3000)}
      </div>
  );
}
