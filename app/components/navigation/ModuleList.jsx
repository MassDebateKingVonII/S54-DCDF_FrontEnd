"use client";
import ModuleCard from "./ModuleCard";

export default function ModuleList({ modules }) {
    return (
        <div className="row" id="modules-list-container">
            {modules.map((module, idx) => (
                <ModuleCard key={idx} module={module} />
            ))}
        </div>
    );
}
