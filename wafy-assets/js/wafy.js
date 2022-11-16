// loading CSS files in HEAD
var head = document.getElementsByTagName('HEAD')[0];
// Create new link Element
var wafy_styles = document.createElement('link');
var wafy_fontawesome = document.createElement('link');

// set the attributes for link element
wafy_styles.rel = 'stylesheet';
wafy_styles.href = 'https://nadeemdev.com/wafy-assets/css/wafy.css';

wafy_fontawesome.rel = 'stylesheet';
wafy_fontawesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';

// Append link element to HTML head
head.appendChild(wafy_styles);
head.appendChild(wafy_fontawesome);
////////////////////////////



// Inserting HTML Dynamically 

document.body.insertAdjacentHTML('beforeend',
    `
  <div class="accessibility-widget-btn" id="accessibility-widget-btn">
    <img src="https://nadeemdev.com/wafy-assets/images/wafy-logo.png" width="75px">
  </div>

  <span id="interim" aria-hidden="true"></span>

  <div id="readingMaskLine" hidden></div>

  <div id="major-links-wrapper" class="major-links-wrapper">
    <div class="major-links-content" id="major-links-content">
      <div class="major-links-header">
        <span>Major Links</span>
        <i class="fa-solid fa-xmark" id="major-links-close-icon"></i>
      </div>
      <div id="links-display-container"></div>
    </div>
  </div>

  <div id="dictionary-meaning" class="dictionary-meaning-popup">
    <div class="dictionary-meaning-topbar">
      <div id="dict-word">Word: <span id="dictionaryWord">&nbsp;&nbsp;</span> [ <span id="wordPhonetic"></span> ] <i
          class="fa-solid fa-volume-high" id="dictWordSpeak"></i> </div>
      <i class="fa-solid fa-circle-xmark" id="dictionary-meaning-close"></i>
    </div>
    <audio hidden src="" id="wordAudio"></audio>
    <div id="dict-definition">Definition: <span id="wordDefinition"></span></div>
    <div id="dict-pos">Part of Speech: <span id="wordPOS"></span></div>
    <div id="dict-synonyms">Synonyms: <span id="wordSynonyms"></span></div>
  </div>



  <div id="container-accessibility-widget" aria-hidden="true">
    <div id="container-accessibility-heading">
      <h5 id="heading-accessibility-widget">Accessibility Menu</h5>
      <i class="fa-solid fa-circle-xmark" id="accessibility-widget-close"></i>
    </div>
    <div id="container-accessibility-widget-menu">

      <div class="accessibility-card" id="accessibility_card-screenReader">
        <i class="fa-solid fa-volume-high"></i>
        <p>Screan Reader</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-voiceNav">
        <i class="fa-solid fa-microphone"></i>
        <p>Voice Navigation</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-size">
        <i class="fa-solid fa-magnifying-glass-plus" id="accessibility-size-icon"></i>
        <div hidden class="accessibility-bigger-text" id="accessibility-bigger-text">
          <span id="accessibility-textSizeBig">1.2x</span>
          <span id="accessibility-textSizeBigger">1.3x</span>
          <span id="accessibility-textSizeBiggest">1.5x</span>
        </div>
        <p>Bigger Size</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-animations">
        <i class="fa-solid fa-compact-disc"></i>
        <p>Pause Animations</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-dyslexia">
        <i class="fa-solid fa-font"></i>
        <p>Dyslexia Friendly</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-bgColor">
        <i class="fa-solid fa-brush" id="accessibility-bgColor-icon"></i>
        <div hidden class="accessibility-bgColor" id="accessibility-bgColorSubOpt">
          <span class="accessibility-bgColor1" id="accessibility-bgColor1"></span>
          <span class="accessibility-bgColor2" id="accessibility-bgColor2"></span>
          <span class="accessibility-bgColor3" id="accessibility-bgColor3"></span>
          <span class="accessibility-bgColor4" id="accessibility-bgColor4"></span>
          <span class="accessibility-bgColor5" id="accessibility-bgColor5"></span> 
        </div>
        <p>Background Color</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-textColor">
        <i class="fa-solid fa-palette" id="accessibility-textColor-icon"></i>
        <div hidden class="accessibility-textColor" id="accessibility-textColorSubOpt">
          <span class="accessibility-textColor1" id="accessibility-textColor1"></span>
          <span class="accessibility-textColor2" id="accessibility-textColor2"></span>
          <span class="accessibility-textColor3" id="accessibility-textColor3"></span>
          <span class="accessibility-textColor4" id="accessibility-textColor4"></span>
          <span class="accessibility-textColor5" id="accessibility-textColor5"></span> 
        </div>
        <p>Text Color</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-Contrast">
        <i class="fa-solid fa-fill" id="accessibility-contrast-icon"></i>
        <div hidden class="accessibility-contrast" id="accessibility-contrast">
          <span id="accessibility-Contrast1">0.5x</span>
          <span id="accessibility-Contrast2">1.5x</span>
          <span id="accessibility-Contrast3">2.0x</span>
        </div>
        <p>Contrast</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-brightness">
        <i class="fa-solid fa-sun" id="accessibility-brightnessIcon"></i>
        <div hidden class="accessibility-brightness" id="accessibility-brightnessSubOpt">
          <span id="accessibility-brightness1">0.5x</span>
          <span id="accessibility-brightness2">1.5x</span>
          <span id="accessibility-brightness3">2.0x</span>
        </div>
        <p>Brightness</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-saturation">
        <i class="fa-solid fa-droplet" id="accesssibility-saturationIcon"></i>
        <div hidden class="accessibility-saturation" id="accesssibility-saturationSubOpt">
          <span id="accessibility-saturation1">0.5x</span>
          <span id="accessibility-saturation2">1.5x</span>
          <span id="accessibility-saturation3">2.5x</span>
        </div>
        <p>Saturation</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-monochrome">
        <i class="fa-regular fa-image" id="accesssibility-monochromeIcon"></i>
        <p>Monochrome</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-textSpacing">
        <i class="fa-solid fa-arrows-left-right-to-line" id="accessibility-spacingIcon"></i>
        <div hidden class="accessibility-textSpacing" id="accessibility-spacingSubOpt">
          <span id="accessibility-textSpacingA">1.2x</span>
          <span id="accessibility-textSpacingB">1.3x</span>
          <span id="accessibility-textSpacingC">1.4x</span>
        </div>
        <p>Text Spacing</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-textAlign">
        <i class="fa-sharp fa-solid fa-align-center" id="accessibility-alignIcon"></i>
        <div hidden class="accessibility-text-align" id="accessibility-alignSubOpt">
          <span><i class="fa-solid fa-align-left" id="accessibilityTAL"></i></span>
          <span><i class="fa-solid fa-align-center" id="accessibilityTAC"></i></span>
          <span><i class="fa-solid fa-align-right" id="accessibilityTAR"></i></span>
          <span><i class="fa-solid fa-align-justify" id="accessibilityTAJ"></i></span>
        </div>
        <p>Text Align</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-highlightLinks">
        <i class="fa-solid fa-highlighter"></i>
        <p>Highlight Links</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-darkMode">
        <i class="fa-solid fa-circle-half-stroke"></i>
        <p>Dark Mode</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-lineHeight">
        <i class="fa-solid fa-text-height" id="accessibility-lineHeightIcon"></i>
        <div hidden class="accessibility-lineHeight" id="accessibility-lineHeightSubOpt">
          <span id="accessibility-lineHeightA">2.0x</span>
          <span id="accessibility-lineHeightB">2.5x</span>
          <span id="accessibility-lineHeightC">3.0x</span>
        </div>
        <p>Line Height</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-cursor">
        <i class="fa-solid fa-arrow-pointer" id="accessibility-cursorIcon"></i>
        <div hidden class="accessibility-cursor" id="accessibility-cursorSubOpt">
          <span id="accessibility-cursorA">Black</span>
          <span id="accessibility-cursorB">White</span>
        </div>
        <p>Cursor</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-majorLinks">
        <i class="fa-solid fa-link"></i>
        <p>Major Links</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-readingMask">
        <i class="fa-solid fa-grip-lines"></i>
        <p>Reading Guide</p>
      </div>

      <div class="accessibility-card" id="accessibility_card-dictionary">
        <i class="fa-solid fa-book"></i>
        <p>Dictionary</p>
      </div>

    </div>
  </div>



  `
);

//***********  GLOBAL VARIABLES DECLARATION   **********/

//////////////
// *************** Script for Accessibility Menu Widget
const accessibility_open_w = document.getElementById('accessibility-widget-btn');
const accessibility_close_w = document.getElementById('accessibility-widget-close');
const accessibility_widget = document.getElementById('container-accessibility-widget');

