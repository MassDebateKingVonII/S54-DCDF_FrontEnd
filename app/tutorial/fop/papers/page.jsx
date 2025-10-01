import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PapersList from "@components/tutorial/PapersList.jsx";

import AnswersRenderer from "@components/tutorial/AnswersRenderer.jsx";

// Data
import FOP_ExamPapers from "@data/fop/paper_list.js";
const { mstFiles, estFiles } = FOP_ExamPapers;

export default function Fop_Papers() {

    return(
        <div>
            <h2 className="fw-bold">
                <i className="bi bi-rocket-takeoff text-danger"></i> Past Year/Mock Papers
            </h2>
            <hr/>

            <p>
                Access a collection of past year examination papers and mock test sets to help you practice effectively and prepare with confidence.
            </p>

            <h2 className="fw-bold mt-5">
                <i className="bi bi-receipt-cutoff"></i> Downloads & Preview
            </h2>
            <hr/>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">MST</h4>
                    <button className="btn btn-sm btn-outline-primary d-flex align-items-center" type="button" data-bs-toggle="collapse"
                        data-bs-target="#MST">
                        <i className="bi bi-chevron-down rotate-icon"></i>
                    </button>
                </div>

                <div id="MST" className="collapse">
                    <div className="card-body">
                        <h5 className="card-title mb-3">MST Papers</h5>
                        <ul className="list-group list-group-flush" id="mst-file-list">
                               <PapersList files={mstFiles} />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">EST</h4>
                    <button className="btn btn-sm btn-outline-primary d-flex align-items-center" type="button" data-bs-toggle="collapse"
                        data-bs-target="#EST">
                        <i className="bi bi-chevron-down rotate-icon"></i>
                    </button>
                </div>

                <div id="EST" className="collapse">
                    <div className="card-body">
                        <h5 className="card-title mb-3">EST Exam Papers</h5>
                        <ul className="list-group list-group-flush" id="est-file-list">
                            <PapersList files={estFiles} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}