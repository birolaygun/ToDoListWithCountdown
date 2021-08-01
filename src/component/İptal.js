import './bootstrap.css';
import './app.css';
import React, {  useContext } from 'react';
import { contex1 } from "../context/contex1"

export default function İptal() {
    const { iptal } = useContext(contex1)
    let value = iptal.length

    return (
        <div className="m-1 align-self-center">

            <div className="btn-group dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    İptal <span className="badge bg-dark">{value}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" >

                    {iptal.map((item) =>
                        <li className="px-2" key={Math.random()}>
                            {item.Başlık}
                        </li>
                    )}

                </ul>
            </div>


        </div>
    )
}