accessibility_open_w.addEventListener('click', () => {
    accessibility_widget.classList.add('show');
});

accessibility_close_w.addEventListener('click', () => {
    accessibility_widget.classList.remove('show');
});


// *************** 1. Script for SCREEN READER

// Creating a new text-to-speech objech
const synth = window.speechSynthesis;
const accessibility_screen_reader = document.getElementById('accessibility_card-screenReader');
accessibility_screen_reader.addEventListener('click', () => {
    accessibility_screen_reader.classList.toggle('accessibilityActiveOption');
    if (accessibility_screen_reader.matches('.accessibilityActiveOption')) {
        readAloud();
    } else {
        console.log('screen reader inactive');
        // window.speechSynthesis.cancel;
    }
});

// *************** 2. Script for VOICE NAVIGATION
const accessibility_voice_nav = document.getElementById('accessibility_card-voiceNav');

accessibility_voice_nav.addEventListener('click', () => {
    if (accessibility_voice_nav.closest('.accessibilityActiveOption')) {
        // deactivating the voice navigation / speech recognition
        accessibility_voice_nav.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        // Code to deactivate voice navigation
    } else {
        // activating the voice nav / speech recogn
        accessibility_voice_nav.closest('.accessibility-card').classList.add('accessibilityActiveOption');

        // function to activate voice navigation
        wake_voice_nav();
    }
});


// *************** 3. Script for  text bigger size
const accessibility_textSize_card = document.getElementById('accessibility_card-size');
const accessibility_textSizeBig = document.getElementById('accessibility-textSizeBig');
const accessibility_textSizeBigger = document.getElementById('accessibility-textSizeBigger');
const accessibility_textSizeBiggest = document.getElementById('accessibility-textSizeBiggest');

const accessibility_sizeIcon = document.getElementById('accessibility-size-icon');
const accessibility_sizeSuboptions = document.getElementById('accessibility-bigger-text');

// click anywhere in the Text Sizing Card
accessibility_textSize_card.addEventListener('click', () => {
    if (accessibility_textSize_card.matches('.textSizingA')) {
        accessibility_textSize_card.classList.remove('textSizingA');
        accessibility_textSize_card.classList.add('textSizingB');

        document.body.style.zoom = 1.3;

        // inserting active subOption badge
        accessibility_textSizeBigger.insertAdjacentHTML("afterend", "<i class=\"sizingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from A
        const sizingSubOptionA = document.getElementsByClassName('sizingActiveSuboptionBadge');
        sizingSubOptionA[0].remove();



    } else if (accessibility_textSize_card.matches('.textSizingB')) {
        accessibility_textSize_card.classList.remove('textSizingB');
        accessibility_textSize_card.classList.add('textSizingC');

        document.body.style.zoom = 1.5;

        // inserting active subOption badge
        accessibility_textSizeBiggest.insertAdjacentHTML("afterend", "<i class=\"sizingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from B
        const sizingSubOptionA = document.getElementsByClassName('sizingActiveSuboptionBadge');
        sizingSubOptionA[0].remove();

    } else if (accessibility_textSize_card.matches('.textSizingC')) {
        accessibility_textSize_card.classList.remove('textSizingC');
        accessibility_textSize_card.classList.remove('accessibilityActiveOption');

        document.body.style.zoom = 1.0;

        // removing active subOption badge from C
        const sizingSubOptionA = document.getElementsByClassName('sizingActiveSuboptionBadge');
        sizingSubOptionA[0].remove();

        // showing the icon
        accessibility_sizeIcon.removeAttribute('hidden');

        // hiding suboptions again
        accessibility_sizeSuboptions.setAttribute('hidden', 'hidden');


    } else if (accessibility_textSize_card.matches('.accessibility-card')) {
        accessibility_textSize_card.classList.add('accessibilityActiveOption', 'textSizingA');

        document.body.style.zoom = 1.2;


        // inserting active subOption badge

        accessibility_textSizeBig.insertAdjacentHTML("afterend", "<i class=\"sizingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // hiding the icon
        accessibility_sizeIcon.setAttribute('hidden', 'hidden');

        // displaying sizes suboptions
        accessibility_sizeSuboptions.removeAttribute('hidden');
    }
});


// *************** 4. Script for Dyslexia Friendly font
const accessibility_dyslexia = document.getElementById('accessibility_card-dyslexia');
accessibility_dyslexia.addEventListener('click', () => {
    const wafy_typographic_elems = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,span,a,li,blockquote,div,strong,input,textarea,button,b,q,cite,em,td,th");
    if (accessibility_dyslexia.closest('.accessibilityActiveOption')) {
        // deactivating the dyslexia friendly font
        accessibility_dyslexia.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        // Applying Style
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("dyslexic-font");
        }
    } else {
        // activating the dyslexia friendly font
        accessibility_dyslexia.closest('.accessibility-card').classList.add('accessibilityActiveOption');

        // Applying Style
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("dyslexic-font");
        }
    }
});
///////////////////////////////////////////////////////




// *************** 6. Script for Text Spacing
const accessibility_textSpacing = document.getElementById('accessibility_card-textSpacing');
const accessibility_textSpacingA = document.getElementById('accessibility-textSpacingA');
const accessibility_textSpacingB = document.getElementById('accessibility-textSpacingB');
const accessibility_textSpacingC = document.getElementById('accessibility-textSpacingC');

const accessibility_spacingIcon = document.getElementById('accessibility-spacingIcon');
const accessibility_spacingSubOpt = document.getElementById('accessibility-spacingSubOpt')

// click anywhere in the Text Sizing Card
accessibility_textSpacing.addEventListener('click', () => {
    const collection = document.body.children;
    if (accessibility_textSpacing.matches('.textSpacingA')) {
        accessibility_textSpacing.classList.remove('textSpacingA');
        accessibility_textSpacing.classList.add('textSpacingB');

        // inserting active subOption badge
        accessibility_textSpacingB.insertAdjacentHTML("afterend", "<i class=\"SpacingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from A
        const SpacingSubOptionA = document.getElementsByClassName('SpacingActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying text spacing
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.letterSpacing = '3px';
                collection[i].style.wordSpacing = '3px';
            }
        }

    } else if (accessibility_textSpacing.matches('.textSpacingB')) {
        accessibility_textSpacing.classList.remove('textSpacingB');
        accessibility_textSpacing.classList.add('textSpacingC');

        // Code for letter / word spacing


        // inserting active subOption badge
        accessibility_textSpacingC.insertAdjacentHTML("afterend", "<i class=\"SpacingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from B
        const SpacingSubOptionA = document.getElementsByClassName('SpacingActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying text spacing
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.letterSpacing = '4px';
                collection[i].style.wordSpacing = '4px';
            }
        }

    } else if (accessibility_textSpacing.matches('.textSpacingC')) {
        accessibility_textSpacing.classList.remove('textSpacingC');
        accessibility_textSpacing.classList.remove('accessibilityActiveOption');

        // Code for letter / word spacing


        // removing active subOption badge from C
        const SpacingSubOptionA = document.getElementsByClassName('SpacingActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying text spacing to normal
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.letterSpacing = 'normal';
                collection[i].style.wordSpacing = 'normal';
            }
        }

        // showing the icon
        accessibility_spacingIcon.removeAttribute('hidden');

        // hiding the sub options
        accessibility_spacingSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_textSpacing.matches('.accessibility-card')) {
        accessibility_textSpacing.classList.add('accessibilityActiveOption', 'textSpacingA');

        // Code for letter / word spacing


        // inserting active subOption badge
        accessibility_textSpacingA.insertAdjacentHTML("afterend", "<i class=\"SpacingActiveSuboptionBadge fa-solid fa-check\"></i>");

        // applying text spacing
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.letterSpacing = '2px';
                collection[i].style.wordSpacing = '2px';
            }
        }

        // hiding the icon
        accessibility_spacingIcon.setAttribute('hidden', 'hidden');

        // showing the sub options
        accessibility_spacingSubOpt.removeAttribute('hidden');
    }
});
////////////////////////////////////////////




// *************** 7. Script for Text Align
const accessibility_textAlign = document.getElementById('accessibility_card-textAlign');
const accessibility_textAlignLeft = document.getElementById('accessibilityTAL');
const accessibility_textAlignRight = document.getElementById('accessibilityTAR');
const accessibility_textAlignCenter = document.getElementById('accessibilityTAC');
const accessibility_textAlignJustify = document.getElementById('accessibilityTAJ');

