import React from 'react';
import '../Simpson_family/Simpson_family.css'

const Marge = () => {
    const margeImg = 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    return (
        <div className="block">
            <h1>Marge Simpson</h1>
            <img src={margeImg} alt="Marge Simpson"/>
            <p className="marge">
                Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the Simpson
                family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer
                have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often
                provides a grounding voice in the midst of her family's antics by trying to maintain order in the
                Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers
                ranging from a police officer to an anti-violence activist.
            </p>
            <h3>most frequent phrases</h3>
            <ul>
                <li>“Hrmmm….”</li>
                <li>“Now it's Marge's time to shine!”</li>
                <li>“Oh!”</li>
            </ul>
        </div>
    );
};

export default Marge;