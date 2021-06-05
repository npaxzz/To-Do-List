const input = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const toDo = document.querySelector(".to-do");

function addItem() {
  function stopAdding(e) {
    e.preventDefault();
    // preventDefault() จะยกเลิกเหตุการณ์
  }
  //   ถ้าไม่ใส่ข้อความ ให้ alert และ  stopAdding()
  //   ===	equal value and equal type
  if (input.value.length === 0) {
    alert("Please Enter Something to add ! ");
    btn.addEventListener("click", stopAdding());
  } else if (input.value.length >= 40) {
    alert("Maximum value of letters is 40 !");
    btn.addEventListener("click", stopAdding());
  }

  const div = document.createElement("div");
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.innerHTML = input.value;
}
