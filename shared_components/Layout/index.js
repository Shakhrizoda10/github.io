import Header from "./header";
import Footer from "./footer";
function Layout(props) {
    return ( 
        <>
        <div>
            <Header/>
            <div>
             <h1>{props.children} </h1>



            </div>
            <Footer/>
        </div>
        </>
     );
}

export default Layout;