import React from "react";
import { useEffect, useState } from "react";

const UserData = ({ name, gender, number, drink }) => {

    const [index, setIndex] = useState(null);
    let queue = [
        {
            name: "Petros",
            gender: "male",
            number: '2',
            drink: "Whiskey"
        },
        {
            name: "Seanna",
            gender: "female",
            number: '8',
            drink: "Rum"
        },
        {
            name: "Phaedra",
            gender: "other",
            number: '15',
            drink: "Vodka"
        }
    ];

    const user = {
        name,
        gender,
        number,
        drink
    }

    queue.push(user)


    let findQuery = user.name;

    for (let i = 0; i < queue.length; i++) {
        if (findQuery === queue[i].name) {
            setIndex(i + 1);
            console.log(index);
            console.log(queue);

        }
    };
    return (
        queue, index
    )
}

export default UserData;