import './app.css';
import React, { useState } from 'react';
import Başlık from './component/Başlık'
import Yapıldı from './component/Yapıldı'
import Kaçtı from './component/Kaçtı'
import İptal from './component/İptal'
import { myContext } from './context/myContext'


function App() {



  const [liste, setList] = useState([])
  const [done, setDone] = useState([])
  const [missed, setMissed] = useState([])
  const [canceled, setCanceled] = useState([])

  const [başlık, setBaşlık] = useState("")
  const [tarih, setTarih] = useState("")
  const [zaman, setZaman] = useState("")

  const netTarih = new Date(`${tarih} ${zaman}`).getTime()

  const [date, setDate] = useState()
  const [time, setTime] = useState()


setInterval(() => {
  setDate(   new Date().toLocaleDateString())
  setTime(new Date().toLocaleTimeString() )
}, 1000);


  return (
    <myContext.Provider value={{ liste, setList, done, setDone, missed, setMissed, canceled, setCanceled }} >
      <div className="App">

          <div className="kutu">
            <h1 className="header  d-block text-center yapılacak p-3 self-center ">YAPILACAKLAR LİSTESİ</h1>
            <h2 className="headerScn d-block text-center">{date} / {time}</h2>
          </div>

          <div className="durum d-flex m-3  " >
            <Yapıldı />
            <Kaçtı />
            <İptal />
          </div>
      </div>

<hr />

        <div className="forum m-1 ">
          <div>
            <footer className="blockquote-footer mt-1">Listene Ekleme Yap</footer>
          </div>
          <div className=" head">
            <input value={başlık} onChange={e => setBaşlık(e.target.value)} type="text" className="form-control" placeholder="Başlık" />
          </div>
          <div className=" time">
            <input value={tarih} onChange={e => setTarih(e.target.value)} type="date" className="form-control" placeholder="Tarih" />
          </div>
          <div className=" hour">
            <input value={zaman} onChange={e => setZaman(e.target.value)} type="time" className="form-control" placeholder="saat" />
          </div>
          <div className=" buttn">
            <button  onClick={() => {
              if (netTarih - new Date().getTime() < 0) { alert("geçmiş zamana ekleme yapamazsınız") } else if (başlık === "" || tarih === "" || zaman === "") { alert("eksik giriş yaptınız!!!") } else
                setList([...liste, {
                  Başlık: başlık, neZamana: netTarih, key: Math.random()
                }]);
              setBaşlık("");
              setTarih("");
              setZaman(""); }}
              className="addButton btn btn-dark">Ekle
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

            {liste.map((item) =>

              <Başlık key={item.key}
                baslıkHeader={item.Başlık}
                timeAdd={item.neZamana}
                headKey={item.key}
              />
            )}

          </table>

        </div>

    </myContext.Provider>
  );}
export default App;