"use client"

import {useEffect} from "react";

export default function Statistics() {
    //use state to change the value of the h1 tag when the viewer can see it using the Intersection Observer API
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    // const observer = new IntersectionObserver((entries, observer) => {
    //
    // }, options);

    useEffect(() => {
        const letters = "12345678901234567890,QWERTYUIOPASDFGHJKLZXCVBNM";

        let interval = null;

        document.getElementById("numberAnimation").onmouseover = event => {
            let iteration = 0;

            clearInterval(interval);

            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return event.target.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 10)]
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                if (iteration < 5)
                    iteration += 1 / 6;
                else
                    iteration += 1 / 3;

            }, 25);
        }
    }, []);

    return (
        <div className={"bg-white h-full w-full flex flex-col items-center justify-center"}>
            <h1 className={"text-5xl p-4"} data-value="666,666,666" id={"numberAnimation"}>666,666,666</h1>
        </div>
    );
}