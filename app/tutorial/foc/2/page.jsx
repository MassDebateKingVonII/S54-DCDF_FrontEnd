import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import FileList from "@components/tutorial/FilesList";

// Import Data
import files from "@data/foc/lecture_notes.js";
const { Lect_2 } = files;

export default function Foc_Tut2() {
    return (
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 2 - Digital Representation
            </h1>
            <hr/>

            <section>
                <h2>
                    <i className="bi bi-binoculars"></i> Overview
                </h2>
                <p>
                    You will learn about number representation (number system), 
                    arithemtic operation which includes overflow and the character representation
                    in computers.
                </p>
            </section>

            <section>
                <h4>ASCII Table</h4>
                <p>
                    ASCII (American Standard Code for Information Interchange) is a 
                    character encoding standard that stores only 128 characters.
                </p>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/ASCII_Table.png"
                        className="img-fluid bg-light"
                        alt="ASCII Table"
                        height={500}
                        width={800}
                        />
                        <figcaption className="text-center">
                            ASCII Table wih hexadecimal, binary and decimal
                        </figcaption>
                    </figure>
                </div>
                <p>
                    Note that Unicode is used to replace ASCII code to support other lambuages such as Chinese.
                </p>
            </section>

            <section>
                <h4>Decimal (Base 10)</h4>
                <p>
                    This is also known as the denary (or decimal) number system and it is very common.
                    This number system has 10 digits we can use: <code>0, 1, 2, 3, 4, 5, 6, 7, 8 </code> 
                    and <code> 9</code>
                </p>
                <ul>
                    <li>It uses <code>10<sup>x</sup></code></li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/Base10.jpg"
                        className="img-fluid bg-light"
                        alt="ASCII Table"
                        height={500}
                        width={800}
                        />
                        <figcaption className="text-center">
                            Decimal Number System Table
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Binary (Base 2)</h4>
                <p>
                    It only has two possible digits <code>0</code> or <code>1</code>. It is the most commonly used
                    number system in computers or programs.
                </p>
                <ul>
                    <li>It uses <code>2<sup>x</sup></code></li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/Base2.jpg"
                        className="img-fluid bg-light"
                        alt="ASCII Table"
                        height={500}
                        width={800}
                        />
                        <figcaption className="text-center">
                            Binary Number System Table
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Converting Decimal to Binary</h4>
                <p>
                    The procedure is simple, it is broken down into these steps:
                </p>
                <ul className="list-group list-group-numbered my-3">
                    <li className="list-group-item">
                        Start with the given decimal number. Divide it by 2 to determine the quotient and the remainder.  
                        <br />
                        The remainder will be either 0 or 1 — this represents the least significant bit (LSB) of the binary equivalent.
                    </li>
                    <li className="list-group-item">
                        Take the quotient (the result of the division) and divide it again by 2.  
                        <br />
                        Record the new remainder. Continue this process — dividing the quotient by 2 and writing down each remainder — until the quotient becomes 0.
                    </li>
                    <li className="list-group-item">
                        Once you have obtained all the remainders, write them in reverse order (starting from the last remainder you found to the first).  
                        <br />
                        This reversed sequence of 0s and 1s represents the binary form of the original decimal number.
                    </li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/dec_to_binary.png"
                        className="img-fluid bg-light"
                        alt="Decimal to Binary"
                        height={250}
                        width={600}
                        />
                        <figcaption className="text-center">
                            Converting to Binary From Decimal
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Converting Binary to Decimal</h4>
                <p>
                    The procedure is simple, it is broken down into these steps:
                </p>
                <ul className="list-group list-group-numbered my-3">
                    <li className="list-group-item">
                        Write down the binary number and identify the position (or place value) of each digit.
                        <br />
                        Starting from the rightmost bit, label the positions as powers of 2 — beginning with 2⁰ for the least significant bit (LSB), then 2¹, 2², 2³, and so on as you move left.
                    </li>
                    <li className="list-group-item">
                        For each binary digit (bit), multiply the digit by 2 raised to the power of its position value.
                        <br />
                        In other words, multiply each bit by the corresponding power of 2 it represents.
                    </li>
                    <li className="list-group-item">
                        Add up all the results from the previous step.
                        <br />
                        The total sum gives you the decimal (base 10) equivalent of the binary number.
                    </li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>

                        <Image src="/assets/images/foc/tutorial/2/binary_to_dec.PNG"
                        className="img-fluid bg-light"
                        alt="Binary to Decimal"
                        height={250}
                        width={600}
                        />
                        <figcaption className="text-center">
                            Converting to Decimal From Binary
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Hexadecimal (Base 16)</h4>
                <p>
                    The digits can rage from <code>0-9</code> and <code>A</code> to <code>F</code>.
                </p>
                <ul>
                    <li>It uses <code>16<sup>x</sup></code></li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/Base16.png"
                        className="img-fluid bg-light"
                        alt="Base 16 Table"
                        height={250}
                        width={600}
                        />
                        <figcaption className="text-center">
                            Hexadecimal Number System Table
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Converting Hexadecimal to Decimal</h4>
                <p>
                    The procedure is simple, it is broken down into these steps:
                </p>
                <ul className="list-group list-group-numbered my-3">
                    <li className="list-group-item">
                        Write down the hexadecimal number and identify the position of each digit.
                        <br />
                        Starting from the rightmost digit, label each position as powers of 16 — beginning with 16<sup>0</sup> for the least significant digit, then 16<sup>1</sup>, 16<sup>2</sup>, and so on as you move left.
                    </li>
                    <li className="list-group-item">
                        Replace each hexadecimal digit with its decimal equivalent.
                        <br />
                        For example, A = 10, B = 11, C = 12, D = 13, E = 14, and F = 15.
                    </li>
                    <li className="list-group-item">
                        Multiply each digit’s decimal value by 16 raised to the power of its position.
                        <br />
                        (Rightmost digit × 16<sup>0</sup>), next digit × 16<sup>1</sup>, and so on.
                    </li>
                    <li className="list-group-item">
                        Add up all the results from the previous step.
                        <br />
                        The total gives you the decimal (base <sub>10</sub>) equivalent of the hexadecimal number.
                    </li>
                </ul>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/hex_to_dec.jpg"
                        className="img-fluid bg-light"
                        alt="Hexadecimal to Decimal"
                        height={450}
                        width={500}
                        />
                        <figcaption className="text-center">
                            Converting to Decimal From Hexadecimal
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h4>Notation For Base 2, Base 10 & Base 16</h4>
                <p>
                    When writing numbers with their base, put the base as a subscript to the right of the number.
                    This tells which numbering system is used:
                </p>

                <ul>
                    <li>
                        <strong>Binary</strong> — write the base <code>2</code> as a subscript, for example:
                        <div className="px-3"> 
                            <span className="fs-2">
                                1101<sub className="base">2</sub>
                            </span>
                        </div>
                    </li>
                    <li>
                        <strong>Hexadecimal</strong> — write the base <code>16</code> as a subscript, for example:
                        <div className="px-3"> 
                            <span className="fs-2">
                                A3<sub className="base">16</sub>
                            </span>
                        </div>
                    </li>
                    <li>
                        <strong>Decimal</strong> — if you want to be explicit, use base <code>10</code> as a subscript:
                        <div className="px-3"> 
                            <span className="fs-2">
                                13<sub className="base">10</sub>
                            </span>
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <h4>Unsigned Number</h4>
                <p>
                    Unsigned numbers represent only non-negative integers, 
                    meaning they can be zero or any positive whole number 
                    (like 0, 1, 2, 3, etc.). They are called "unsigned" because 
                    they do not have a positive or negative sign associated 
                    with them, dedicating all their available bits to store 
                    magnitude.
                </p>
                <p className="my-0">They are used for:</p>
                <ul>
                    <li>Memory Address</li>
                    <li>Cluster Number (FIle System)</li>
                    <li>Proccess Identifier (PID)</li>
                </ul>

                <h5>Finding range of a N bit(s) number:</h5>
                <div className="my-0 px-3">
                    <p className="fs-2">
                        <code>0 </code> to <code>2<sup>x</sup> - 1</code>
                    </p>
                    <p className="fs-1 mb-2">Example:</p>
                    <p>
                        If there are 4 bits in a binary number, 
                        the range with the given formula will be:
                    </p>
                    <p className="fs-2">
                        <code>0 </code> to <code>2<sup>4</sup> - 1</code>
                    </p>
                </div>
            </section>

            <section>
                <h4>
                    Signed Integers
                </h4>
                <p>
                    For signed integers, the leftmost but is used to indicate the sign:
                </p>
                <ul className="list-group my-3">
                    <li className="list-group-item">
                        <code>0</code> for positive
                    </li>
                    <li className="list-group-item">
                        <code>1</code> for negative
                    </li>
                </ul>
                <p className="mb-2">
                    There are 3 ways to represent signed integers:
                </p>
                <ol className="list-group list-group-numbered my-3">
                    <li className="list-group-item">
                        Sign and Magnitude
                        <ul>
                            <li>
                                Negative values are represented by
                                changing the most significant bit
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        1's Complement
                        <ul>
                            <li>
                                Negative values are obtained by
                                complementing each bit of the corresponding positive
                                number.
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        2's Complement
                        <ul>
                            <li>
                                Obtain by forming bit complement of
                                that number, then add 1.
                            </li>
                        </ul>
                    </li>
                </ol>
                <div className="d-flex justify-content-center align-items-middle">
                    <figure>
                        <Image src="/assets/images/foc/tutorial/2/signed_int_table.png"
                        className="img-fluid bg-light"
                        alt="Hexadecimal to Decimal"
                        height={450}
                        width={500}
                        />
                        <figcaption className="text-center">
                            Signed Integer Represetations
                        </figcaption>
                    </figure>
                </div>

            </section>

            <section>
                <h2>
                    <i className="bi bi-journal me-2"></i>Lecture Notes
                </h2>
                <p>These are the official notes from the institute itself. It may be outdated.</p>
                <FileList files={Lect_2}/>
            </section>
        </div>
    );
}