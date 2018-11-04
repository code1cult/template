import React from 'react'
import Helmet from 'react-helmet';


const Header = (data) => {
    return (
        <div>

            <Helmet>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        <script id="spout-tag-81b4aa5e-1b17-49c6-be5c-def049a19eb2">
                        (function() {
                          var r = encodeURIComponent(top.document.referrer.substring(0,250)),
                              p = encodeURIComponent(top.document.location.href.substring(0,250)),
                              t = Date.now(),
                              u = '81b4aa5e-1b17-49c6-be5c-def049a19eb2',
                              e = document.createElement('script'),
                              s = sessionStorage.getItem('spoutable-' + u);
                          if (!s) {
                            var m = Math.random.bind(Math);
                            s = JSON.stringify({ sessionId: [ t, m(), m(), m(), m(), m(), m(), m(), m(), m(), m(), m(), m() ]});
                            sessionStorage.setItem('spoutable-' + u, s);
                          }
                          e.async = true;
                          e.src='//s.spoutable.com/s?u='+u+'&s='+encodeURIComponent(s)+'&t='+t+'&r='+r+'&p='+p;
                          document.head.appendChild(e);
                        })();
                      </script>
                      
        `
                    }}
                />
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
            </Helmet>
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
        </div>

    )



}

export default Header
