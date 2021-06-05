const input = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const toDo = document.querySelector(".to-do");

function addItem() {
  function stopAdding(e) {
    e.preventDefault();
    // preventDefault() จะยกเลิกเหตการณ์
  }
  //   ถ้าไม่ใส่ข้อความ ให้ alert และ  stopAdding()
  //   ===	equal value and equal type
  if (input.nodeValue.length === 0) {
    alert("Please Enter Something to add ! ");
    btn.addEventListener("click", stopAdding());
  } else if (input.nodeValue.length >= 40) {
    alert("Maximum value of letters is 40 !");
    btn.addEventListener("click", stopAdding());
  }
}
