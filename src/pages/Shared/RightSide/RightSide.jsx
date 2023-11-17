
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSide = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-2xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            <div className='p-4 mb-6'>
                <h2 className='text-3xl'>Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg gap-2' href="">
                    <FaFacebook></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x gap-2' href="">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg gap-2' href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;