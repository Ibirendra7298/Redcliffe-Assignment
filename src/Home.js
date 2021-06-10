import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./common/questCard";
import Card2 from "./common/questCard2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const Home = (props) => {
  let data = [
    {
      color: "primary",
      content:
        "Genomic testing helps medical experts get precise information about a patient’s prognosis according to the gene expression within an individual’s cancer tissue and is often used to predict if certain therapy (such as chemotherapy) is beneficial.",
      title: "Genomics",
    },
    {
      color: "success",
      content:
        "At Redcliffe Life Diagnostics we provide COVID-19 tests to identify the presence of virus in patients’ respiratory tract in which a respiratory specimen is obtained via a nose or throat swab. Redcliffe life diagnostic’s COVID testing will help curb the spread of coronavirus to others.",
      title: "COVID-19 Tests",
    },
    {
      color: "warning",
      content:
        "To get complete information about pathology services, routine testing, hormone testing, COVID-19 tests, Genomic Investigations etc, connect with the diagnostic laboratory experts at Redcliffe Life Diagnostics. Our team of professionals is always available to help you.",
      title: "Book an Appointment",
    },
  ];
  let list = [
    {
      color: "",
      title: "Black Fungus (Mucormycosis)",
      list: [
        "Total no. of Tests - 1",
        "Quick Turn Around Time",
        "Reporting as per NABL ISO guidelines",
      ],
      oldPrice: "MRP ₹7000",
      newPrice: "Offer Price ₹4,999",
    },
    {
      title: "Covid - 19 RTPCR",
      list: [
        "Total no. of Tests - 1",
        "Quick Turn Around Time",
        "Reporting as per NABL ISO guidelines",
      ],
      oldPrice: "MRP ₹1499",
      newPrice: "Offer Price ₹900",
    },
    {
      title: "Full Body checkup",
      list: [
        "Total no. of Tests - 73",
        "Quick Turn Around Time",
        "Reporting as per NABL ISO guidelines",
      ],
      oldPrice: "MRP ₹1499 ",
      newPrice: "Offer Price ₹699 ",
    },
  ];
  let newList = [
    {
      title: "Biochemistry & Immunoassay",
      content:
        "Biochemistry blood tests are performed to evaluate the efficient capacity of various critical organs and systems, like liver and kidneys. We are equipped with fully automated integrated state of the art analyzers that can share sample requiring both types of tests.",
    },
    {
      title: "Hormone Assays",
      content:
        "Hormonal assays are conducted to examine the metabolic processes and conditions, or ‘hormone imbalance’. It is used to measure hormones in the blood, including male and female sex hormones like oestrogen, progesterone and testosterone.",
    },
    {
      title: "Hematopathology",
      content:
        "Hematopathology tests are performed to examine blood and blood disorders. It helps in the evaluation of blood related conditions. Our department continuously works on expanding its test menu by innovating newer assays for various serious complications and making clinical decision making easier.",
    },
    {
      title: "Histopathology",
      content:
        "We are a very few labs of the country who offer a very wide range of Immunohistochemistry Markers. We are equipped with an automated tissue processor, IHC stainer, LBC processing and stainer.",
    },
    {
      title: "Clinical Pathology",
      content:
        "Clinical pathology is associated with the evaluation of diseases related to urine, blood and tissue homogenates. At Redcliffe life diagnostics, the board-certified Phlebotomists conduct pathology tests and provide results in a thoughtful manner.",
    },
    {
      title: "Microbiology, Serology and Immunology",
      content:
        "Our departments work under the supervision of highly experienced Microbiologists and trained technical staff. We have a separate section for mycobacteriology and a BSL-2 Compliant Lab. We support our hospital clients in deciding infection control programmes and antibiotic policy.",
    },
  ];
  const [formWidth, setformWidth] = useState("300px");
  if (window.innerWidth > 370 && formWidth != "300px") {
    setformWidth("300px");
  }
  if (window.innerWidth < 370 && formWidth != "100%") {
    setformWidth("100%");
  }
  const [style, setstyle] = useState({ width: "75%", margin: "50px auto" });

  useEffect(() => {
    // console.log(window.innerWidth);
    if (window.innerWidth > 750) {
      // setstyle({width:'75%'});
    } else {
      // setstyle({width:'100%'});
    }
  });

  return (
    <div className="container-fluid" style={{ margin: "auto" }}>
      {/* top carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
			  zIndex:20,
            width: "100%",
            height: "100%",
            backgroundImage: `url('https://redcliffelabs.com/assets/slider/banner1.webp')`, //yaha h bg img
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className="carousel-item active"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url("https://redcliffelabs.com/assets/slider/banner1.webp")`,
              backgroundSize: "100% 100%",
            }}
          >
			  <div style={{height:'50%',width:'30%', padding:'1%'}}>
				  <form>
					  <label>Please Enter Data</label>
					  <input className="form-control" type="text"></input>
					  <label>Please Enter Data</label>
					  <input className="form-control" type="text"></input>
				  </form>
			  </div>
            {/* <img src="" className="d-block w-100" alt="..."   style={{width:'100%', height:'100%'}} /> */}
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url('https://redcliffelabs.com/assets/slider/banner2.webp')`,
              backgroundSize: "100% 100%",
            }}
          >
			  <div style={{height:'100%',width:'100%'}}>hydsvbckjdfgcbjdfgvkdhbvkdfjgudyfdgbmhcvjgv</div>
            {/* <img src="https://redcliffelabs.com/assets/slider/banner2.webp" className="d-block w-100" alt="..."  style={{width:'100%', height:'100%'}} /> */}
          </div>
          <div
            className="carousel-item"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url('https://redcliffelabs.com/assets/slider/banner4.webp')`,
              backgroundSize: "100% 100%",
            }}
          >
			  <div style={{height:'100%',width:'100%'}}>hydsvbckjdfgcbjdfgvkdhbvkdfjgudyfdgbmhcvjgv</div>
            {/* <img src="https://redcliffelabs.com/assets/slider/Banner4.webp" className="d-block w-100" alt="..."  style={{width:'100%', height:'100%'}} /> */}
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* modal */}

      {/* some section pic and text make appointment */}
      <div
        className="row"
        style={{ width: "93%", margin: "auto", marginTop: "25px" }}
      >
        <div
          className="col-10 col-lg-5 offset-1 "
          style={{
            textOverflow: "wrap",
            verticalAlign: "middle",
            padding: "5% 0",
          }}
        >
          <button
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: "peachpuff" }}
          >
            <h6>Laboratory & Science</h6>
          </button>
          <p style={{ fontSize: "3.5em", fontWeight: "bolder" }}>
            Covid-19 RT PCR Test at Redcliffe
          </p>
          <p>
            Redcliffe is ICMR Approved NABL accredited BSL-2 compliant Covid-19
            testing laboratory. Our expert phlebotomists are trained to follow
            all safety protocols required for COVID-19 Virus Qualitative PCR.
            Nasal and Throat Swab sample collected from the COVID-19 suspect
            patient is then packed in a triple-layered concealed container for
            secured transportation.
          </p>
          <p>Registration Number: RCLSPLNUP</p>
          <button
            className="btn btn-primary btn-lg"
            style={{ marginTop: "5px", padding: "10px 20px" }}
          >
            Make Appointmen
          </button>
        </div>
        <div className="col-10 col-lg-5 ">
          <img
            src="https://redcliffelabs.com/assets/homePage/banner1wp.webp"
            style={{ maxHeight: "100%", maxWidth: "100%", margin: "	" }}
          ></img>
        </div>
      </div>
      {/* 3 Cards */}
      <div className="row" style={style}>
        {data.map((entry) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-6 p-3 mx-auto">
              <Card data={entry}></Card>
            </div>
          );
        })}
      </div>
      {/* text in center */}
      <div className="row">
        <div
          className="col-6 offset-3"
          style={{ margin: "auto", padding: "20px", textAlign: "center" }}
        >
          <p>HEALTH PACKAGES</p>
          <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>
            Affordable Health Packages
          </p>
          <p>
            We are a leading and trusted diagnostics offering comprehensive
            health packages for full body testing at affordable prices. We
            prioritise our patients’ safety and well-being.
          </p>
        </div>
      </div>
      {/* 3 cards */}
      <div className="row" style={style}>
        {list.map((entry) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-6 p-3 mx-auto">
              <Card2 data={entry}></Card2>
            </div>
          );
        })}
      </div>
      {/* centered button */}
      <div className="row" style={style}>
        <div className="col-2 offset-5 text-center">
          <button
            className="btn btn-lg"
            style={{ backgroundColor: "steelblue" }}
          >
            View All
          </button>
        </div>
      </div>
      {/* centered video */}
      <div className="row" style={style}>
        {/* <iframe >

					</iframe> */}
        <iframe
          width="80%"
          height="450px"
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/QWlkHnkMtDQ?autoplay=1&amp;showinfo=0&amp;controls=0><picture><source type='image/webp' srcset = 'https://redcliffelabs.com/assets/img/youtube_thumbnail.webp'><img   srcset='https://redcliffelabs.com/assets/img/youtube_thumbnail.png' /></picture><span>▶</span></a>"
          src="https://www.youtube.com/embed/QWlkHnkMtDQ?autoplay=1&amp;showinfo=0&amp;controls=0"
          frameborder="0"
          allowfullscreen=""
          style={{
            display: " block",
            border: " 4px solid #ff5d24",
            borderlRadius: " .5%",
            width: "100%",
          }}
        ></iframe>
      </div>
      {/* some section  */}
      <section
        className="about-area ptb-120"
        style={{
          padding: "10% 0",
          backgroundImage: `url('https://redcliffelabs.com/assets/img/bg-shape1.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 90%",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <picture className="bImage">
                  <img
                    style={{ width: "100%" }}
                    src="https://redcliffelabs.com/assets/homePage/banner2wp.webp"
                    alt="full body checkup at home, full body checkup cost, full body checkup in delhi, "
                  ></img>
                </picture>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span>About Us</span>
                <h2>Laboratory services Start with Us </h2>
                <p>
                  An advanced diagnostic laboratory that offers a complete range
                  of pathology and laboratory services to provide rapid and
                  accurate results.{" "}
                </p>
                <br></br>
                <p>
                  Providing over 3500 tests and processing 15 million tests
                  annually, Redcliffe Life Diagnostics is your one stop
                  destination for all the lab testing needs.{" "}
                </p>
                <ul className="about-features-list">
                  <li>
                    <i className="flaticon-check-mark"></i> Routine Testing
                  </li>
                  <li>
                    <i className="flaticon-check-mark"></i> Hormone Testing
                  </li>
                  <li>
                    <i className="flaticon-check-mark"></i> Health check-up
                    packages{" "}
                  </li>
                  <li>
                    <i className="flaticon-check-mark"></i> Specialized and
                    Genomic Investigations
                  </li>
                </ul>
                <div className="btn-box">
                  <a className="btn btn-primary">Learn More</a>
                  <a
                    href="https://www.youtube.com/watch?v=n-dwTAEqG5w"
                    className="video-btn popup-youtube"
                  >
                    <i className="flaticon-play-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img9">
          <img
            src="https://redcliffelabs.com/assets/img/shape-image/4.png"
            alt="image"
          ></img>
        </div>
      </section>
      {/* someSection */}
      <div className="container">
        <div className="section-title" style={{ marginBottom: "5%" }}>
          <span>Services</span>
          <h2 style={{ fontWeight: "bold" }}>Services you can trust</h2>
          <p>
            Redcliffe Life Diagnostics provide the following clinical laboratory
            services:
          </p>
        </div>
        <div className="row">
          {newList.map((data) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                style={{ marginBottom: "2.5%" }}
              >
                <Card data={data}></Card>
                {/* <div  className="single-services-box">
											<div  className="icon">
												<i  className="flaticon-coding"></i>
											</div>
											<h3 >{data.title}</h3>
											<p >{data.content}</p>
											<a  routerlink="/biochemistry-immunoassay" className="learn-more-btn biochemistry" href="/biochemistry-immunoassay">Learn More 
											<i  className="flaticon-arrow-pointing-to-right"></i>
											</a>
										</div> */}
              </div>
            );
          })}

          <div className="col-md-12 d-flex justify-content-center">
            <button type="button" className="btn btn-primary">
              {" "}
              View More{" "}
            </button>
          </div>
        </div>
      </div>
      {/* appointment */}
      <section className="appointment-area">
        <div className="row " width="100%">
          <div className="section-title text-center  offset-3 col-md-6 col-sm-12">
            <span className="bg-f59f00">Appointment</span>
            <h2>We Are Here For You To Make An Appointment</h2>
            <p>
              We help you Book a test online by searching for your specialty.
              You can book your appointment to get your tests done in a clean
              and hygienic manner.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://redcliffelabs.com/banner-form.64bf8bbbc0014daa64d3.webp)`,
            width: "100%",
            height: "60vh",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
          className="appointment-inner-area jarallax"
        >
          <div
            className="container"
            style={{ height: "100%", position: "relative" }}
          >
            <div
              className="appointment-form"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: "gray",
                padding: "50px",
                width: formWidth,
              }}
            >
              <h3>Fill up the form</h3>
              <form novalidate="" action="" className="  ">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name*"
                    className="form-control   "
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number*"
                    className="form-control   "
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City*"
                    className="form-control "
                  ></input>
                </div>
                <button className="btn btn-primary">Send a Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* whyus */}
      <div
        className="partner-area bg-fff7f4 extra-pt"
        style={{ margin: "5% 0" }}
      >
        <div className="container">
          <h2 className="text-center">Why Choose Redcliffe</h2>
          <div className="align-items-center row equalGap">
            <div className="partner-item col-xsm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-1.svg"
                  alt="sample collection at home covid-19, rt-pcr test home collection delhi"
                ></img>
                <p>
                  On Time Sample
                  <br /> Collection
                </p>
              </div>
            </div>
            <div className="partner-item col-xsm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-2.svg"
                  alt="covid test accuracy rate, accuracy of rapid covid test results"
                />
                <p>
                  Accurate Test
                  <br /> Results
                </p>
              </div>
            </div>
            <div className="partner-item col-xsm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div _ngc className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-3.svg"
                  alt="blood sample collection procedure"
                  className="skill"
                />
                <p>
                  Sample Collection
                  <br /> by Skilled &amp;
                  <br /> Trained Phlebotomist
                </p>
              </div>
            </div>
            <div className="partner-item col-xsm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-4.svg"
                  alt="highly satisfied customers"
                />
                <p>
                  6 Lac Satisfied
                  <br /> Customers
                </p>
              </div>
            </div>
            <div className="partner-item col-xsm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-5.svg"
                  alt="cold chain transport refrigeration"
                  className="chain"
                />
                <p>
                  Cold Chain
                  <br /> Logistics for
                  <br /> Sample Transportation
                </p>
              </div>
            </div>
            <div className="partner-item lastSectionWhy">
              <div className="single-partner">
                <img
                  src="https://redcliffelabs.com/assets/why/icon-6.svg"
                  alt="packaging material testing laboratory"
                  className="triple"
                />
                <p>
                  Triple layer
                  <br /> each sample to
                  <br /> packaging for
                  <br /> integrity and quality
                  <br /> ensure sample
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* performance */}
      <section
        className="performance-area ptb-60"
        style={{
          padding: "5% 0",
          backgroundImage: `url('https://redcliffelabs.com/assets/img/bg-shape3.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 50%",
          backgroundPosition: "100% 30%",
        }}
      >
        <div className="container" style={{ width: "85%" }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="performance-content">
                <div className="section-title">
                  <span
                    className="bg-0018ff"
                    style={{ backgroundColor: "#0018ff" }}
                  >
                    Performance
                  </span>
                  <h3 style={{ fontWeight: "500" }}>
                    Here are some of the magical numbers of our streamlined
                    workflow and diagnostic expertise.
                  </h3>
                </div>
                <div className="performance-progress-list col-12">
                  <div className="single-progress row">
                    <div
                      data-percent="100"
                      className="progress-bar progress-count col-3"
                    >
                      <div
                        className="background"
                        style={{ backgroundcolor: "rgb(50, 50, 50)" }}
                      ></div>
                      <div
                        className="rotate"
                        style={{
                          backgroundcolor: "rgb(255, 93, 36)",
                          transition: "transform 5000ms linear 0s",
                          transform: "rotate(360deg)",
                        }}
                      ></div>
                      <div
                        className="left"
                        style={{
                          backgroundcolor: "rgb(50, 50, 50)",
                          animation:
                            "2500ms step-start 0s 1 normal none running toggle",
                          opacity: 0,
                        }}
                      ></div>
                      <div
                        className="right"
                        style={{
                          backgroundcolor: "rgb(255, 93, 36)",
                          animation:
                            "2500ms step-end 0s 1 normal none running toggle",
                          opacity: 1,
                        }}
                      ></div>
                      <div className="">
                        <span>100% </span>
                      </div>
                    </div>
                    <div className="progress-content col-9">
                      <h5 style={{ fontWeight: "500" }}>Credibility</h5>
                      <p>
                        We are a credible source for accurate test results. We
                        obtain information about a patient's health to aid in
                        diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                  <div className="single-progress row">
                    <div
                      data-percent="0"
                      className="progress-bar progress-count col-3"
                    >
                      <div
                        className="background"
                        style={{ backgroundcolor: "rgb(50, 50, 50)" }}
                      ></div>
                      <div
                        className="rotate"
                        style={{
                          backgroundcolor: "rgb(255, 93, 36)",
                          transition: "transform 5000ms linear 0s",
                          transform: "rotate(0deg)",
                        }}
                      ></div>
                      <div
                        className="left"
                        style={{ backgroundcolor: "rgb(50, 50, 50)" }}
                      ></div>
                      <div
                        className="right"
                        style={{ backgroundcolor: "rgb(255, 93, 36)" }}
                      ></div>
                      <div className="">
                        <span>0% </span>
                      </div>
                    </div>
                    <div className="progress-content col-9">
                      <h5 style={{ fontWeight: "500" }}>Errors</h5>
                      <p>
                        We endeavor to provide our customers with error free
                        test results and accurate diagnosis.
                      </p>
                    </div>
                  </div>
                  <div className="single-progress row">
                    <div
                      data-percent="100"
                      className="progress-bar progress-count col-3"
                    >
                      <div
                        className="background"
                        style={{ backgroundColor: "rgb(50, 50, 50)" }}
                      ></div>
                      <div
                        className="rotate"
                        style={{
                          backgroundColor: "rgb(255, 93, 36)",
                          transition: "transform 5000ms linear 0s",
                          transform: "rotate(360deg)",
                        }}
                      ></div>
                      <div
                        className="left"
                        style={{
                          backgroundColor: " rgb(50, 50, 50)",
                          animation:
                            " 2500ms step-end 0s 1 normal none running toggle",
                          opacity: 0,
                        }}
                      ></div>
                      <div className="right"></div>
                      <div className="">
                        <span>100% </span>
                      </div>
                    </div>
                    <div className="progress-content col-9">
                      <h5 style={{ fontWeight: "500" }}>
                        Patient Satisfaction
                      </h5>
                      <p>
                        We acknowledge that the patient is in our view. Thus, we
                        achieve the highest patient satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="performance-image">
                <img
                  style={{ width: "100%", height: "auto" }}
                  srcset="https://redcliffelabs.com/assets/img/customer-satisfaction-min.jpg"
                  alt="patient satisfaction in healthcare"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner */}
      <section
        className="funfacts-area"
        style={{
          padding: "10% 0",
          backgroundImage: `url('https://redcliffelabs.com/assets/img/map1.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 90%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="single-funfacts">
                <h3>
                  <span data-count="3500" className="odometer">
                    3500
                  </span>
                </h3>
                <p>Tests</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="single-funfacts">
                <h3>
                  <span data-count="200" className="odometer">
                    200
                  </span>
                </h3>
                <p>Professionals</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="single-funfacts">
                <h3>
                  <span data-count="20" className="odometer">
                    20
                  </span>
                </h3>
                <p>Years Of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="single-funfacts">
                <h3>
                  <span data-count="100" className="odometer">
                    100
                  </span>
                </h3>
                <p>Phlebotomists</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section className="testimonial-area ptb-120 pt-0">
        <div className="container" style={{ marginBottom: "5%" }}>
          <div className="section-title text-center">
            <span className="bg-ff5d24 homeTestimonial">Testimonial </span>
            <h2>What’s Clients Response About</h2>
          </div>
        </div>
        <div className="testimonial-slides owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transition: " all 0.25s ease 0s",
                width: " 3606px",
                transform: " translate3d(-2028px, 0px, 0px)",
              }}
            >
              <div
                className="single-services-box owl-item cloned"
                style={{ width: "420.733px", marginRight: "30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I am extremely thankful to Redcliffe life diagnostics as I
                    got a timely report for my tests and it helped my doctor to
                    come up with an accurate diagnosis for my condition. I was
                    informed on time about my report collection.
                  </p>
                  <div className="client-info">
                    <img
                      src="https://redcliffelabs.com/assets/img/maleIcon.jpg"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Vedant</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item cloned"
                style={{ width: "420.733px", marginRight: "30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I had very little knowledge about what type of tests my
                    doctor had prescribed. But the expert team at Redcliffe life
                    diagnostics helped me in understanding the prescribed tests
                    and booking an appointment.
                  </p>
                  <div className="client-info kavya">
                    <img
                      src="https://redcliffelabs.com/assets/img/femaleIcon.png"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Kavya</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item"
                style={{ width: " 420.733px", marginRight: " 30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I would always appreciate the patient care and service
                    offered by Redcliffe Life Diagnostic. The staff here was
                    proactive and provided me with great help and suggestions
                    for my blood tests.
                  </p>
                  <div className="client-info aadarsh">
                    <img
                      src="https://redcliffelabs.com/assets/img/maleIcon.jpg"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Aadarsh</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item"
                style={{ width: " 420.733px", marginRight: " 30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    Redcliffe life diagnostics has a responsive and helpful
                    team. Right from booking tests online until the report
                    collection, we were offered great support throughout.
                  </p>
                  <div className="client-info saira">
                    <img
                      src="https://redcliffelabs.com/assets/img/femaleIcon.png"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Saira</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item"
                style={{ width: " 420.733px", marginRight: " 30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I am extremely thankful to Redcliffe life diagnostics as I
                    got a timely report for my tests and it helped my doctor to
                    come up with an accurate diagnosis for my condition. I was
                    informed on time about my report collection.
                  </p>
                  <div className="client-info">
                    <img
                      src="https://redcliffelabs.com/assets/img/maleIcon.jpg"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Vedant</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item active center"
                style={{ width: "420.733px", marginRight: " 30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I had very little knowledge about what type of tests my
                    doctor had prescribed. But the expert team at Redcliffe life
                    diagnostics helped me in understanding the prescribed tests
                    and booking an appointment.
                  </p>
                  <div className="client-info kavya">
                    <img
                      src="https://redcliffelabs.com/assets/img/femaleIcon.png"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Kavya</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item cloned active"
                style={{ width: "420.733px", marginRight: " 30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    I would always appreciate the patient care and service
                    offered by Redcliffe Life Diagnostic. The staff here was
                    proactive and provided me with great help and suggestions
                    for my blood tests.
                  </p>
                  <div className="client-info aadarsh">
                    <img
                      src="https://redcliffelabs.com/assets/img/maleIcon.jpg"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Aadarsh</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
              <div
                className="single-services-box owl-item cloned"
                style={{ width: "420.733px", marginRight: "30px" }}
              >
                <div
                  className="single-testimonial-item card"
                  style={{ width: "90%" }}
                >
                  <p>
                    Redcliffe life diagnostics has a responsive and helpful
                    team. Right from booking tests online until the report
                    collection, we were offered great support throughout.
                  </p>
                  <div className="client-info saira">
                    <img
                      src="https://redcliffelabs.com/assets/img/femaleIcon.png"
                      alt="image"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <h3>Saira</h3>
                  </div>
                  <i className="flaticon-left-quotes-sign"> </i>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
              <i className="flaticon-left-arrow"> </i>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <i className="flaticon-right-arrow"> </i>
            </button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </section>
      {/* ensure */}
      <section
        className="cta-area ptb-120"
        style={{
          padding: "10% 0",
          backgroundImage: `url('https://redcliffelabs.com/tests.bf4cfb63630f30ddcfee.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="container text-center"
          style={{
            padding: "2%",
            width: "60%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <div className="cta-content">
            <h2 className="ctaSection" style={{ fontWeight: 800 }}>
              We'll ensure you always get the best Results
            </h2>
            <p className="ctaSection">
              With state-of-the-art infrastructure, high-quality clinical
              services provided and supported by leading Phlebotomists, we
              endeavor to provide the most accurate and reliable results.
            </p>
            <h2>
              <a href="tel:898 898 8787" className="ctaSection">
                898 898 8787
              </a>
            </h2>
            <a
              routerlink="/contact"
              className="btn btn-primary"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* modals */}
      {/* <div
					tabindex="-1"
					role="dialog"
					aria-labelledby="myLargeModalLabel"
					aria-hidden="true"
					className="modal fade bd-example-modal-lg"
				>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h2 className="modal-title">Contact Us</h2>
							<button
								type="button"
								data-dismiss="modal"
								aria-label="Close"
								className="close"
							>
								<span aria-hidden="true">× </span>
							</button>
						</div>
						<div className="modal-body">
							<form novalidate="" className="">
								<div className="form-row mt-3">
									<div className="col">
										<input
											type="text"
											placeholder="Name*"
											formcontrolname="name"
											className="form-control "
										/>
										
									</div>
									<div className="col">
										<input
											type="text"
											placeholder="Mobile Number*"
											formcontrolname="contactNumber"
											className="form-control "
										/>
										
									</div>
								</div>
								<div className="form-row mt-3">
									<div className="col">
										<input
											type="text"
											placeholder="Email"
											formcontrolname="email"
											className="form-control "
										/>
										
									</div>
									<div className="col">
										<input
											type="text"
											placeholder="City*"
											formcontrolname="city"
											className="form-control "
										/>
										
									</div>
								</div>
								<div className="form-row mt-3">
									<div className="col">
										<textarea
											id="exampleFormControlTextarea1"
											placeholder="Message"
											formcontrolname="description"
											rows="3"
											className="form-control "
										></textarea>
										
									</div>
								</div>
								<div className="form-row mt-3">
									<div className="col d-flex justify-content-center">
										<button type="submit" className="btn btn-primary" disabled="">
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div> */}
    </div>
  );
};
export default Home;
