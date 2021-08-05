import React, { useContext } from 'react';
import { myContext } from "../context/myContext"


export default function Yapıldı() {
    const { done } = useContext(myContext)
    let value = done.length

    return (
        <div className=" m-1 align-self-center">

            <div className="btn-group dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Yapıldı <span className="badge bg-dark">{value}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" >

                    {done.map((item) =>
                        <li className="px-2" key={Math.random()}>
                            {item.Başlık}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
