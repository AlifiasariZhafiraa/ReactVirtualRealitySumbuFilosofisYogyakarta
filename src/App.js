import React from 'react';
import tlogo from './tlogo.png';
import './App.css';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import tj from "../src/assets/img/tj.jpg";
import a from "../src/assets/img/a.JPG";
import b from "../src/assets/img/b.JPG";
import c from "../src/assets/img/c.JPG";
import aa from "../src/assets/img/aa.JPG";
import bb from "../src/assets/img/bb.JPG";
import cc from "../src/assets/img/cc.JPG";
import sumbu from "../src/assets/img/sumbu.jpg";
import "../src/components/Modal/modal.js";





function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#"><i>ꦠꦺꦴꦲꦸꦫꦶꦠꦾ</i></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in text-white">philosophical axis</div>
        <div className="intro-heading text-dark">Sumbu Filosofis</div>  
        <div className="intro-lead-in text-white">ꦱꦸꦩ꧀ꦧꦸ​ꦥ꦳ꦶꦭꦺꦴꦱꦺꦴꦥ꦳ꦶꦱ꧀</div>      
      </div>
    </div>
  </header>

  <section className="page-section" id="aboutus">
    <div className="about-container">
        <div className="about">
            <div className ="inner-section1">
              <div className="karya-title">
              <h1>Sumbu Filosofis</h1>
              <h3><i>ꦱꦸꦩ꧀ꦧꦸ​ꦥ꦳ꦶꦭꦺꦴꦱꦺꦴꦥ꦳ꦶꦱ꧀</i></h3>
                <p className="text">
                Kota Yogyakarta sarat dengan makna filosofi, setiap bagian kota seakan menjadi bagian dari buku filsafat. 
                Bahkan, dapat dikatakan Kota Yogyakarta itu sendiri adalah Filosofi atau City of Philosophy. Kota Yogyakarta 
                ditata berdasarkan filosofi yang begitu mendalam tentang hubungan manusia dengan Tuhan dan alam, serta cerminan 
                perjalanan hidup manusia sejak lahir hingga menghadap Sang Khalik, seperti tertuang dalam sumbu filosofis yang 
                menghubungkan Panggung Krapyak–Kraton–Tugu Pal Putih.
                <p>
                <p></p>
                Penerapan konsep budaya tersebut (sumbu imajiner dan filosofis) pada tata ruang DIY telah menghasilkan 
                apa yang oleh UNESCO disebutkan sebagai saujana asosiatif (associative landscape) yang merupakan paduan 
                antara unsur budaya bendawi (tangible)dan tak bendawi (intangible). Oleh karena itu, konsep perancangan 
                dan pendirian Kota Yogyakarta merupakan suatu mahakarya atau “Masterpiece of Creative Genius” yang tidak 
                ada bandingannya, bahkan pada taraf dunia. Kota Yogyakarta yang dibangun beralaskan konsep filosofi 
                tinggi sehingga sarat dengan makna filosofi, sangat layak disebut sebagai “City of Philosophy” 
                (Kota Filosofis).
                </p>
                </p>
            </div>
            </div>
            </div>
            </div>
    </section>

  <section className="page-section" id="services">
    <div className="container1">
        <div className="karya-title">
          <h1>Services</h1>
          <h3><i>Servis - ꦱꦺꦂꦮ꦳ꦶꦱ꧀</i></h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
        <a href="#collection">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-university fa-stack-1x fa-inverse"></i>
          </span>
          </a>
          <h4 className="service-heading">Collection</h4>
          <p className="text-muted">Mengenal sumbu filosofis dan membantumu mengetahui bukti - bukti peninggalan sejarah.</p>
        </div>
        <div className="col-md-4">
          <a href="#education">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x "></i>
            <i className="fa fa-book fa-stack-1x fa-inverse"></i>
          </span>
          </a>
          <h4 className="service-heading">Education</h4>
          <p className="text-muted">Belajar bersama tentang sumbu filosofis Yogyakarta.</p>
        </div>
        <div className="col-md-4">
          <a href="#tour">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x "></i>
            <i className="fa fa-star fa-stack-1x fa-inverse"></i>
          </span>
          </a>
          <h4 className="service-heading">Virtual Tour</h4>
          <p className="text-muted">Membuat kamu merasakan berkeliling objek bersejarah secara nyata didukung dengan teknologi VR (Virtual Reality)</p>          
        </div>
      </div>
  </section>

 <section className="bg-light page-section" id="collection">
  <div className="karya-title">
            <h1>Collection</h1>
            <h3><i>Koleksi - ꦏꦺꦴꦭꦺꦏ꧀ꦱ꧀</i></h3>
        <div className="karya-container">
           <div className="blog-poster">
                <div className="poster">
                    <img className="poster-img" src={a}></img>                    
                    <div className="poster-caption">
                        <h3>Panggung Krapyak</h3>
                        <span class="date">Jl. KH. Ali Maksum, Krapyak Kulon, Panggungharjo, Kec. Sewon, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>               
                <div className="poster">
                    <img className="poster-img" src={b}></img>
                    <div className="poster-caption">
                        <h3>Plengkung Nirbaya Gading</h3>
                        <span class="date">Jl. Patehan Kidul No.4, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta </span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={c}></img>
                    <div className="poster-caption">
                        <h3>Tugu Yogyakarta</h3>
                        <span class="date">Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>
                
           </div>
        </div>
        </div>
        </section>

  <section className="page-section" id="education">
  <div className="karya-title">
            <h1>Education</h1>
            <h3><i>Edukasi - ꦲꦺꦢꦸꦏꦱ꧀</i></h3>
        <div className="karya-container">
           <div className="blog-poster">
           <div className="poster">
                  <a href="#c22">
                    <img className="poster-img" src={a}></img>
                    </a>
                    <div className="poster-caption">
                        <h3>Panggung Krapyak</h3>
                        <span class="date">Jl. KH. Ali Maksum, Krapyak Kulon, Panggungharjo, Kec. Sewon, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>
                <div className="poster">
                <a href="#c33">
                    <img className="poster-img" src={b}></img>
                    </a>
                    <div className="poster-caption">
                        <h3>Plengkung Nirbaya Gading</h3>
                        <span class="date">Jl. Patehan Kidul No.4, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta  </span>
                    </div>
                </div>
                <div className="poster">
               < a href="#c11">
                    <img className="poster-img" src={c}></img>
                    </a>                    
                    <div className="poster-caption">
                        <h3>Tugu Jogja</h3>
                        <span class="date">Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>
                
                
           </div>
        </div>
        </div>
