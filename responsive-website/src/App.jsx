import "./App.css";

export default function App(){
    return(
    <div>
    <header className="header">
        <div className="logo">MyWebsite</div>
        <nav className="nav"> 
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>  
        </nav>
    </header>
     
     
<section id="home" className="hero-section">
<h1>Welcome to My Website</h1>
<p>Building beautiful and responsive websites with React.js , html and css in the
middle of the night</p>
</section>

<section id="about" className="section">
<h2>About Us</h2>
<p>We specialize in creating fast, modern, and user-friendly websites Building
beautiful and responsive websites with React.js , html and css in the middle of the
night.Building beautiful and responsive websites with React.js , html and css in the middle
of the night.Building beautiful and responsive websites with React.js , html and css in the
middle of the night.</p>
</section>

<section id="services" className="section">
<h2>Our Services</h2>
<div className="card-container">
<div className="card">
<h3>Web Design</h3>
<p>Beautiful, responsive, and modern designs.</p>
</div>
<div className="card">
<h3>React Development</h3>
<p>Fast, scalable, and interactive React apps.</p>
</div>
<div className="card">
<h3>Mobile Friendly</h3>
<p>Optimized for all device sizes and screens.</p>
</div>
</div>
</section>

<section id="contact" className="section">
<h2>Contact Us</h2>
<p>Email: info@mywebsite.com</p>
<p>Phone: +123 456 7890</p>
</section>

<footer className="footer">
<p>© 2025 MyWebsite. All rights reserved.</p>
</footer>

    </div>
    );
}
