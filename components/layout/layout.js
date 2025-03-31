import MainNavigation from "./mainnavigation"

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout