import React from "react";
import { useEffect, useState } from "react";

const InQueue = ({ values }) => {

    const [index, setIndex] = useState(null);
    const [waitingUsers, setWaitingUsers] = useState([
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
    ]);

    let user = ({ values });
    setWaitingUsers(...waitingUsers, setWaitingUsers.push(user));
    let findQuery = user.name;

    for (let i = 0; i < setWaitingUsers.length; i++) {
        if (findQuery === setWaitingUsers[i].name) {
            setIndex(i + 1);
            console.log(index);

        }
    };
    //#region 
    // const [waitingUsers, setWaitingUsers] = useState('');

    // let queue = [
    //     {
    //         name: "Petros",
    //         gender: "male",
    //         number: '2',
    //         drink: "Whiskey"
    //     },
    //     {
    //         name: "Seanna",
    //         gender: "female",
    //         number: '8',
    //         drink: "Rum"
    //     },
    //     {
    //         name: "Phaedra",
    //         gender: "other",
    //         number: '15',
    //         drink: "Vodka"
    //     }
    // ];

    // let user = { values };

    // queue.push(user)


    // let findQuery = user.name;

    // for (let i = 0; i < queue.length; i++) {
    //     if (findQuery === queue[i].name) {
    //         setIndex(i + 1);
    //         console.log(index);

    //     }
    // };

    // setWaitingUsers(queue.length + 1)
    //#endregion
    return (
        setWaitingUsers
    )
}

export default InQueue;