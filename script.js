document.getElementById('play').addEventListener("click", playVideo); 
function playVideo() {
    const video = document.getElementById('video');
    let videoSource = document.getElementById('link').value
    if(Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSource);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            video.play();
        });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSource;
        video.addEventListener('loadedmetadata',function() {
            video.play();
        });
    }
}