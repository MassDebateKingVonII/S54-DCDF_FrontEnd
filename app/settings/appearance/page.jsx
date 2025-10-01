import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Settings_Appearance() {
    return(
        <div>

            <h1 className="my-4">Appearance</h1>
            <p>Manage settings for your learning experience on this website!</p>
            <hr/>

            <section>
                <div className="row g-4">
                    
                    <h5>Interface Themes</h5>
                    <p className="mb-0 mt-2">This theme will be applied to the entire website and all its pages!</p>
                    {/* <!-- System Default --> */}
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card h-100 theme-selector-card" data-theme="system">
                            <div className="card-header">
                                <div className="card-title">
                                    <h5 className="text-center">
                                        System Default
                                    </h5>
                                </div>
                            </div>
                            <Image
                            height={300}
                            width={400}
                            alt="System Default"
                            className="card-img-bottom img-fluid" 
                            src="/assets/images/settings/default_theme.webp"/>

                        </div>
                    </div>

                    {/* <!-- Light Mode --> */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card h-100 theme-selector-card" data-theme="light">
                            <div className="card-header">
                                <div className="card-title">
                                    <h5 className="text-center">
                                        Light Mode
                                    </h5>
                                </div>
                            </div>
                            <Image 
                            height={300}
                            width={400}
                            alt="Light Theme"
                            className="card-img-bottom img-fluid" 
                            src="/assets/images/settings/light_theme.jpg"/>
                        </div>
                    </div>

                    {/* <!-- Dark Mode --> */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div className="card h-100 theme-selector-card" data-theme="dark">
                            <div className="card-header">
                                <div className="card-title">
                                    <h5 className="text-center title">Dark Mode</h5>
                                </div>
                            </div>
                            <Image
                            height={300}
                            width={400}
                            alt="Dark Mode"
                            className="card-img-botton img-fluid" 
                            src="/assets/images/settings/dark_theme.jpg"/>

                        </div>
                    </div>
                </div>
            </section>

            <hr/>
            {/* <!-- Font Size --> */}
            <div className="mt-3 mb-5">
                <label for="fontSizeSelect" className="form-label fw-bold">Font Size</label>
                <select className="form-select w-auto" id="fontSizeSelect">
                    <option value="80">80%</option>
                    <option value="90">90%</option>
                    <option value="100" selected>100% (Default)</option>
                    <option value="110">110%</option>
                    <option value="125">125%</option>
                </select>
            </div>

        </div>
    );
}