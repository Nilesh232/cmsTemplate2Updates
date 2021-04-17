import React from "react";

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';


function HomeGalleryTemplate2Component() {
  return (
    <div className="paddingTop-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 style={{ paddingBottom:'0px'}} className="mb-4">School Gallery</h2>
                    <div className="width-3rem height-4 rounded bg-primary mx-auto"></div>
                </div>
            </div>
            <div className="row marginTop-60">
                <div className="owl-carousel arrow-edge arrow-black" data-items="4" data-arrow="true" data-tablet-items="2"
                    data-mobile-items="1">
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src={gallery1} alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/1.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src={gallery2} alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/2.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src={gallery3} alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/3.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src={gallery4} alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/4.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src="assets/img/school/2.jpg" alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/2.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src="assets/img/school/3.jpg" alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/3.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                    <div className="hover:parent"><img className="w-100 transition-0_3 hover:zoomin"
                            src="assets/img/school/4.jpg" alt="" />
                        <div className="card-img-overlay transition-0_3 flex-center bg-black-0_7 hover:show"><a
                                href="assets/img/school/4.jpg" data-fancybox="gallery1"
                                className="iconbox bg-white ti-zoom-in text-primary"></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  );
}

export default HomeGalleryTemplate2Component;
