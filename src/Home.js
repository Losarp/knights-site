export default function Home() {

    return (
        <div>
            

            {/*<!-- COUNTERS 1 -->*/}
            <div id="counter-1" className="page-section p-80-cont">
                <div className="container">

                    <div className="row text-center">

                        {/*<!-- Item -->*/}
                        <div className="col-xs-6 col-sm-3">
                            <div className="count-number">
                                222
                            </div>
                            <div className="count-descr">
                                <span className="count-title">SIENNA KNIGHTS</span>
                            </div>
                        </div>

                        {/*<!-- Item -->*/}
                        <div className="col-xs-6 col-sm-3">
                            <div className="count-number">
                                30
                            </div>
                            <div className="count-descr">
                                <span className="count-title">NOBLE KNIGHTS</span>
                            </div>
                        </div>

                        {/*<!-- Item -->*/}
                        <div className="col-xs-6 col-sm-3">
                            <div className="count-number">
                                12
                            </div>
                            <div className="count-descr">
                                <span className="count-title">COMMANDERS</span>
                            </div>
                        </div>

                        {/*<!-- Item -->*/}
                        <div className="col-xs-6 col-sm-3">
                            <div className="count-number">
                                7
                            </div>
                            <div className="count-descr">
                                <span className="count-title">FULL BODY</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*<!-- VIEW MORE PROJECTS  -->*/}
            {/*<!-- <div className="port-view-more-cont">
                  <a className="port-view-more" href="about-us.html">VIEW ALL TEAM</a>
                </div>  -->*/}



            {/*<!-- VIDEO ADS 1 -->*/}
            <div className="page-section video-ads-bg">
                <div className="container">
                    <div className="video-ads-text-cont clearfix">
                        <span className="video-ads-text">SIENNA KNIGHTS</span>
                        <span className="video-ads-a">
                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=QuFRFw2K2VE">
                                <span className="icon icon-music-play-button"></span>
                            </a>
                        </span>
                        <span className="video-ads-text">THE TRAILER</span>
                    </div>
                </div>
            </div>

            {/*<!-- FEATURES 5 & TESTIMONIALS 1 -->*/}
            <div className="page-section p-110-cont">
                <div className="container">

                    <div className="row">
                        {/*<!-- TESTIMONIALS -->*/}
                        <div className="col-md-5 pb-40">
                            <blockquote className="quote mb-0 pr-50-min-1169">
                                <p>Privacy is sacred and has to be protected unconditionally. Leaving it to the mercy of a certain group of people is unacceptable. Sienna Knights are the protection we need because they are us and we are them.</p>
                                <footer>SIENNA KNIGHTS COMMANDER</footer>
                            </blockquote>
                        </div>

                        {/*<!-- FEATURES -->*/}
                        <div className="col-md-7">

                            <div className="row">

                                <div className="col-md-6 col-sm-6 pb-10">
                                    <div className="fes5-box wow fadeIn">
                                        <h3>HISTORICAL CONNECTION</h3>
                                        <p>The Sienna Knights story is directly linked to the grandiose story of the Knights Templar, founders of a private value and information transfering system that uses encryption.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 pb-10">
                                    <div className="fes5-box wow fadeIn" data-wow-delay="200ms">
                                        <h3>VALUE</h3>
                                        <p>Sienna Knights are the official PFP collection of Sienna Network, a first mover and innovator for privacy DeFi. </p>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-6 col-sm-6 pb-10">
                                    <div className="fes5-box wow fadeIn" data-wow-delay="400ms">
                                        <h3>EARLY ACCESS</h3>
                                        <p>Sienna Knights get early access to Sienna's products like SiennaLend and are regarded as brand ambassadors of Sienna Network. Always in close relation to the core team and developers.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 pb-10">
                                    <div className="fes5-box wow fadeIn" data-wow-delay="600ms">
                                        <h3>THE KNIGHTS PROGRAM</h3>
                                        <p>Sienna Knights is a program that aims to grow and empower the Sienna Network community. By joining the Sienna Knights, you will gain access to an inclusive community of like-minded privacy advocates, a wide array of contests and initiatives, as well as the opportunity to climb the ranks of the program and unlock various perks available to top-ranking Knights. Join us on our mission to advance the privacy revolution in DeFi, and help shape the future of the Sienna Knights program.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}