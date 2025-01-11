import './About.css';
import { BsCloudDownload } from "react-icons/bs";

export default function About(){
    return(
        <section id='about'>
            <div className="flex flex-col md:flex-row md:justify-center">
                <div className="flex flex-col md:flex-row justify-center">
                    <h2 className="md:w-1/4 font-4xl my-5 md:my-auto mx-auto md:text-center about">About Me</h2>
                    <p className="md:w-2/4 text-center md:text-start phara md:my-20 md:mx-12 mx-5 mb-20">
                    "I'm a Full Stack Developer with a strong background in both front-end and back-end development. 
                    I love creating dynamic, responsive web apps with clean, scalable code for smooth user experiences. 
                    I'm skilled in React for front-end, Node.js for back-end, and experienced with databases and cloud deployment."
                    <br />
                    <button className='btn ms-0 md:text-center md:justify-center md:ms-36'><a href="https://drive.google.com/file/d/1iA4XvWbb1T61UeuhJ2hb4NyynkcyZN9Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a> <BsCloudDownload /></button></p>
                </div>
            </div>
        </section>

    )
}
