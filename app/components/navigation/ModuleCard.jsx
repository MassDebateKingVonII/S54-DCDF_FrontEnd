"use client";
import Stars from "./Stars";
import Image from "next/image";
import Link from "next/link";

export default function ModuleCard({ module }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card h-100">
                <Image
                    src={module.img}
                    alt={module.alt}
                    className="card-img-top img-fluid"
                    width={400}
                    height={250}
                />
                <div className="card-body">
                    <h5 className="card-title">{module.title}</h5>
                    <div className="card-text mt-2">
                        <span className="badge bg-info mx-2">Credits: {module.credits}</span>
                        <span className="badge bg-info mb-2 mx-2">Hours: {module.hours}</span>
                        <p className="text-muted mb-1">
                            Renamed in new syllabus:{" "}
                            <span className="badge rounded-pill bg-success">
                                {module.renamed}
                            </span>
                        </p>
                        <hr />
                        <p>In this module, you will learn:</p>
                        <ul>
                            {module.learnings.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p>{module.description}</p>
                        <hr />
                        <p>
                            Difficulty: <Stars rating={module.difficulty} />
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-end">
                        <Link href={module.link} className="btn btn-primary">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
