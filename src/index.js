import "./styles.css";

// Selecting all Elements we want to Add functionality
const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const errorMessage = document.querySelector("#Error-Message");
const NoOfNotes = document.querySelectorAll(".no-Of-Notes");
const checkButton = document.querySelector("#checkBtn");
const NextButton = document.querySelector("#NextBtn");
const CashGivenContainer = document.querySelector("#cashGivenCase");

const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", () => {
  hideErrorMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;

      showErrorMessage(
        `Your Balance Amount Is:-
        ${cashGiven.value - billAmount.value}`
      );

      calculateChange(amountToBeReturned);
    } else {
      showErrorMessage(
        "The Cash Provided Should At least be equal to the Bill Amount"
      );
    }
  } else {
    showErrorMessage("Invalid Bill Amount");
  }
});

const calculateChange = (amountToBeReturned) => {
  for (let i = 0; i < arrayOfNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / arrayOfNotes[i]);
    amountToBeReturned %= arrayOfNotes[i];

    NoOfNotes[i].innerHTML = numberOfNotes; // Update note count for each denomination
  }
};

const hideErrorMessage = () => {
  errorMessage.style.display = "hide"; // Use style.display to set the display property
};

const showErrorMessage = (Message) => {
  errorMessage.style.display = "block"; // Use style.display to set the display property
  errorMessage.innerHTML = Message;
};

NextButton.addEventListener("click", () => {
  if (
    (CashGivenContainer.style.display = "none") &&
    (NextButton.style.display = "block")
  ) {
    NextButton.style.display = "none";
    CashGivenContainer.style.display = "block";
  }
});
