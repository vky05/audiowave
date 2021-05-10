  console.log("hello");
            var buttons = {
                play: document.getElementById("btn-play"),
                pause: document.getElementById("btn-pause"),
                stop: document.getElementById("btn-stop")
            };

            
            var Spectrum = WaveSurfer.create({
                container: '#audio-spectrum',
                progressColor: "#03a9f4"
            });

            
            buttons.play.addEventListener("click", function(){
                Spectrum.play();

                buttons.stop.disabled = false;
                buttons.pause.disabled = false;
                buttons.play.disabled = true;
            }, false);

            
            buttons.pause.addEventListener("click", function(){
                Spectrum.pause();

             
                buttons.pause.disabled = true;
                buttons.play.disabled = false;
            }, false);


            
            buttons.stop.addEventListener("click", function(){
                Spectrum.stop();

                buttons.pause.disabled = true;
                buttons.play.disabled = false;
                buttons.stop.disabled = true;
            }, false);


            Spectrum.on('ready', function () {
                buttons.play.disabled = false;
            });
            
            
            window.addEventListener("resize", function(){
                var currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();

                
                Spectrum.empty();
                Spectrum.drawBuffer();
                Spectrum.seekTo(currentProgress);

                buttons.pause.disabled = true;
                buttons.play.disabled = false;
                buttons.stop.disabled = false;
            }, false);

            Spectrum.load('song.mp3');
