// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import tokenomicsdao from '../assets/tokenomicsdao.png';
import twitterthread from '../assets/twitterthread.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>TokenomicsDAO</h3>
                    <img src={tokenomicsdao} alt="Uniswap Swap Page" />
                    <p>Custom diagram made about Crypto Unicorns for the Tokenomics DAO as a comunity member.
                    </p>

                    <a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Crypto%20Unicorns%20Tokenomics.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bo1T-aVswx7s1tH51W-xtHhOVWqlcKEI%26export%3Ddownload" target="_blank" className="button">Site</a>
                    
                </div>

                <div className="projects__card">
                    <h3>Twitter Threads</h3>
                    <img src={twitterthread} alt="Compound Landing Page" />
                    <p>Twitter thread made about STEPN strategies that gained higher atraction. In my twitter i 
                    write about crypto in form of threads.
                    </p>

                    <a href="https://twitter.com/luluxa96/status/1517147262463332352" target="_blank" className="button">Site</a>
                    
                </div>

                
            </div>
        </section>
    );
}

export default Projects;