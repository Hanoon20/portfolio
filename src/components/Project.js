import './project.css';
import projectImg2 from '../assets/aqua.png';
import projectImg3 from '../assets/pharmacy.png';
import projectImg4 from '../assets/cashbook.png';


export default function Project(){
  const config = {
    projects: [
      {
        image: projectImg2,
        disc: 'Ecommerce Web Application using PHP & MySQL',
        link: '',
      },
      {
        image: projectImg3,
        disc: 'Pharmacy Website using React.js & Tailwind CSS',
        link: '',
      },
      {
        image: projectImg4,
        disc: 'Cashbook Web Application using React.js, PHP & MongoDB',
        link: '',
      }
    ]
  };

    return(
    <section className='bg-primary ug py-12' id='project'>

    



            <h3 className='text text-center font-bold text-2xl md:text-3xl mb-8 md:mb-16'>Projects</h3>

            <div className="flex flex-col md:flex-row md:justify-between gap-20 md:gap-8 px-4 md:mx-20">


              {config.projects.map((project, index) => (
                <div key={index} className='relative flex flex-col items-center'>
                  <img src={project.image} alt={project.disc} className='w-full h-auto rounded-lg shadow-lg' />
                  <div className='project-desc absolute inset-0 bg-black bg-opacity-85 opacity-0 hover:opacity-100 flex justify-center items-center text-white transition-all duration-500 rounded-lg'>
                    <p className='text text-center text-lg'>
                      {project.disc}
                      <br />
                      <button className='bg-blue-600 py-1 px-4 mt-2 rounded-lg hover:bg-gray-500 hover:text-white'>
                        Preview
                      </button>
                    </p>
                  </div>
                  {/* <button className='text-white my-4'>View Project</button> */}
                </div>
              ))}
              
            </div>


        
        



      </section>
      


        


    )
}