import './App.css';

const Footer=(props)=> {

  return (
<footer  class="footer-area bg-fffcfb" style={{marginTop:'5%', color:'black'}}>
	<div  class="container">
		<div  class="row">
			<div  class="col-lg-3 col-md-6 col-sm-6">
				<div  class="single-footer-widget">
					<div  class="logo">
						<a style={{marginBottom:'5%'}} href="/"
							><img
								style={{width:'100%'}}
								src="https://redcliffelabs.com/assets/img/logos/logo1.png"
								alt="Redcliffe Life Diagnostics Logo"
						/></a>
						<p >
							Redcliffe Life Diagnostics is an NABL and ICMR accredited advanced diagnostic laboratory that aims at providing top-notch consistent and accurate laboratory services with modern technology and equipment all inclusive of logistics management.
						</p>
					</div>
				</div>
			</div>
			<div  class="col-lg-3 col-md-6 col-sm-6">
				<div
					
					class="single-footer-widget pl-5 ml-3"
				>
					<h3 style={{marginBottom:'5%'}}>Useful Links</h3>
					<ul  class="useful-links-list" style={{textDecoration:'none', color:'black'}}>
						<li >
							<a style={{color:"black"}} 
								href="/about-us"
								><p>About Us</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/contact"
								><p>Contact</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/pricing"
								><p>Health Packages</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/sample-report"
								><p>Sample Report</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}}   href="/franchising-opportunities"
								><p>Partner With Us</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/privacy"
								><p>Privacy Policy</p></a
							>
						</li>
					</ul>
				</div>
			</div>
			<div  class="col-lg-3 col-md-6 col-sm-6">
				<div  class="single-footer-widget pl-3">
					<h3 style={{marginBottom:'5%'}}>Our Services</h3>
					<ul  class="widget-services-list" style={{textDecoration:'none'}}>
						<li >
							<a style={{color:"black"}} 
								href="/biochemistry-immunoassay"
								><p >
									Biochemistry &amp; Immunoassay
								</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/hormone-assays"
								><p >Hormone Assays</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/hematopathology"
								><p >Hematopathology</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/histopathology"
								><p >Histopathology</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/clinical-pathology"
								><p >Clinical Pathology</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/microbiology-serology-immunology"
								><p >
									Microbiology, Serology and Immunology
								</p></a
							>
						</li>
						<li >
							<a style={{color:"black"}} 
								href="/cytogenetics"
								><p >Cytogenetics</p></a
							>
						</li>
					</ul>
				</div>
			</div>
			<div  class="col-lg-3 col-md-6 col-sm-6">
				<div  class="single-footer-widget">
					<h3 style={{marginBottom:'5%'}}>Contact Info</h3>
					<ul  class="footer-contact-info" style={{textDecoration:'none'}}>
						<li >
							<i
								
								class="
									flaticon-facebook-placeholder-for-locate-places-on-maps
								"
							></i
							><p>H55, 3rd Floor, Sector 63, Electronic City, Noida</p>
						</li>
						<li >
							<i  class="flaticon-phone"></i
							><a style={{color:"black"}}   href="tel:898 898 8787"
								><p>898 898 8787</p></a
							>
						</li>
						<li >
							<i
								
								class="flaticon-close-envelope"
							></i
							><a style={{color:"black"}} 
								
								href="mailto:care@redcliffelabs.com"
								><p>care@redcliffelabs.com</p></a
							>
						</li>
						<li >
							<i  class="flaticon-internet"></i
							><a style={{color:"black"}}  href="/"
								><p>www.redcliffelabs.com</p></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div  class="copyright-area">
			<div  class="row align-items-center">
				<div  class="col-lg-6 col-md-6 col-sm-6" style={{padding:'3%'}}>
					<p >
						<a style={{color:"black"}} 
							
							href="https://envytheme.com"
							target="_blank"
							>Redcliffe Life Diagnostics</a
						>
						© 2021. All rights reserved.
					</p>
				</div>
				<div  class="col-lg-6 col-md-6 col-sm-6" style={{padding:'3%'}}>
					<ul style={{display:'block'}}>
						<li style={{display:'inline-block', margin:'0 5%'}}>
							<a style={{color:"black"}} 
								
								href="https://twitter.com/Redcliffe_Labs"
								target="_blank"
								><i  class="fab fa-twitter"></i
							></a>
						</li>
						<li style={{display:'inline-block', margin:'0 5%'}}>
							<a style={{color:"black"}} 
								
								href="https://www.facebook.com/RedcliffeLabs/"
								target="_blank"
								><i  class="fab fa-facebook-f"></i
							></a>
						</li>
						<li style={{display:'inline-block', margin:'0 5%'}}>
							<a style={{color:"black"}} 
								
								href="https://www.linkedin.com/company/redcliffe-life-diagnostics/"
								target="_blank"
								><i  class="fab fa-linkedin-in"></i
							></a>
						</li>
						<li style={{display:'inline-block', margin:'0 5%'}}>
							<a style={{color:"black"}} 
								
								href="https://www.instagram.com/redcliffelabs/"
								target="_blank"
								><i  class="fab fa-instagram"></i
							></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  <div  class="go-top active" style={{position:'absolute',bottom:0,right:0, padding:'3%'}}>
	  <button className="btn btn-md" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
    <i  class="fas fa-arrow-up"></i>
	  </button>
  </div>
</footer>
    )
}


export default Footer;