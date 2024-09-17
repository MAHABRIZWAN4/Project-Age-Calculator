// Step 1: Sabse pehle DOM se button, date input aur message div ko select kar lo
const dateInput = document.getElementById("date") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const messageDiv = document.getElementById("message") as HTMLDivElement;

// Step 2: Button click event listener add karo
button.addEventListener("click", () => {
  // Step 3: User ne jo date select ki hai wo get karo
  const birthDate = new Date(dateInput.value);
  
  // Step 4: Agar date valid hai to age calculate karo
  if (!isNaN(birthDate.getTime())) {
    const age = calculateAge(birthDate);
    // Step 5: Message div ko update karo
    messageDiv.textContent = `You are ${age} Years Old.`;
  } else {
    messageDiv.textContent = "Please select a valid date!";
  }
});

// Step 6: Age calculate karne wali function
function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Agar birthday is year ke baad aya hai to ek year minus kar do
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
