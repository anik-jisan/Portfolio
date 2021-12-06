/* ----------About Tabs------------*/

const tabsContainter = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainter.addEventListener("click", (e) => {
    //console.log(e.target);

    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainter.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        /*jetay click hobe oita active onnogula inactive*/

        const target = e.target.getAttribute("data-target");

        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }


});

