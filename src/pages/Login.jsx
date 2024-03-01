import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


function Login() {
    return (
        // <!--Main Body Starts HERE-->
        <div>
            <Header />
            <Navbar />

            <div class="main">
                <div class="wrapper">


                    {/* <!--Contact Detail Entry--> */}
                    <div class="booking-details">
                        <h3>Log In</h3>
                        <form>
                            <span class="name">Username</span>
                            <input type="text" name="username" placeholder="Username Please" required="true" /><br />

                            <span class="name">Password</span>
                            <input type="password" name="password" placeholder="Password Please" required="true" /><br />

                            <input type="submit" name="submit" placeholder="LOG IN" />
                            <input type="reset" name="reset" placeholder="RESET" /><br />
                            <a href="index.html">Go Home</a>
                        </form>
                    </div>
                </div>
            </div>
            {/* // <!--Main Body Ends HERE--> */}
            <Footer />
        </div>
    )
}

export default Login;