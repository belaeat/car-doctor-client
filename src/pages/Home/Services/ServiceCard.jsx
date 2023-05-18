import { FaArrowRight } from 'react-icons/fa';


const ServiceCard = ({ service }) => {
    const { title, img, price } = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body md:flex-row justify-between items-center text-left">
                <div>
                    <h2 className="card-title text-2xl mb-2">{title}</h2>
                    <p className="font-bold text-[#FF3811] text-xl">Price: ${price}</p>
                </div>
                <div className="card-actions">
                    <button className="text-[#FF3811]"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;