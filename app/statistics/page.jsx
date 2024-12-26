"use client"

import AnimatedNumber from "@/components/AnimatedNumber";

export default function Statistics() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    // const observer = new IntersectionObserver((entries, observer) => {
    //
    // }, options);

    return (
        <div className={"bg-white h-full w-full flex flex-col items-center justify-center"}>
            <AnimatedNumber
                targetNumber={666_666_666}
                targetNumberAsStringWithCommas={"666,666,666"}
                startingFraction={1/2}
                durationOfAnimation={1000}
            />
        </div>
    );
}