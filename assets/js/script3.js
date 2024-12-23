// Import jsPDF from the UMD namespace
const { jsPDF } = window.jspdf;

function createPdf() {
  console.log("Generating PDF...");

  const doc = new jsPDF();

  // Add content to the PDF
  doc.text("Meeting Details", 15, 15);
  doc.text("Purpose: Team Meeting", 15, 25);
  doc.text("Location: Main Conference Room", 15, 35);
  doc.text("Date: 2024-12-25", 15, 45);
  doc.text("Time: 10:00 AM", 15, 55);

  doc.text("Participants:", 15, 65);
  const participants = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
  ];

  participants.forEach((participant, index) => {
    doc.text(
      `${index + 1}. Name: ${participant.name}, Email: ${participant.email}`,
      15,
      75 + index * 10
    );
  });

  // Save the PDF
  doc.save("Meeting_Details.pdf");
}

const pdfButton = document.querySelector("#createPdfButton");
pdfButton.addEventListener("click", (event) => {
  event.preventDefault();
  createPdf();
});
