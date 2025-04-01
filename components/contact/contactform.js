import { useContext, useState } from "react";
import classes from "./contactform.module.css"
import NotificationContext from "../../store/notificationcontext";

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [errorList, setErrorList] = useState([])
    const { showNotification } = useContext(NotificationContext)

    const sendMessageHandler = async (event) => {
        event.preventDefault();
        let errors = []
        if (!email || email.trim() === "" || !email.includes('@') ) {
            errors.push("Email is required")
        }
        
        if (!name || name.trim() === "" ) {
            errors.push("Name is required")
        }
        
        if (!message || message.trim() === "" ) {
            errors.push("The message is required")
        }

        if (errors.length > 0) {
            setErrorList(errors)
        }

        try {
            showNotification({
                title : 'Sending message...',
                message : 'Sending message',
                status: 'pending'
            })
            const contactDetails = {
                email,
                name,
                message
            };
            await sendContactDetails(contactDetails);
            showNotification({
                title : 'Success!',
                message : 'Successfully sent message',
                status: 'success'
            })
            setEmail('')
            setName('')
            setMessage('')
        } catch (error) {
            showNotification({
                title : 'Error!',
                message : error.message || 'Something went wrong',
                status: 'error'
            })
        }
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            required 
                            value={email} 
                            onChange={event => setEmail(event.target.value)} 
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            value={name} 
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message" 
                        rows={5} 
                        value={message} 
                        onChange={event => setMessage(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    {errorList.length > 0 && (errorList.map(error => (<p>{error}</p>)))}
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm

async function sendContactDetails(contactDetails) {
    const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactDetails)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
}
