import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut6_answers from "@data/fop/tut6_answers.json";

export default function FopTut_6() {

    return(
        <div>
            <h2 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 6 - Array
            </h2>
            <hr/>

            <h3>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h3>
            <p>An array contains elements which can be a variable or an object, 
                which have their own position (index) inside the array. 
                The position (index) of an array starts and counts from 0.
                The first element of an array is at index 0 if array is not empty.
            </p>
            <p>Moreover, an array is considered to be an object in JavaScript.</p>
            
            <div className="px-3">

                <h5 className="mb-0"><i className="bi bi-tools"></i> Syntax</h5>
                <CodeBlock
                language="javascript"
                showLineNumbers={false}
                code={`
                    // Best practise to declare an array using const keyword
                    const testArr = [el1, el2, el3, ...];
                `}/>
                <h5 className="mt-3">
                    <i className="bi bi-bookmark-check-fill"></i> Example
                </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        // The array can contain variables of different data types
                        const arr = [1,2,3, "string", "false"];
                    `}/>
            </div>

            <section>
                <h4>Accessing Elements</h4>
                <p className="mt-3">An element can be accessed in the array. 
                    Assuming the array variable name is <code>someArr</code>, then
                </p>

                <div className="px-3">
                    <h5 className="mb-0"><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        someArr[x]; // where x is a valid index (an integer >= 0)
                    `}/>

                    <h5 className="mt-3">
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>                            
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const someArr = [1, 2, 3, true];

                        console.log(someArr[0]); // Output is 1
                        console.log(someArr[3]); //Output is true
                    `}/>
                </div>
            </section>

            <section>
                <h4>Changing Elements</h4>

                <p className="mt-3">
                    Even though, an array is declared using the <code>const</code> keyword,
                    its element can be changed, like for example:
                </p>

                <div className="px-3">
                    <h5 className="mt-3">
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>  
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const arr = [1, 2, 4, true, "string"];

                        arr[3] = "changedFromBoolean";
                    `}/>
                </div>
            </section>

            <section>
                <h4>Methods</h4>
                <p className="mt-3">Array methods are useful to modifying and manipulating it 
                    to suit our needs. Methods such as push can add a new element. Below are all
                    the methods required to know in exams:
                </p>
                <CodeBlock
                language="javascript"
                showLineNumbers={false}
                code={`
                    // length: gets the total length of the array
                    const test = [1, "string"];

                    console.log(test.length); // Output is 2

                    // push(): Adds an element to the right of the array
                    test.push(1000);
                    // [1, "string", 1000]

                    console.log(test.length) // Now output is 3

                    // pop(): Removes the element at the last index of the array
                    test.pop();

                    // [1, "string"]
                    console.log(test.length) // Now output is 2

                    // Gets the index of an element
                    console.log(test.indexOf("string")) // Output 1
                `}/>
                
                <p className="mt-3">A complete reference can be found <a href="https://www.w3schools.com/js/js_array_reference.asp">here</a>. This list have additional methods that will not come out for the exam.</p>
            </section>

            <section>
                <h4>Reference Type</h4>
                <p>
                    When arrays when they are stored into another variable, they are
                    simply making a reference to it. If the original array changes, the 
                    other variable referncing to it will also reflect the change. It is <b>NOT A
                    COPY!</b>
                </p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        const arr1 = [1, 2, 3];
                        const arr2 = arr1; // arr2 is a reference to arr1

                        arr2.push(4);

                        console.log(arr1); // [1, 2, 3, 4]
                        console.log(arr2); // [1, 2, 3, 4]
                    `}/>
                </div>
            </section>

            <section>
                <h4>Shallow Copy</h4>
                <p>
                    If you want to make a copy (not a reference), 
                    you can use a spread operator <code>[...arrName]</code>
                </p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-tools"></i> Syntax
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        const arr1 = [1, 2, [3, 4]];
                        const arr2 = [...arr1]; // shallow copy

                        arr2[0] = 99;         // only arr2 changes
                        arr2[2][0] = 100;     // affects both

                        console.log(arr1); // [1, 2, [100, 4]]
                        console.log(arr2); // [99, 2, [100, 4]]
                    `}/>
                </div>
            </section>

            {/* <!-- Practical --> */}

            <section>
                <h2 className="fw-bold">
                    <i className="bi bi-receipt-cutoff"></i> Practical 6 - Array
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    In this practical, you will explore arrays, which 
                    allow you to store multiple values in a single 
                    variable. You will learn how to declare, access, and 
                    manipulate arrays, as well as perform common operations 
                    such as looping through elements and updating values.
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
                            <iframe src="/assets/documents/fop/prac_6/questions.pdf"/>
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