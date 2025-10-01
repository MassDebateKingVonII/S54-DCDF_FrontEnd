import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FocIntroPage() {
    return(
        <div className="col-lg-9 col-md-12 col-sm-12 mt-3 mb-5">
            <h1 className ="fw-bold">ST2053 - Fundamentals Of Computing</h1>

            <div>
                <h2 className="mt-4 fw-bold">Overview</h2>
                <p>
                    This is a killer module for most people. The Mid-Semester Test (MST) is pure memorisation.
                    The assignments is the relatively challenging part, 
                    especially the Q&A session if the lecturer is not kind.
                </p>
                <p>
                    I have included a projects section which will display my individual and team's work.
                    The project brief and work is done in the AY2024. Hence, your project brief and requiremenets may differ.
                    For reference, I achieved Distinction for this module.
                </p>
            </div>

            <div>
                <h2 className="mt-5 fw-bold">Useful Resources</h2>
            </div>
        </div>
    );
}