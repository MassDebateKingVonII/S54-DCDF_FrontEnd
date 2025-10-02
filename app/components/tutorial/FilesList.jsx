export default function PapersList({ files }) {
    // Helper to get icon based on file extension
    const getFileIcon = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();

        switch (ext) {
            case "pdf":
                return <i className="bi bi-file-pdf text-danger fs-4"></i>;
            case "doc":
            case "docx":
                return <i className="bi bi-file-word text-primary fs-4"></i>;
            case "xls":
            case "xlsx":
                return <i className="bi bi-file-excel text-success fs-4"></i>;
            case "ppt":
            case "pptx":
                return <i className="bi bi-file-ppt text-warning fs-4"></i>;
            case "jpg":
            case "jpeg":
                return <i class="bi bi-filetype-jpg text-info"></i>;
            case "png":
                return <i class="bi bi-filetype-png text-info"></i>;
            case "gif":
                return <i class="bi bi-filetype-gif text-info"></i>
            case "txt":
                return <i className="bi bi-filetype-txt text-secondary fs-4"></i>;
            case "zip":
            case "rar":
                return <i className="bi bi-file-zip text-dark fs-4"></i>;
            default:
                return <i className="bi bi-file-earmark fs-4"></i>; // fallback icon
        }
    };

    return (
        <>
            {files.map((file, idx) => (
                <li
                    key={idx}
                    className="list-group-item d-flex border rounded border-secondary p-3 my-2
                    justify-content-between align-items-center"
                >
                    <div className="d-flex align-items-center">
                        <div className="bg-white border rounded p-2 me-3">
                            {getFileIcon(file.name)}
                        </div>
                        <span>{file.name}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <a
                            href={file.path}
                            target="_blank"
                            className="btn btn-outline-success me-2"
                            rel="noreferrer"
                        >
                            <i className="bi bi-eye"></i>
                        </a>
                        <a
                            href={file.path}
                            download
                            className="btn btn-primary"
                        >
                            <i className="bi bi-download"></i>
                        </a>
                    </div>
                </li>
            ))}
        </>
    );
}
