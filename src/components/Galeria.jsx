import { useContext, useEffect, useState } from "react";
import Heart from "./Heart";
import { LikeContext } from "../context/LikeContext";

export default function Galeria() {
    const [pics, setPics] = useState([]);
 
  
    useEffect(() => {
      fetch("https://api.pexels.com/v1/search?query=nature&per_page=20", {
        headers: {
          Authorization: "mJxsxjJokAWUVCKuBKFjuurG9jnJviICbpcAPOS3O0v4jerurgehtBy5"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setPics(data.photos);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }, []);

    const {likes, setLikes} = useContext(LikeContext)
    return (
      <div className="galeria">
        {pics.map((pic) => (
        <article key={pic.id}>
            <img  src={pic.src.tiny} alt={pic.photographer} className="img_pics"/>
            <Heart className="abs"  />
        </article>          
        ))}
      </div>
    );
 
}