document.addEventListener("DOMContentLoaded", function () {
    const phLink = document.getElementById("ph");
    const jurnalLink = document.getElementById("jurnal");
    const sinemaLink = document.getElementById("sinema");
    const fotoLink = document.getElementById("foto");
    const dnaLink = document.getElementById("dna");

    const phCard = document.getElementById("ph-card");
    const jurnalCard = document.getElementById("jurnal-card");
    const sinemaCard = document.getElementById("sinema-card");
    const fotoCard = document.getElementById("foto-card");
    const dnaCard = document.getElementById("dna-card");

    function showCard(card) {
        if (card.style.display === "block") {
            card.style.display = "none"; // Jika card sedang ditampilkan, maka ubah menjadi none
        } else {
            phCard.style.display = "none";
            jurnalCard.style.display = "none";
            sinemaCard.style.display = "none";
            fotoCard.style.display = "none";
            dnaCard.style.display = "none";

            card.style.display = "block";
        }
    }

    function saveVisibilityStatus(link, card) {
        localStorage.setItem(link.id, card.style.display);
    }

    function loadVisibilityStatus(link, card) {
        const displayValue = localStorage.getItem(link.id);
        if (displayValue === "click") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }

    phLink.addEventListener("click", function (event) {
        event.preventDefault();
        showCard(phCard);
        saveVisibilityStatus(phLink, phCard);
    });

    jurnalLink.addEventListener("click", function (event) {
        event.preventDefault();
        showCard(jurnalCard);
        saveVisibilityStatus(jurnalLink, jurnalCard);
    });

    sinemaLink.addEventListener("click", function (event) {
        event.preventDefault();
        showCard(sinemaCard);
        saveVisibilityStatus(sinemaLink, sinemaCard);
    });

    fotoLink.addEventListener("click", function (event) {
        event.preventDefault();
        showCard(fotoCard);
        saveVisibilityStatus(fotoLink, fotoCard);
    });

    dnaLink.addEventListener("click", function (event) {
        event.preventDefault();
        showCard(dnaCard);
        saveVisibilityStatus(dnaLink, dnaCard);
    });

    // Load the visibility status of each card on page load
    loadVisibilityStatus(phLink, phCard);
    loadVisibilityStatus(jurnalLink, jurnalCard);
    loadVisibilityStatus(sinemaLink, sinemaCard);
    loadVisibilityStatus(fotoLink, fotoCard);
    loadVisibilityStatus(dnaLink, dnaCard);
});
