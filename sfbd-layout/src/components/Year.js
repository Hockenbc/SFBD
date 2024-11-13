import '../styles/Year.css';
import puppy1 from "../images/puppypic-1.jpg";
import puppy2 from "../images/puppypic-2.jpg";
import puppy3 from "../images/puppypic-3.jpg";
import puppy4 from "../images/puppypic-4.jpg";
import puppy5 from "../images/puppypic-5.jpg";
import puppy6 from "../images/puppypic-6.jpg";

function Year() {
    return  ( 
        <>
            <div id="year">
                <h4>2023</h4>
                <hr />
            </div><div id="row-1" className="columns">
                    <section className="one">
                        <img src={puppy1} alt="Puppy 1" width="200" />
                    </section>
                    <section className="one">
                        <img src={puppy2} alt="Puppy 2" width="200" />
                    </section>
                    <section className="one">
                        <img src={puppy3} alt="Puppy 3" width="200" />
                    </section>
                </div><div id="year">
                    <h4>2022</h4>
                    <hr />
                </div><div id="row-2" className="columns">
                    <section className="one">
                        <img src={puppy4} alt="Puppy 4" width="290" />
                    </section>
                    <section className="one">
                        <img src={puppy5} alt="Puppy 5" width="200" />
                    </section>
                    <section className="one">
                        <img src={puppy6} alt="Puppy 6" width="200" />
                    </section>
                </div>
        </>
    );
  };
  
  export default Year;