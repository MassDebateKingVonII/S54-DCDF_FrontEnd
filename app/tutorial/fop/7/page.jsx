import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut7_answers from "@data/fop/tut7_answers.json";

export default function FopTut_7() {
    return(
        <div>
            <h4>
                
            </h4>
            <h2 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 7 - Object Literals And Methods
            </h2>
            <hr/>

            <h3>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h3>
            <p>
                In this tutorial, you will learn about object literals,
                which allow you to group related data and functions 
                together. You will explore how to create objects, 
                access and update their properties, and define methods
                to perform actions on the object’s data.
            </p>

            <h4>Object Literal <code>{}</code></h4>
            <p className="mt-3">
                Here, we explore how to declare an object 
                using <code>{}</code>, otherwise known as
                object literals.
            </p>
            <div className="px-3">

                <h5><i className="bi bi-tools"></i> Syntax</h5>
                <CodeBlock
                language="javascript"
                showLineNumbers={false}
                code={`
                    // Preferably declare an object using const
                    const obj = {
                        k1: v1,
                        k2: v2,
                        k3: v3,
                            .
                            .
                        kx: vx
                    }
                `}/>

                <p>Note: Objects are a set of key-pair values. Each key is known 
                    as a property. There can be as many key-pair values.
                </p>

                <h5>
                    <i className="bi bi-bookmark-check-fill"></i> Example
                </h5>
                <CodeBlock
                language="javascript"
                showLineNumbers={true}
                code={`
                    // I want to describe a car but with multiple variables
                    // Using objects is the best way
                    const car1 = {
                        color: "red",
                        isOld: "false",
                        cost: 10000
                    }
                `}/>
            </div>

            <section>
                <h4>Accessing Property</h4>
                <p>
                    A property is also known as its key in more formal terms.
                    A key is required to access a value. There are two ways to
                    access a property/value:
                </p>

                <div className="px-3">
                    <h5>
                        <i className="bi bi-tools"></i> Syntax
                    </h5>

                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const obj = {
                            key: value,
                            .
                            .
                        }

                        // METHOD 1:
                        obj.key;

                        // METHOD 2:
                        obj["key"];
                    `}/>

                    <h5 className="mt-3">
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p>
                        <b>Scenario</b>: I want to access the color 
                        property of a card object
                    </p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        const car = {
                            color: red,
                            cost: 100000,
                            isOld: true
                        }

                        // METHOD 1:
                        car.color;

                        // METHOD 2:
                        car["color"];
                    `}/>
                </div>
            </section>

            <section>
                <h4>Deleting Property</h4>
                <p className="mt-3">The <code>delete</code> keyword deletes a property (key) from an object:</p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-tools"></i> Syntax
                    </h5>
                        <CodeBlock
                        language="javascript"
                        showLineNumbers={false}
                        code={`
                            const obj = {
                                key1: value1,
                                key2: value2,
                                    .
                                    .
                            }

                            // For example, delete key1
                            delete obj.key1;
                            // OR
                            delete obj["key1"];
                        `}/>
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p><b>Scenario</b>: Delete age from the person object</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        const person = {
                            name: "Tyrone",
                            age: 52,
                            height: 180
                        }

                        delete person.age;
                        // OR
                        delete person["age"];
                    `}/>
                </div>
            </section>

            <section>
                <h4>Adding Property</h4>
                <p className="mt-3">Adding a property (key) to an object is relatively simple</p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-tools"></i> Syntax
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const obj = {
                            key1: value1,
                            key2: value2,
                                .
                                .
                        }

                        obj.key100 = value;
                        // OR
                        obj["key100"] = value;
                    `}/>
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p><b>Scenario</b>: Add an age property to the person object.</p>
                        <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                            const person = {
                                name: "Tyrone",
                                height: 180
                            }

                            person.age = 52;
                            // OR
                            person["age"] = 52;
                        `}/>
                </div>
            </section>

            <section>
                <h4><code>this</code> Keyword</h4>
                <p className="mt-3">
                    In JavaScript, the <code>this</code> keyword refers to an object.
                </p>
                <p>
                    The <code>this</code> keyword refers to different objects depending on how it is used:
                </p>
                <ul className="list-group list-group-flush px-3">
                    <li className="list-group-item">When used alone, <code>this</code> refers to the global object.</li>
                    <li className="list-group-item">Inside a regular function, <code>this</code> also refers to the global object.</li>
                    <li className="list-group-item">Inside a function in strict mode, <code>this</code> is <code>undefined</code>.</li>
                    <li className="list-group-item">Inside an object method, <code>this</code> refers to the object itself.</li>
                    <li className="list-group-item">In an event handler, <code>this</code> refers to the element that received the event.
                    </li>
                </ul>

                <div className="px-3 mt-3">
                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Examples
                    </h5>

                    <p><b>Scenario A</b>: <code>this</code> in a Method</p>
                    <p className="mt-2">When used in an object method, <code>this</code> refers to the object.</p>
                        <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                            const person = {
                                firstName: "John",
                                lastName : "Doe",
                                id : 5566,
                                fullName : function() {
                                return this.firstName + " " + this.lastName;
                                }
                            };
                        `}/>
                    <p>In this scenario, <code>this</code> refers to the <b>person</b> object. 
                        Since, <b>fullName</b> method is a method of the <b>person</b> object.
                    </p>

                    <p><b>Scenario B</b>: Object Method Binding</p>
                    <p className="mt-2">
                        Basically, here, the object is trying to refer to itself via
                    <code>this</code> keyword.
                    </p>
                        <CodeBlock
                        language="javascript"
                        showLineNumbers={true}
                        code={`
                            const person = {
                                firstName: "John",
                                lastName : "Doe",
                                id       : 5566,
                                fullName : function() {
                                    return this.firstName + " " + this.lastName;
                                }
                            };
                        `}/>
                    <p>
                        In this example, <b>this.firstName</b> is the 
                        firstName property of <b>this</b> (the person object).
                    </p>

                </div>
            </section>

            <section>
                <h4>Methods</h4>
                <p className="mt-3">
                    A function that is contained within an object as a key-pair value,
                    is considered a method.
                </p>
                <div className="px-3">
                    <h5>
                        <i className="bi bi-tools"></i> Syntax
                    </h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const obj = {
                            method1: function() {
                                console.log("Hello!");
                            }
                        }
                    `}/>

                    <h5>
                        <i className="bi bi-bookmark-check-fill"></i> Example
                    </h5>
                    <p className="mt-3">Make a method saying 
                        "Welcome back, (name)" for a user object.
                    </p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        // Example user object
                        const user1 = {
                            age: 10,
                            weight: 35kg,
                            name: "John",
                            // Method Below
                            greetUser: function() {
                                console.log("Welcome back, " + this.name);
                            }
                        }
                    `}/>

                    <p>Note: The <code>this.name</code> refers to the user1 object.</p>
                </div>
            </section>

            <section>
                <h4>Reference Type</h4>
                <p>
                    Objects are not pass by value but rather, passed by reference. This means that:
                </p>
                <ul>
                    <li>
                        When you assign one array to another variable, 
                        both variables point to the same memory location.
                    </li>
                    <li>
                        Changing the contents of the array through one 
                        variable also affects the other.
                    </li>
                </ul>
                <div className="px-3">
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const obj1 = { name: "Alice" };
                        const obj2 = obj1;   // obj2 references the same object as obj1

                        obj2.name = "Bob";

                        console.log(obj1.name); // "Bob"
                        console.log(obj2.name); // "Bob"
                    `}/>
                    <p>
                        Note: Both obj1 and obj2 reflect the change because 
                        they point to the same object in memory.
                    </p>
                </div>
            </section>

            <section>
                <h4>Shallow Copy</h4>
                <p>Top-level elements are copied, <b>nested objects/arrays</b> are still shared by reference.</p>
                <div className="px-3">
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        const original = {
                            name: "Alice",
                            scores: [90, 85]
                        };

                        // Shallow copy
                        const copy = { ...original };

                        copy.name = "Bob";           // only affects copy
                        copy.scores.push(100);       // affects both!

                        console.log(original.name);   // "Alice"
                        console.log(copy.name);       // "Bob"

                        console.log(original.scores); // [90, 85, 100] changed
                        console.log(copy.scores);     // [90, 85, 100]
                    `}/>
                </div>
            </section>

            <section>
                <h2 className="fw-bold mt-5">
                    <i className="bi bi-receipt-cutoff"></i> Practical 7 - Object Literals And Methods
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    This practical introduces object literals, which allow 
                    you to group related data and functions together. 
                    You will learn how to define objects, access their 
                    properties, and create methods to perform actions on 
                    the object’s data.
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
                            <iframe src="/assets/documents/fop/prac_7/questions.pdf"/>
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
