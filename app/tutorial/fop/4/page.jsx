import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut4_answers from "@data/fop/tut4_answers.json";

export default function FopTut_4() {
    return (
        <div>
            <h2 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 4 - Functions
            </h2>
            <hr/>
            
            <h3>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h3>
            <p>
                A function in programming is a reusable block of code designed to 
                perform a specific task. Functions help organize code, 
                avoid repetition, and make programs easier to read and maintain.
            </p>
            <p>
                It is important to note that functions have <b>properties</b> and 
                <b>methods</b>. This essentially describe them as objects.
            </p>
            
            <section>
                <h4>Declaring Functions</h4>
                <p>Declared functions are not used immediately, they must be invoked.</p>
                <div className="px-3">
                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        function name(param1, param2, param3) {
                            ....
                        }
                    `}/>
                    <p>Note: There can be any number of parameters you want.</p>

                    <h5 className="mt-0">
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p className="mt-3 mb-0"><b>Scenario</b>: Make a function that sums two numbers</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        function sum(x,y) {
                            return x + y;
                        }

                        // The line below sum(10, 11) is an invocation of the function sum(x,y)
                        console.log(sum(10, 11)); // Output is 21
                    `}/>
                </div>
            </section>

            <section>
                <h4>Function Hoisting</h4>
                <p className="mt-3">
                    Hoisting in JavaScript, is the behaviour where declarations are
                    moved to the top of the current <b>scope</b>.
                </p>
                <p>
                    Declarations of functions are hoisted. Hence, functions can be called
                    before they are declared
                </p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        console.log(sum(4, 10)); // Output 14

                        function sum(x, y) {
                            return x + y;
                        }
                    `}/>
                </div>
            </section>

            <section>
                <h4>Parameters & Arguments</h4>
                <p>
                    There are parameter rules which govern the behaviour of functions:
                </p>
                <ol>
                    <li>JavaScript function definitions do not specify data types for parameters.</li>
                    <li>JavaScript functions do not perform type checking on the passed arguments.</li>
                    <li>JavaScript functions do not check the number of arguments received.</li>
                </ol>
                <p>You can see the behaviour of rule 3:</p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        function test(x, y) {
                            return x + y;
                        }

                        console.log(test(10, 5, 6, 1)); // Still outputs 15
                        // It ignores the other parameters passed
                        // No errors thrown
                    `}/>
                </div>
            </section>

            <section>
                <h4>Pass by Value & Reference</h4>
                <p>
                    The parameters (arguments) are passed by value. When you all a function 
                    and give it arguments, the function receives a copy of those values, 
                    not the original variables themselves.
                </p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Examples
                    </h5>
                    <p className="my-0"><b>Scenario 1</b>: Pass By Value (Primitive Values)</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        function changeValue(x) {
                            x = 100; // modifies only the local copy
                        }

                        let num = 50;
                        changeValue(num);
                        console.log(num); // still 50, not 100
                    `}/>
                    <p>
                        Note: Explanation: num is 50. When calling changeValue(num), 
                        the value 50 is copied into x. Changing x does not touch num.
                    </p>

                    <p className="my-0"><b>Scenario 2</b>: Pass By Reference (Objects & Arrays)</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        function modifyObject(obj) {
                            obj.name = "Alice";   // modifies the original object
                        }

                        const person = { name: "Bob" };
                        modifyObject(person);
                        console.log(person.name); // "Alice"
                    `}/>
                    <p>
                        Note: Objects are still passed by value, but here the value is a reference 
                        (the memory address of the object).
                    </p>
                    <p>
                        So the function gets a copy of the reference — both 
                        point to the same object in memory.
                    </p>
                    <p>
                        This means if you modify the object’s contents, 
                        the original will change, because both references 
                        point to the same location.
                    </p>

                    <p className="my=0"><b>Scenario 3</b>: Reassigning Objects</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        function reassignObject(obj) {
                            // just reassigns the local copy of the reference
                            obj = { name: "Charlie" };  
                        }

                        const person = { name: "Bob" };
                        reassignObject(person);
                        console.log(person.name); // still "Bob"
                    `}/>
                    <p>
                        Note: However if you reassign the parameter to a new object, 
                        it won’t affect the original.
                    </p>

                </div>
            </section>

            <section>
                <h2 className="fw-bold">
                    <i className="bi bi-receipt-cutoff"></i> Practical 4 - Functions
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    In this practical, you will learn how to define and 
                    use functions to organize your code into reusable 
                    blocks. You will explore function parameters, return 
                    values, and how to call functions to perform specific 
                    tasks efficiently.
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
                            <iframe src="/assets/documents/fop/prac_4/questions.pdf"/>
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
                            Test
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}