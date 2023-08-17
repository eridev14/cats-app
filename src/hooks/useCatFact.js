import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFact] = useState();

    function refreshRandomFact() {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(() => {
        refreshRandomFact();
    }, [])

    return { fact, refreshRandomFact }
}