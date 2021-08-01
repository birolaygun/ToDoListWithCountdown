import './bootstrap.css';
import './app.css';
import React, { useState } from 'react';
import Başlık from './component/Başlık'
import Yapıldı from './component/Yapıldı'
import Kaçtı from './component/Kaçtı'
import İptal from './component/İptal'
import { contex1 } from './context/contex1'


function App() {



  const [liste, setListe] = useState([])
  const [olumlu, setOlumlu] = useState([])
  const [olumsuz, setOlumsuz] = useState([])
  const [iptal, setİptal] = useState([])

  const [başlık, setBaşlık] = useState("")
  const [tarih, setTarih] = useState("")
  const [saat, setSaat] = useState("")

  const netTarih = new Date(`${tarih} ${saat}`).getTime()

  const [tarr, setTarr] = useState()
  const [zamm, setZamm] = useState()


setInterval(() => {
  setTarr(   new Date().toLocaleDateString())
  setZamm(new Date().toLocaleTimeString() )
}, 1000);


  





  return (
    <contex1.Provider value={{ liste, setListe, olumlu, setOlumlu, olumsuz, setOlumsuz, iptal, setİptal }} >
      <div className="App">

          <div className="kutu">

            <h1 className="baslık2  d-block m-auto yapılacak p-3 self-center ">YAPILACAKLAR LİSTESİ</h1>
            <h2 className="baslık3 d-block text-center">{tarr} / {zamm}</h2>
 
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
            <footer className="blockquote-footer mt-1">Listene Ekleme Yap</footer></div>
          <div className=" baaa">
            <input value={başlık} onChange={e => setBaşlık(e.target.value)} type="text" className="form-control" placeholder="Başlık" />
          </div>
          <div className=" taaa">
            <input value={tarih} onChange={e => setTarih(e.target.value)} type="date" className="form-control" placeholder="Tarih" />
          </div>
          <div className=" saaa">
            <input value={saat} onChange={e => setSaat(e.target.value)} type="time" className="form-control" placeholder="saat" />
          </div>
          <div className=" buuu">
            <button  onClick={() => {
              if (netTarih - new Date().getTime() < 0) { alert("geçmiş zamana ekleme yapamazsınız") } else if (başlık === "" || tarih === "" || saat === "") { alert("eksik giriş yaptınız!!!") } else
                setListe([...liste, {
                  Başlık: başlık, neZamana: netTarih, key: Math.random()
                }]);
              setBaşlık("");
              setTarih("");
              setSaat("");
            }
            }
              className="buuuu btn btn-dark">Ekle</button>
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
                başlık3={item.Başlık}
                nettt={item.neZamana}
                keyyy={item.key}
              />

            )}





          </table>

        </div>



      
    </contex1.Provider>
  );






}



export default App;