import PDFDocument from "pdfkit";

export function generatePDF(data, res) {
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  doc.text("ALIS DEMO SANCTION LETTER", { align: "center" });
  doc.moveDown();
  doc.text(`Loan Type: ${data.loanType}`);
  doc.text(`Amount: ₹${data.amount}`);
  doc.text("NOT A LEGAL DOCUMENT");
  doc.pipe(res);
  doc.end();
}
