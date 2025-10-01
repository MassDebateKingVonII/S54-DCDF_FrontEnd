export default function PapersList({ files }) {
    return (
        <>
            {files.map((file, idx) => (
                <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div className="d-flex align-items-center">
                        <div className="bg-white border rounded p-2 me-3">
                            <i className="bi bi-file-pdf text-danger fs-4"></i>
                        </div>
                        <span>{file.name}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href={file.path} target="_blank" className="btn btn-outline-success me-2" rel="noreferrer">
                            <i className="bi bi-eye"></i>
                        </a>
                        <a href={file.path} download className="btn btn-primary">
                            <i className="bi bi-download"></i>
                        </a>
                    </div>
                </li>
            ))}
        </>
    );
}
