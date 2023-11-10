document.addEventListener('DOMContentLoaded', function() {
    const audios = document.querySelectorAll('.audios');

    audios.forEach(audio => {
        audio.addEventListener('play', function(){
            audios.forEach(a => {
                if (a !== audio && !a.paused){
                    a.pause();
                }
            });
        });
    });
});