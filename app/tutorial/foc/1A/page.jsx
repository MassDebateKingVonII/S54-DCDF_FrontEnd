import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Foc_Tut1() {
    return (
        <div>
            <div>
                <h2>
                    <i className="bi bi-binoculars-width={600}
height={400}"></i> Overview
                </h2>
                <p>
                    You will learn how to identify and describe the basic components of a computer,
                    including hardware such as the central processing unit (CPU), memory (RAM),
                    storage devices, input and output devices, and peripheral equipment.
                    Additionally, you will gain an understanding of how these components work
                    together to perform various operations, process data, and execute software
                    instructions, providing a foundation for further study in computer
                    systems and technology.
                </p>
            </div>

            <section>
                <h4>Basic Functions of a Computer</h4>
                <ul className="list-group list-group-numbered mb-3">
                    <li className="list-group-item">
                        <strong>Input:</strong> A user types the letter ‘A’ on the keyboard, which results in sending a code
                        representing the letter ‘A’ to the computer.
                    </li>
                    <li className="list-group-item">
                        <strong>Processing:</strong> The computer’s CPU determines what letter was typed by looking up the keyboard code
                        in a table.
                    </li>
                    <li className="list-group-item">
                        <strong>Output:</strong> The CPU sends instructions to the graphics card to display the letter ‘A’, which is
                        then sent to the computer monitor.
                    </li>
                </ul>
            </section>

            <section>
                <h4>Input Components</h4>
                <ul className="list-group mb-3">
                    <li className="list-group-item">
                        <p>Common user-controlled devices such as keyboards, microphones, webcams, and scanners</p>
                        <div className="row g-3">
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/keyboard.png"
                                    alt="Keyboard"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/microphone.png"
                                    alt="Microphone"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/webcam.png"
                                    alt="Webcam"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <img src="/assets/images/foc/tutorial/1/scanners.png"
                                    alt="Scanners"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>

                        </div>
                    </li>
                    <li className="list-group-item">
                        <p>External interfaces such as serial, FireWire,
                            and USB ports can also be used to get input from external devices
                        </p>
                        <div className="row g-3">
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/serial.jpg"
                                    alt="Serial Ports"
                                    width={600} height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/firewire.webp"
                                    alt="Firewire Port"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/usb_port.webp"
                                    alt="USB Ports"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <p>Storage devices such as hard disks and CDs/DVDs</p>
                        <div className="row g-3">
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/hard_disk.png"
                                    alt="Hard Disk Drive"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1/cd_dvd.png"
                                    alt="CD DVD"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                        </div>
                    </li>
                </ul>

                <figure className="figure">
                    <Image src="/assets/images/foc/tutorial/1/input_ports.webp"
                        alt="Input Ports"
                        width={1100}
                        height={400}
                        className="figure-img img-fluid rounded" />
                    <figcaption className="figure-caption text-center">
                        <h5 className="my-0">Overview Of Computer Input Ports</h5>
                        <p>Source:
                            <a href="elluminetpress.com" target="_blank">elluminetpress.com</a>
                        </p>
                    </figcaption>
                </figure>
            </section>

            <section>
                <h4>Central Processing Unit (CPU)</h4>
                <p>
                    The <strong>CPU</strong> is a computer’s main processing component.
                    It is responsible for executing instructions from both computer programs, such as word processors,
                    and from the computer’s operating system.
                </p>

                <p>
                    Modern CPUs are composed of two or more processors called <em>cores</em>.
                    A <strong>multicore CPU</strong> is often compared to a person with two brains,
                    as it can process multiple sets of instructions at the same time.
                </p>

                <p>
                    This ability to handle tasks simultaneously results in <strong>better overall performance</strong>,
                    making computers faster and more efficient.
                </p>
            </section>


        </div>
    );
}