const accessibility_alignIcon = document.getElementById('accessibility-alignIcon');
const accessibility_alignSubOpt = document.getElementById('accessibility-alignSubOpt');

accessibility_textAlign.addEventListener('click', () => {

    if (accessibility_textAlign.matches('.textAlignLeft')) {
        accessibility_textAlign.classList.remove('textAlignLeft');
        accessibility_textAlign.classList.add('textAlignCenter');

        // removing active subOption badge from TAL
        const del_TAL = document.getElementsByClassName('alignActiveSuboptionBadge');
        del_TAL[0].remove();

        // inserting active subOption badge
        accessibility_textAlignCenter.insertAdjacentHTML("afterend", "<i class=\"alignActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'center';
        document.body.style.setProperty('text-align', 'center', 'important');

    } else if (accessibility_textAlign.matches('.textAlignCenter')) {
        accessibility_textAlign.classList.remove('textAlignCenter');
        accessibility_textAlign.classList.add('textAlignRight');

        // removing active subOption badge from TAC
        const del_TAC = document.getElementsByClassName('alignActiveSuboptionBadge');
        del_TAC[0].remove();

        // inserting active subOption badge
        accessibility_textAlignRight.insertAdjacentHTML("afterend", "<i class=\"alignActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'right';        
        document.body.style.setProperty('text-align', 'right', 'important');

    } else if (accessibility_textAlign.matches('.textAlignRight')) {
        accessibility_textAlign.classList.remove('textAlignRight');
        accessibility_textAlign.classList.add('textAlignJustify');

        // removing active subOption badge from TAR
        const del_TAR = document.getElementsByClassName('alignActiveSuboptionBadge');
        del_TAR[0].remove();

        // inserting active subOption badge
        accessibility_textAlignJustify.insertAdjacentHTML("afterend", "<i class=\"alignActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'justify';
        document.body.style.setProperty('text-align', 'justify', 'important');

    } else if (accessibility_textAlign.matches('.textAlignJustify')) {
        accessibility_textAlign.classList.remove('textAlignJustify');

        // removing active subOption badge from TAJ
        const del_TAJ = document.getElementsByClassName('alignActiveSuboptionBadge');
        del_TAJ[0].remove();

        // removing accessibility active optiom from TEXT ALIGN CARD
        accessibility_textAlign.classList.remove('accessibilityActiveOption');

        // Applying Styles
        // document.body.style.textAlign = '';
        document.body.style.setProperty('text-align', '', 'important');


        // showing the icon
        accessibility_alignIcon.removeAttribute('hidden');

        // showing the sub options
        accessibility_alignSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_textAlign.matches('.accessibility-card')) {
        accessibility_textAlign.classList.add('accessibilityActiveOption', 'textAlignLeft');

        // inserting active subOption badge

        accessibility_textAlignLeft.insertAdjacentHTML("afterend", "<i class=\"alignActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'left';
        document.body.style.setProperty('text-align', 'left', 'important');

        // hiding the icon
        accessibility_alignIcon.setAttribute('hidden', 'hidden');

        // showing the sub options
        accessibility_alignSubOpt.removeAttribute('hidden');
    }
});
//////////////////////////////////////////




// *************** 8. Script for Highlight Links
const accessibility_highlightLinks = document.getElementById('accessibility_card-highlightLinks');
accessibility_highlightLinks.addEventListener('click', () => {
    const links = document.getElementsByTagName('A');
    if (accessibility_highlightLinks.closest('.accessibilityActiveOption')) {
        // deactivating the HIGHLIGHT LINKS
        accessibility_highlightLinks.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        for (let i = 0; i <= links.length; i++) {
            links[i].classList.remove('highlightLinks');
        }
    } else {
        // activating the HIGHLIGHT LINKS
        accessibility_highlightLinks.closest('.accessibility-card').classList.add('accessibilityActiveOption');

        for (let i = 0; i <= links.length; i++) {
            links[i].classList.add('highlightLinks');
        }
    }
});
////////////////////////////////////////////////




// *************** 9. Script for Dark Mode
const accessibility_darkMode = document.getElementById('accessibility_card-darkMode');
accessibility_darkMode.addEventListener('click', () => {
    document.body.classList.toggle("accessibility-darkMode");
    accessibility_darkMode.classList.toggle("accessibilityActiveOption");
})
////////////////////////////////////////




// *************** 10. Script for Line Height
const accessibility_lineHeight = document.getElementById('accessibility_card-lineHeight');
const accessibility_lineHeightA = document.getElementById('accessibility-lineHeightA');
const accessibility_lineHeightB = document.getElementById('accessibility-lineHeightB');
const accessibility_lineHeightC = document.getElementById('accessibility-lineHeightC');

const accessibility_lineHeightIcon = document.getElementById('accessibility-lineHeightIcon');
const accessibility_lineHeightSubOpt = document.getElementById('accessibility-lineHeightSubOpt');

// click anywhere in the Line Height Card
accessibility_lineHeight.addEventListener('click', () => {
    const collection = document.body.children;
    const paras = document.getElementsByTagName('P');
    const divs = document.getElementsByTagName('DIV');
    const icons = document.getElementsByTagName('I');
    if (accessibility_lineHeight.matches('.lineHeightA')) {
        accessibility_lineHeight.classList.remove('lineHeightA');
        accessibility_lineHeight.classList.add('lineHeightB');

        // inserting active subOption badge
        accessibility_lineHeightB.insertAdjacentHTML("afterend", "<i class=\"lineHeightActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from A
        const SpacingSubOptionA = document.getElementsByClassName('lineHeightActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying line height
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.lineHeight = '2.5';
            }
        }
        // applying Line Height for paragraphs
        for (let i = 0; i < paras.length; i++) {
            if (!paras[i].closest('#container-accessibility-widget')) {
                paras[i].style.lineHeight = '2.5';
            }
        }
        // applying Line Height for divs
        for (let i = 0; i < divs.length; i++) {
            if (!divs[i].closest('#container-accessibility-widget')) {
                divs[i].style.lineHeight = '2.5';
            }
        }
        // applying Line Height for icons
        for (let i = 0; i < icons.length; i++) {
            if (!icons[i].closest('#container-accessibility-widget')) {
                icons[i].style.lineHeight = '2.5';
            }
        }

    } else if (accessibility_lineHeight.matches('.lineHeightB')) {
        accessibility_lineHeight.classList.remove('lineHeightB');
        accessibility_lineHeight.classList.add('lineHeightC');

        // Code for line height


        // inserting active subOption badge
        accessibility_lineHeightC.insertAdjacentHTML("afterend", "<i class=\"lineHeightActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from B
        const SpacingSubOptionA = document.getElementsByClassName('lineHeightActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying line height
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.lineHeight = '3';
            }
        }
        // applying Line Height for paragraphs
        for (let i = 0; i < paras.length; i++) {
            if (!paras[i].closest('#container-accessibility-widget')) {
                paras[i].style.lineHeight = '3';
            }
        }
        // applying Line Height for divs
        for (let i = 0; i < divs.length; i++) {
            if (!divs[i].closest('#container-accessibility-widget')) {
                divs[i].style.lineHeight = '3';
            }
        }
        // applying Line Height for icons
        for (let i = 0; i < icons.length; i++) {
            if (!icons[i].closest('#container-accessibility-widget')) {
                icons[i].style.lineHeight = '3';
            }
        }

    } else if (accessibility_lineHeight.matches('.lineHeightC')) {
        accessibility_lineHeight.classList.remove('lineHeightC');
        accessibility_lineHeight.classList.remove('accessibilityActiveOption');

        // Code for line height


        // removing active subOption badge from C
        const SpacingSubOptionA = document.getElementsByClassName('lineHeightActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // applying line height
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.lineHeight = 'normal';
            }
        }
        // applying Line Height for paragraphs
        for (let i = 0; i < paras.length; i++) {
            if (!paras[i].closest('#container-accessibility-widget')) {
                paras[i].style.lineHeight = 'normal';
            }
        }
        // applying Line Height for divs
        for (let i = 0; i < divs.length; i++) {
            if (!divs[i].closest('#container-accessibility-widget')) {
                divs[i].style.lineHeight = 'normal';
            }
        }
        // applying Line Height for icons
        for (let i = 0; i < icons.length; i++) {
            if (!icons[i].closest('#container-accessibility-widget')) {
                icons[i].style.lineHeight = 'normal';
            }
        }


        // showing the icon
        accessibility_lineHeightIcon.removeAttribute('hidden');

        // showing the sub options
        accessibility_lineHeightSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_lineHeight.matches('.accessibility-card')) {
        accessibility_lineHeight.classList.add('accessibilityActiveOption', 'lineHeightA');

        // Code for line height


        // inserting active subOption badge
        accessibility_lineHeightA.insertAdjacentHTML("afterend", "<i class=\"lineHeightActiveSuboptionBadge fa-solid fa-check\"></i>");

        // applying Line Height
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i].closest('#container-accessibility-widget')) {
                collection[i].style.lineHeight = '2';
            }
        }
        // applying Line Height for paragraphs
        for (let i = 0; i < paras.length; i++) {
            if (!paras[i].closest('#container-accessibility-widget')) {
                paras[i].style.lineHeight = '2';
            }
        }
        // applying Line Height for divs
        for (let i = 0; i < divs.length; i++) {
            if (!divs[i].closest('#container-accessibility-widget')) {
                divs[i].style.lineHeight = '2';
            }
        }
        // applying Line Height for icons
        for (let i = 0; i < icons.length; i++) {
            if (!icons[i].closest('#container-accessibility-widget')) {
                icons[i].style.lineHeight = '2';
            }
        }


        // hiding the icon
        accessibility_lineHeightIcon.setAttribute('hidden', 'hidden');

        // showing the sub options
        accessibility_lineHeightSubOpt.removeAttribute('hidden');
    }
});
///////////////////////////////////////////