</section>
<section className="page-section" id="c22">
    <div className="c2-container">
        <div className="c2">
            <div className ="inner-section">
              <h1>Panggung Krapyak</h1>
                <p className="text">
                Secara simbolik Panggung Krapyak
            merupakan bagian awal dari tiga susunan sumbu filosofi (Panggung Krapyak-Kraton-Tugu) Sangkan Paraning Dumadi. 
            Panggung Krapyak menggambarkan Yoni, atau alat kelamin wanita. Pertemuan antara Wiji (benih) yang digambarkan 
            antara Panggung Krapyak (sel Telur) dengan Tugu Pal Putih sebelah Utara Kraton (sperma) yang melahirkan manusia. 
            Krapyak menurut kepercayaan Jawa, khususnya Kraton adalah tempat roh-roh. Pencipta berkenan menghembuskan Roh suci 
            ke dalam badan besar seorang calon bayi dalam kandungan sang ibu.
                </p>
            </div>
            </div>
            </div>
    </section>
    <section className="page-section" id="c33">
    <div className="c3-container">
        <div className="c3">
            <div className ="inner-section">
              <h1>Plengkung Nirbaya Gading</h1>
                <p className="text">
                Plêngkung Nirbaya (Plêngkung Gadhing) merupakan 
                Plêngkung Pungkuran (belakang) dari tata ruang kraton. 
                Di lingkungan kraton Plêngkung ini berfungsi untuk 
                lewat jenazah Sultan yang wafat untuk dimakamkan 
                ke pasaréyan Imogiri. Itulah sebabnya Sultan yang 
                masih bertahta pantang melewati plêngkung ini, hal 
                ini diikuti pula oleh kerabat kraton.
                Di lingkungan Jeron Benteng, apabila ada warga 
                masyarakat yang meninggal jenasah yang akan 
                dikubur tidak dilewatkan Plêngkung Nirbaya ini. Hal 
                ini sebagai tanda hormat masyarakat kepada Sultan 
                junjungannya.
                Makna filsofis dari Nirbaya, ialah bahwa jenazah Sultan 
                yang melewati Plêngkung Nirbaya sudah lepas bebas 
                dari godaan duniawi, sudah memasuki keabadian 
                manunggal total dengan Gusti Kang Akarya Jagad. 
                Sultan secara utuh sudah tidak terikat dengan nafsu 
                duniawi, sudah nirbaya, terlepas dari mara bahaya 
                apapun
                </p>
            </div>
            </div>
            </div>
    </section>
        <section className="page-section" id="c11">
    <div className="c1-container">
        <div className="c1">
            <div className ="inner-section">
              <h1>Tugu Jogja</h1>
                <p className="text">
                Pal Putih terletak di 
            sebelah utara kraton. Bangunan monumen ini berdiri di tengah perempatan antara jalan Marga Utama (Pangeran Mangkubumi), 
            jalan Jenderal Soedirman, jalan A.M. Sangaji serta jalan Diponegoro. Tugu ini dibangun pada masa Sri Sultan Hamengku 
            Buwana I pada 1755. Pada saat awal berdirinya, tugu ini terkenal dengan sebutan Tugu Golong-Gilig, karena bentuk 
            bangunan puncaknya berbentuk golong (bulat) sedangkan tiangnya berbentuk gilig (silinder). Golong-gilig juga 
            melambangkan bersatunya rakyatraja dan manusia-Sang Pencipta. Tinggi tugu ini pada mulanya mencapai 25 meter. 
            Fungsi dari tugu ini pada masa lalu adalah untuk “têtêngêr” (penanda) kota dan barometer arah ketika Sri Sultan 
            Hamengku Buwana I melakukan meditasi, di Bangsal Manguntur Tangkil. 
                </p>
            </div>
            </div>
            </div>
    </section>

  
  <section className="bg-light page-section" id="tour">
  <div className="karya-title">
            <h1>Virtual Tour</h1>
            <h3><i>Tur Virtual - ꦠꦸꦂ​ꦮ꦳ꦶꦂꦠꦸꦮꦭ꧀</i></h3>
        <div className="karya-container">
           <div className="blog-poster">
                <div className="poster">
                  <a href="http://103.100.27.72/pk">
                    <img className="poster-img" src={aa}></img>
                    </a>
                    <div className="poster-caption">
                        <h3>Panggung Krapyak</h3>
                        <span class="date">Jl. KH. Ali Maksum, Krapyak Kulon, Panggungharjo, Kec. Sewon, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>
                <div className="poster">
                <a href="http://103.100.27.72/pg">
                    <img className="poster-img" src={bb}></img>
                    </a>
                    <div className="poster-caption">
                        <h3>Plengkung Nirbaya Gading</h3>
                        <span class="date">Jl. Patehan Kidul No.4, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta </span>
                    </div>
                </div>
                <div className="poster">
                <a href="http://103.100.27.72/tugu">
                    <img className="poster-img" src={cc}></img>                    
                    </a>
                    <div className="poster-caption">
                        <h3>Tugu Jogja</h3>
                        <span class="date">Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </div>
                </div>                            
           </div>
        </div>
        </div>
  </section>

  

  
  <section className="page-section" id="contact">    
  <div className="karya-title">
        <h1>Contact us</h1>
        <h3><i>Hubungi Kami - ꦲꦸꦧꦸꦔꦶꦏꦩꦶ</i></h3>
        <div className="kontak-wraped">
            <div className="kontak-info">              
                <div className="kontak-card">
                <a href="https://mail.google.com/" className="card-info">
                        <MdEmail color="white" size="2.5rem" />
                 </a>
                <p>tourity@gmail.com</p>
                </div>

                <div className="kontak-card">
                <a href="#" className="card-info">
                        <MdCall color="white" size="2.5rem"/>
                 </a>
                <p>081234567890</p>
                </div>

                <div className="kontak-card">
                <a href="https://g.page/globalintermedia?share" className="card-info">
                        <SiGooglemaps color="white" size="2.5rem"/>
                 </a>
                <p>Yogyakarta</p>
                </div>
            </div>
         </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Tourity 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-map-marker"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
        <span className="copyright ">Privacy Policy   Terms of Use</span>          
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
