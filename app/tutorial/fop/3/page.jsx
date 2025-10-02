import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut3_answers from "@data/fop/tut3_answers.json";

export default function FopTut_3() {
    return (
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 3 - Looping
            </h1>
            <hr/>

            <h2>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h2>
            <p>Loops can execute a block of code a number of times.
                Loops are useful to run cover over and over again. It is often paired with
                indexing arrays.
            </p>
            <p>There are multiple ways to write a loop in JavaScript. The primary ones are: </p>
            <section>
                <h4 className="fw-bold"><u>1. For Loop</u></h4>
                
                <div className="px-3">
                    <p>
                        A for loop is a control structure in programming that lets you repeat a 
                        block of code a fixed number of times or iterate through a sequence 
                        (like numbers, arrays, or strings)
                    </p>
                    <p>It usually has three main parts:</p>
                    <ol>

                        <li>Initialization – sets a starting point (e.g., let i = 0;).</li>
                        <li>Condition – checked before each loop run; if true, the loop continues (e.g., i {'<'} 5).</li>
                        <li>Increment/Decrement – updates the loop variable each time (e.g., i++).</li>
                    </ol>

                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        for (expr1; expr2; expr) {
                            // code block to be executed
                        }
                    `}/>
                    <p>Note: There are 3 optional expressions</p>

                    <h5 className="mt-3"><i className="bi bi-bookmark-check-fill"></i> Example</h5>
                    <p className="my-0">Scenario: I want to print "Hello World" 100 times.</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        for (let i = 0; i < 100; i++) {
                            console.log("Hello World");
                        }
                    `}/>
                </div>
            </section>

            <section>
                <h4 className="fw-bold mt-5"><u>2. While Loop</u></h4>
                <div className="px-3">
                    <p>
                        A while loop is a control structure in programming that repeats a 
                        block of code as long as a certain condition is true. 
                        Unlike a for loop, you don’t need to know in advance how 
                        many times the loop will run.
                    </p>

                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        while (condition) {
                            // code block to be executed
                        }
                    `}/>

                    <h5 className="mt-3"><i className="bi bi-bookmark-check-fill"></i> Example</h5>
                    <p className="my-0">Scenario: I want to print "Hello World" 100 times.</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        let x = 0;

                        while (x < 100) {
                            x++;
                            console.log("Hello World");
                        }
                    `}/>
                </div>
            </section>

            <section>
                <h4 className="fw-bold mt-5"><u>3. Do While Loop</u></h4>
                <div className="px-3">
                    <p>
                        A do…while loop is similar to a while loop, but with 
                        one key difference: the loop body executes at least <b>once</b>, 
                        even if the condition is false at the start. 
                        The condition is checked after the loop body runs.
                    </p>
                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        do {
                            // Code block to be executed
                        } while (condition)
                    `}/>

                    <h5 className="mt-3"><i className="bi bi-bookmark-check-fill"></i> Example</h5>
                    <p className="my-0">Scenario: Print "Hello" 10 times if value of 0 ${"<="} x ${"<"} 10. Else print once. Use while loops.</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        let x = 10;

                        do {
                            console.log("This will print at least once!");
                            x++;
                        } while (x < 10 && x >= 0);

                        console.log("Loop finished. x =", x);
                    `}/>
                </div>
            </section>

            <section>
                <h2 className="fw-bold mt-5">
                    <i className="bi bi-receipt-cutoff"></i> Practical 3 - Looping
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    In this practical, you will explore different types of 
                    loops in programming, including For Loops, Do While 
                    Loops, and Nested Loops. You will learn how to control 
                    iteration, repeat tasks efficiently, and apply looping 
                    techniques to solve problems.
                </p>

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
                            <div className="accordion" id="loopsAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingForLoop">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForLoop" aria-expanded="false" aria-controls="collapseForLoop">
                                    For Loop
                                </button>
                                </h2>
                                <div id="collapseForLoop" className="accordion-collapse collapse" aria-labelledby="headingForLoop" data-bs-parent="#loopsAccordion">
                                <div className="accordion-body">
                                    <iframe src="/assets/documents/fop/prac_3/questions.pdf" type="application/pdf" width="100%" height="500px"/>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingDoWhile">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDoWhile" aria-expanded="false" aria-controls="collapseDoWhile">
                                    Do While Loop
                                </button>
                                </h2>
                                <div id="collapseDoWhile" className="accordion-collapse collapse" aria-labelledby="headingDoWhile" data-bs-parent="#loopsAccordion">
                                <div className="accordion-body">
                                    <iframe src="/assets/documents/fop/prac_3/questions2.pdf" type="application/pdf" width="100%" height="500px"/>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNestedLoops">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNestedLoops" aria-expanded="false" aria-controls="collapseNestedLoops">
                                    Nested Loops
                                </button>
                                </h2>
                                <div id="collapseNestedLoops" className="accordion-collapse collapse" aria-labelledby="headingNestedLoops" data-bs-parent="#loopsAccordion">
                                <div className="accordion-body">
                                    <iframe src="/assets/documents/fop/prac_3/questions3.pdf" type="application/pdf" width="100%" height="500px"/>
                                </div>
                                </div>
                            </div>
                            </div>
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
                            <div className="accordion" id="loopsAccordion-ans">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingForLoop">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseForLoop-ans">
                                            For Loop
                                        </button>
                                    </h2>
                                    <div id="collapseForLoop-ans" className="accordion-collapse collapse"
                                        data-bs-parent="#loopsAccordion-ans">
                                        <div className="accordion-body">
                                            <div className="forLoop-answers-container">
                                                
                                            </div>
                                            <h4>Q1)</h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped table-hover align-middle">
                                                    <thead className="table-info">
                                                        <tr>
                                                            <th>(a)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <CodeBlock
                                                                language="javascript"
                                                                showLineNumbers={true}
                                                                code={`
                                                                    function displayK() {
                                                                        for (let k = 1; k <= 10; k = k + 3) {
                                                                            console.log(k);
                                                                        }
                                                                    }

                                                                    displayK();

                                                                `}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Output/Error:</h6>
                                                                <CodeBlock
                                                                language="bash"
                                                                showLineNumbers={false}
                                                                code={`
                                                                    1
                                                                    3
                                                                    4
                                                                    7
                                                                    10
                                                                `}/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped table-hover align-middle">
                                                    <thead className="table-info">
                                                        <tr>
                                                            <th>(b)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <CodeBlock
                                                                language="javascript"
                                                                showLineNumbers={true}
                                                                code={`
                                                                    for (let m = 20, m > 5, m -= 4) {
                                                                        console.log(m);
                                                                    }
                                                                `}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Output:</h6>
                                                                <CodeBlock
                                                                language="bash"
                                                                showLineNumbers={false}
                                                                code={`
                                                                    SyntaxError: Identifier 'm' has already been declared
                                                                `}/>
                                                                <p>Note: It should be using <code>;</code> instead of <code>,</code></p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped table-hover align-middle">
                                                    <thead className="table-info">
                                                        <tr>
                                                            <th>(c)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <CodeBlock
                                                                language="javascript"
                                                                showLineNumbers={true}
                                                                code={`
                                                                    for (let m = 20, m > 5, m -= 4) {
                                                                        console.log(m);
                                                                    }
                                                                `}/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Output:</h6>
                                                                    <CodeBlock
                                                                    language="javascript"
                                                                    showLineNumbers={false}
                                                                    code={`
                                                                        SyntaxError: Identifier 'm' has already been declared
                                                                    `}/>
                                                                <p>Note: It should be using <code>;</code> instead of <code>,</code></p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                            <h4>Q2</h4>

                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingDoWhile-ans">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseDoWhile-ans">
                                            Do While
                                        </button>
                                    </h2>
                                    <div id="collapseDoWhile-ans" className="accordion-collapse collapse"
                                        data-bs-parent="#loopsAccordion-ans">
                                        <div className="accordion-body">
                                            Content for Do While goes here.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNestedLoops-ans">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseNestedLoops-ans">
                                            Nested Loops
                                        </button>
                                    </h2>
                                    <div id="collapseNestedLoops-ans" className="accordion-collapse collapse"
                                        data-bs-parent="#loopsAccordion-ans">
                                        <div className="accordion-body">
                                            Content for Nested Loops goes here.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}