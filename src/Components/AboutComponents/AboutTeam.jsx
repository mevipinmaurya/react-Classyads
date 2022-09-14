import React from 'react';
import TeamCards from '../../CommonComponents/TeamCards';
import u1 from "../../t1.webp";
import u2 from "../../t2.webp";
import u3 from "../../t3.webp";
import u4 from "../../t4.webp";


const AboutTeam = () => {
    return (
        <>
            <section className="site-section mb-5">
                <div className="container">
                    <div className="trending-row row my-5">
                        <div className="trending-border-primary col-md-7">
                            <h2>Our Team</h2>
                        </div>
                    </div>

                    <div className="row">

                        <TeamCards img={u1} name="Suson Horton" designation="FOUNDER"/>
                        <TeamCards img={u2} name="Jonathan Kennedy" designation="FOUNDER"/>
                        <TeamCards img={u3} name="Gordon Meyer" designation="LEAD DEVELOPER"/>
                        <TeamCards img={u4} name="Doug Hale Kennedy" designation="Project Manager"/>
                        
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutTeam