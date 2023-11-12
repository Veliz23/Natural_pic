import { createContext, useState } from "react";

export const LikeContext = createContext({});

export default function LikeContextProvider({children}) {

    const [likes, setLikes] = useState(false);
    
    const likePhoto = (pics) => {
        if(!likes.some((p) => p.id === pics.id)){
            setLikes([...likes, pics]);
        }
    };
    
    return(
        <LikeContext.Provider value={{likes, setLikes}}>
            {children}
        </LikeContext.Provider>
    );
};

