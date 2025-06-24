import { useCallback, useState } from "react";
import axios from "axios";

export default function useKidneyPrediction() {
  const [predict, setPredict] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(import.meta.env.VITE_API_KIDNEY, data);
      setPredict(response.data);
    } catch (err) {
      console.error("Prediction failed", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { handleClick, predict, loading };
}
