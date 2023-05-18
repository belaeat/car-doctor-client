import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative h-full mr-16'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-4 top-1/2 w-1/2 rounded-lg border-white border-8 shadow-2xl" />
                </div>
                <div className='lg:w-1/3'>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="btn mt-8 bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;