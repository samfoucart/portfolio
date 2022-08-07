import { Link } from 'react-router-dom';
import './LayoutFooter.css';

export default function LayoutFooter() {
    return (
        <div>
            <div className='footer-spacer'/>
            <div className='footer'>
                <p><i>Sam Foucart - 2022</i></p>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
}