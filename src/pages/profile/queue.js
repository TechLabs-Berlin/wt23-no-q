import React from "react";
import { useUser } from "../../useData";

export default function Queue() {
    return <h1>hey,{localStorage.getItem(user.id)} you are in Queue!</h1>;
}