// *************** 11. Script for Cursor
const accessibility_cursor = document.getElementById('accessibility_card-cursor');
const accessibility_cursorA = document.getElementById('accessibility-cursorA');
const accessibility_cursorB = document.getElementById('accessibility-cursorB');

const accessibility_cursorIcon = document.getElementById('accessibility-cursorIcon');
const accessibility_cursorSubOpt = document.getElementById('accessibility-cursorSubOpt');

// click anywhere in the Line Height Card
accessibility_cursor.addEventListener('click', () => {
    const bodyChildren = document.body.children;
    const anchors = document.getElementsByTagName('A');
    if (accessibility_cursor.matches('.cursorA')) {
        accessibility_cursor.classList.remove('cursorA');
        accessibility_cursor.classList.add('cursorB');

        // inserting active subOption badge
        accessibility_cursorB.insertAdjacentHTML("afterend", "<i class=\"cursorActiveSuboptionBadge fa-solid fa-check\"></i>");

        // removing active subOption badge from A
        const SpacingSubOptionA = document.getElementsByClassName('cursorActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();
        // Code for Bigger Cursor
        // document.documentElement.style.cursor = 'url(cursor-images/cursor70-black.png), auto';
        document.documentElement.classList.remove('accessibility-cursorImg1');
        document.documentElement.classList.add('accessibility-cursorImg3');

        // for anchors, as above code not working on links
        for (let i = 0; i <= anchors.length; i++) {
            anchors[i].classList.remove('accessibility-cursorImg2');
            anchors[i].classList.add('accessibility-cursorImg4');
        }

    } else if (accessibility_cursor.matches('.cursorB')) {
        accessibility_cursor.classList.remove('cursorB');
        accessibility_cursor.classList.remove('accessibilityActiveOption');

        // showing the icon
        accessibility_cursorIcon.removeAttribute('hidden');
        // hiding the sub options
        accessibility_cursorSubOpt.setAttribute('hidden', 'hidden');

        // removing active subOption badge from B
        const SpacingSubOptionA = document.getElementsByClassName('cursorActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();

        // Code for Normal Cursor
        document.documentElement.classList.remove('accessibility-cursorImg3');
        document.documentElement.style.cursor = 'auto';

        // for anchors
        for (let i = 0; i <= anchors.length; i++) {
            anchors[i].classList.remove('accessibility-cursorImg4');
            anchors[i].style.cursor = 'auto';
        }

    } else if (accessibility_cursor.matches('.cursorC')) {
        accessibility_cursor.classList.remove('cursorC');
        accessibility_cursor.classList.remove('accessibilityActiveOption');

        // showing the icon
        accessibility_cursorIcon.removeAttribute('hidden');
        // hiding the sub options
        accessibility_cursorSubOpt.setAttribute('hidden', 'hidden');

        // removing active subOption badge from C
        const SpacingSubOptionA = document.getElementsByClassName('cursorActiveSuboptionBadge');
        SpacingSubOptionA[0].remove();


        // Code for Bigger Cursor
        document.documentElement.classList.remove('accessibility-cursorImg3');
        document.documentElement.style.cursor = 'auto';

        // for anchors
        for (let i = 0; i <= anchors.length; i++) {
            anchors[i].style.cursor = 'auto';
        }

    } else if (accessibility_cursor.matches('.accessibility-card')) {

        // hiding the icon
        accessibility_cursorIcon.setAttribute('hidden', 'hidden');
        // showing the sub options
        accessibility_cursorSubOpt.removeAttribute('hidden');

        accessibility_cursor.classList.add('accessibilityActiveOption', 'cursorA');

        // inserting active subOption badge
        accessibility_cursorA.insertAdjacentHTML("afterend", "<i class=\"cursorActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Code for Bigger Cursor
        document.documentElement.classList.add('accessibility-cursorImg1');

        // for anchors, as above code not working on links
        for (let i = 0; i <= anchors.length; i++) {
            anchors[i].classList.add('accessibility-cursorImg2');
        }




    }
});
//////////////////////////////////////




// *************** 12. Script for Major Links
const accessibility_majorLinks = document.getElementById('accessibility_card-majorLinks');

var majorLinksWrapper = document.getElementById("major-links-wrapper");

var modal_content = document.getElementById('major-links-content');

var close_major_links = document.getElementById("major-links-close-icon");

const major_links = document.body.querySelectorAll('a');

const links_display_container = document.getElementById('links-display-container');

var MajorLinksChildren = links_display_container.children;


accessibility_majorLinks.addEventListener('click', () => {
    if (accessibility_majorLinks.closest('.accessibilityActiveOption')) {
        // deactivating the MAJOR LINKS
        accessibility_majorLinks.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        majorLinksWrapper.style.display = "none";
    } else {
        // activating the MAJOR LINKS
        accessibility_majorLinks.closest('.accessibility-card').classList.add('accessibilityActiveOption');

        // hiding accessibility widget
        accessibility_widget.classList.remove('show');

        // displaying the Major Links Modal
        majorLinksWrapper.style.display = "block";
        for (let i = 0; i < major_links.length; i++) {
            let link = document.createElement('A');
            link = major_links[i].cloneNode(true);
            if (link.getElementsByTagName('IMG').length > 0) {
                link.remove();
            } else if (link.getElementsByTagName('I').length > 0) {
                link.remove();
            } else if (link.getElementsByTagName('ICON').length > 0) {
                link.remove();
            } else if (link.getElementsByTagName('SVG').length > 0) {
                link.remove();
            } else if (link.innerText == "") {
                link.remove();
            } else {
                link.removeAttribute('class');
                link.removeAttribute('id');
                link.removeAttribute('style');
                link.setAttribute('target', '_blank', 'important')
                links_display_container.appendChild(link)
            }


        }

        for (let i = 0; i < MajorLinksChildren.length; i++) {
            MajorLinksChildren[i].classList.add('show-major-links');
        }

    }
});

close_major_links.addEventListener('click', () => {
    majorLinksWrapper.style.display = "none";
    accessibility_majorLinks.classList.remove('accessibilityActiveOption');

})
///////////////////////////////////////////




// *************** 13. Script for Reading Mask
const accessibility_readingMask = document.getElementById('accessibility_card-readingMask');
const readingMaskLine = document.getElementById('readingMaskLine');

var mousePosition;
var offset = [0, 0];
var isDown = false;

readingMaskLine.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        readingMaskLine.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            y: event.clientY

        };
        readingMaskLine.style.top = (mousePosition.y + offset[0]) + 'px';
    }
}, true);


accessibility_readingMask.addEventListener('click', () => {
    if (accessibility_readingMask.closest('.accessibilityActiveOption')) {
        // deactivating the READING MASK
        accessibility_readingMask.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        readingMaskLine.setAttribute('hidden', 'hidden');

    } else {
        // activating the READING MASK
        accessibility_readingMask.closest('.accessibility-card').classList.add('accessibilityActiveOption');
        readingMaskLine.removeAttribute('hidden')

    }
});
////////////////////////////////////////////




// *************** 14. Script for Dictionary
// Dictionary source: dictionaryapi.dev
const accessibility_dictionary = document.getElementById('accessibility_card-dictionary');

