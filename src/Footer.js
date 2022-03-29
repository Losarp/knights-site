export default function Footer(props) {

    const handlePreload = props.handlePreload
    const handleWhiteList = props.handleWhitelist
    const handleCancelWhitelist = props.handleCancelWhitelist
    const handleBatchMint = props.handleBatchMint

    return (
        <div>
            {/*<!-- DIVIDER -->*/}
            <hr className="mt-0 mb-0" />
            {/*<!-- FOOTER 1 -->*/}
            <footer id="footer1" className="page-section text-center pt-100-b-80-cont">
                <div className="container">

                    {/*<!-- Social Links -->*/}
                    <div className="footer-soc-a">
                        {/*<!-- <a href="https://1.envato.market/a1gQR" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a> -->*/}
                        <a href="https://twitter.com/SiennaKnights" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href="https://t.me/SiennaAnnouncements" title="Telegram" target="_blank"><i className="fa fa-telegram"></i></a>
                        {/*<!-- <a href="https://1.envato.market/a1gQR" title="LinkedIn+" target="_blank"><i className="fa fa-linkedin"></i></a>
<a href="https://dribbble.com/abcgomel" title="Dribbble" target="_blank"><i className="fa fa-dribbble"></i></a> -->*/}
                    </div>

                    {/*<!-- Copyright -->*/}
                    <div className="footer-copy">
                        All rights reserved &copy; SIENNA NETWORK
                        {/* <button onClick={() => handlePreload()} target="_blank">Preload</button><br/> */}
                        {/* <button onClick={() => handleWhiteList()} target="_blank">Whitelist</button><br /> */}
                        {/* <button onClick={() => handleCancelWhitelist()} target="_blank">Cancel Whitelist</button><br /> */}
                        <button onClick={() => props.jsonops()} target="_blank">jsonops</button><br />
                        {/*<p>All rights reserved &copy; SIENNA NETWORK</p>*/}
                    </div>

                </div>
            </footer>

            {/*<!-- BACK TO TOP -->*/}
            <p id="back-top">
                <a href="#top" title="Back to Top"><span className="icon icon-arrows-up"></span></a>
            </p>
            <div id="ranktable"></div>
        </div>
    )
}