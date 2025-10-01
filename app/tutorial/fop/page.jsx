import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/CodeBlock.jsx";

export default function FopIntroPage() {
    return (
        <div>
            <h1 className="fw-bold">ST2053 - Fundamentals Of Programming</h1>

            <section>
                <h2 className="mt-4 fw-bold">Overview</h2>
                <p>Information: The module is currently named "Programming Methodology" in the new syllabus</p>
                <p>There are some prerequisities required to start this module. The list of things to download: </p>
                <ul>
                    <li>
                        <Link href="https://code.visualstudio.com/download" target="a_blank">VSCode</Link>: A code editor with many extensions, high customizable and popular
                    </li>
                    <li>
                        <Link href="https://nodejs.org/en/download" target="a_blank">NodeJS</Link>: JavaScript runtime environment, used for server-side (backend) scripting
                    </li>
                    <li>
                        <code className="command-line">npm i readline-sync</code>: After installing NodeJS, install readline-sync library if needed to read user input in command-line
                    </li>
                </ul>

                <p>Before going into the tutorial, let's write the first program: Printing "Hello World!"</p>
                <CodeBlock language="javascript" code={`console.log("Hello World!");`} />

            </section>

            <section>
                <h2 className="mt-4 fw-bold">Quick Notes For Practical</h2>
                <hr />
                <h4>Directory</h4>
                <p>Before proceeding, let's get familiar with how project directory works,
                    ensure that the VSCode has opened in the correct directory. An example scenario:
                </p>
                <ol>
                    <li>Create a directory called "Testing"</li>
                    <li>Open the directory "Testing" inside VSCode</li>
                    <li>Open Terminal inside VSCode
                        <Image src="/assets/images/fop/intro/directory.png" className="img-fluid" 
                        alt="Directory structure"
                        width={900} 
                        height={400} 
                        />
                        <p>Note that the last folder must be exactly the directory name "Testing"</p>
                    </li>
                    <li>Ensure that CMD is selected as Terminal so that nodejs can perform with elevated permissions</li>
                </ol>


                <h4 className="mt-4">Installing <code>readline-sync</code></h4>
                <p>After installing the <code className="command-line">readline-sync</code> module/library, ensure there is
                    a <code>node_modules</code> folder created like so: </p>

                <ol>
                    <li>In Terminal of VSCode, run the command
                        <CodeBlock
                            commandLine="true"
                            language="bash"
                            code={`npm i readline-sync`}
                            showLineNumbers={true}
                        />
                        <Image src="/assets/images/fop/intro/installing.png" className="img-fluid" 
                        alt="Installing"
                        width={600}
                        height={200}
                        />
                    </li>
                    <li className="mt-3">There exists in the left sidebar of VSCode, the files:
                        <ul>
                            <li>
                                node_modules
                            </li>
                            <li>
                                package.json
                            </li>
                            <li>
                                package.json.lock
                            </li>
                        </ul>
                        <Image src="/assets/images/fop/intro/result.png" className="img-fluid"
                        alt="Result"
                        width={500}   // replace with your image's actual pixel width
                        height={300}  // replace with your image's actual pixel height
                        />
                    </li>

                </ol>

                <p>
                    Now, for each question, use these same steps to create a project per practical exercise to
                    attempt the questions.
                </p>

                <h4 className="mt-4">Template to use <code>readline-sync</code></h4>
                <CodeBlock
                language="javascript"
                showLineNumbers={true} 
                code={`
                const reader = require('readline-sync');

                // Ask a question (prompt user input)
                // Value is stored into the variable called input
                const input = reader.question("enter your prompt here: ");`
                }/>
                <h4 className="mt-4">Note</h4>
                <p>
                    Do note that the practicals in each tutorials I have put are from the past, so it is a bit dated.
                    However, you can go to this GitHub Repository to download the files to do some practicals. It features
                    self-marking of your answers. Click on the link below to access the repository.
                </p>
                <div className="px-3">
                    <h2>
                        <Link href="https://github.com/SP-DIT/ST0523-FOP-practicals"
                            target="_blank"
                            className="text-decoration-none">
                            <i className="bi bi-github"></i> ST0523-FOP-Practicals
                        </Link>
                    </h2>
                </div>
            </section>

            <section>
                <h2 className="mt-5 fw-bold">Useful Resources</h2>
                <hr />
                <div className="row gy-4 my-2 gx-1">

                    {/* <!-- Recommended Learning Websites --> */}
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100">
                            <div className="card-header bg-info bg-opacity-50">
                                <h5 className="my-0"><i className="bi bi-book-half text-secondary"></i> Tutorial Websites</h5>
                            </div>

                            <div className="card-body">
                                <div className="card-text">
                                    <p>Some good tutorial websites to refer and learn on your own:</p>
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://www.w3schools.com/js/" target="a_blank">
                                                W3Schools</Link>: One of the best resources to learn coding from.
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.geeksforgeeks.org/javascript/javascript-tutorial/" target="a_blank">
                                                GeeksForGeeks</Link>: A slightly more advanced website to learn coding from.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Testing --> */}
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100">
                            <div className="card-header bg-info bg-opacity-50">
                                <h5 className="my-0">
                                    <i className="bi bi-flask-florence"></i> Testing
                                </h5>
                            </div>

                            <div className="card-body">
                                <div className="card-text">
                                    <p>Below are some website to quickly test and develop simple javascript codes:</p>
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://www.programiz.com/javascript/online-compiler/" target="a_blank">
                                                JavaScript Compiler</Link>: Useful for testing NodeJS environment code.
                                        </li>
                                        <li>
                                            <Link
                                                href="https://onecompiler.com/javascript" target="a_blank">
                                                OneCompiler
                                            </Link>: Useful for knowing how to solve basic problems.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Extra Practise--> */}
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100">
                            <div className="card-header bg-info bg-opacity-50">
                                <h5 className="my-0"><i className="bi bi-bullseye text-danger"></i> Extra Practise</h5>
                            </div>

                            <div className="card-body">
                                <div className="card-text">
                                    <p>Below are some website to hone your skills in Javascript:</p>
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://the-winter.github.io/codingjs/" target="a_blank">
                                                CodingBat</Link>: Useful for knowing how to solve basic problems.
                                        </li>
                                        <li>
                                            <Link href="https://leetcode.com/" target="a_blank">Leetcode</Link>:
                                            Useful for knowing how to solve basic problems.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Youtube--> */}
                    <div className="col-md-6 col-sm-12">
                        <div className="card h-100">
                            <div className="card-header bg-info bg-opacity-50">
                                <h5 className="my-0"><i className="bi bi-youtube text-danger"></i> Youtube Videos</h5>
                            </div>

                            <div className="card-body">
                                <div className="card-text">
                                    <p>Some nice videos to learn more on your own:</p>
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://www.youtube.com/watch?v=lfmg-EJ8gm4" target="a_blank">
                                                In-Depth Tutorial</Link>: A very long simple tutorial to understand JavaScript.
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.youtube.com/watch?v=Ihy0QziLDf0" target="a_blank">
                                                Beginner Tutorial</Link>: A short beginner-friendly tutorial to understand JavaScript.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}