// meaning popup
const dictWrapperElem = document.getElementById('dictionary-meaning');
const dictCloseBtn = document.getElementById('dictionary-meaning-close');
const dictionaryWordElem = document.getElementById('dictionaryWord');
const wordPhoneticElem = document.getElementById('wordPhonetic');
const wordAudioElem = document.getElementById('wordAudio');
const wordPOSElem = document.getElementById('wordPOS');
const wordDefinitionElem = document.getElementById('wordDefinition');
const wordSynonymsElem = document.getElementById('wordSynonyms');

const dictWordSpeak = document.getElementById('dictWordSpeak');

var selectedText = '';

accessibility_dictionary.addEventListener('click', () => {
    if (accessibility_dictionary.closest('.accessibilityActiveOption')) {
        // deactivating the DICTIONARY
        accessibility_dictionary.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');
        dictWrapperElem.classList.remove('dictionaryShow')

    } else {
        // activating the DICTIONARY
        accessibility_dictionary.closest('.accessibility-card').classList.add('accessibilityActiveOption');

    }
});

document.body.addEventListener('mouseup', (event) => {
    if (accessibility_dictionary.matches('.accessibilityActiveOption')) {

        // window.getSelection
        if (window.getSelection) {

            if (!event.target.closest('.dictionary-meaning-popup')) {
                dictionaryWordElem.innerHTML = '';
                wordPhoneticElem.innerHTML = '';
                wordAudioElem.innerHTML = '';
                wordPOSElem.innerHTML = '';
                wordDefinitionElem.innerHTML = '';
            }



            selectedText = window.getSelection();
            dictWrapperElem.classList.add('dictionaryShow');
            selectedText = selectedText.toString();
        }
        // document.getSelection
        else if (document.getSelection) {

            if (!event.target.closest('.dictionary-meaning-popup')) {
                dictionaryWordElem.innerHTML = '';
                wordPhoneticElem.innerHTML = '';
                wordAudioElem.innerHTML = '';
                wordPOSElem.innerHTML = '';
                wordDefinitionElem.innerHTML = '';
            }

            selectedText = document.getSelection();
            dictWrapperElem.classList.add('dictionaryShow');
            selectedText = selectedText.toString();
        }
        // document.selection
        else if (document.selection) {

            if (!event.target.closest('.dictionary-meaning-popup')) {
                dictionaryWordElem.innerHTML = '';
                wordPhoneticElem.innerHTML = '';
                wordAudioElem.innerHTML = '';
                wordPOSElem.innerHTML = '';
                wordDefinitionElem.innerHTML = '';
            }

            selectedText = document.selection.createRange().text;
            dictWrapperElem.classList.add('dictionaryShow');
            selectedText = selectedText.toString();
        }

        // hide the dictionary popup when no text is selected
        if (selectedText === '') {
            dictWrapperElem.classList.remove('dictionaryShow')
        }

    }
});
document.addEventListener('click', () => {
    if ((accessibility_dictionary.matches('.accessibilityActiveOption')) && (window.getSelection || document.getSelection || document.selection)) {
        dictionaryAPI();
    }
});
function dictionaryAPI() {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + selectedText)
        .then(res => res.json())
        .then(data => {
            var dictionaryWord = data[0]["word"];
            var wordPhonetic = data[0]["phonetic"];
            var wordAudio = data[0]["phonetics"][0]["audio"];
            var wordPOS = data[0]["meanings"][0]["partOfSpeech"];
            var wordSynonyms = data[0]["meanings"][0]["definitions"][0]["synonyms"];
            var wordDefinition = data[0]["meanings"][0]["definitions"][0]["definition"];

            dictionaryWordElem.innerHTML = dictionaryWord;
            wordPhoneticElem.innerHTML = wordPhonetic;
            wordAudioElem.innerHTML = wordAudio;
            wordPOSElem.innerHTML = wordPOS;
            wordDefinitionElem.innerHTML = wordDefinition;
            wordSynonymsElem.innerHTML = wordSynonyms;

            wordAudioElem.setAttribute('src', wordAudio);

            // if (Object.keys(wordSynonyms).length) {
            //     document.getElementById('dict-synonyms').remove();
            //     console.log('Syn removed')
            // } else {
            //     wordSynonymsElem.innerHTML = wordSynonyms;
            //     console.log('Syno not removed')
            // }
        })
        .catch(error => console.log('ERROR'))
}

dictCloseBtn.addEventListener('click', () => {
    dictWrapperElem.classList.remove('dictionaryShow')
});

// pronounce the word
dictWordSpeak.addEventListener('click', () => {
    dictWrapperElem.classList.add('dictionaryShow');
    wordAudioElem.play();
});


//////////////////////////////////////////




// *************** 15. Script for Contrast
const accessibility_Contrast = document.getElementById('accessibility_card-Contrast');
const accessibility_Contrast1 = document.getElementById('accessibility-Contrast1');
const accessibility_Contrast2 = document.getElementById('accessibility-Contrast2');
const accessibility_Contrast3 = document.getElementById('accessibility-Contrast3');

const accessibility_contrastSubOpt = document.getElementById('accessibility-contrast');
const accessibility_contrastIcon = document.getElementById('accessibility-contrast-icon');

