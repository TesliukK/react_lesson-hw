import React from 'react';
import '../Simpson_family/Simpson_family.css'
const Lisa = () => {
   const lisaImg = 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
    return (
        <div className="block">
            <h1>Lisa Simpson</h1>
            <img src={lisaImg} alt="Lisa Simpson"/>
                <p className="lisa">
                    Lisa Marie Simpson (born May 9) is the elder daughter and middle child of the
                    Simpson family and one of the two
                    tritagonists (along with Marge,) of The Simpsons series.
                </p>
            <h3>most frequent phrases</h3>
                <ul>
                    <li>“If anyone wants me, I'll be in my room.”</li>
                    <li>“Quit it, Bart!”</li>
                    <li>“BAAAAART!!”</li>
                </ul>
        </div>
    );
};

export default Lisa;