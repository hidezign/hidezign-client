// utils/openPdfForce.js
export async function openPdfForce(url) {
    try {
        // fetch as arrayBuffer to avoid depending on response MIME
        const res = await fetch(url, { mode: "cors" });
        if (!res.ok) throw new Error("Failed to fetch file");

        const arrayBuffer = await res.arrayBuffer();

        // Create a Blob and force the PDF mime type
        const pdfBlob = new Blob([arrayBuffer], { type: "application/pdf" });

        const blobUrl = URL.createObjectURL(pdfBlob);
        window.open(blobUrl, "_blank", "noopener,noreferrer");

        // revoke after some time
        setTimeout(() => URL.revokeObjectURL(blobUrl), 60 * 1000);
    } catch (err) {
        console.error("openPdfForce error:", err);
        // fallback: open original URL
        window.open(url, "_blank", "noopener,noreferrer");
    }
}