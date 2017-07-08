var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

//genre check
var pop = 0;
var alternative = 0;
var rock = 0;
var chill = 0;
var metal = 0;


    function toggleSong() {
                var song = document.querySelector('audio');
                if(song.paused == true) {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                song.play();
                }
                else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
                }
        }

    function fancyTimeFormat(time)
              {   
                // Hours, minutes and seconds
                var hrs = ~~(time / 3600);
                var mins = ~~((time % 3600) / 60);
                var secs = time % 60;

                // Output like "1:01" or "4:03:59" or "123:03:59"
                var ret = "";

                if (hrs > 0) {
                    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                }

                ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                ret += "" + secs;
                return ret;
            }    

    function updateCurrentTime() {
                var song = document.querySelector('audio');
                //console.log(song.currentTime);
                //console.log(song.duration);
                var currentTime = Math.floor(song.currentTime);
                currentTime=fancyTimeFormat(currentTime);
                var duration = Math.floor(song.duration);
                duration = fancyTimeFormat(duration)
                $('.time-elapsed').text(currentTime);
                $('.song-duration').text(duration);
                }
   
   var songs_pop = [{
           'name': 'Toxic',
           'artist': 'Britney Spears',
           'album': 'In the Zone',
           'duration': '3:31',
          'fileName': 'song1.mp3',
          'image'   : 'song1.jpg'
       },
       {
           'name': 'Tik-Tok',
           'artist': 'Ke$ha',
           'album': 'Animal',
           'duration': '3:25',
           'fileName': 'song2.mp3',
           'image'   : 'song2.jpg'
       },
       {
           'name': 'We Dont Talk Anymore',
           'artist': 'Charlie Puth',
           'album': 'Nine Track Mind',
           'duration': '3:34',
           'fileName': 'song3.mp3',
           'image'   : 'song3.jpg'
       }]

var songs_rock = [{
           'name': 'Smells Like Teen Spirit',
           'artist': 'Nirvana',
           'album': 'Nevermind',
           'duration': '2:56',
          'fileName': 'song1.mp3',
          'image'   : 'song1.jpg'
       },
       {
           'name': 'I Dont Wanna miss a thing',
           'artist': 'Aerosmith',
           'album': 'Best of Aerosmith',
           'duration': '3:15',
           'fileName': 'song2.mp3',
           'image'   : 'song2.jpg'
       },

       {
           'name': 'Bohemian Raphsody',
           'artist': 'Queen',
           'album': 'Hits of Queen',
           'duration': '5:05',
           'fileName': 'song3.mp3',
           'image'   : 'song3.jpg'
       }]

var songs_alternative = [{
           'name': 'Passenger',
           'artist': 'Iggy Pop',
           'album': 'Lust for Life',
           'duration': '2:56',
          'fileName': 'song1.mp3',
          'image'   : 'song1.jpg'
       },
       {
           'name': 'I got a name',
           'artist': 'Jim Croce',
           'album': 'You Dont Mess Around with Jim',
           'duration': '3:15',
           'fileName': 'song2.mp3',
           'image'   : 'song2.jpg'
       },
       {
           'name': 'Time in a Bottle',
           'artist': 'Jim Croce',
           'album': 'You Dont Mess Around with Jim',
           'duration': '2:34',
           'fileName': 'song3.mp3',
           'image'   : 'song3.jpg'
       }]

var songs_metal = [{
           'name': 'A little piece of heaven',
           'artist': 'A7X',
           'album': 'A little piece of heaven',
           'duration': '4:56',
          'fileName': 'song1.mp3',
          'image'   : 'song1.jpg'
       },
       {
           'name': 'Nothing Else Matters',
           'artist': 'Metallica',
           'album': 'Master of Puppets',
           'duration': '6:15',
           'fileName': 'song2.mp3',
           'image'   : 'song2.jpg'
       },

       {
           'name': 'Master of Puppets',
           'artist': 'Metallica',
           'album': 'Master of Puppets',
           'duration': '5:35',
           'fileName': 'song3.mp3',
           'image'   : 'song3.jpg'
       }]

