import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/utils/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
// import tut5_answers from "@data/fop/tut5_answers.json";

export default function FopTut_5() {
    return(
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 5 - Conditional Programming
            </h1>
            <hr/>
            <h2>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h2>
            <p>
            Conditional programming is here you want to execute something only if it matches something or a set of conditions.
            This is achieved via <code>if else</code> or <code>case switch</code> statements in JavaScript.
            </p>

            <section>
                <h4 className="fw-bold"><u>1. If...Else</u></h4>
                <p><code>If Else</code> statements are the simplest way to create conditional programming. 
                    It can be used to check more than 1 conditions and/or be nested.</p>
                <div className="px-3">
                    <h5 className="mb-0"><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        if (condition1) {

                        } else if (condition2) {

                        } ... // as many else if statements as you want
                        } else {

                        }
                    `}/>

                    <h5 className="mt-3">
                        <i className="bi bi-bookmark-check-fill"></i> Examples
                    </h5>

                    <p className="mt-3"><b>Scenario 1</b>: Print "Hooray" if number given by user is greater than or equal to 100. Quit the program if condition is not matched.</p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        // This must be at the top
                        const reader = require('readline-sync');

                        let input = reader.question("Enter a number: ");

                        // A function to return a boolean whether number is >= 100
                        function checkNum(number) {
                            // This below, either gives false or true
                            return(number>=100);
                        }

                        // if (true), then prints the Hooray string
                        if (checkNum(input)) {
                            console.log("Hooray")
                        } else {
                            return;
                        }
                    `}/>
                    <p className="mt-3"><b>Scenario 2</b>: Print "Hooray" if number given by user is <b>equal to 10 or 20</b> or 
                        is a number that is both <b>divisible by 3 and 5</b>. 
                        Moreover, it will print "Oh No!" if it is <b>NaN</b>. Quit the program if condition is not matched.
                    </p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        // This must be at the top
                        const reader = require('readline-sync');

                        let input = reader.question("Enter a number: ");

                        // A function to return a boolean whether input is a valid number
                        function validateNum(number) {
                            // This below, either gives false or true
                            // if true, it is a number
                            // if false, it is not a number
                            return !isNaN(number);

                            // IMPORTANT: take note of the "!", boolean value returned is inverted
                        }

                        function processNum(number) {
                            // Here shows else if being used
                            if (number === 10 || number === 20) {
                                return true;
                            } else if (number % 3 === 0 && number % 5 === 0) {
                                return true;
                            } else {
                                return false;
                            }
                        }

                        // Below shows nesting of if else statements
                        if (validateNum(input)) {
                            if (processNum(input)) {
                                console.log("Hooray");
                            } else {
                                return;
                            }
                        } else {
                            console.log("Oh No!");
                        }
                    `}/>
                </div>
            </section>

            <section>
                <h4 className="fw-bold"><u>2. Case...Switch</u></h4>
                <p>This is useful, if you want better code readability, dealing 
                    with multiple conditions and reducing chaining of <code>if else</code> statements.
                </p>
                <div className="px-3">
                    <h5><i className="bi bi-tools"></i> Syntax</h5>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={false}
                    code={`
                        // cases are to match the expression
                        // If it match, the code block under the case will run
                        switch(expression) {
                            case x:
                            // code block
                            break;
                            case y:
                            // code block
                            break;
                            default:
                            // code block
                        }
                    `}/>

                    <h5 className="mt-3"><i className="bi bi-bookmark-check-fill"></i> Examples</h5>
                    <p>
                        <b>Scenario 1: </b>Prompt user "Enter something: ". 
                        Print "Yummy", "Ewww", "What's that?" and "A necessary drink" for the user inputs
                        "Mango", "Avocado", "Cricket" and "Water" respectively.
                    </p>
                    <CodeBlock
                    language="javascript"
                    showLineNumbers={true}
                    code={`
                        // This must be at the top
                        const reader = require('readline-sync');

                        let input = reader.question("Enter something: ");

                        // Remember to put break; statments for each case

                        switch (input) {
                            case "Mango": {
                                console.log("Yummy");
                                break;
                            }

                            case "Avocado": {
                                console.log("Ewww");
                                break;
                            }

                            case "Cricket": {
                                console.log("What\'s that?");
                                break;
                            }

                            case "Water": {
                                console.log("A necessary drink");
                                break;
                            }
                            
                        }
                    `}/>
                </div>
            </section>

            <section>
                <h2 className="fw-bold">
                    <i className="bi bi-receipt-cutoff"></i> Practical 5 - If and Case Switch Statements
                </h2>
                <hr/>

                <p className="text-muted fst-italic">
                    This practical introduces decision-making in 
                    programming using If statements and Case Switch 
                    statements. You will learn how to control the flow 
                    of your programs by executing different blocks of code 
                    based on specific conditions.
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
                            <iframe src="/assets/documents/fop/prac_5/questions.pdf"/>
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