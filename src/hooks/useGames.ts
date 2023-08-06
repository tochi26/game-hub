import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controllers = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", {signal: controllers.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});

        return () => controllers.abort();
    }, []);

    return { games, error };

}

export default useGames;