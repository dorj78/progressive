import React from "react";

const Home = () =>{
    return (
        <div className="container">
            <div className="container-body">
            <section className="intro">
                <p>Research on stress and health is growing at a rapid rate. Each year important new discoveries are being made about the pathways through which stress impacts physiological functioning and disease. The following list is in no way exhaustsive; rather the purpose is to highlight some of the current major findings.</p>
            </section>

            <section id="research">
                <h2>Featured Research</h2>
                <div className="card">
                    <h3>Research Title 1</h3>
                    <p>Short description of the research.</p>
                    <a href="#" className="button">Read More</a>
                </div>
                <div className="card">
                    <h3>Research Title 2</h3>
                    <p>Short description of the research.</p>
                    <a href="#" className="button">Read More</a>
                </div>
            </section>

            <section id="resources">
                <h2>Resources</h2>
                <ul>
                    <li><a href="#">Мэдээ мэдээлэл</a></li>
                    <li><a href="#">Статистик мэдээ</a></li>
                    <li><a href="#">Research Tools</a></li>
                </ul>
            </section>
            </div>
        </div>
    )
}

export default Home;
