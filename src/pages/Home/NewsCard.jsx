import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
    const { title, thumbnail_url, details, _id } = aNews;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full" src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-red-700"> see more...</Link></p>
                        :
                        details
                }
            </div>
        </div>
    );
};

export default NewsCard;