
    let btn = document.querySelector(".btn");
    let btnClose = document.querySelector(".close");
    let modal = document.querySelector(".modal");

    btn.addEventListener("click", () => {
      modal.classList.add("show");
    });
    btnClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });


    


