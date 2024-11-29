
export default function menu()
{
    function generateLoremIpsum(wordCount) {
        const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        const words = loremIpsum.split(" ");
        let result = [];
        for (let i = 0; i < wordCount; i++) {
            result.push(words[i % words.length]);
        }
        return result.join(" ");
    }

    return (
        <div className="bg-green-700 flex items-center justify-center pt-20 px-44">
            <p className={"pt-8"}>
                <a className={"font-bold"}>Menu</a>
                <br/><br/>
                {generateLoremIpsum(2000)}
            </p>
        </div>
    );
}