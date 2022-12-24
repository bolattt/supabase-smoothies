import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

const Home = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        setFetchError("Couldn't fetch the smoothies");
        setSmoothies(null);
        console.log(error);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };
  }, []);
  return (
    <div className="page home">
      {fetchError && <p>{fetchError} </p>}
      {smoothies && (
        <div className="smoothies">
          {smoothies.map((smoothie) => (
            <p>smoothie.title</p>
          ))}
        </div>
      )}
      <h2>Home</h2>
    </div>
  );
};

export default Home;
