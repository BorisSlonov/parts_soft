function updateSubtitlePosition() {
    let subtitleVideoTeleport = document.querySelector('.subtitle_videoTeleport');
    let subtitleTeleportIn = document.querySelector('.subtitleTeleportIn');
    let subtitleTeleportOut = document.querySelector('.subtitleTeleportOut');

    if (window.innerWidth <= 767) {
        subtitleTeleportIn.appendChild(subtitleVideoTeleport);
    } else {
        subtitleTeleportOut.appendChild(subtitleVideoTeleport);
    }
}

if (document.querySelector('.subtitle_videoTeleport')) {
    window.addEventListener('resize', updateSubtitlePosition);
    updateSubtitlePosition();
}

function updatebtnPosition() {
    let btnVideoTeleport = document.querySelector('.btn_videoTeleport');
    let btnTeleportIn = document.querySelector('.btnTeleportIn');
    let btnTeleportOut = document.querySelector('.btnTeleportOut');

    if (window.innerWidth <= 767) {
        btnTeleportIn.appendChild(btnVideoTeleport);
    } else {
        btnTeleportOut.appendChild(btnVideoTeleport);
    }
}

if (document.querySelector('.btn_videoTeleport')) {
    window.addEventListener('resize', updatebtnPosition);
    updatebtnPosition();
}