var songs_chill = [{
           'name': 'In the name of love',
           'artist': 'Martin Garrix',
           'album': 'Raptor',
           'duration': '5:56',
          'fileName': 'song1.mp3',
          'image'   : 'song1.jpg'
       },
       {
           'name': 'Catch & Release',
           'artist': 'Deepnd',
           'album': 'Best Acoustic Mixes',
           'duration': '4:15',
           'fileName': 'song2.mp3',
           'image'   : 'song2.jpg'
       },

       {
           'name': 'I forget where we are',
           'artist': 'Boehm',
           'album': 'Best Acoustic Mixes',
           'duration': '3:45',
           'fileName': 'song3.mp3',
           'image'   : 'song3.jpg'
       }]

   //var songList = ['Badri Ki Dulhania (Title Track)', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
  // var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    
    function addSongNameClickEvent(songObj,position) {
         var id = '#song' + position;
         var songName = songObj.fileName;   
         $(id).click(function() {
           // console.log("i'm running");
            
            var audio = document.querySelector('audio');
            var currentSong = audio.src;
            
                if(currentSong.search(songName) != -1)
                   {
                     //   console.log("i'm running nes");
                       
                       toggleSong();
                    }
                else {
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                        $('#now-playing').removeClass('run-animation');
                        setTimeout(function(){
                          $('#now-playing').addClass('run-animation');
                        },10);
                        console.log("i'm runn");
                        
                    }
            });
    }    
    

    function changeCurrentSongDetails(songObj) {
        $('.current-song-image').attr('src','img/' + songObj.image)
        $('.current-song-name').text(songObj.name)
        $('.current-song-album').text(songObj.album)
        console.log("Changed");
    }

    function whichPlaylist(){

        if(pop == 1){

            songs = songs_pop;
        }
        else if(chill == 1){
            console.log("chill run");
            songs = songs_chill;
        }

        else if(rock == 1){
            console.log("rock run");
            songs = songs_rock;
        }
        
        else if(alternative == 1){

            songs = songs_alternative;
        }
        
        else if(metal == 1){

            songs = songs_metal;
        }

        return songs;
    }

    function updateSongList(){
        songs=whichPlaylist();
        console.log(songs[1]);
        for(var i =0; i < songs.length;i++) {
                var songObj = songs[i];
                var name = '#song' + (i+1);
                var song = $(name);
                updateCurrentTime(); 
                setInterval(function() {
                updateCurrentTime();
                },1000);
                song.find('.song-name').text(songObj.name);
                song.find('.song-artist').text(songObj.artist);
                song.find('.song-album').text(songObj.album); // Added
                song.find('.song-length').text(songObj.duration); // Added
                addSongNameClickEvent(songObj,i+1);
       
            }
        songs_table=$('#songs').DataTable({
                    paging:false
                });
                      

    }
/*    Useless code for now -> 
$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.msongs.destroy();ain .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
  */

    //Trigger Song on click play icon
    $('.play-icon').on('click', function() {
         toggleSong();
    });

    //Trigger spacebar controls
    $('body').on('keypress', function(event) {
                var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') {
                    toggleSong();
                }
            }); 

    //Trigger Looping   
    $('.fa-repeat').on('click', function(){
        console.log("checked looping");
        willLoop =1-willLoop;
        $('.fa-repeat').toggleClass('disabled');
    });


    $('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        // Play the next song
        var nextSong = songs[currentSongNumber];
        //console.log(nextSong.filename);
        audio.src = nextSong.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSong);
        currentSongNumber = currentSongNumber+1;
    }
    else {
        // Stop Playing
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
});



//Code for genre based categorisation begins!! Using global variables and setting them here!

    $('#mood-chill').on('click',function(){
       if(typeof songs_table != 'undefined' ){
          songs_table.destroy();
       }
        chill=1;
        pop=rock=alternative=metal=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-rock').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        } 
        rock=1;
        pop=chill=alternative=metal=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });

    $('#mood-pop').on('click',function(){
         if(typeof songs_table != 'undefined'){
           songs_table.destroy();
        }
        pop=1;
        chill=rock=alternative=metal=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-alternative').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        }
        alternative=1;
        pop=rock=chill=metal=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn');
    });




    $('#mood-metal').on('click',function(){
           //if(typeof songs_table != 'undefined'){
           // songs_table.destroy();
       // }
        metal=1;
        pop=rock=alternative=chill=0;
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn');
    });


    $('#back').on('click',function(){

        $('.content').addClass('hidden');
        $('.mood-sorting').removeClass('hidden');
        $('.mood-sorting').addClass('animated zoomIn');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          song = document.querySelector('audio');
                song.pause();
        
    })

    window.onload = function() {
           // $('#now-playing').addClass('run-animation');
           
           

           setTimeout(function(){
                       $('#welcome-page').addClass('animated bounceOutDown');
                        },2000);

           setTimeout(function(){
                     $('#welcome-page').addClass('hidden');
                   },2500);
             
             
           setTimeout(function(){
                       $('#main-app').removeClass('hidden');
                   $('#main-app').addClass('animated bounceInDown');

            },2500);
             





             }   