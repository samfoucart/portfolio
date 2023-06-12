import './Contact.css';

export default function Contact() {
    return (
        <div>
            <div className="contact-container">
                <h1>You can reach me at:</h1>
                <div className="contact-row">
                    <a>samfoucart25@gmail.com</a>
                    <a>linkedin.com/in/samfoucart</a>
                    <a>github.com/samfoucart</a>
                </div>
                <div className='contact-row'>
                    <p>Phone: (740) 785-8278</p>
                </div>
                <h2>Work Experience</h2>
                <div className='contact-work-experience-row'>
                    <h3>NICE CXone</h3>
                    <p>Software Engineer</p>
                    <p>August 2021 - Current</p>
                </div>
            </div>
        </div>
    )
}