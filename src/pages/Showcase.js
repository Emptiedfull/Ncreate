
import Projectcard from "../components/projectcard";
import '../components/styles/showcase.css'


import charlie from '../components/images/projects/Charlie.png'
import steph from '../components/images/projects/Steph.png'
import syntech from '../components/images/projects/syntech.png'
import tony from '../components/images/projects/ton.png'
import lynn from '../components/images/projects/Lynn.png'
import carnival from '../components/images/projects/Carnival.png'
import death from '../components/images/projects/death.png'
import artifact from '../components/images/projects/artifact.png'
import cryptx from '../components/images/projects/cryptx.png'
import beacon from '../components/images/projects/beacon.png'

function Showcase(){
    return(
        <div>
           
            <div className="Events-HeroBanner">
                <h1 data-text="Showcase">
                    Showcase
                </h1>
                <div className="HeroText">
                <p data-text = "Discover the brilliance of tech enthusiasts from all corners of the Delhi Tech Circuit as they showcase their innovative projects. Explore a diverse range of projects, from groundbreaking software to ingenious hardware creations. Vote for your favorite projects and help us recognize the most outstanding innovations. Submit your own project and be featured in the top 10 at the LITHIUM Carnival.">
                    Discover the brilliance of tech enthusiasts from all corners of the Delhi Tech Circuit as they showcase their innovative projects. Explore a diverse range of projects, from groundbreaking software to ingenious hardware creations. Vote for your favorite projects and help us recognize the most outstanding innovations. Submit your own project and be featured in the top 10 at the LITHIUM Carnival.
                    </p></div>
            </div>
            <div className="Showcase-Container">
                <Projectcard img={charlie}projecttype={'Ui/Ux'} title={'Charlie and the chocolate factory'} author={'Anika Garg'}></Projectcard>
                <Projectcard img={steph} projecttype={'Design'} title={'Steph'} author={'Exun clan'}></Projectcard>
                <Projectcard img={syntech} projecttype={'Motion design'} title={'Syntech'} author={'Atharv agarwal'}></Projectcard>
                <Projectcard img={tony} projecttype={'App Design'} title={'Tony airways'} author={'Arush Goyal'}></Projectcard>
                <Projectcard img={lynn} projecttype={'Portfolio'} title={'Lynn Fisher'} author={'Lynn Fisher'}></Projectcard>
                <Projectcard img={carnival} projecttype={'Ui/Ux'} title={'Carnival Barnique'} author={'Madhav Verma'}></Projectcard>
                <Projectcard img={death} projecttype={'VFX'} title={'Liquid Death'} author={'Rohan mathew'}></Projectcard>
                <Projectcard img={artifact} projecttype={'Branding'} title={'Artifact'} author={'Dhairya Singh'}></Projectcard>
                <Projectcard img={cryptx} projecttype={'Ui/Ux'} title={'Cryptx'} author={'Jia Goyal'}></Projectcard>
                <Projectcard img={beacon} projecttype={'Design'} title={'Beacon Aid'} author={'Exun clan'}></Projectcard>
            </div>
        </div>
    )
}

export default Showcase;