

const Home = () => {



    return (
        <div className="Home">
            <div>
                <div>
                    <div className="homeChild">
                        <div className="SvgDiv">
                            <img style={{
                                width: "200px",
                                heigth: "200px"
                            }} src={"http://localhost:3000/img/home.png"} />
                        </div >
                        <div className="backgroundyummi">
                            <h1 className="Yummies">Sweet Yummies</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeChild2">
                <div className="homeChild3">
                    <h1>This Is A The Best Sweet Yummies Store </h1>
                </div>
                <div className="homeChild4">
                    <p>Here you will find the most delicious sweets that have no match, cakes, cookies, cookies, etc.
                        We offer our branded sweets
                        Our improvisations and innovations open new opportunities in the market
                        we present our product in a unique way</p>
                </div>

                <div className="svgbar">
                    <ul>
                        <li><a href=""><img className="svgs" style={{
                            width: '46px',
                            height: "46px"
                        }} src={"http://localhost:3000/img/fb.png"} /></a></li>
                        <li><a href=""><img className="svgs" src={"http://localhost:3000/img/tw.png"} /></a></li>
                        <li><a href="https://www.linkedin.com/in/artur-gharibyan-43a4b3230/"><img className="svgs" src={"http://localhost:3000/img/in.png"} /></a></li>
                        <li><a href=""><img className="svgs" src={"http://localhost:3000/img/ist.png"} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home