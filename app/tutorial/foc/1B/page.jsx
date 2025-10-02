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
            </section>

            <section>
                <h4>Instruction Cycle</h4>
            </section>

            <section>
                <h4>Instruction</h4>
            </section>

            <section>
                <h4>Program</h4>
            </section>

            <section>
                <h4>Functional Units</h4>
            </section>

            <section>
                <h4>Handling I/O Devices</h4>
            </section>

            <section>
                <h4>Performance</h4>
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