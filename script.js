var video = document.getElementById('background-video');

        // Pause the video after it has played once
        video.addEventListener('ended', function () {
            this.pause();
            document.getElementById('video-container').style.display = 'none';
            document.querySelector('.pics').classList.add('bod')
        });

        // Play the video
        video.play();