accessibility_Contrast.addEventListener('click', () => {

    if (accessibility_Contrast.matches('.Contrast1')) {
        accessibility_Contrast.classList.remove('Contrast1');
        accessibility_Contrast.classList.add('Contrast2');

        // removing active subOption badge from TAL
        const del_TAL = document.getElementsByClassName('ContrastActiveSuboptionBadge');
        del_TAL[0].remove();

        // inserting active subOption badge
        accessibility_Contrast2.insertAdjacentHTML("afterend", "<i class=\"ContrastActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'center';
        document.body.style.setProperty('filter', 'contrast(1.5)', 'important');

    } else if (accessibility_Contrast.matches('.Contrast2')) {
        accessibility_Contrast.classList.remove('Contrast2');
        accessibility_Contrast.classList.add('Contrast3');

        // removing active subOption badge from TAC
        const del_TAC = document.getElementsByClassName('ContrastActiveSuboptionBadge');
        del_TAC[0].remove();

        // inserting active subOption badge
        accessibility_Contrast3.insertAdjacentHTML("afterend", "<i class=\"ContrastActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'right';        
        document.body.style.setProperty('filter', 'contrast(2)', 'important');

    } else if (accessibility_Contrast.matches('.Contrast3')) {
        accessibility_Contrast.classList.remove('Contrast3');
        accessibility_Contrast.classList.remove('accessibilityActiveOption');

        // removing active subOption badge from TAR
        const del_TAR = document.getElementsByClassName('ContrastActiveSuboptionBadge');
        del_TAR[0].remove();

        // Applying Styles
        // document.body.style.textAlign = 'justify';
        document.body.style.setProperty('filter', 'contrast(1)', 'important');


        // showing the icon
        accessibility_contrastIcon.removeAttribute('hidden');

        // displaying sizes suboptions
        accessibility_contrastSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_Contrast.matches('.accessibility-card')) {
        accessibility_Contrast.classList.add('accessibilityActiveOption', 'Contrast1');

        // inserting active subOption badge

        accessibility_Contrast1.insertAdjacentHTML("afterend", "<i class=\"ContrastActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'left';
        document.body.style.setProperty('filter', 'contrast(0.5)', 'important');

        // hiding the icon
        accessibility_contrastIcon.setAttribute('hidden', 'hidden');

        // displaying sizes suboptions
        accessibility_contrastSubOpt.removeAttribute('hidden');
    }
});
////////////////////////////////////////////



// *************** 16. Script for  Brightnesss
const accessibility_Brightness = document.getElementById('accessibility_card-brightness');
const accessibility_Brightness1 = document.getElementById('accessibility-brightness1');
const accessibility_Brightness2 = document.getElementById('accessibility-brightness2');
const accessibility_Brightness3 = document.getElementById('accessibility-brightness3');

const accessibility_brightnessIcon = document.getElementById('accessibility-brightnessIcon');
const accessibility_brightnessSubOpt = document.getElementById('accessibility-brightnessSubOpt');

accessibility_Brightness.addEventListener('click', () => {

    if (accessibility_Brightness.matches('.Brightness1')) {
        accessibility_Brightness.classList.remove('Brightness1');
        accessibility_Brightness.classList.add('Brightness2');

        // removing active subOption badge from TAL
        const del_TAL = document.getElementsByClassName('BrightnessActiveSuboptionBadge');
        del_TAL[0].remove();

        // inserting active subOption badge
        accessibility_Brightness2.insertAdjacentHTML("afterend", "<i class=\"BrightnessActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'center';
        document.body.style.setProperty('filter', 'brightness(1.5)', 'important');

    } else if (accessibility_Brightness.matches('.Brightness2')) {
        accessibility_Brightness.classList.remove('Brightness2');
        accessibility_Brightness.classList.add('Brightness3');

        // removing active subOption badge from TAC
        const del_TAC = document.getElementsByClassName('BrightnessActiveSuboptionBadge');
        del_TAC[0].remove();

        // inserting active subOption badge
        accessibility_Brightness3.insertAdjacentHTML("afterend", "<i class=\"BrightnessActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'right';        
        document.body.style.setProperty('filter', 'brightness(2)', 'important');

    } else if (accessibility_Brightness.matches('.Brightness3')) {
        accessibility_Brightness.classList.remove('Brightness3');
        accessibility_Brightness.classList.remove('accessibilityActiveOption');

        // removing active subOption badge from TAR
        const del_TAR = document.getElementsByClassName('BrightnessActiveSuboptionBadge');
        del_TAR[0].remove();

        // Applying Styles
        // document.body.style.textAlign = 'justify';
        document.body.style.setProperty('filter', 'brightness(1)', 'important');


        // showing the icon
        accessibility_brightnessIcon.removeAttribute('hidden');

        // displaying  suboptions
        accessibility_brightnessSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_Brightness.matches('.accessibility-card')) {
        accessibility_Brightness.classList.add('accessibilityActiveOption', 'Brightness1');

        // inserting active subOption badge

        accessibility_Brightness1.insertAdjacentHTML("afterend", "<i class=\"BrightnessActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'left';
        document.body.style.setProperty('filter', 'brightness(0.5)', 'important');


        // hiding the icon
        accessibility_brightnessIcon.setAttribute('hidden', 'hidden');

        // displaying sizes suboptions
        accessibility_brightnessSubOpt.removeAttribute('hidden');
    }
});
////////////////////////////////////////////


// *************** 17. Script for  Saturation
const accessibility_Saturation = document.getElementById('accessibility_card-saturation');
const accessibility_Saturation1 = document.getElementById('accessibility-saturation1');
const accessibility_Saturation2 = document.getElementById('accessibility-saturation2');
const accessibility_Saturation3 = document.getElementById('accessibility-saturation3');

const accessibility_saturationIcon = document.getElementById('accesssibility-saturationIcon');
const accessibility_saturatSubOpt = document.getElementById('accesssibility-saturationSubOpt');

accessibility_Saturation.addEventListener('click', () => {

    if (accessibility_Saturation.matches('.saturation1')) {
        accessibility_Saturation.classList.remove('saturation1');
        accessibility_Saturation.classList.add('saturation2');

        // removing active subOption badge from TAL
        const del_TAL = document.getElementsByClassName('SaturationActiveSuboptionBadge');
        del_TAL[0].remove();

        // inserting active subOption badge
        accessibility_Saturation2.insertAdjacentHTML("afterend", "<i class=\"SaturationActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'center';
        document.body.style.setProperty('filter', 'saturate(1.5)', 'important');

    } else if (accessibility_Saturation.matches('.saturation2')) {
        accessibility_Saturation.classList.remove('saturation2');
        accessibility_Saturation.classList.add('saturation3');

        // removing active subOption badge from TAC
        const del_TAC = document.getElementsByClassName('SaturationActiveSuboptionBadge');
        del_TAC[0].remove();

        // inserting active subOption badge
        accessibility_Saturation3.insertAdjacentHTML("afterend", "<i class=\"SaturationActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'right';        
        document.body.style.setProperty('filter', 'saturate(2)', 'important');

    } else if (accessibility_Saturation.matches('.saturation3')) {
        accessibility_Saturation.classList.remove('saturation3');
        accessibility_Saturation.classList.remove('accessibilityActiveOption');

        // removing active subOption badge from TAR
        const del_TAR = document.getElementsByClassName('SaturationActiveSuboptionBadge');
        del_TAR[0].remove();

        // Applying Styles
        // document.body.style.textAlign = 'justify';
        document.body.style.setProperty('filter', 'saturate(1)', 'important');


        // showing the icon
        accessibility_saturationIcon.removeAttribute('hidden');

        // displaying  suboptions
        accessibility_saturatSubOpt.setAttribute('hidden', 'hidden');

    } else if (accessibility_Saturation.matches('.accessibility-card')) {
        accessibility_Saturation.classList.add('accessibilityActiveOption', 'saturation1');

        // inserting active subOption badge

        accessibility_Saturation1.insertAdjacentHTML("afterend", "<i class=\"SaturationActiveSuboptionBadge fa-solid fa-check\"></i>");

        // Applying Styles
        // document.body.style.textAlign = 'left';
        document.body.style.setProperty('filter', 'saturate(0.5)', 'important');


        // hiding the icon
        accessibility_saturationIcon.setAttribute('hidden', 'hidden');

        // displaying sizes suboptions
        accessibility_saturatSubOpt.removeAttribute('hidden');
    }
});
////////////////////////////////////////////


// *************** 18. Script for  Monochrome
const accessibility_monochrome = document.getElementById('accessibility_card-monochrome');

accessibility_monochrome.addEventListener('click', () => {
    if (accessibility_monochrome.closest('.accessibilityActiveOption')) {
        // deactivating the HIGHLIGHT LINKS
        accessibility_monochrome.closest('.accessibilityActiveOption').classList.remove('accessibilityActiveOption');

        document.body.style.setProperty('filter', 'grayscale(0)', 'important');
    } else {
        // activating the HIGHLIGHT LINKS
        accessibility_monochrome.closest('.accessibility-card').classList.add('accessibilityActiveOption');

        document.body.style.setProperty('filter', 'grayscale(1)', 'important');
    }
});
////////////////////////////////////////



// *************** 19. Script for Pause Animations
const accessibility_animations = document.getElementById('accessibility_card-animations');

// allElem.style.setProperty('animation','none','important')

accessibility_animations.addEventListener('click', () => {
    accessibility_animations.classList.toggle("accessibilityActiveOption");

    const allElem = document.body.getElementsByTagName('*');
    for (let i = 0; i <= allElem.length; i++) {
        allElem[i].classList.toggle('pause-animations');
    }
})
////////////////////////////////////////



// *************** 20. Script for Background Color
const accessibility_bgColor = document.getElementById(
    "accessibility_card-bgColor"
);
const accessibility_bgColor1 = document.getElementById(
    "accessibility-bgColor1"
);
const accessibility_bgColor2 = document.getElementById(
    "accessibility-bgColor2"
);
const accessibility_bgColor3 = document.getElementById(
    "accessibility-bgColor3"
);
const accessibility_bgColor4 = document.getElementById(
    "accessibility-bgColor4"
);
const accessibility_bgColor5 = document.getElementById(
    "accessibility-bgColor5"
);

const accessibility_bgColorIcon = document.getElementById(
    "accessibility-bgColor-icon"
);
const accessibility_bgColorSubOpt = document.getElementById(
    "accessibility-bgColorSubOpt"
);

const allElements = document.querySelectorAll("*");

accessibility_bgColor.addEventListener("click", () => {
    if (accessibility_bgColor.matches(".bgColor1")) {
        // remove class from Card
        accessibility_bgColor.classList.remove("bgColor1");
        // remove class from DOM
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.remove("accessibility-background-color1");
            }
        }
        accessibility_bgColor.classList.add("bgColor2");

        // removing Active Suboption baadge from BGC
        const del_BGBlue = document.getElementsByClassName(
            "bgColorActiveSuboptionBadge"
        );
        del_BGBlue[0].remove();

        // inserting Active SubOption badge
        accessibility_bgColor2.insertAdjacentHTML(
            "afterend",
            '<i class="bgColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.add("accessibility-background-color2");
            }
        }
        //document.body.classList.add("accessibility-bgColor2");
    } else if (accessibility_bgColor.matches(".bgColor2")) {
        //remove class from Card
        accessibility_bgColor.classList.remove("bgColor2");
        // remove class from DOM
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.remove("accessibility-background-color2");
            }
        }
        accessibility_bgColor.classList.add("bgColor3");

        // removing active subOption badge from TAC
        const del_BGBlack = document.getElementsByClassName(
            "bgColorActiveSuboptionBadge"
        );
        del_BGBlack[0].remove();

        // inserting active subOption badge
        accessibility_bgColor3.insertAdjacentHTML(
            "afterend",
            '<i class="bgColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.add("accessibility-background-color3");
            }
        }
    } else if (accessibility_bgColor.matches(".bgColor3")) {
        // remove the class from card
        accessibility_bgColor.classList.remove("bgColor3");
        // remove the class from DOM
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.remove("accessibility-background-color3");
            }
        }
        accessibility_bgColor.classList.add("bgColor4");

        // removing active subOption badge from TAC
        const del_BGPurple = document.getElementsByClassName(
            "bgColorActiveSuboptionBadge"
        );
        del_BGPurple[0].remove();

        // inserting active subOption badge
        accessibility_bgColor4.insertAdjacentHTML(
            "afterend",
            '<i class="bgColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.add("accessibility-background-color4");
            }
        }
    } else if (accessibility_bgColor.matches(".bgColor4")) {
        // Remove class from Card
        accessibility_bgColor.classList.remove("bgColor4");
        // remove class from DOM
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.remove("accessibility-background-color4");
            }
        }
        accessibility_bgColor.classList.add("bgColor5");

        // removing active subOption badge from TAC
        const del_BGRed = document.getElementsByClassName(
            "bgColorActiveSuboptionBadge"
        );
        del_BGRed[0].remove();

        // inserting active subOption badge
        accessibility_bgColor5.insertAdjacentHTML(
            "afterend",
            '<i class="bgColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.add("accessibility-background-color5");
            }
        }
    } else if (accessibility_bgColor.matches(".bgColor5")) {
        // remove class from Card
        accessibility_bgColor.classList.remove("bgColor5");
        // remove class from DOM
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.remove("accessibility-background-color5");
            }
        }

        // removing active subOption badge from TAJ
        const del_BGOrange = document.getElementsByClassName(
            "bgColorActiveSuboptionBadge"
        );
        del_BGOrange[0].remove();

        // removing accessibility active optiom from TEXT ALIGN CARD
        accessibility_bgColor.classList.remove("accessibilityActiveOption");

        // showing the icon
        accessibility_bgColorIcon.removeAttribute("hidden");

        // showing the sub options
        accessibility_bgColorSubOpt.setAttribute("hidden", "hidden");
    } else if (accessibility_bgColor.matches(".accessibility-card")) {
        accessibility_bgColor.classList.add(
            "accessibilityActiveOption",
            "bgColor1"
        );

        // showing the sub options
        accessibility_bgColorSubOpt.removeAttribute("hidden");
        // hiding the icon
        accessibility_bgColorIcon.setAttribute("hidden", "hidden");


        accessibility_bgColor1.insertAdjacentHTML(
            "afterend",
            '<i class="bgColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < allElements.length; i++) {
            if (!allElements[i].closest('#container-accessibility-widget')) {
                allElements[i].classList.add("accessibility-background-color1");
            }
        }
    }
});
/////////////////////////////////////////////////



