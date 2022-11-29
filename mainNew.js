




const els = {
    accueilScreen: null,
    blindTestScreen: null,
    accueilBtn: null,
  }    
  
let liste= [];
let listeRock = [
  {
    jaquette: "sources/images/Jaq/CannedHeat.jpg",
    groupe: "Canned Heat",
    titre: "On the Road Again",
    src: "sources/sons/CannedHeat_OnTheRoadAgain.mp3"
  },
  {
    jaquette: "sources/images/Jaq/DireStraits.jpg",
    groupe: "Dire Straits",
    titre: "Sultans of Swing",
    src: "sources/sons/DireStraits_SultansOfSwing.mp3"
  },
        {
         jaquette: "sources/images/Jaq/IggyPop.jpg",
         groupe: "Iggy Pop",
         titre: "The Passenger",
         src: "sources/sons/IggyPop_ThePassenger.mp3"
        },
        {
          jaquette: "sources/images/Jaq/Eagles.jpg",
         groupe: "Eagles",
         titre: "Hotel California",
         src: "sources/sons/Eagles_HotelCalifornia.mp3"
        },
        {
         jaquette: "sources/images/Jaq/ACDC.png",
         groupe: "ACDC",
         titre: "Highway To Hell",
         src: "sources/sons/ACDC_HighwayToHell.mp3"
         },
         {
         jaquette: "sources/images/Jaq/IanDury.jpg",
         groupe: "Ian Dury",
         titre: "Sex & Drugs & RocknRoll",
         src: "sources/sons/IanDury_Sex&Drugs&RocknRoll.mp3"
        },
        
        {
          jaquette: "sources/images/Jaq/LedZeppelin.jpg",
         groupe: "Led Zeppelin",
         titre: "Kashmir",
         src: "sources/sons/LedZeppelin_Kashmir.mp3"
        },
        {
          jaquette: "sources/images/Jaq/PinkFloyd.png",
          groupe: "Pink Floyd",
          titre: "Another Brick In The Wall",
          src: "sources/sons/PinkFloyd_AnotherBrickInTheWall.mp3"
          },
       {
         jaquette: "sources/images/Jaq/Nirvana.jpg",
         groupe: "Nirvana",
         titre: "Smells Like Teen Spirit",
         src: "sources/sons/Nirvana_SmellsLikeTeenSpirit.mp3"
        },
        {
          jaquette: "sources/images/Jaq/CCR.png",
          groupe: "Creedence Clearwater Revival",
          titre: "Proud Mary",
          src: "sources/sons/CreedenceClearwaterRevival_ProudMary.mp3"
         },
         {
           jaquette: "sources/images/Jaq/Radiohead.jpg",
         groupe: "Radiohead",
         titre: "No Surprises",
         src: "sources/sons/Radiohead_NoSurprises.mp3"
         },
       {
         jaquette: "sources/images/Jaq/Scorpions.jpg",
         groupe: "Scorpions",
         titre: "Wind Of Change",
         src: "sources/sons/Scorpions_WindOfChange.mp3"
        },
        {
        jaquette: "sources/images/Jaq/TheRollingStones.jpg",
        groupe: "The Rolling Stones",
        titre: "Sympathy For The Devil",
        src: "sources/sons/TheRollingStones_SympathyForTheDevil.mp3"
      },
      {
        jaquette: "sources/images/Jaq/U2.jpg",
        groupe: "U2",
        titre: "Sunday Bloody Sunday",
        src: "sources/sons/U2_SundayBloodySunday.mp3"
       },
        {
          jaquette: "sources/images/Jaq/TalkingHeads.jpg",
          groupe: "Talking Heads",
          titre: "Psycho Killer",
          src: "sources/sons/TalkingHeads_PsychoKiller.mp3"
        },
        {
          jaquette: "sources/images/Jaq/Queen.jpg",
          groupe: "Queen",
          titre: "Another One Bites The Dust",
          src: "sources/sons/Queen_AnotherOneBitesTheDust.mp3"
          },
   
       {
         jaquette: "sources/images/Jaq/Telephone2.jpg",
         groupe: "Téléphone",
         titre: "Ça, c'est vraiment toi",
         src: "sources/sons/Telephone_Ca.mp3"
       },
       {
         jaquette: "sources/images/Jaq/TheClash.jpg",
         groupe: "The Clash",
         titre: "Should I Stay Or Should I Go",
         src: "sources/sons/TheClash_Should_I_StayOrShould_I_Go.mp3"
       },
       {
           jaquette: "sources/images/Jaq/ZZTop.jpg",
           groupe: "ZZ Top",
           titre: "La Grange",
           src: "sources/sons/ZZTop_LaGrange.mp3"
        },
       {
         jaquette: "sources/images/Jaq/TheKnack.jpg",
         groupe: "The Knack",
         titre: "My Sharona",
         src: "sources/sons/TheKnack _ MySharona.mp3"
       },
       {
         jaquette: "sources/images/Jaq/ThePolice.jpg",
         groupe: "The Police",
         titre: "Every Breath You Take",
         src: "sources/sons/ThePolice_EveryBreathYouTake.mp3"
        },
        {
          jaquette: "sources/images/Jaq/WhiteSrtipes.jpg",
          groupe: "The White Stripes",
          titre: "Seven Nation Army",
          src: "sources/sons/TheWhiteStripes_SevenNationArmy.mp3"
        },
        {
          jaquette: "sources/images/Jaq/VelvetUnderground.jpg",
         groupe: "The Velvet Underground",
         titre: "Sunday Morning",
         src: "sources/sons/TheVelvetUnderground_SundayMorning.mp3"
        },
        {
          jaquette: "sources/images/Jaq/TheVerve.jpg",
          groupe: "The Verve",
          titre: "Bitter Sweet Symphony",
          src: "sources/sons/TheVerve_BitterSweetSymphony.mp3"
        }
      ];
      
      let listeDisco = [
        {
          jaquette: "sources/images/Jaq/VillagePeople.jpg",
          groupe: "Village People",
          titre: "YMCA",
          src: "sources/sons/VillagePeople_YMCA.mp3"
        },
        {
          jaquette: "sources/images/Jaq/ABBA.jpg",
          groupe: "ABBA",
          titre: "Gimme ! Gimme ! Gimme !",
          src: "sources/sons/ABBA_Gimme.mp3"
      },
      {
        jaquette: "sources/images/Jaq/GeorgeBenson.jpg",
        groupe: "George Benson",
        titre: "Give Me The Night",
        src: "sources/sons/GeorgeBenson_GiveMeTheNight.mp3"
      },
      {
        jaquette: "sources/images/Jaq/AnitaWard.jpg",
        groupe: "Anita Ward",
        titre: "Ring My Bell",
        src: "sources/sons/AnitaWard_RingMyBell.mp3"
      },
      {
        jaquette: "sources/images/Jaq/BoysTownGang.jpg",
        groupe: "Boys Town Gang",
        titre: "Cant Take My Eyes Off You",
        src: "sources/sons/BoysTownGang_CantTakeMyEyesOffYou.mp3"
      },
      {
        jaquette: "sources/images/Jaq/Chic.jpg",
        groupe: "Chic",
        titre: "Good Times",
        src: "sources/sons/Chic_GoodTimes.mp3"
      },
      {
        jaquette: "sources/images/Jaq/CurtisMayfield.jpg",
        groupe: "Curtis Mayfield",
        titre: "Move On Up",
        src: "sources/sons/CurtisMayfield_MoveOnUp.mp3"
      },
      {
       jaquette: "sources/images/Jaq/DianaRoss.jpg",
       groupe: "Diana Ross",
       titre: "Upside Down",
       src: "sources/sons/DianaRoss_UpsideDown.mp3"
      },
      {
        jaquette: "sources/images/Jaq/EarthWindAndFire.jpg",
        groupe: "Earth Wind & Fire",
        titre: "Let's Groove",
        src: "sources/sons/EarthWindAndFire_LetsGroove.mp3"
      },
      {
        jaquette: "sources/images/Jaq/CarlDouglas.jpg",
        groupe: "Carl Douglas",
        titre: "Kung Fu Fighting",
        src: "sources/sons/CarlDouglas_KungFuFighting.mp3"
      },
      {
       jaquette: "sources/images/Jaq/GibsonBrothers.jpg",
       groupe: "Gibson Brothers",
       titre: "Cuba",
       src: "sources/sons/GibsonBrothers_Cuba.mp3"
      },
      {
        jaquette: "sources/images/Jaq/DonnaSummer.jpg",
        groupe: "Donna Summer",
        titre: "Hot Stuff",
        src: "sources/sons/DonnaSummer_HotStuff.mp3"
      },
      {
        jaquette: "sources/images/Jaq/GloriaGaynor.jpg",
        groupe: "Gloria Gaynor",
        titre: "I Will Survive",
        src: "sources/sons/GloriaGaynor_IWillSurvive.mp3"
      },
      {
        jaquette: "sources/images/Jaq/AmiiStewart.jpg",
        groupe: "Amii Stewart",
        titre: "Knock On Wood",
        src: "sources/sons/AmiiStewart_KnockOnWood.mp3"
      },
      {
        jaquette: "sources/images/Jaq/HuesCorporation.jpg",
        groupe: "Hues Corporation",
        titre: "Rock The Boat",
        src: "sources/sons/HuesCorporation_RockTheBoat.mp3"
      },
      {
        jaquette: "sources/images/Jaq/Imagination.jpg",
        groupe: "Imagination",
        titre: "Music And Lights",
        src: "sources/sons/Imagination_MusicAndLights.mp3"
      },
      {
        jaquette: "sources/images/Jaq/SisterSledge.jpg",
        groupe: "Sister Sledge",
        titre: "We Are Family",
        src: "sources/sons/SisterSledge_WeAreFamily.mp3"
      },
      {
        jaquette: "sources/images/Jaq/Indeep.jpg",
        groupe: "Indeep",
        titre: "Last Night A DJ Saved My Life",
        src: "sources/sons/Indeep_LastNightADJSavedMyLife.mp3"
      },
      {
       jaquette: "sources/images/Jaq/KarenYoung.jpg",
       groupe: "Karen Young",
       titre: "Hot Shot",
       src: "sources/sons/KarenYoung_HotShot.mp3"
      },
      {
       jaquette: "sources/images/Jaq/PattyLabelle.jpg",
       groupe: "Patty Labelle",
       titre: "Lady Marmalade",
       src: "sources/sons/PattyLabelle_LadyMarmalade.mp3"
     },
     {
       jaquette: "sources/images/Jaq/KoolAndTheGang.jpg",
       groupe: "Kool And The Gang",
       titre: "Celebration",
       src: "sources/sons/KoolAndTheGang_Celebration.mp3"
      },
      {
        jaquette: "sources/images/Jaq/Sheila.jpg",
        groupe: "Sheila B Devotion",
        titre: "Spacer",
        src: "sources/sons/Sheila_Spacer.mp3"
      },
      {
        jaquette: "sources/images/Jaq/TearsForFears.jpg",
        groupe: "Tears For Fears",
        titre: "Everybody Wants To Rule The World",
        src: "sources/sons/TearsForFears_EverybodyWantsToRuleTheWorld.mp3"
      }
    ];
    console.log("LDL = " + listeDisco.length);
    console.log("LRL = " + listeRock.length);
