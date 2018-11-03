import React from 'react'


const Header = (data) => {
    return (
        <header className="masthead" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{data.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )



}

export default Header
