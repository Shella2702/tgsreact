import './App.css';
import profile from './img/profile2.png';
import Thumbs1 from './img/1.png';
import Thumbs2 from './img/2.png';
import Thumbs3 from './img/nd003.jpg';

function App() {
  return (
   <>
   <section className ="profile">
     <div className="header">
       <img src ={profile} alt ="profile"></img>
     </div>
     <div className ="row">
       <h2>Hai Selamat Datang Kawan, </h2>
       <p> Nama saya Shella Batrisyia, kamu bisa memanggil saya Naga. saya Dari Sidoarjo</p>
     </div>
   </section>

   <section>
     <div>About</div>
     <div>
       <p> saya saya huhuhu</p>
     </div>

     <div>Hobi</div>
     <div>
       <div>
         <img src ={Thumbs1}></img>
         <p>Bersepeda.</p>
       </div>
     </div>

     <div>
       <div>
         <img src = {Thumbs2}></img>
         <p>Berenang.</p>
       </div>
     </div>

     <div>
       <div>
         <img src = {Thumbs3}></img>
         <p>Jelajah Alam</p>
       </div>
     </div>
   </section>

   <section>
     <h2>Contact Us</h2>
     <ul>
       <li>Lokasi : Sidoarjo</li>
       <li>My Office</li>
     </ul>
   </section>

   <footer>Happy Cod</footer>
</>
  );
}

export default App;
