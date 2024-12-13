document.getElementById("addParticipant").addEventListener("click", () => {
    const participantsDiv = document.getElementById("participants");
    const newParticipant = document.createElement("div");
    newParticipant.className = "participant";
    newParticipant.innerHTML = `
      <label>Name:</label>
      <input type="text" placeholder="Participant's Name" class="participantName" required>
      <label>Email:</label>
      <input type="email" placeholder="Participant's Email" class="participantEmail" required>
    `;
    participantsDiv.appendChild(newParticipant);
     // Scroll to the top of the page when the "Add Participant" button is clicked
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.getElementById("meetingForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Collect meeting details
    const purpose = document.getElementById("purpose").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    // Collect participants
    const participantNames = document.querySelectorAll(".participantName");
    const participantEmails = document.querySelectorAll(".participantEmail");
  
    const participants = [];
    for (let i = 0; i < participantNames.length; i++) {
      participants.push({
        name: participantNames[i].value,
        email: participantEmails[i].value,
      });
    }
  
    // Save data in sessionStorage
    const meetingData = {
      purpose,
      location,
      date,
      time,
      participants,
    };
  
    sessionStorage.setItem("meetingData", JSON.stringify(meetingData));
  
    // Redirect to dueDiligence.html
    window.location.href = "dueDiligence.html";
  });
  