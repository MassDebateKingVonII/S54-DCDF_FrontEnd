import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Foc_Tut1() {
    return (
        <div>
            <h2 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 1A - Basic Structure of Computers
            </h2>
            <section>
                <h3>
                    <i className="bi bi-binoculars"></i> Overview
                </h3>
                <p>
                    You will learn how to identify and describe the basic components of a computer,
                    including hardware such as the central processing unit (CPU), memory (RAM),
                    storage devices, input and output devices, and peripheral equipment.
                    Additionally, you will gain an understanding of how these components work
                    together to perform various operations, process data, and execute software
                    instructions, providing a foundation for further study in computer
                    systems and technology.
                </p>
            </section>

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
                                <Image src="/assets/images/foc/tutorial/1A/keyboard.png"
                                    alt="Keyboard"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1A/microphone.png"
                                    alt="Microphone"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1A/webcam.png"
                                    alt="Webcam"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <img src="/assets/images/foc/tutorial/1A/scanners.png"
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
                                <Image src="/assets/images/foc/tutorial/1A/serial.jpg"
                                    alt="Serial Ports"
                                    width={600} height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1A/firewire.webp"
                                    alt="Firewire Port"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1A/usb_port.webp"
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
                                <Image src="/assets/images/foc/tutorial/1A/hard_disk.png"
                                    alt="Hard Disk Drive"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                            <div className="col-6 col-md-3 col-sm-3">
                                <Image src="/assets/images/foc/tutorial/1A/cd_dvd.png"
                                    alt="CD DVD"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                            </div>
                        </div>
                    </li>
                </ul>

                <figure className="figure">
                    <Image src="/assets/images/foc/tutorial/1A/input_ports.webp"
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

            <section>
                <h4>Output Components</h4>
                <p>Examples of output components include: </p>
                <ul>
                    <li>
                        Monitors
                    </li>
                    <li>
                        Printers
                        </li>
                    <li>
                        Storage Devices
                        </li>
                    <li>
                        Network Cards (NIC)
                    </li>
                    <li>
                        Speakers
                    </li>
                </ul>
            </section>

            <section>
                <h4>Storage Components</h4>
                <p>The more storage a computer has, the better the performance.</p>
                <p className="mb-0">There are two main categories of storage: </p>
                <ul>
                    <li className="mt-3">
                        <h5>Short-Term Storage (Volatile)</h5>
                        <p className="mb-0 text-decoration-underline">Example:</p>
                        <p className="mb-0 text-muted">Random Access Memory (RAM)</p>
                        <Image src="/assets/images/foc/tutorial/1A/ram.jpg"
                            alt="RAM Stick Card"
                            width={400}
                            height={200}
                            className="img-fluid" />
                        <ul>
                            <li>RAM is the main short-term storage component</li>
                            <li>Has no moving parts, it is very fast</li>
                            <li>More RAM = Faster computer</li>
                            <li>When power is to computer is gone, RAM's content are gone.</li>
                            <li>Also known as "Working Storage"</li>
                            <li>
                                <Image src="/assets/images/foc/tutorial/1A/virtual_memory.png"
                                    alt="RAM Stick Card"
                                    width={600}
                                    height={400}
                                    className="img-fluid" />
                                <p>If not enough RAM, computer uses virtual memory from disk drive to supplement</p>
                                <p>Note that: </p>
                                <ul>
                                    <li>Part of disk storage can be set as virtual memory</li>
                                    <li>CPU can only access data/code in RAM</li>
                                    <li>Less used data/code are placed in virtual memory</li>
                                    <li>Data/code needed by CPU are moved to RAM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        <h5>Long-Term Storage (Non-Volatile)</h5>
                        <p>Maintains its data even when there’s no power.</p>
                        <p className="mb-0 text-decoration-underline">Examples:</p>
                        <ul>
                            <li>Hard Disks</li>
                            <li>CDs/DVDs</li>
                            <li>USB flash drives</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h4>The Motherboard</h4>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                        <thead className="table-dark fw-bold">
                            <tr>
                                <th scope="col">Component</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CPU Socket</td>
                                <td>
                                    The CPU is installed in this socket
                                </td>
                            </tr>

                            <tr>
                                <td>PCI Bus Expansion Slots</td>
                                <td>
                                    Used to add functionality to a PC by adding expansion
                                    cards that have a Peripheral Component Interconnect (PCI)
                                    connector.
                                </td>
                            </tr>

                            <tr>
                                <td>PCI-Express expansion Slots</td>
                                <td>
                                    <ul>
                                        <li>PCI-Express supersedes PCI and supports faster data transfer speeds</li>
                                        <li>
                                            The larger slots are suitable for high-performance expansion cards, such
                                            as graphic cards and disk controllers
                                        </li>
                                        <li>
                                            The smaller slots are best suited to sound cards and network interface
                                            cards
                                        </li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>RAM Slots</td>
                                <td>
                                    Slots for installing RAM on the motherboard
                                </td>
                            </tr>

                            <tr>
                                <td>Chipset with heat sinks</td>
                                <td>
                                    <ul>
                                        <li>
                                            Consists of 2 chips: (a) Northbridge (b) Southbridge
                                        </li>
                                        <li>
                                            These chips control data transfers between memory, expansion slots
                                            , I/O devices, and the CPU
                                        </li>
                                        <li>
                                            Heatsink sits on top of the chipset to prevent overheating
                                        </li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>SATA Connectors</td>
                                <td>
                                    Used for connecting hard drives and CD/DVD drives thta uses Serial Advanced Technology
                                    Attachament (SATA) specification.
                                </td>
                            </tr>

                            <tr>
                                <td>IDE Connectors</td>
                                <td>
                                    Used for connecting Integrated Drive Electronics (IDE) hard drives
                                    and CD/DVD-ROM drives. Most systems now most use SATA for hard drives and
                                    IDE for CD/DVD-ROM devices.
                                </td>
                            </tr>

                            <tr>
                                <td>Main Power Connector</td>
                                <td>
                                    Where the motherboard recives power from the system power supply.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h4>Computer Bus</h4>
                <p>
                    <b>Bus:</b> A collection of wires carrying signals (data, address or control)
                    from one place to another on the computer.
                </p>
                <p className="mt-0">
                    Note: All data that goes into or comes out of a computer goes through the
                    motherboard.
                </p>
                <p>There are three main buses:</p>
                <ol>
                    <li>
                        <h5 className="text-decoration-underline">Data Bus</h5>
                        <p className="mt-3">
                            CPU {"<--"} Data {"-->"} RAM 
                        </p>
                        <p>
                            Used to carry data signals from main memory (Ram) to CPU and vice versa or from main memory
                            (Ram) to input/output (I/O) devices vice versa
                        </p>
                    </li>

                    <li>
                        <h5 className="text-decoration-underline">Address Bus</h5>
                        <p className="mt-3">
                            CPU {"<--"} Data {"-->"} I/O Device 
                        </p>
                        <p>
                            Used to carry address signals, example a memory location or port/interface where an input or output
                            device is attached
                        </p>
                    </li>

                    <li>
                        <h5 className="text-decoration-underline">Address Bus</h5>
                        <p className="mt-3">
                            CPU {"<--"} Data {"-->"} Memory/Port Interface
                        </p>
                        <p>
                            Used to carry control signals, example read or write, from CPU to memory or port/interface
                        </p>
                    </li>
                </ol>

                <figure className="d-flex flex-column justify-content-center align-items-center">
                    <Image src="/assets/images/foc/tutorial/1A/buses.png"
                        alt="RAM Stick Card"
                        width={600}
                        height={400}
                        className="img-fluid border border-secondary"/>
                    <figcaption className="text-muted text-center mt-3">
                        Overview of Data, Address and Control Buses
                    </figcaption>
                </figure>
            </section>

            <section>
                <h4>I/O Polling & Interrupt</h4>
                <p>
                    Polling and Interrupt let CPU stop
                    what it is currently doing and
                    respond to the more important task.
                </p>
                <ol>
                    <li>
                        <h5>Polling</h5>
                        <p>
                            CPU keeps on checking I/O devices at
                            regular interval whether it needs CPU
                            service
                        </p>
                    </li>

                    <li>
                        <h5>Interrupt</h5>
                        <p>
                            The I/O device interrupts the CPU and
                            tell CPU that it need CPU service.
                        </p>
                    </li>
                </ol>
            </section>

            <section>
                <h4>HDD vs SSD</h4>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped align-middle">
                        <thead className="table-dark fw-bold">
                            <tr>
                                <th className="w-10"></th>
                                <th>Hard Disk Drive (HDD)</th>
                                <th>Solid State Drive (SSD)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Speed</td>
                                <td>
                                    HDD has higher latency, longer read/write times, and supports 
                                    fewer IOPs (input output operations per second) compared to SSD.
                                </td>
                                <td>
                                    SSD has lower latency, faster read/writes, and supports more IOPs 
                                    (input output operations per second) compared to HDD.
                                </td>
                            </tr>

                            <tr>
                                <td>Components</td>
                                <td>
                                    HDD contains moving parts - a motor-driven spindle that holds one 
                                    or more flat circular disks (called platters) coated with a thin 
                                    layer of magnetic material. Read-and-write heads are positioned on 
                                    top of the disks; all this is encased in a metal case.
                                </td>
                                <td>
                                    SSD has no moving parts; it is essentially a memory chip (Flash Memory).
                                    It is interconnected, integrated circuits (ICs) with an interface 
                                    connector. There are three basic components - controller, cache 
                                    and capacitor.
                                </td>
                            </tr>

                            <tr>
                                <td>Weight</td>
                                <td>
                                    HDDs are heavier than SSD drives.
                                </td>
                                <td>
                                    SSD drives are lighter than HDD drives because they do not have 
                                    the rotating disks, spindle and motor.
                                </td>
                            </tr>

                            <tr>
                                <td>Cost</td>
                                <td>Cheap</td>
                                <td>Expensive</td>
                            </tr>

                            <tr>
                                <td>Usage</td>
                                <td>
                                    Stores the documents you use as well as the applications 
                                    that open those documents Stores the OS your computer loads when 
                                    it boots.
                                </td>
                                <td>
                                    Most often found in mobile devices
                                    Also found in high-performance desktops and servers.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <figure class="d-flex justify-content-center align-items-center">
                        <Image src="/assets/images/foc/tutorial/1A/inside_HDD_SSD.webp"
                            alt="RAM Stick Card"
                            width={600}
                            height={400}
                            className="img-fluid border border-secondary"/>
                    </figure>
                </div>
            </section>

            <section>
                <h4>BIOS/CMOS</h4>
                <h5 className="mb-0">
                    BIOS: Basic Input/Output System
                </h5>
                <p>
                    Set of instructions located in a chip on the motherboard
                    Tells the CPU to perform certain tasks when power is first applied to the computer
                    One of those instructions is to perform a power-on self test (POST).
                </p>

                <p>
                    When a computer boots, the BIOS program offers a chance to run
                    the Setup utility in order to configure hardware components.
                </p>
                <h5 className="mb-0">
                    CMOS: Complementary Metal Oxide Semiconductor
                </h5>
                <p>
                    This configuration is stored in a type of memory called complementary metal oxide
                    semiconductor (CMOS)
                </p>
            </section>

            <section>
                <h4>Computer Boot Procedure</h4>
                <ol>
                    <li>
                        Power is applied to the motherboard
                    </li>
                    <li>
                        The CPU starts
                    </li>
                    <li>
                        The CPU carries out the BIOS startup routines, including the POST (Power-On-Self-Test)
                    </li>
                    <li>
                      Boot devices, as specified in the BIOS configuration, are searched for an OS  
                    </li>
                    <li>
                        The OS is loaded into RAM
                    </li>
                    <li>
                        OS services are started
                    </li>
                </ol>
            </section>

            <section>
                <h4>NIC</h4>
                <p>
                    Attaching a computer to a network requires a network interface
                    card (NIC) to create and mediate the connection between a
                    computer and the networking medium. Networking medium might be copper wire, 
                    fiber-optic cable, or airwaves.
                </p>
                <ul>
                    <li>
                        It contains MAC address(Media Access Control Address)
                        which is a Unique identifier assigned to NIC
                    </li>
                </ul>

                <h5 className="text-decoration-underline">Wireless NICs</h5>
                <p>
                    Wireless NICs must be chosen according to type 
                    of wireless AP being used.
                </p>
                <ul>
                    <li>Some of the Wi-Fi standards are Wireless-n, 802.11ac or 802.11 a/b/g/n</li>
                    <li>Wireless NICs connect to network using service set identifier (SSID)</li>
                    <li>SSID is the network name (e.g. SP Wifi Network)</li>
                </ul>
            </section>
        </div>
    );
}