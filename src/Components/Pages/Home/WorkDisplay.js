import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "../../Helpers/SmoothScroll";
import CategoryBox from "./CategoryBox";

function Intro () {
    return (
        <div className="section-wrapper topic-container pt-5">
            <div id="intro" className="intro">
                <h4>Peiwen Huang (n.)</h4>
                <div className="row">
                    <p className="col-md-8 px-5 py-3">
                        <ul className="list-disc">
                            
                            <li>someone who <b className="">creatively crafts transformative experiences for users</b>, instilling self-love, motivation and confidence
                            <ul className="list-circle">
                                <li className="italic" style={{color: "#808080"}}><b>Peiwen Huang</b> focuses her work in mental health and social good, infusing into it applied psychology with a hint of playfulness.</li>
                            </ul>
                            </li>
                            <li>the intersection of UX designer, researcher, engineer, artist, and poet</li>
                            <li>your empathetic sidekick on the way to self-efficacy</li>
                        </ul>
                        <ul>
                            <li className="secondary"><b>Synonym</b>- Authenticity, Determination, Empathy, Kindness, Leadership</li>
                        </ul>
                        <button className="view-more-btn h-6 mt-5">
                            <Link to="/about">Yes, and...</Link>
                        </button>
                    </p>
                    <div className="col-md-4 mb-5 pfp-container col-md-4">
                        <div className="pfp-illustration" />
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

function Quote () {
    return (
        <div className="quote-wrapper section-wrapper">
            <div className="topic-container">
                <div className="quote quotation-mark">〝</div>
                <div className="quote">
                Do your little bit of good where you are; it’s those little bits of good put together that overwhelm the world.
                <br/>_<br/>
                <div className="quote-author">Desmond Tutu</div>
                </div>
            </div>
        </div>
    );
}

function ViewMoreBtn ({ link }) {
    return (
        <button className="view-more-btn h-6">
            <Link to={link}>View All Projects</Link>
        </button>
    );
}

function WorkList ({ data, prefix }) {
    return (
        <div className="topic-container subsection-wrapper-bottom">
            <div className="work-list">
                <ul className="w-100 work-cards flex-column">
                    {data.map(item =>
                        <li className="w-100">
                            <CategoryBox prefix={prefix} data={item} />
                        </li>
                    )}
                </ul>
                <ScrollReveal>
                    <ViewMoreBtn link="/Works/design" />
                </ScrollReveal>
            </div>
        </div>
    );
}

function WorkDisplay ({ data }) {
    let prefix = "Works";

    return (
        <div className="main-body intro-body">
            <ScrollReveal>
                <Intro />
            </ScrollReveal>
            
            <WorkList data={data} prefix={prefix} />

            <ScrollReveal>
                <Quote />
            </ScrollReveal>
        </div>
    );
};

export default WorkDisplay;
export { ViewMoreBtn };