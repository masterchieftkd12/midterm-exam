
$(function() {
 
    //Write your code below
    function planets(){
    }
    
    

   (async () => {
 fetch("planets.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch failed:", error);
  });

})();

function Planets() {
  
}

(async () => {

})();

const checkStatus = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data loaded");
  } else {
    reject(new Error("Failed to load"));
  }
});

checkStatus
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




el.addEventListener("click", () => {
  console.log("Clicked!");
});

<div class ="card" id="0">
    <div class="Card-body">
        <img src="./images/Sun.png" alt "Sun">
        <p class="card-title">Sun</p>
    </div>
</div>

<div class ="card" id="0">
    <div class="Card-body">
        <img src="./images/Sun.png" alt "Sun">
        <p class="card-title">Sun</p>
    </div>
</div>
<div class ="card" id="0">
    <div class="Card-body">
        <img src="./images/Sun.png" alt "Sun">
        <p class="card-title">Sun</p>
    </div>
</div>
<div class ="card" id="0">
    <div class="Card-body">
        <img src="./images/Sun.png" alt "Sun">
        <p class="card-title">Sun</p>
    </div>
</div>
<div class ="card" id="0">
    <div class="Card-body">
        <img src="./images/Sun.png" alt "Sun">
        <p class="card-title">Sun</p>
    </div>
</div>


