import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import FileList from "@components/tutorial/FilesList";

// Import Data
import files from "@data/foc/lecture_notes.js";
const { Lect_1B } = files;

export default function Foc_Tut1B() {
    return (
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 1B - Fetch, Execution and IO
            </h1>
            <hr/>

            <section>
                <h2>
                    <i className="bi bi-binoculars"></i> Overview
                </h2>
                <p>
                    You will learn about binary (bits), functional units of a computer,
                    the units of a proccessor (CPU), the operations of a computer and
                    finally, funamdnetals of instructions and programs.
                </p>
            </section>

            <section>
                <h4>ALU and Control</h4>
                <Image 
                src="/assets/images/foc/tutorial/1B/ALU.png"
                height={200}
                width={450}
                alt="ALU and Control"
                className="img-fluid border border-secondary"
                ></Image>
            </section>

            <section>
                <h4>Data Is Stored in Bits</h4>
                <p>Data on a computer is stored as binary digits (“bits” for short).</p>
                <div className="d-flex justify-content-center">
                    <figure>
                        <Image
                            height={600}
                            width={350}
                            alt="Binary Conversion Table"
                            src="/assets/images/foc/tutorial/1B/binary.avif"
                            className="img-fluid"
                        />
                        <figcaption className="mt-2 text-center text-muted">
                            Binary Conversion Table
                        </figcaption>
                    </figure>
                </div>

                <p>A bit holds a <code>1</code> or <code>0</code> value</p>
                <ul>
                    <li>
                        A pulse of 5V of electricity can represent 1 bit and 0V represents 1 bit
                    </li>
                    <li>
                        With fibre-optic cable, 1 bit is represented by presence of light and 0 bit by
                        the absence of light
                    </li>
                </ul>
                <p>A byte is a collection of 8 bits.</p>
            </section>

            <section>
                <h4>How Information Is Processed</h4>
                <Image
                height={362}
                width={960}
                alt="Illustration of how information is processed"
                src="/assets/images/foc/tutorial/1B/Illustration_Info_Processing.png"
                className="img-fluid"
                />
            </section>

            <section>
                <h4>Functional Units</h4>
                <div className="row g-3 mb-5">
                    <div className="col-md-6 col-12">
                        <div className="card h-100">
                            <Image
                            src="/assets/images/foc/tutorial/1B/Memory.webp"
                            height={400}
                            width={700}
                            alt="Cache Memory"
                            className="img-fluid card-img-top"/>
                            <div className="card-header">
                                <div className="card-title">
                                    <h5>1. Primary Memory</h5>
                                </div>
                            </div>
                            <div className="card-body bg-secondary bg-opacity-25">
                                <div className="card-text">
                                    <ul>
                                        <li>Also known as Main Memory (RAM)</li>
                                        <li>Organized into words of typically 32 bits (4 x 8-bit bytes)</li>
                                        <li>Programs and their data must be in this memory to be executed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="card h-100">
                            <Image
                            src="/assets/images/foc/tutorial/1B/Cache_Memory.png"
                            height={400}
                            width={700}
                            alt="Cache Memory"
                            className="img-fluid card-img-top"/>

                            <div className="card-header">
                                <div className="card-title">
                                    <h5>2. Cache Memory</h5>
                                </div>
                            </div>

                            <div className="card-body bg-secondary bg-opacity-25">
                                <ul>
                                    <li>
                                        An adjunct to the main memory, fabricated on the processor chip
                                    </li>
                                    <li>
                                        Smaller and faster than main memory
                                    </li>
                                    <li>
                                        Holds setions of the program and data currently/frequently executed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="card h-100">
                            <Image
                            src="/assets/images/foc/tutorial/1B/Processor.jpg"
                            height={400}
                            width={700}
                            alt="Processor"
                            className="img-fluid card-img-top"/>
                            <div className="card-header">
                                <div className="card-title">
                                    <h5>3. Processor </h5>
                                </div>
                            </div>
                            <div className="card-body bg-secondary bg-opacity-25">
                                <ol className="roman-list">
                                    <li>
                                        <h6>Logic Circuits</h6>
                                        <p>
                                            To perform arithmetic and logic operations on word-size data operands.
                                        </p>
                                    </li>
                                    <li>
                                        <h6>Timing and control circuits</h6>
                                        <p>
                                            To fetch program instrcutions data from memory one after another
                                        </p>
                                    </li>
                                    <li>
                                        <h6>Registers</h6>
                                        <p>Usually 16/32 bit which holds one word of operand data</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h4>Proccessor</h4>
                <ol className="notes-list">
                    <li>
                        <h5>Arithemtic and Logic Unit (ALU)</h5>
                        <ul>
                            <li>
                                Most computer operations are executed in the ALU of the processor
                            </li>
                            <li>
                                Performs arithmetic or logic operation
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h5>Control Unit</h5>
                        <ul>
                            <li>
                                Memory, ALU and I/O
                                units store and process
                                information and perform
                                input and output
                                operations
                            </li>
                            <li>
                                The operation of these
                                units must be coordinated
                                (this is the responsibility
                                of the control unit)
                            </li>
                        
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h4>Operations Of A Computer</h4>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">
                        Computer accepts information in the form of programs and data
                        through an input unit and stores it in the memory
                    </li>
                    <li class="list-group-item">
                        Information stored in the memory is fetched under program control
                        into an ALU, where it is processed
                    </li>
                    <li class="list-group-item">
                        Processed information leaves the computer through an output unit
                    </li>
                    <li class="list-group-item">
                        All activities in the computer are directed by the Control Unit
                    </li>
                </ol>
            </section>

            <section>
                <h4>Instruction Cycle</h4>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">
                        Fetch an instruction and increment the program counter
                    </li>
                    <li class="list-group-item">
                        Decode the instruction and read registers
                    </li>
                    <li class="list-group-item">
                        Perform an ALU operation
                    </li>
                    <li class="list-group-item">
                        Read or write memory data if the instruction involves a memory operand
                    </li>
                    <li class="list-group-item">
                        Write the result into the destination register, if needed
                    </li>
                </ol>
            </section>

            <section>
                <h4>Instruction</h4>
                <ul>
                    <li>
                       An instruction specifies an operation and the locations of its data operands 
                    </li>
                    <li>
                        A 32-bit word typically holds one encoded instruction
                    </li>
                </ul>
            </section>

            <section>
                <h4>Program</h4>
                <ul>
                    <li>
                        A sequence of instructions, executed one after another, constitutes a program
                    </li>
                    <li>
                        Both a program and its data are stored in the main memory
                    </li>
                </ul>
            </section>

            <section>
                <h4>Processor Components</h4>
                <div className="d-flex justify-content-center">
                    <figure>
                        <Image
                        src="/assets/images/foc/tutorial/1B/Processor_Component.png"
                        height={200}
                        width={600}
                        alt="Processor Components"
                        className="img-fluid"/>
                        <figcaption className="mt-3 text-center text-muted">
                            Components of a Processor
                        </figcaption>
                    </figure>
                </div>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">
                        Program Counter (PC)
                        <p class="mt-3">
                            A register holds the memory address of the
                            current instruction being executed at the current time
                        </p>
                        <ul>
                            <li>
                                As each instruction gets fetched, the program
                                counter increases its stored value by 1.
                            </li>
                            <li>
                                After each instruction is fetched, the program
                                counter points to the next instruction in the
                                sequence.
                            </li>
                            <li>
                                When the computer restarts or is reset, the
                                program counter normally reverts to 0.
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item">
                        The instruction register (IR) holds the current instruction
                    </li>
                    <li class="list-group-item">
                        General-purpose registers hold data and addresses
                    </li>
                    <li class="list-group-item">
                        Control circuits and the arithmetic and logic unit (ALU) fetch and
                        execute instructions
                    </li>
                </ol>
            </section>

            <section>
                <h4>Little Man Computer</h4>
                <div className="d-flex justify-content-center">
                    <figure>
                        <Image
                        src="/assets/images/foc/tutorial/1B/LMC.png"
                        height={200}
                        width={600}
                        alt="Processor Components"
                        className="img-fluid"/>
                        <figcaption className="mt-3 text-center text-muted">
                            Source: <span> </span>
                            <Link href="https://www.isnbreizh.fr/nsi/activity/lmc/lmc.html" target="_blank">
                                https://www.isnbreizh.fr/nsi/activity/lmc/lmc.html
                            </Link>
                        </figcaption>
                    </figure>
                </div>
                <ol class="list-group list-group-numbered list-group-flush">
                    <li class="list-group-item">The window for typing in the code</li>
                    <li class="list-group-item">The two buttons - to load the code into memory and then run</li>
                    <li class="list-group-item">The window for an input, if any - not necessary</li>
                    <li class="list-group-item">An indicator that shows the progress of the code - step by step</li>
                    <li class="list-group-item">
                        Memory locations where instructions and data are stored, as specified in von Neumann architecture - 100 cells, from 00 to 99.
                    </li>
                    <li class="list-group-item">The window for the output/s during the execution of the code</li>
                    <li class="list-group-item">Options for controlling the flow of the execution - slow to fast, etc</li>
                </ol>
                <p>
                    Note: A good video explaining little man computer more in-depth: <span> </span>
                    <Link href="https://www.youtube.com/watch?v=qjej7QvwFpA" targe="_blank">
                    https://www.youtube.com/watch?v=qjej7QvwFpA
                    </Link>
                </p>

            </section>

            <section>
                <h4>Handling I/O Devices</h4>
                <p>An application program can:</p>
                <ul>
                    <li>
                        Read data (such as a keyboard character) from an input device
                    </li>
                    <li>
                        Write data (such as letter character) to an output display screen
                    </li>
                    <li>
                        Sense the readiness of an input or output (I/O) device to perform a transfer
                    </li>
                </ul>
            </section>

            <section>
                <h4>Performance</h4>
                <p>Determines how quickly can a program be executed</p>
                <div className="px-3">
                    <h5 className="text-decoration-underline">Factors</h5>
                    <ol class="list-group list-group-numbered my-3">
                        <li class="list-group-item">
                            Speed of electronic circuits in the processor
                            </li>
                        <li class="list-group-item">
                            Access times to the cache and main memory
                            </li>
                        <li class="list-group-item">
                            Design of the instruction set
                        </li>
                        <li class="list-group-item">
                            Number of operations that can be done at the same time (parallelism)
                        </li>
                    </ol>
                    <h5 className="text-decoration-underline">Parellelism</h5>
                    <p>Multicore processors (across multiple cores)</p>
                    <Image
                    src="/assets/images/foc/tutorial/1B/multicore.jpg"
                    height={300}
                    width={400}
                    alt="Processor Components"
                    className="img-fluid mb-3"/>
                    <ul>
                        <li>
                            Multiple processing units can be fabricated on a single chip
                        </li>
                        <li>
                            <b>Core</b> is used for each of these processors
                        </li>
                        <li>
                            The term processor is then used for the <b>complete</b> chip
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>
                    <i className="bi bi-journal me-2"></i>Lecture Notes
                </h2>
                <p>These are the official notes from the institute itself. It may be outdated.</p>
                <FileList files={Lect_1B}/>
            </section>
        </div>
    );
}