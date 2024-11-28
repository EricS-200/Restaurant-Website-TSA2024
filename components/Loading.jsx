
"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { cn } from "@/utils/utils";


export default function LoadItems({items, loading}) {
  
    //declaring factual funs
    const [funFact, setFunFact] = useState("");
    const funStuff = ["🍇", "🥒", "🍅", "🍔<-veggie", "🍖🍗🥩🥓 are all very bad for you", "🥭mango🥭mango🥭mango"];

    useEffect(() => {
        const funFactInterval = setInterval(() => {
          setFunFact(funStuff[Math.floor(Math.random() * funStuff.length)]);
        }, 2000); //update 2 secs
    
        // clean
        return () => {
          clearInterval(funFactInterval);
        };
      }, []);

    if(loading) {
            return (
                
                <section>
                    <div className={`w3-container w3-center ${loading ? 'w3-animate-opacity' : ''}`}>
                        <img src="https://media2.giphy.com/media/d9Hhu2N1KTF0uW76WQ/200w.gif?cid=6c09b952hspy3uk7xedypad6jts1cw08mqw5v8jke50m6nm1&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
                        <p>Fun Fact:  {funFact}</p>
                    </div>  
                </section>
            );
    } 
        return (items);

}




/* example code

    import LoadItems from "./LoadItems";

    export default function ThingyMaJob() {
        const [loading, setLoading] = useState(true);

        return(
            <LoadItems items = {
                SCREEN HERE
            } loading = {loading} />
        )
        
        ----------- SOME ASYNC STUFF HERE----------------

        setLoading(false);
    }

*/
