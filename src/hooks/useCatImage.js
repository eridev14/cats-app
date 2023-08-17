import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        if (!fact) return
        let firstFact = fact.split(' ', 3).join(' ');

        fetch(`https://cataas.com/cat/cute/says/${firstFact}?json=true`)
            .then(res => res.json())
            .then(data => {
                setImageURL(data.url)
            })
    }, [fact])

    return { imageURL: `https://cataas.com/${imageURL}` }
}