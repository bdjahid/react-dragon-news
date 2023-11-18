import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSide from "../Shared/RightSide/RightSide";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    {id}
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default News;