// *************** 21. Script for Text Color
const accessibility_textColor = document.getElementById(
    "accessibility_card-textColor"
);
const accessibility_textColor1 = document.getElementById(
    "accessibility-textColor1"
);
const accessibility_textColor2 = document.getElementById(
    "accessibility-textColor2"
);
const accessibility_textColor3 = document.getElementById(
    "accessibility-textColor3"
);
const accessibility_textColor4 = document.getElementById(
    "accessibility-textColor4"
);
const accessibility_textColor5 = document.getElementById(
    "accessibility-textColor5"
);

const accessibility_textColorIcon = document.getElementById(
    "accessibility-textColor-icon"
);
const accessibility_textColorSubOpt = document.getElementById(
    "accessibility-textColorSubOpt"
);

accessibility_textColor.addEventListener("click", () => {
    const wafy_typographic_elems = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,span,a,li,i,icon,svg,div,strong,input,textarea,button,b,cite,em,td,th");
    if (accessibility_textColor.matches(".textColor1")) {
        // remove class from Card
        accessibility_textColor.classList.remove("textColor1");
        // remove class from DOM
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("accessibility-text-color1");
        }
        accessibility_textColor.classList.add("textColor2");

        // removing Active Suboption baadge from BGC
        const del_textBlue = document.getElementsByClassName(
            "textColorActiveSuboptionBadge"
        );
        del_textBlue[0].remove();

        // inserting Active SubOption badge
        accessibility_textColor2.insertAdjacentHTML(
            "afterend",
            '<i class="textColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("accessibility-text-color2");
        }
    } else if (accessibility_textColor.matches(".textColor2")) {
        //remove class from Card
        accessibility_textColor.classList.remove("textColor2");
        // remove class from DOM
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("accessibility-text-color2");
        }
        accessibility_textColor.classList.add("textColor3");

        // removing active subOption badge from TAC
        const del_textBlack = document.getElementsByClassName(
            "textColorActiveSuboptionBadge"
        );
        del_textBlack[0].remove();

        // inserting active subOption badge
        accessibility_textColor3.insertAdjacentHTML(
            "afterend",
            '<i class="textColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("accessibility-text-color3");
        }
    } else if (accessibility_textColor.matches(".textColor3")) {
        // remove the class from card
        accessibility_textColor.classList.remove("textColor3");
        // remove the class from DOM
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("accessibility-text-color3");
        }
        accessibility_textColor.classList.add("textColor4");

        // removing active subOption badge from TAC
        const del_textPurple = document.getElementsByClassName(
            "textColorActiveSuboptionBadge"
        );
        del_textPurple[0].remove();

        // inserting active subOption badge
        accessibility_textColor4.insertAdjacentHTML(
            "afterend",
            '<i class="textColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("accessibility-text-color4");
        }
    } else if (accessibility_textColor.matches(".textColor4")) {
        // Remove class from Card
        accessibility_textColor.classList.remove("textColor4");
        // remove class from DOM
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("accessibility-text-color4");
        }
        accessibility_textColor.classList.add("textColor5");

        // removing active subOption badge from TAC
        const del_textRed = document.getElementsByClassName(
            "textColorActiveSuboptionBadge"
        );
        del_textRed[0].remove();

        // inserting active subOption badge
        accessibility_textColor5.insertAdjacentHTML(
            "afterend",
            '<i class="textColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("accessibility-text-color5");
        }
    } else if (accessibility_textColor.matches(".textColor5")) {
        // remove class from Card
        accessibility_textColor.classList.remove("textColor5");
        // remove class from DOM
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.remove("accessibility-text-color5");
        }

        // removing active subOption badge from TAJ
        const del_textOrange = document.getElementsByClassName(
            "textColorActiveSuboptionBadge"
        );
        del_textOrange[0].remove();

        // removing accessibility active optiom from TEXT ALIGN CARD
        accessibility_textColor.classList.remove("accessibilityActiveOption");

        // showing the icon
        accessibility_textColorIcon.removeAttribute("hidden");

        // showing the sub options
        accessibility_textColorSubOpt.setAttribute("hidden", "hidden");
    } else if (accessibility_textColor.matches(".accessibility-card")) {
        accessibility_textColor.classList.add(
            "accessibilityActiveOption",
            "textColor1"
        );

        // showing the sub options
        accessibility_textColorSubOpt.removeAttribute("hidden");
        // hiding the icon
        accessibility_textColorIcon.setAttribute("hidden", "hidden");

        // inserting active subOption badge
        accessibility_textColor1.insertAdjacentHTML(
            "afterend",
            '<i class="textColorActiveSuboptionBadge fa-solid fa-check"></i>'
        );

        // Applying Styles
        for (let i = 0; i < wafy_typographic_elems.length; i++) {
            wafy_typographic_elems[i].classList.add("accessibility-text-color1");
        }
    }
});
////////////////////////////////////////////



function wake_voice_nav() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {

        //making new speech object
        const recognition = new webkitSpeechRecognition() || SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.start();

        recognition.addEventListener("start", startSpeech);
        function startSpeech() {
            console.log("Speech Recognition is started.");
        }

        recognition.addEventListener("end", recognitionEnd);
        function recognitionEnd() {
            console.log("Recognition is ended.")
        }

        recognition.addEventListener("error", recognitionEnd);
        function recognitionEnd() {
            console.log("There is an error in recognition.")
        }

        recognition.addEventListener("result", speechResult);
        function speechResult(event) {
            console.log(event);
            let final_transcript = "";
            let interim_transcript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript = event.results[i][0].transcript;
                    if (final_transcript.toLocaleLowerCase().includes("start") || final_transcript.toLocaleLowerCase().includes("start listening") || final_transcript.toLocaleLowerCase().includes("hello web") || final_transcript.toLocaleLowerCase().includes("hi web")) {
                        recognition.stop();

                        // Go to a separate function for the interaction
                        voice_navigation();
                    }
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }

            // Displaying and utilizing the resultant transcripts
            // document.querySelector("#final").innerHTML = final_transcript;
            document.querySelector("#interim").innerHTML = interim_transcript;

        }
    }
    else {
        console.log("Speech Recognition is unavailable in your Browser.")
    }
}


