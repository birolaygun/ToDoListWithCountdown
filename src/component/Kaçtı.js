import React, {  useContext } from 'react';
import { myContext } from "../context/myContext"

export default function Kaçtı() {
    const {  missed } = useContext(myContext)
    let value = missed.length

    return (
        <div className="m-1 align-self-center">

            <div className="btn-group dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Kaçtı <span className="badge bg-dark">{value}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" >

                    {missed.map((item) =>
                        <li className="px-2" key={Math.random()}>
                            {item.Başlık}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
