import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CodeBlock from "@components/utils/CodeBlock.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
import tut2_answers from "@data/fop/tut2_answers.js";

export default function FopTut_2() {
    return(
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 2 - Operators
            </h1>
            <hr/>

            <h2>
                <i className="bi bi-binoculars-fill"></i> Overview
            </h2>
            <p>Operators in programming are symbols that perform operations 
                on values (also called operands). 
                They are used to calculate, compare, or combine data.
            </p>

            <section>
                <h4>
                    <i className="bi bi-table"></i> Operators Table
                </h4>
                <h6>Arithmetic Operators</h6>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-info">
                            <tr>
                                <th className="w-10">Operator</th>
                                <th className="w-10">Description</th>
                                <th className="w-80">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>+</code></td>
                                <td>Addition</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        let y = 2;
                                        console.log(x + y); // Output is 7
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>-</code></td>
                                <td>Subtraction</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        let y = 2;
                                        console.log(x - y); // Output is 2
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>*</code></td>
                                <td>Multiplication</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        let y = 3;
                                        console.log(x * y); // Output is 5 x 3 = 15
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>**</code></td>
                                <td>Exponentiation</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        let y = 3;
                                        console.log(5 ** 3); // 5^3 = 125
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>/</code></td>
                                <td>Division</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 10;
                                        let y = 2;
                                        console.log(x/y); // Output is 10 ÷ 2 = 5
                                        
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>%</code></td>
                                <td>Modulus (Remainder)</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 10;
                                        let y = 3;
                                        console.log(x%y); // Output is 10 ÷ 3 = 3R1, hence 1
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>++</code></td>
                                <td>Increment</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        x++;
                                        console.log(x);  // 6
                                    `}/>
                                </td>
                            </tr>
                            <tr>
                                <td><code>--</code></td>
                                <td>Decrement</td>
                                <td>
                                    <CodeBlock
                                    language="javascript"
                                    showLineNumbers={true}
                                    code={`
                                        let x = 5;
                                        x--;
                                        console.log(x); // Output is 4
                                    `}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>

                <h6 className="mt-2">Assignment Operators</h6>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="table-info">
                            <tr>
                                <th className="w-20">Operator</th>
                                <th className="w-40">Example</th>
                                <th className="w-40">Same As</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>=</code></td>
                                <td><code>x = y</code></td>
                                <td><code>x = y</code></td>
                            </tr>
                            <tr>
                                <td><code>+=</code></td>
                                <td><code>x += y</code></td>
                                <td><code>x = x + y</code></td>
                            </tr>
                            <tr>
                                <td><code>-=</code></td>
                                <td><code>x -= y</code></td>
                                <td><code>x = x - y</code></td>
                            </tr>
                            <tr>
                                <td><code>*=</code></td>
                                <td><code>x *= y</code></td>
                                <td><code>x = x * y</code></td>
                            </tr>
                            <tr>
                                <td><code>/=</code></td>
                                <td><code>x /= y</code></td>
                                <td><code>x = x / y</code></td>
                            </tr>
                            <tr>
                                <td><code>%=</code></td>
                                <td><code>x %= y</code></td>
                                <td><code>x = x % y</code></td>
                            </tr>
                            <tr>
                                <td><code>**=</code></td>
                                <td><code>x **= y</code></td>
                                <td><code>x = x ** y</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/* <!-- Source label --> */}
                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>

                <h6 className="mt-2">Comparison Operators</h6>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="table-info">
                            <tr>
                                <th className="w-20">Operator</th>
                                <th className="w-40">Description</th>
                                <th className="w-40">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>==</code></td>
                                <td>equal to</td>
                                <td><code>x == 5</code></td>
                            </tr>
                            <tr>
                                <td><code>===</code></td>
                                <td>equal value and equal type</td>
                                <td><code>x === 5</code></td>
                            </tr>
                            <tr>
                                <td><code>!=</code></td>
                                <td>not equal</td>
                                <td><code>x != 5</code></td>
                            </tr>
                            <tr>
                                <td><code>!==</code></td>
                                <td>not equal value or not equal type</td>
                                <td><code>x !== 5</code></td>
                            </tr>
                            <tr>
                                <td><code>&gt;</code></td>
                                <td>greater than</td>
                                <td><code>x &gt; 5</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;</code></td>
                                <td>less than</td>
                                <td><code>x &lt; 5</code></td>
                            </tr>
                            <tr>
                                <td><code>&gt;=</code></td>
                                <td>greater than or equal to</td>
                                <td><code>x &gt;= 5</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;=</code></td>
                                <td>less than or equal to</td>
                                <td><code>x &lt;= 5</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- Source label --> */}
                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>

                <h6 className="mt-2">Logical Operators</h6>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="table-info">
                            <tr>
                                <th className="w-20">Operator</th>
                                <th className="w-80">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&amp;&amp;</code></td>
                                <td>logical and</td>
                            </tr>
                            <tr>
                                <td><code>||</code></td>
                                <td>logical or</td>
                            </tr>
                            <tr>
                                <td><code>!</code></td>
                                <td>logical not</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>
            </section>

            <section>
                <h4>
                    <i className="bi bi-table"></i> Operator Precedence
                </h4>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover align-middle">
                        <thead className="table-info">
                            <tr>
                                <th>Val</th>
                                <th>Operator</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18</td>
                                <td>( )</td>
                                <td>Expression Grouping</td>
                                <td>(100 + 50) * 3</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>.</td>
                                <td>Member Of</td>
                                <td>person.name</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>[]</td>
                                <td>Member Of</td>
                                <td>person["name"]</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>?.</td>
                                <td>Optional Chaining ES2020</td>
                                <td>x ?. y</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>()</td>
                                <td>Function Call</td>
                                <td>myFunction()</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>new</td>
                                <td>New with Arguments</td>
                                <td>new Date("June 5,2022")</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>new</td>
                                <td>New without Arguments</td>
                                <td>new Date()</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Increment Operators</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>++</td>
                                <td>Postfix Increment</td>
                                <td>i++</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>--</td>
                                <td>Postfix Decrement</td>
                                <td>i--</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>++</td>
                                <td>Prefix Increment</td>
                                <td>++i</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>--</td>
                                <td>Prefix Decrement</td>
                                <td>--i</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">NOT Operators</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>!</td>
                                <td>Logical NOT</td>
                                <td>!(x==y)</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>~</td>
                                <td>Bitwise NOT</td>
                                <td>~x</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Unary Operators</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>+</td>
                                <td>Unary Plus</td>
                                <td>+x</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>-</td>
                                <td>Unary Minus</td>
                                <td>-x</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>typeof</td>
                                <td>Data Type</td>
                                <td>typeof x</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>void</td>
                                <td>Evaluate Void</td>
                                <td>void(0)</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>delete</td>
                                <td>Property Delete</td>
                                <td>delete myCar.color</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Arithemetic Operators</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>**</td>
                                <td>Exponentiation ES2016</td>
                                <td>10 ** 2</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>*</td>
                                <td>Multiplication</td>
                                <td>10 * 5</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>/</td>
                                <td>Division</td>
                                <td>10 / 5</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>%</td>
                                <td>Division Remainder</td>
                                <td>10 % 5</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>+</td>
                                <td>Addition</td>
                                <td>10 + 5</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>-</td>
                                <td>Subtraction</td>
                                <td>10 - 5</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>+</td>
                                <td>Concatenation</td>
                                <td>"John" + "Doe"</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Shift Operators</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>&lt;&lt;</td>
                                <td>Shift Left</td>
                                <td>x &lt;&lt; 2</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>&gt;&gt;</td>
                                <td>Shift Right (signed)</td>
                                <td>x &gt;&gt; 2</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>&gt;&gt;&gt;</td>
                                <td>Shift Right (unsigned)</td>
                                <td>x &gt;&gt;&gt; 2</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Relational Operators</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>in</td>
                                <td>Property in Object</td>
                                <td>"PI" in Math</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>instanceof</td>
                                <td>Instance of Object</td>
                                <td>x instanceof Array</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Comparison Operators</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>&lt;</td>
                                <td>Less than</td>
                                <td>x &lt; y</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>&lt;=</td>
                                <td>Less than or equal</td>
                                <td>x &lt;= y</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>&gt;</td>
                                <td>Greater than</td>
                                <td>x &gt; y</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>&gt;=</td>
                                <td>Greater than or equal</td>
                                <td>x &gt;= Array</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>==</td>
                                <td>Equal</td>
                                <td>x == y</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>===</td>
                                <td>Strict equal</td>
                                <td>x === y</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>!=</td>
                                <td>Unequal</td>
                                <td>x != y</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>!==</td>
                                <td>Strict unequal</td>
                                <td>x !== y</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Bitwise Operators</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>&amp;</td>
                                <td>Bitwise AND</td>
                                <td>x &amp; y</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>^</td>
                                <td>Bitwise XOR</td>
                                <td>x ^ y</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>|</td>
                                <td>Bitwise OR</td>
                                <td>x | y</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Logical Operators</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>&amp;&amp;</td>
                                <td>Logical AND</td>
                                <td>x &amp;&amp; y</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>||</td>
                                <td>Logical OR</td>
                                <td>x || y</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>??</td>
                                <td>Nullish Coalescing ES2020</td>
                                <td>x ?? y</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Conditional (ternary) Operators</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>? :</td>
                                <td>Condition</td>
                                <td>? "yes" : "no"</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Assignment Operators</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>=</td>
                                <td>Simple Assignment</td>
                                <td>x = y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>:</td>
                                <td>Colon Assignment</td>
                                <td>x: 5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>+=</td>
                                <td>Addition Assignment</td>
                                <td>x += y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>-=</td>
                                <td>Subtraction Assignment</td>
                                <td>x -= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>*=</td>
                                <td>Multiplication Assignment</td>
                                <td>x *= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>**=</td>
                                <td>Exponentiation Assignment</td>
                                <td>x **= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>/=</td>
                                <td>Division Assignment</td>
                                <td>x /= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>%=</td>
                                <td>Remainder Assignment</td>
                                <td>x %= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&lt;&lt;=</td>
                                <td>Left Shift Assignment</td>
                                <td>x &lt;&lt;= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&gt;&gt;=</td>
                                <td>Right Shift Assignment</td>
                                <td>x &gt;&gt;= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&gt;&gt;&gt;=</td>
                                <td>Unsigned Right Shift</td>
                                <td>x &gt;&gt;&gt;= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&amp;=</td>
                                <td>Bitwise AND Assignment</td>
                                <td>x &amp;= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>|=</td>
                                <td>Bitwise OR Assignment</td>
                                <td>x |= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>^=</td>
                                <td>Bitwise XOR Assignment</td>
                                <td>x ^= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&amp;&amp;=</td>
                                <td>Logical AND Assignment</td>
                                <td>x &amp;&amp;= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>||=</td>
                                <td>Logical OR Assignment</td>
                                <td>x ||= y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>=&gt;</td>
                                <td>Arrow</td>
                                <td>x =&gt; y</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>yield</td>
                                <td>Pause / Resume</td>
                                <td>yield x</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>yield*</td>
                                <td>Delegate</td>
                                <td>yield* x</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>...</td>
                                <td>Spread</td>
                                <td>...x</td>
                            </tr>
                            <tr className="table-info">
                                <td colSpan="4" className="p-1 text-center h3">Comma Operators</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>,</td>
                                <td>Comma</td>
                                <td>x , y</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-end fst-italic small text-muted">
                    Source: W3Schools
                </div>
            </section>

            <section>
                <h2 className="fw-bold mt-5">
                    <i className="bi bi-receipt-cutoff"></i> Practical 2 - Operators
                </h2>
                <hr/>
                <p className="text-muted fst-italic">
                    In this practical, you will learn about different 
                    operators used in programming, including 
                    arithmetic, relational, logical, and assignment 
                    operators. You will understand how to perform 
                    calculations, compare values, and control program 
                    flow using operators.
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
                            <iframe src="/assets/documents/fop/prac_2/questions.pdf"/>
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
                            <AnswersRenderer answers={tut2_answers}/>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    );
}