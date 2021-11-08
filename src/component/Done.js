import React, { useContext } from 'react';
import { myContext } from "../context/myContext"


export default function Done() {
    const { done } = useContext(myContext)
    let value = done.length

    return (
      <div className=" m-1 align-self-center">
        <div className="btn-group dropdown">
          <button
            type="button"
            className={
              value
                ? "btn btn-secondary dropdown-toggle "
                : "btn btn-secondary dropdown-toggle disabled"
            }
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Yapıldı <span className="badge bg-dark">{value}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            {done.map((item) => (
              <li className="px-2" key={Math.random()}>
                {item.Line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
