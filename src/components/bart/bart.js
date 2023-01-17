import React from 'react';
import '../Simpson_family/Simpson_family.css'
const Bart = () => {
    const bartImg = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
    return (
        <div className="block">
            <h1>Bart Simpson</h1>
            <img src={bartImg} alt="Bart Simpson"/>
                <p className="bart">
                    Bartholomew "Bart" Jojo Simpson (born April 1 or February 23) is the mischievous,
                    rebellious, misunderstood,
                    disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the
                    only son of
                    Homer and Marge Simpson, and the older brother of Lisa and Maggie. l
                </p>
            <h3>most frequent phrases</h3>
                <ul>
                    <li>“Ay Caramba!”</li>
                    <li>“Eat my shorts!”</li>
                    <li>“I didn't do it!”</li>
                </ul>
        </div>
    );
};

export default Bart;