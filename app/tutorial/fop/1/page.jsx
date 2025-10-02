import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
import tut1_answers from "@data/fop/tut1_answers.js";

export default function FopTut_1() {
    return (
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 1 - Data Types
            </h1>
            <hr/>

            <h2>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h2>
            <p>
                This tutorial introduces the fundamental data types in
                programming. You will learn about numbers, strings,
                booleans, and other basic types, understand
                how to declare and initialize variables, and explore
                how to manipulate data effectively in your programs.
            </p>

            <section>
                <h4>Declaration of Variables</h4>
                <p>There are three ways to declare a variable: </p>
                <div className="px-3">
                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                        var identifier1 = value;
                        let identifer2 = value;
                        const identifer3 = value;
                    `} />
                    <h5 className="mt-3"><i className="bi bi-bookmark-check-fill"></i> Examples</h5>
                    <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                        var x = 10;
                        // Using the var keyword is not recommended
                        // Variable's value can be changed afterwards
                    `} />

                    <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                        let x = 10;
                        // Variable's value can be changed afterwards
                    `} />

                    <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                        const x = 10;
                        // Variable's value CANNOT be changed afterwards
                    `} />
                </div>
                <p>Note that the statement uses an identifier (id) to define a variable. In this examples above, the identifier is x.</p>
                <p>Rules for constructing identifier: </p>
                <ul>
                    <li>Not a reserved keyword (E.g. do, while, for)</li>
                    <li>Can contain letters, digits, underscores and dollar signs.</li>
                    <li>Must begin with $, _ or a letter</li>
                    <li>No spaces or special characters like @</li>
                </ul>
            </section>

            <section>
                <h4 className="mb-2">Table of Data Types:</h4>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>String</td>
                                <td>A text of characters enclosed in quotes</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let str = "Hello World" // This is the string
                                        console.log(str); // Output is Hello World, no quotation marks!
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Number</td>
                                <td>A number representing a mathematical value</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let x = 5;
                                        console.log(x);
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Bigint</td>
                                <td>
                                    <p>A number representing a large integer.</p>
                                    <p>Range: 9007199254740991 +(2^53-1) to -9007199254740991 -(253-1)</p>
                                </td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let x = 1000000000000000000n; // Numbers above
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Boolean</td>
                                <td>A data type representing true or false</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let x = true;
                                        let y = false;
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Object</td>
                                <td>A collection of key-value pairs of data</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        const person1 = {
                                            name: "Alice",
                                            age: 25
                                        }

                                        // The code above instantiates an object
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Undefined</td>
                                <td>A primitive variable with no assigned value</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let x;
                                        console.log(x); // Output is undefined
                                    `} />
                                </td>
                            </tr>
                            <tr>
                                <td>Null</td>
                                <td>A primitive value representing object absence</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        let x = 1;
                                        console.log(y); // Output is null                                                    
                                    `}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Symbol</td>
                                <td>A unique and primitive identifier</td>
                                <td>
                                    <CodeBlock
                                        language="javascript"
                                        showLineNumbers={true}
                                        code={`
                                        Symbol("id");
                                    `} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>
            </section>

            <section>
                <h2 className="fw-bold">
                    <i className="bi bi-receipt-cutoff"></i> Practical 1 - Data Types
                </h2>
                <hr />
                <p className="text-muted fst-italic">
                    This practical introduces the fundamental data types
                    used in programming, including numbers, strings,
                    booleans, and more. You will learn how to declare
                    variables, store values, and manipulate data
                    effectively in your programs.
                </p>
            </section>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Questions</h4>
                    <button className="btn btn-sm btn-outline-primary d-flex align-items-center" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Questions">
                        <i className="bi bi-chevron-down rotate-icon"></i>
                    </button>
                </div>

                <div id="Questions" className="collapse">
                    <div className="card-body">
                        <iframe
                            src="/assets/documents/fop/prac_1/questions.pdf"
                        />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Answers</h4>
                    <button className="btn btn-sm btn-outline-primary d-flex align-items-center" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Answers">
                        <i className="bi bi-chevron-down rotate-icon"></i>
                    </button>
                </div>

                <div id="Answers" className="collapse">
                    <div className="card-body">
                        <AnswersRenderer answers={tut1_answers}/>
                    </div>
                </div>
            </div>
        </div>
    );
}