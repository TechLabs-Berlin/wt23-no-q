import React from "react";
import { useEffect, useState } from "react";


const InQueue = (values) => {

    return (
        <div className="container">
            <h1 className="form-success">{values.name}You'are in Queue!!!</h1>
        </div>

    )
}

export default InQueue;