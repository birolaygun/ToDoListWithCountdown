import './app.css';
import React, { useState } from 'react';
import Line from "./component/Line";
import Done from "./component/Done";
import Missed from "./component/Missed";
import Cancel from "./component/Cancel";
import { myContext } from './context/myContext'


function App() {



  const [toDoList, setToDoList] = useState([])
  const [done, setDone] = useState([])
  const [missed, setMissed] = useState([])
  const [canceled, setCanceled] = useState([])

  const [header, setHeader] = useState("")
  const [listDate, setListDate] = useState("")
  const [listTime, setListTime] = useState("")

  const lastDate = new Date(`${listDate} ${listTime}`).getTime()

  const [date, setDate] = useState()
  const [time, setTime] = useState()


setInterval(() => {
  setDate(   new Date().toLocaleDateString())
  setTime(new Date().toLocaleTimeString() )
}, 1000);


  return (
    <myContext.Provider
      value={{
        toDoList,
        setToDoList,
        done,
        setDone,
        missed,
        setMissed,
        canceled,
        setCanceled,
      }}
    >
      <div className="App">
        <div className="kutu">
          <h1 className="header  d-block text-center yapılacak p-3 self-center ">
            YAPILACAKLAR LİSTESİ
          </h1>
          <h2 className="headerScn d-block text-center">
            {date} / {time}
          </h2>
        </div>

        <div className="durum d-flex m-3  ">
          <Done />
          <Missed />
          <Cancel />
        </div>
      </div>

      <hr />

      <div className="forum m-1 ">
        <div>
          <footer className="blockquote-footer mt-1">Listene Ekleme Yap</footer>
        </div>
        <div className=" head">
          <input
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Başlık"
          />
        </div>
        <div className=" time">
          <input
            value={listDate}
            onChange={(e) => setListDate(e.target.value)}
            type="date"
            className="form-control"
            placeholder="Tarih"
          />
        </div>
        <div className=" hour">
          <input
            value={listTime}
            onChange={(e) => setListTime(e.target.value)}
            type="time"
            className="form-control"
            placeholder="saat"
          />
        </div>
        <div className=" buttn">
          <button
            onClick={() => {
              if (lastDate - new Date().getTime() < 0) {
                alert("geçmiş zamana ekleme yapamazsınız");
              } else if (header === "" || listDate === "" || listTime === "") {
                alert("eksik giriş yaptınız!!!");
              } else
                setToDoList([
                  ...toDoList,
                  {
                    Line: header,
                    when: lastDate,
                    key: Math.random(),
                  },
                ]);
              setHeader("");
              setListDate("");
              setListTime("");
            }}
            className="addButton btn btn-dark"
          >
            Ekle
          </button>
        </div>
      </div>

      <div>
        <table id="tablo" className="tabb table table-dark table-striped mt-3">
          <thead>
            <tr>
              <th className="col-1"> </th>
              <th className="col-5">Başlık</th>
              <th className="col-1"></th>
              <th className="col-3">Süre</th>
              <th className="col-2"> </th>
            </tr>
          </thead>

          {toDoList.map((item) => (
            <Line
              key={item.key}
              lineHeader={item.Line}
              addTime={item.when}
              headKey={item.key}
            />
          ))}
        </table>
      </div>
    </myContext.Provider>
  );}
export default App;