import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import FileList from "@components/tutorial/FilesList";

// Import Data
import files from "@data/foc/lecture_notes.js";
const { Lect_2 } = files;

export default function Foc_Tut2() {
    return (
        <div>
            <h1 className="fw-bold">
                <i className="bi bi-mortarboard-fill"></i> Tutorial 2 - Digital Representation
            </h1>
            <hr/>

            <section>
                <h2>
                    <i className="bi bi-journal me-2"></i>Lecture Notes
                </h2>
                <p>These are the official notes from the institute itself. It may be outdated.</p>
                <FileList files={Lect_2}/>
            </section>
        </div>
    );
}