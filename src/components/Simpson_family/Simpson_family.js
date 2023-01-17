import React from 'react';
import './Simpson_family.css'

export const Simpson_family = () => {
    const simpsonFamily = 'https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png'
    return (
        <div className="block">
            <h1>Simpson family</h1>
            <img src={simpsonFamily} alt="Simpson family"/>
                <p className="family">
                    The Simpsons is an American animated sitcom created by Matt Groening for the Fox
                    Broadcasting Company.The
                    series is a satirical depiction of American life, epitomized by the Simpson family, which consists
                    of Homer, Marge,
                    Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American
                    culture and
                    society, television, and the human condition.
                </p>
        </div>
    );
};
