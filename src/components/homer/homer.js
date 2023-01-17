import React from 'react';
import '../Simpson_family/Simpson_family.css'
export const Homer = () => {
    const homerImg = 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    return (
        <div className="block">
            <h1>Homer Simpson</h1>
            <img src={homerImg} alt="Homer Simpson"/>
                <p className="homer">
                    Homer Jay Simpson (born May 12, 1956 or 1969 or 1977 or 1983)[40] is the main
                    protagonist of The Simpsons series (or
                    show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is
                    overweight (said to
                    be ~240 pounds), lazy, and often ignorant to the world around him
                </p>
            <h3>most frequent phrases</h3>
                <ul>
                    <li>“D'oh!”</li>
                    <li>“Why you little...!”</li>
                    <li>“Woo-hoo!”</li>
                </ul>
        </div>
    );
};
