import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";



function Contact() {
    return (
        // <!--Main Body Starts HERE-->

        <div>
            <Header />
            <Navbar />
            <div class="main">
                <div class="wrapper">


                    {/* <!--Contact Detail Entry--> */}
                    <div class="booking-details">
                        <h3>Contact Us</h3>
                        <form>
                            <span class="name">First Name</span>
                            <input type="text" name="first_name" placeholder="First Name Please" /><br />

                            <span class="name">Last Name</span>
                            <input type="text" name="last_name" placeholder="Last Name Please" /><br />

                            <span class="name">E-Mail</span>
                            <input type="email" name="email" placeholder="E-Mail Please" /><br />

                            <span class="name">Conatct No.</span>
                            <input type="tel" name="contact" placeholder="Contact Number Please" /><br />

                            <span class="name">Address</span>
                            <textarea name="address" placeholder="Your Address Please"></textarea><br />

                            <input type="submit" name="submit" placeholder="SEND" />
                            <input type="reset" name="reset" placeholder="RESET" />
                        </form>
                    </div>
                </div>
            </div>
            {/* // <!--Main Body Ends HERE--> */}

            <Footer />
        </div>
    )
}

export default Contact;