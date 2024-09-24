    import HeroImg from '../assets/Hero.png';
    import './Hero.css'
    import { RiWhatsappFill } from "react-icons/ri";
    import { FaLinkedin } from "react-icons/fa6";


    export default function Hero(){

        const config = {
            subTitle : "I'm a Fullstack Developer"
        }
        
        const LinkHero = {
            mediaHero : [
                        {
                            href : "https://www.linkedin.com/in/mohammed-hanoon", 
                            target : "_blank" ,
                            rel : "noopener noreferrer" ,
                            className : 'hover:text-blue-500',
                            icon : <FaLinkedin />
                        },
                        {
                            href : "https://wa.me/+94716903578", 
                            target : "_blank" ,
                            rel : "noopener noreferrer" ,
                            className : 'hover:text-green-400',
                            icon : <RiWhatsappFill />
                        }
                    ]
        }
        return(
                <>
                <section className='flex flex-col items-center md:flex-row hero' id='home'>
                    <div className='flex flex-col title items-center md:items-start'>
                        <h2 className='title md:text-start md:w-full md:ms-32 py-0'>
                        Hi, <br /> I'm Mohammed Hanoon
                        <p className="w-full im">{config.subTitle}</p>
                        </h2>

                        <div className='flex text-white text-3xl media md:ms-32 md:py-3 px-5 gap-5'>

                            {LinkHero.mediaHero.map((anchor, index) => ( 
                            <div key={index}>
                                <a 
                                href={anchor.href} 
                                className={anchor.className}>
                                {anchor.icon}
                                </a>
                            </div>
                    ))
                    }
                        
                        </div>
                    </div>

                    <img className="w-60 h md:w-1/4 md:me-28 mb-4" src={HeroImg} alt="Hero" />
                    </section>


                </>
            );
        
    }