const home = document.querySelector('.home');
const pochette = document.querySelector('.pochette');
const groupe = document.querySelector('.groupe');
const titre = document.querySelector('.titre');
const suivant = document.querySelector('.suivant');
const retour = document.querySelector('.retour');
const play = document.querySelector('.play-pause');
const audio = document.querySelector('audio');
const rock= document.getElementById('blindRock');
const disco= document.getElementById('blindDisco');

const init= () => {
    console.log("Page loaded");
    els.accueilScreen = document.querySelector('.accueil-screen');
    els.blindTestScreen = document.querySelector('.blindTest-screen');
}
let displayScreen = (screenName) => {
    els.accueilScreen.style.display = 'none';
    els.blindTestScreen.style.display = 'none';
    
    const screen = els[screenName + 'Screen'];
    screen.style.display = 'flex';
  } 
  home.addEventListener('click', () => {
    displayScreen('accueil');
  });
  


  disco.addEventListener('click', ()=> {
    let getImgDisco = document.getElementById('myImg');
    getImgDisco.setAttribute("src", "sources/images/LogoBlindDisco.png");
    displayScreen('blindTest');
    liste = listeDisco;
    function loadMusique(liste){
      groupe.textContent = liste.groupe;
      titre.textContent = liste.titre;
      pochette.src = liste.jaquette;
      audio.src = liste.src;
    }
    let i = 0;
    loadMusique(liste[i]);

      function retourMusique(){
        i--;
        if (i< 0){
          i = liste.length -1;
        }
        loadMusique(liste[i]);
        playMusique();
      }
      retour.addEventListener('click', retourMusique);
    
      function suivantMusique(){
        i++;
        if (i> liste.length - 1){
          i= 0;
        }
        loadMusique(liste[i]);
        playMusique();
      }
      suivant.addEventListener('click', suivantMusique);
      

});
  rock.addEventListener('click', ()=> {
    let getImgRock = document.getElementById('myImg');
    getImgRock.setAttribute("src", "sources/images/LogoBlindRock.png");
    displayScreen('blindTest');
    liste = listeRock;
    function loadMusique(liste){
      groupe.textContent = liste.groupe;
      titre.textContent = liste.titre;
      pochette.src = liste.jaquette;
        audio.src = liste.src;
    }
    let i = 0;
    loadMusique(liste[i]);

    function retourMusique(){
      i--;
      if (i< 0){
        i = liste.length -1;
      }
      loadMusique(liste[i]);
      playMusique();
    }
    retour.addEventListener('click', retourMusique);
  
    function suivantMusique(){
      i++;
      if (i> liste.length - 1){
        i= 0;
      }
      loadMusique(liste[i]);
      playMusique();
    }
    suivant.addEventListener('click', suivantMusique);
    
  });
  
  let musiquePlay = false;
  function playMusique(){
    musiquePlay = true;
    audio.play();
    play.classList.add('active')
  }
  function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.classList.remove('active');
  }
  play.addEventListener('click', ()=>(musiquePlay ? pauseMusique() : playMusique()));
  
  window.addEventListener('load', init);
