import Head from "next/head"
import ContactForm from "../../components/contact/contactform"

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact me</title>
                <meta 
                    name="description"
                    content="Send me your messages"
                />
            </Head>
            <ContactForm />
        </>
    )
}

export default ContactPage