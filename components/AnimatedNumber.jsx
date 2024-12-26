import React, { useState, useEffect, useRef } from 'react';

/**
 * Parameters:
 *
 * targetNumber (int): The number you want to hit (final number)
 *
 * targetNumberStringWithCommas (string): The number you want to hit, provided as a string with commas
 *
 * startingFraction (float): The fraction of the target number you want to start the animation from (eg. 0.5 for 50%)
 *
 * durationOfAnimation (int): The duration of the animation in milliseconds
 */
export default function AnimatedNumber({targetNumber, targetNumberAsStringWithCommas, startingFraction, durationOfAnimation})
{
    const numberRef = useRef(null); // Reference to the <h1> element
    const [currentValue, setCurrentValue] = useState(targetNumber * startingFraction); // For the number value

    useEffect(() => {
        const targetValue = parseInt(numberRef.current.getAttribute('data-value').replace(/,/g, ''), 10);
        const startingValue = targetNumber * startingFraction;

        setCurrentValue(startingValue);

        let startTime;
        const duration = durationOfAnimation;

        const animate = (timestamp) => {
            if (!startTime)
                startTime = timestamp;

            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                setCurrentValue(startingValue + (targetValue - startingValue) * progress);
                requestAnimationFrame(animate);
            } else {
                setCurrentValue(targetValue);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <h1
            ref={numberRef}
            id="numberAnimation"
            className="text-5xl p-4 font-semibold"
            data-value={targetNumberAsStringWithCommas}
        >
            {new Intl.NumberFormat().format(Math.round(currentValue))}
        </h1>
    );
};