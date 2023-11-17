import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="md:col-span-2 border">
                    <h2>Coming soon ...</h2>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;