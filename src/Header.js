export default function Header(props) {

    const address = props.address

    let addressLine = ''
    if (address != undefined && address.substr != undefined) {
        addressLine = (<a href="#"><div className="main-menu-title">{address.substr(0, 9) + '...' + address.substr(address.length - 4, address.length)}</div></a>)
    } else {
        addressLine = address;
    }

    return (
        <header id="nav" className="header header-1 black-header mobile-no-transparent">
            <div className="header-wrapper">
                <div className="container-m-30 clearfix">
                    <div className="logo-row">

                        <div className="logo-container-2">
                            <div className="logo-2">
                                <a href="/" className="clearfix">
                                    <img src="images/chivalry/SiennaKnightsLight.png" className="logo-img" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="menu-btn-respons-container">
                            <button type="button" className="navbar-toggle btn-navbar collapsed" data-toggle="collapse"
                                data-target="#main-menu .navbar-collapse">
                                <span aria-hidden="true" className="icon_menu hamb-mob-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main-menu-container">

                    <div className="container-m-30 clearfix">
                        <div id="main-menu">
                            <div className="navbar navbar-default" role="navigation">
                                <nav className="collapse collapsing navbar-collapse right-1024">
                                    <ul className="nav navbar-nav">
                                        <li className="parent">
                                            {addressLine}
                                        </li>
                                        <li className="parent">
                                            <a href="https://twitter.com/SiennaKnights">
                                                <div className="main-menu-title">TWITTER</div>
                                            </a>
                                        </li>
                                        <li className="parent">
                                            <a href="https://sienna.network/">
                                                <div className="main-menu-title">SIENNA NETWORK</div>
                                            </a>
                                        </li>

                                    </ul>

                                </nav>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </header>
    )
}