import './bootstrap.css';
import './app.css';
import React, { useState, useContext } from 'react';
import { contex1 } from "../context/contex1"



export default function Başlık({ başlık3, nettt, keyyy }) {
    const { liste, setListe, iptal, setİptal, olumsuz, olumlu, setOlumsuz, setOlumlu } = useContext(contex1)

    const [gün3, setGün3] = useState()
    const [saat3, setSaat3] = useState()
    const [dakika3, setDakika3] = useState()
    const [saniye3, setSaniye3] = useState()



    setInterval(() => {
        let kalan = nettt - new Date().getTime()

        setGün3(Math.floor(kalan / (1000 * 60 * 60 * 24)))
        setSaat3(Math.floor((kalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setDakika3(Math.floor(((kalan % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)))
        setSaniye3(Math.floor((((kalan % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000))

    }, 1000);



    if (nettt - new Date().getTime() > 0) {

        return (

            <tbody key={Math.random()}>
                <tr>
                    <th className="py-4" scope="row"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="align-items-center my-auto oko bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg></th>
                    <td className="py-4">  {başlık3} </td>
                    <td>

                    </td>
                    <td > <div className={"d-flex  "}>


                        <div className={"p-1   text-center bore"}><div><b>  {gün3}   </b></div><div>Gün</div></div>
                        <div className={"p-1   text-center bore"}><div><b>   {saat3}  </b></div><div>Saat</div></div>
                        <div className={"p-1   text-center bore"}><div><b>   {dakika3}    </b></div><div>Dk</div></div>
                        <div className={"p-1   text-center bore"}><div><b>   {saniye3}   </b></div><div>Sn</div></div>

                    </div>

                    </td>
                    <td>
                        <div className="d-flex  justify-content-evenly " >
                            <div className="m-3" style={{ cursor: 'pointer' }} onClick={() => {
                                setOlumlu([...olumlu, { Başlık: başlık3 }])
                                setListe(liste.filter((ittem) => {
                                    return ittem.key !== keyyy
                                }))
                            }}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="oko bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg></div>
                            <div className="m-3" style={{ cursor: 'pointer' }} onClick={() => {
                                setİptal([...iptal, { Başlık: başlık3 }])
                                setListe(liste.filter((ittem) => {
                                    return ittem.key !== keyyy
                                }))
                            }}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="oko bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    } else {


        setOlumsuz([...olumsuz, { Başlık: başlık3 }])
        setListe(liste.filter((ittem) => {
            return ittem.key !== keyyy
        }))

    }

    return (

        <tbody className={"d-none"} key={keyyy}>
        </tbody>
    )
}
