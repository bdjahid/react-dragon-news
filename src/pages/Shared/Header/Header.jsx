import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='space-y-2 mt-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center'>Journalism Without Fear or Favour</p>
            <h2 className="text-2xl text-center">{moment().format("dddd MMMM D YYYY")}</h2>
        </div>
    );
};

export default Header;