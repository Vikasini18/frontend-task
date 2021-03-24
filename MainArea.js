import React from 'react'
import './MainArea.css'
import {MdHome, MdVideoLibrary, MdHistory, MdWatchLater, MdRssFeed, MdPlaylistPlay} from 'react-icons/md'
import {FaGripfire, FaFutbol, FaMusic, FaNewspaper} from 'react-icons/fa'
import{BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'
function MainArea(){
    return(
        <div className="MainArea">


            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey"fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey"fontSize="3rem"/>
                        <div>Subscription</div>
                    </div>
                </div>

                {/* Displaying the Sidebar with it's respective icons  */}

                <div className="Library">
                    <div className="Quick_Icon">
                        <MdHome color="grey"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey"fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey"fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey"fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey"fontSize="3rem"/>
                        <div>YouTube Clone</div>
                    </div>
                    </div>
                    <div className="More_From_YouTube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey"fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey"fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey"fontSize="3rem"/>
                        <div>Sport</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey"fontSize="3rem"/>
                        <div>Musics</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey"fontSize="3rem"/>
                        <div>News</div>
                    </div>
                </div>
            </div>


            {/* Use of React Media Player to display videos */}

            <div className="Main">
                <div className="Videos">
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=-w3H6WUN1mU"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>YouTube UI with React JS for Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    1,079 views•Sep 26, 2020
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=r2ga-iXS5i4"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Ionic 4 & Angular Tutorial For Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    512,744 views•Mar 7, 2019
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=3vauM7axnRs"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Java Project Tutorial Register Form Step by Step Using NetBeans !</div>
                    </div>
                    <br></br>
                    <div className="view">
                    12,179,654 views•Mar 5, 2019
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=E7Voso411Vs"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Step-by-step ASP.NET MVC Tutorial for Beginners | Mosh!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    2,638,791 views•May 29, 2016
                    </div>
                    </div>
                </div>



                <div className="Videoss">
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=V8C4BIKCVUA"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Build URL Shortener using PHP with MYSQL & JS!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    3,900 views•Mar 18, 2021
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=Law7wfdg_ls"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>React Router Tutorial | React For Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    550,971 views•May 4, 2019
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=CVpUuw9XSjY"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Redux For Beginners | React Redux Tutorial!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    610,418 views•Jun 22, 2019
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="youtube.com/watch?v=Gx4iBLKLVHk"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Spring Boot Full Stack with Angular | Full Course!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    63,671 views•Premiered Feb 5, 2021
                    </div>
                    </div>
                </div>



                <div className="Videoos">
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=jN2p1VVVTBk"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>React & Node Tutorial - E-Commerce in 53 mint!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    546 views•Aug 23, 2020
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=M64pdpXlATc"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Let's Build a Facebook clone ( UI ) with REACT JS for Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    766 views•Sep 22, 2020
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=pCA4qpQDZD8"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>Build A Todo App With REACT | React Project For Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    222,768 views•Aug 28, 2020
                    </div>
                    </div>
                    <div className="Video">
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v=y-Qj4vRrwv4"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                    <div className="Logo">
                        <img src="/images/React.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                        <div>JavaScript Algorithms for Beginners!</div>
                    </div>
                    <br></br>
                    <div className="view">
                    12,962 views•Streamed live on Oct 7, 2020
                    </div>
                    </div>
                </div>
                
            </div>
    </div>
           )
}
export default MainArea