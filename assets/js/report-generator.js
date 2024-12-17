document.addEventListener('DOMContentLoaded', function() {
    const downloadPdfButton = document.getElementById('download-pdf');

    downloadPdfButton.addEventListener('click', function() {
        generatePDF();
    });

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text('SEO Audit Report', 20, 20);

        doc.setFontSize(16);
        doc.text('Website: ' + document.getElementById('website-url').value, 20, 40);

        doc.setFontSize(14);
        const resultsContent = document.getElementById('results-content');
        const splitText = doc.splitTextToSize(resultsContent.innerText, 180);
        doc.text(splitText, 20, 60);

        doc.save('seo-audit-report.pdf');
    }
});