// Interactivity Starts Here
function voice_navigation() {

    // Say Greetings to the user
    let utterance = new SpeechSynthesisUtterance("Greatings! You can talk to me now.");
    speechSynthesis.speak(utterance);

    const interaction = new webkitSpeechRecognition() || SpeechRecognition();
    interaction.continuous = true;
    interaction.interimResults = true;

    interaction.start();

    interaction.addEventListener("start", interactionStart);
    function interactionStart() {
        console.log("interaction is Started.");
    }

    interaction.addEventListener("end", interactionEnd);
    function interactionEnd() {
        console.log("Interaction is ended.");

    }

    interaction.addEventListener("result", interactionResult);
    function interactionResult(event) {
        console.log("Interaction Result are here.")
        console.log(event);
        let command_final_transcript = "";
        let command_interim_transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                command_final_transcript = event.results[i][0].transcript;
                // Opening / Clicking links
                if (command_final_transcript.toLocaleLowerCase().includes("go to")) {
                    console.log("go to::::"+command_final_transcript.toLocaleLowerCase())
                    var anchors = document.getElementsByTagName("A");
                    for(let i=0; i<anchors.length;i++){
                        if(anchors[i].innerText.toLocaleLowerCase() == command_final_transcript.toLocaleLowerCase().replace(" go to ")){
                            anchors[i].click();
                            break;
                        }
                    }
                } else if (command_final_transcript.toLocaleLowerCase().includes("open")) {
                    console.log("open::::"+command_final_transcript.toLocaleLowerCase())
                    var anchors = document.getElementsByTagName("A");
                    for(let i=0; i<anchors.length;i++){
                        if(anchors[i].innerText.toLocaleLowerCase() == command_final_transcript.toLocaleLowerCase().replace(" open ")){
                            anchors[i].click();
                            break;
                        }
                    }
                } else if (command_final_transcript.toLocaleLowerCase().includes("scroll up") || command_final_transcript.toLocaleLowerCase().includes("page up")) {
                    window.scrollBy(0, 700);
                } else if (command_final_transcript.toLocaleLowerCase().includes("scroll down") || command_final_transcript.toLocaleLowerCase().includes("page down")) {
                    window.scrollBy(0, -700);
                } else if (command_final_transcript.toLocaleLowerCase().includes("zoom in") || command_final_transcript.toLocaleLowerCase().includes("zoomin")) {
                    document.body.style.transform = 'scale(2)';
                } else if (command_final_transcript.toLocaleLowerCase().includes("zoom out") || command_final_transcript.toLocaleLowerCase().includes("zoomout")) {
                    document.body.style.transform = 'scale(1)';
                } else if (command_final_transcript.toLocaleLowerCase().includes("reload the page") || command_final_transcript.toLocaleLowerCase().includes("reload this page")) {
                    location.reload(true);
                } else if (command_final_transcript.toLocaleLowerCase().includes("go back") || command_final_transcript.toLocaleLowerCase().includes("go to previous page")) {
                    console.log("go back to the previous page.")
                    history.back();
                } else if (command_final_transcript.toLocaleLowerCase().includes("go to next page") || command_final_transcript.toLocaleLowerCase().includes("open next page")) {
                    console.log("go forward to the next page.")
                    history.forward();
                } else if (command_final_transcript.toLocaleLowerCase().includes("read aloud") || command_final_transcript.toLocaleLowerCase().includes("text to speach")) {
                    readAloud();
                }

                // Accessibility Widget Interaction script starts
                else if (command_final_transcript.toLocaleLowerCase().includes("open accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("open accessibility widget")) {
                    accessibility_open_w.click();
                } else if (command_final_transcript.toLocaleLowerCase().includes("close accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("hide accessibility menu") || command_final_transcript.toLocaleLowerCase().includes("remove accessibility menu")) {
                    accessibility_close_w.click();
                }
                // Accessibility Widget Interaction script ends
                else if (command_final_transcript.toLocaleLowerCase().includes("stop listen") || command_final_transcript.toLocaleLowerCase().includes("stop listening")) {
                    interaction.stop();
                }

                //Interacting with the elements

                else if (command_final_transcript.toLocaleLowerCase().includes("home") || command_final_transcript.toLocaleLowerCase().includes("click home")) {
                    const element = document.getElementById("home");
                    element.click();
                }
                else if (command_final_transcript.toLocaleLowerCase().includes("services") || command_final_transcript.toLocaleLowerCase().includes("click services")) {
                    const element = document.getElementById("service");
                    element.click();
                } else if (command_final_transcript.toLocaleLowerCase().includes("pricing") || command_final_transcript.toLocaleLowerCase().includes("click pricing")) {
                    const element = document.getElementById("price");
                    element.click();
                } else if (command_final_transcript.toLocaleLowerCase().includes("contact") || command_final_transcript.toLocaleLowerCase().includes("click contact")) {
                    const element = document.getElementById("cont");
                    element.click();
                }
                // form filling
                // else if (command_final_transcript.toLocaleLowerCase().includes("name") || command_final_transcript.toLocaleLowerCase().includes("click name")) {
                //     const element = document.getElementById("name");
                //     element.focus();

                // } else if (command_final_transcript.toLocaleLowerCase().includes("email") || command_final_transcript.toLocaleLowerCase().includes("click email")) {
                //     const element = document.getElementById("email");
                //     element.focus();
                // } else if (command_final_transcript.toLocaleLowerCase().includes("phone") || command_final_transcript.toLocaleLowerCase().includes("click phone")) {
                //     const element = document.getElementById("phone");
                //     element.focus();
                // } else if (command_final_transcript.toLocaleLowerCase().includes("subject") || command_final_transcript.toLocaleLowerCase().includes("click subject")) {
                //     const element = document.getElementById("subject");
                //     element.focus();
                // } else if (command_final_transcript.toLocaleLowerCase().includes("message") || command_final_transcript.toLocaleLowerCase().includes("click message")) {
                //     const element = document.getElementById("message");
                //     element.focus();
                // } else if (command_final_transcript.toLocaleLowerCase().includes("submit")) {
                //     const element = document.getElementById("submit-message");
                //     element.click();
                // }

            } else {
                command_interim_transcript += event.results[i][0].transcript;
            }
        }

        // Now storing the results in variables
        // document.querySelector("#final").innerHTML = command_final_transcript;
        document.querySelector("#interim").innerHTML = command_interim_transcript;
    }
}



function readAloud() {
    let speechEnable = new SpeechSynthesisUtterance("Text to speech is enabled.");
    window.speechSynthesis.speak(speechEnable);
    var speechRate = 1;
    var isSpeaking = false;

    if (isSpeaking == false) {
        isSpeaking = true;
        console.log('Text to speech is enabled.');

        document.onclick = function (e) {

            // DOM target element
            var targetElement = e.target;

            if (!targetElement.closest('#container-accessibility-widget')) {
                targetElement.classList.add('highlightSpeakingText');
            }
            var text = targetElement.innerHTML;
            if (targetElement.tagName == 'IMG') {
                text = "Image! " + targetElement.getAttribute('alt');
            }
            else if (targetElement.tagName == 'INPUT') {
                text = "Input! " + (targetElement.getAttribute('placeholder') || targetElement.getAttribute('name'));
            }
            else if (targetElement.tagName == 'TEXTAREA') {
                text = "INPUT! " + (targetElement.getAttribute('placeholder') || targetElement.getAttribute('name'));
            }
            else if (targetElement.tagName == 'A') {
                text = "Link! " + targetElement.innerHTML;
            }
            else if (targetElement.tagName === 'H1' || targetElement.tagName === 'H2' || targetElement.tagName === 'H3' || targetElement.tagName === 'H4' || targetElement.tagName === 'H5' || targetElement.tagName === 'H6') {
                text = "Heading! " + targetElement.innerHTML;
            }
            let utterance = new SpeechSynthesisUtterance(text);

            // Speak error
            utterance.onerror = e => {
                console.error('Something went wrong');
            };

            // Cancel speaking if already speaking
            if (synth.speaking) {
                synth.cancel();
            }

            // Setting the speeach rate 0 to 2
            utterance.rate = speechRate;

            // The ultimate sound to be produced
            synth.speak(utterance);

            // Speak end
            utterance.onend = e => {
                console.log('Done speaking.');
                targetElement.classList.remove('highlightSpeakingText');
            };
        }
    }
    else {
        isSpeaking = false;
        console.log('Text to speak is disabled.');
    }
}