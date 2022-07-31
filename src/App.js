import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSittingDog } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";




function App() {
  return (
    <div className="App">
      {/* Öncelikle nav bar oluşturup ona class verdik. bg-dark ile backround u dark yaptık.
      içindeki yazıların beyazlığı için navbar-dark komutunu kullandık. 
      ayrıca fixed-top ile yukarıya sabitledik. */}
      {/* navbar-expand-sm komutu ile sağ taraftaki navbarin sm yani small haline geldiğinde alt alta olması
      komutunu vermiş oldum. yani ekran kücükken alt alta olacaklar. değilken yan yana varsayılan olacak. */}
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
        {/* köpek resmi ve yazılar çok solluydu. biraz daha ortalamak için container içine aldım. */}
        <div className="container">
          {/* &nbsp komutu - null back space in kısaltması. koydugum resim ile yazı arasına boşluk eklemiş oldum. */}
          <a href="/" className='navbar-brand'><GiSittingDog></GiSittingDog>&nbsp;&nbsp;&nbsp;&nbsp;
            Lucy'nin Günlüğü
          </a>
          <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarCollapse">
            <i><SiDatadog></SiDatadog></i>
          </button>
          <div id='navbarCollapse' className='collapse navbar-collapse' >
            {/* navbar class-ı ile sağ taraftaki navbarı olusturduk. */}
            <ul className='navbar-nav'>
              {/* icerisindeki itemlar için li oluşturduk. */}
              <li className="nav-item">
                {/* a ile bir link olusturup ""şimdilik onu boş bıraktım"" nav-link ile bootstrapten bu sekli alıp
              active komutu ile daha parlak ve aktif bir şekilde görünmesini sağladım." */}
                <a href="#" className='nav-link active'>
                  Ana Sayfa
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className='nav-link active'>
                  Lucy Hakkında
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className='nav-link active'>
                  Fotoğraf Galerimiz
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className='nav-link active'>
                  Bize Ulaşın
                </a>
              </li>
            </ul>
          </div>
















        </div>
      </nav>

      <header>

        <div className='jumbotron bg-dark text-white'>
          <div className='container'>
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">
                O BİR ARKADAŞ, O BİR DOST, O BİR SEVGİLİ... <br />
                O BİR...
              </h1>
              <p className="lead my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nesciunt quasi? Ea quos doloribus modi numquam? Atque expedita consectetur, reiciendis tempore quos, placeat voluptatem ipsam quia autem, iure non! Explicabo, libero delectus quidem porro fugit eligendi quo aliquid quibusdam qui.
              </p>
              <p className='lead mb-0'>
                <a href="#" className='text-white font-weight-bold'>Okumaya Devam Edin</a>
              </p>
            </div>
          </div>
        </div>
      </header>













    </div>






  );
}

export default App;
