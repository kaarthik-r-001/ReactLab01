import HouseImg from "../images/house.jpg"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function RecentlyAdded(){
    return (
        // <!--Main Body Starts HERE-->

        <div>
        <Header />
        <Navbar />
        <div class="main">
            <div class="wrapper">
                <h3>Recently Added</h3>
                
                {/* <!--Displaying Recently Added Houses in Boxes--> */}
                <div class="clearfix">
                    
                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Som Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <a href="book.html">
                            <button type="button" class="btn-book" >Book House</button>
                        </a>
                    </div>
                    
                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Ram Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Shyam Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                    <div class="houses">
                        <img src={HouseImg} />
                        <span class="house-title">Hari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Kumari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                </div>
                
                <h3>Luxurious Houses</h3>
                {/* <!--Displaying Luxurious Houses in Boxes--> */}
                <div class="clearfix">
                    
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Som Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Ram Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                    
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Shyam Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Hari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    <div class="houses">
                        <img src={HouseImg}/>
                        <span class="house-title">Kumari Bahadur House</span><br />
                        <span class="house-added">Added Date:01-03-2017</span><br />
                        <span class="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
                        <button type="button" class="btn-book" >Book House</button>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* // <!--Main Body Ends HERE--> */}
        <Footer />
        </div>
    )
}
export default RecentlyAdded;