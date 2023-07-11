function updateImgPosition() {
    let subtitleVideoTeleport = document.querySelector('.lastFormSection__img');
    let subtitleTeleportIn = document.querySelector('.lastFormSection__imgTeleport');
    let subtitleTeleportOut = document.querySelector('.lastFormSection__item_imgWrapper');

    if (window.innerWidth <= 999) {
        subtitleTeleportIn.appendChild(subtitleVideoTeleport);
    } else {
        subtitleTeleportOut.appendChild(subtitleVideoTeleport);
    }
}

if (document.querySelector('.lastFormSection__img')) {
    window.addEventListener('resize', updateImgPosition);
    updateImgPosition();
}
