import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/utils/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut8_answers from "@data/fop/tut8_answers.json";

export default function FopTut_8() {

    return(
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 8 - Array Of Objects
            </h1>
            <hr/>

            <h2>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h2>
            <p>
                In this section, you will learn how to combine the usage of arrays and objects.
                An array of objects is useful since it can group multiple objects under one collection
                or one name.
            </p>

            <section>
                <h4>Declaring Array Of Objects</h4>
                <p>
                    Declaring an array of objects means you 
                    create an array in which each element is an object.
                </p>
                <p>When it is useful:</p>
                <ul>
                    <li>
                        When you need to store multiple items that share the same properties, 
                        e.g., users, products, books, etc.
                    </li>

                    <li>
                        When you want to organize related data together instead 
                        of keeping separate arrays for each property.
                    </li>

                    <li>
                        When you plan to iterate (loop) through the data, search, filter, 
                        or sort based on object properties.
                    </li>
                </ul>

                <div className="px-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p className="mb-0"><b>Scenario</b>: Create an array to group multiple objects of students</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        const students = [
                            { name: "Alice", age: 20 },
                            { name: "Bob", age: 22 },
                            { name: "Charlie", age: 21 }
                        ];

                        console.log(students[1].name); // "Bob"
                    `}/>
                </div>
            </section>

            <section>
                <h2 className="fw-bold">
                    <i className="bi bi-receipt-cutoff"></i> Practical 8 - Array Of Objects
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    In this practical, you will work with arrays of 
                    objects, combining the concepts of arrays and object 
                    literals. You will learn how to store multiple objects 
                    in an array, access and modify their properties, and 
                    iterate over them effectively.
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
                            <iframe src="/assets/documents/fop/prac_8/questions.pdf"/>
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