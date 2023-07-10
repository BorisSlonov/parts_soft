function updateSubtitlePosition() {
    var subtitleVideoTeleport = document.querySelector('.subtitle_videoTeleport');
    var subtitleTeleportIn = document.querySelector('.subtitleTeleportIn');
    var subtitleTeleportOut = document.querySelector('.subtitleTeleportOut');

    if (window.innerWidth <= 767) {
        subtitleTeleportIn.appendChild(subtitleVideoTeleport);
    } else {
        subtitleTeleportOut.appendChild(subtitleVideoTeleport);
    }
}

window.addEventListener('resize', updateSubtitlePosition);
updateSubtitlePosition();
function updatebtnPosition() {
    var btnVideoTeleport = document.querySelector('.btn_videoTeleport');
    var btnTeleportIn = document.querySelector('.btnTeleportIn');
    var btnTeleportOut = document.querySelector('.btnTeleportOut');

    if (window.innerWidth <= 767) {
        btnTeleportIn.appendChild(btnVideoTeleport);
    } else {
        btnTeleportOut.appendChild(btnVideoTeleport);
    }
}

window.addEventListener('resize', updatebtnPosition);
updatebtnPosition(); 