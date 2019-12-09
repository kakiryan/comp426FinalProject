/*#
//export default class stream_player {
    //constructor(audioPlayer) {
    export default const largeFunct = function(audioPlayer) {
        this.audioPlayer = audioPlayer;
        this.playPause = audioPlayer.querySelector('#playPause');
        this.playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
        this.loading = audioPlayer.querySelector('.loading');
        this.progress = audioPlayer.querySelector('.progress');
        this.sliders = audioPlayer.querySelectorAll('.slider');
        this.volumeBtn = audioPlayer.querySelector('.volume-btn');
        this.volumeControls = audioPlayer.querySelector('.volume-controls');
        this.volumeProgress = this.volumeControls.querySelector('.slider .progress');
        this.player = audioPlayer.querySelector('audio');
        this.currentTime = audioPlayer.querySelector('.current-time');
        this.totalTime = audioPlayer.querySelector('.total-time');
        this.speaker = audioPlayer.querySelector('#speaker');
        this.draggableClasses = ['pin'];
        this.currentlyDragged = null;
        console.log(this.isDraggable);
        window.addEventListener('mousedown', function(event) {
  
        if(!(this.isDraggable(event.target))) 
            return false;
            
        this.currentlyDragged = event.target;
        let handleMethod = currentlyDragged.dataset.method;
            
        this.addEventListener('mousemove', window[handleMethod], false);
          
        window.addEventListener('mouseup', () => {
            this.currentlyDragged = false;
            window.removeEventListener('mousemove', window[handleMethod], false);
        }, false);  
        });

        this.playpauseBtn.addEventListener('click', this.togglePlay());
        this.player.addEventListener('timeupdate', this.updateProgress());
        this.player.addEventListener('volumechange', this.updateVolume());
        this.player.addEventListener('loadedmetadata', () => {
            this.totalTime.textContent = this.formatTime(this.player.duration);
        });

        this.player.addEventListener('canplay', this.makePlay());
        this.player.addEventListener('ended', function(){
        this.playPause.attributes.d.value = "M18 12L0 24V0";
        this.player.currentTime = 0;

        this.volumeBtn.addEventListener('click', () => {
            this.volumeBtn.classList.toggle('open');
            this.volumeControls.classList.toggle('hidden');
        })
        });
        window.addEventListener('resize', this.directionAware());

        this.sliders.forEach(slider => {
        let pin = slider.querySelector('.pin');
        slider.addEventListener('click', window[pin.dataset.method]);
        });
        this.directionAware(); //
    }


    const isDraggable = function(el) {
        let canDrag = false;
        let classes = Array.from(el.classList);
        draggableClasses.forEach(draggable => {
            if(classes.indexOf(draggable) !== -1)
                canDrag = true;
            })
        return canDrag;
    }

    const inRange = function(event) {
        let rangeBox = getRangeBox(event);
        let rect = rangeBox.getBoundingClientRect();
        let direction = rangeBox.dataset.direction;
        if(direction == 'horizontal') {
            var min = rangeBox.offsetLeft;
            var max = min + rangeBox.offsetWidth;   
            if(event.clientX < min || event.clientX > max) return false;
        } else {
            var min = rect.top;
            var max = min + rangeBox.offsetHeight; 
            if(event.clientY < min || event.clientY > max) return false;  
        }
        return true; 
    }

    const updateProgress = function() {
        var current = this.player.currentTime;
        var percent = (current / this.player.duration) * 100;
        this.progress.style.width = percent + '%';
  
        this.currentTime.textContent = this.formatTime(current);
    }

    const updateVolume = function() {
        this.volumeProgress.style.height = this.player.volume * 100 + '%';
        if(this.player.volume >= 0.5) {
            this.speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';  
        } else if(this.player.volume < 0.5 && this.player.volume > 0.05) {
            this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
        } else if(this.player.volume <= 0.05) {
            this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
        }
    }

    const getRangeBox = function(event) {
        let rangeBox = event.target;
        let el = currentlyDragged;
        if(event.type == 'click' && this.isDraggable(event.target)) {
            rangeBox = event.target.parentElement.parentElement;
        }
        if(event.type == 'mousemove') {
            rangeBox = el.parentElement.parentElement;
        }
        return rangeBox;
    }

    const getCoefficient = function(event) {
        let slider = getRangeBox(event);
        let rect = slider.getBoundingClientRect();
        let K = 0;
        if(slider.dataset.direction == 'horizontal') {
    
            let offsetX = event.clientX - slider.offsetLeft;
            let width = slider.clientWidth;
            K = offsetX / width;    
    
        } else if(slider.dataset.direction == 'vertical') {
    
        let height = slider.clientHeight;
        var offsetY = event.clientY - rect.top;
        K = 1 - offsetY / height;
    
        }
        return K;
    }

    const rewind = function(event) {
        if(this.inRange(event)) {
            this.player.currentTime = this.player.duration * this.getCoefficient(event);
        }
    }

    const changeVolume = function(event) {
        if(this.inRange(event)) {
            this.player.volume = this.getCoefficient(event);
        }
    }

    const formatTime = function(time) {
        var min = Math.floor(time / 60);
        var sec = Math.floor(time % 60);
        return min + ':' + ((sec<10) ? ('0' + sec) : sec);
    }

    const togglePlay = function() {
        if(this.player.paused) {
            this.playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
            this.player.play();
        } else {
            this.playPause.attributes.d.value = "M18 12L0 24V0";
            this.player.pause();
    }  
    }

    const makePlay = function() {
        this.playpauseBtn.style.display = 'block';
        this.loading.style.display = 'none';
    }

    const directionAware = function() {
        if(window.innerHeight < 250) {
            this.volumeControls.style.bottom = '-54px';
            this.volumeControls.style.left = '54px';
        } else if(this.audioPlayer.offsetTop < 154) {
            this.volumeControls.style.bottom = '-164px';
            this.volumeControls.style.left = '-3px';
        } else {
            this.volumeControls.style.bottom = '52px';
            this.volumeControls.style.left = '-3px';
        }
    }
*/
