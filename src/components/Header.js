// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Joseph Chelala</h1>
                <p>Research Analyst and Content Writer</p>
                <a href="mailto:jc_chelala@yahoo.com.br" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;