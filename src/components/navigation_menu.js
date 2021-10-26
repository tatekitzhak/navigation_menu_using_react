import React from 'react';

function NavigationMenu() {

  return (
    <>
      <div>
          <div className="drawer drawer--left">
              <header className="drawer-navbar" role="banner">
                <div className="drawer-container">
                    <div className="drawer-navbar-header">
                        {/* <a className="drawer-brand" href="./index.html">Drawer</a> */}
                        <button type="button" className="drawer-toggle drawer-hamburger">
                            <span className="sr-only">toggle navigation</span>
                            <span className="drawer-hamburger-icon"></span>
                        </button>
                    </div>
                    <nav className="drawer-nav menu_topics" role="navigation">
                        <ul className="drawer-menu drawer-menu--left">
                            <li><a className="drawer-menu-item" href="./top.html">Top</a></li>
                            <li><a className="drawer-menu-item" href="./index.html">Left</a></li>
                            <li><a className="drawer-menu-item" href="./right.html">Right</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main role="main">
                <section className="item">
                    <h1>Drawer Right with Navbar</h1>
                </section>
            </main>
          </div>
      </div>
    </>
  );
};


export default NavigationMenu;
