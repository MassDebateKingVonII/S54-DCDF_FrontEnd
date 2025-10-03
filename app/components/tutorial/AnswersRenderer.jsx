"use client";

import CodeBlock from "@components/utils/CodeBlock.jsx";

export default function AnswersRenderer({ answers }) {
    if (!answers || !answers.length) return null;

    return (
        <div>
            {answers.map((q, idx) => (
                <div key={idx} className="mb-4">
                    <h4>{q.number}</h4>

                    {q.type === "code" && (
                        <>
                            {q.parts ? (
                                q.parts.map((p, pi) => (
                                    <div key={pi} className="mb-2">
                                        <h6>{p.label}</h6>
                                        <CodeBlock language="javascript" showLineNumbers code={p.code} />
                                    </div>
                                ))
                            ) : (
                                <CodeBlock language="javascript" showLineNumbers code={q.code} />
                            )}
                        </>
                    )}

                    {q.type === "table" && (
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover align-middle">
                                <thead className="table-info">
                                    <tr>
                                        {q.headers.map((h, i) => (
                                            <th key={i} className={q.colWidths?.[i] || ""}>
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {q.rows.map((r, ri) => (
                                        <tr key={ri}>
                                            {r.map((c, ci) => (
                                                <td key={ci} className={q.colWidths?.[ci] || ""}>
                                                    {typeof c === "string" && c}

                                                    {c?.type === "code" && (
                                                        <CodeBlock
                                                            language={c.language || c.lang ||  "javascript"}
                                                            showLineNumbers
                                                            code={c.content}
                                                        />
                                                    )}

                                                    {c?.type === "list" && (
                                                        <ul>
                                                            {c.items.map((item, li) => (
                                                                <li key={li}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {c?.type === "text" && <span>{c.content}</span>}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {q.type === "list" && (
                        <ol className="letter-list">
                            {q.items.map((item, li) => (
                                <li key={li}>{item}</li>
                            ))}
                        </ol>
                    )}

                    {q.type === "codeOutput" && (
                        <>
                            {q.rows.map((row, ri) => (
                                <div key={ri} className="table-responsive mb-3">
                                    <table className="table table-bordered table-striped table-hover align-middle">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Program</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <CodeBlock language="javascript" showLineNumbers code={row.code} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Output:</h6>
                                                    <CodeBlock language="bash" code={row.output} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
