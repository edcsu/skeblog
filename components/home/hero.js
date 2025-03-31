import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
    return (
        <>
            <section className={classes.hero}>
                <div className={classes.image}>
                    <Image
                        src="/images/site/keith.jpeg"
                        alt='Image showing Keith'
                        height={300}
                        width={300}
                    />
                </div>
                <h1> Hi, I'm Keith</h1>
                <p> I blog about anything full stack</p>
            </section>
        </>
    )
}

export default Hero