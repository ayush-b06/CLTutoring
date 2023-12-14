const nav = document.querySelector('nav');;
const navElements = document.querySelector('.nav-elements');
const phoneMenuButton = document.getElementById('phone-menu-button');
const navLogo = document.querySelector('.nav-logo-box');
const mouseScroll = document.querySelector('#mouse-scroll');

//AFTER your done fixing this, make a new function called isuseronphone, that HAS phonenav in it
function navMenuButton() {
    const devWidth = window.innerWidth;
    const userPhone = devWidth < 1520;
    const userScroll = window.scrollY;
    if (userPhone) {
        nav.style.padding = '0px';
        document.querySelector('#mouse-scroll').style.display = 'none';
        Array.from(navElements.children).forEach(child => {
            if (!child.classList.contains('nav-logo-box') && child.id !== 'phone-menu-button') {
                child.style.opacity = '0';
                child.style.transform = "translateY(-100px)";
                child.style.transition = "0.5s ease-in-out";
                child.style.display = "none";
            } else {
                child.style.opacity = '1';
                child.style.display = 'flex';
                child.style.transform = 'translateY(0px)';
                child.style.display = "flex";
                if (child.classList.contains('nav-logo-box')) { //makes nav-logo absolute on phone
                    child.style.position = 'absolute';
                    child.style.left = '5%';
                    child.style.width = 'auto';
                }
            }
            // Exclude specific elements by ID and class{
        });
        nav.classList.add("navbar-scrolled");
    } else {
        document.querySelector('#mouse-scroll').style.display = 'block';
        Array.from(navElements.children).forEach(child => {
            if (child.id !== 'phone-menu-button' && !child.classList.contains('nav-logo')) {
                child.style.opacity = '1';
                child.style.display = 'flex';
                child.style.transform = 'translateY(0px)';
            }
            if (child.classList.contains('nav-logo-box')) {
                child.style.position = 'relative';
                child.style.removeProperty("left");
                child.style.width = '308px';
            }
        })
        phoneMenuButton.style.opacity = '0';
        phoneMenuButton.style.transform = 'translateY(-100px)';
        nav.classList.remove("navbar-scrolled");
    }
    if (userScroll > 200 && !userPhone) {
        nav.addEventListener("mouseover", () => {
            nav.classList.add("navbar-hovered");
            nav.style.transition = "1s ease-out";
        })
        nav.addEventListener("mouseout", () => {
            nav.classList.remove("navbar-hovered");
            setTimeout(() => {
                nav.style.removeProperty("transition"); //removes style after transition occurs
            }, 1500)
        })
    }  if (!(userScroll > 200) && !userPhone) {
        nav.addEventListener("mouseover", () => {
            nav.classList.remove("navbar-hovered");
            setTimeout(() => {
                nav.style.removeProperty("transition"); //removes style after transition occurs
            }, 1500);
        })
    }
    if (userScroll == 0) { // if user scrolls, hovers navbar, then scrolls up while hovering
        nav.classList.remove("navbar-scrolled");
    }
}

window.addEventListener("load", navMenuButton);
window.addEventListener("resize", navMenuButton);
window.addEventListener('scroll', navMenuButton);

document.addEventListener('DOMContentLoaded', () => {
    phoneMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

const homepage = document.querySelector('.homepage');
async function introAnim() {
    // Check if the animation has already been played in this session
    if (!sessionStorage.getItem('introPlayed')) {
        setTimeout(() => {
            // Animation logic
            document.body.classList.add('no-scroll');
            nav.style.transform = 'translateY(-100px)';
            nav.style.opacity = '0';
            nav.style.transition = '1s ease-in-out';

            document.querySelector('.hp-line').style.transform = 'scaleX(0)';

            setTimeout(() => {
                nav.style.transform = 'translateY(0px)';
                nav.style.opacity = '1';
                document.body.classList.remove('no-scroll');
                homepage.style.transform = 'scale(1.00)';
                document.querySelector('.hp-line').style.transform = 'scaleX(1)';
                setTimeout(() => {
                    mouseScroll.style.opacity = '0.8';
                    mouseScroll.style.visibility = 'visible';
                    mouseScroll.style.transform = 'translateY(0px)';
                }, 2000);
                // Set the session storage to indicate the intro has been played
                sessionStorage.setItem('introPlayed', 'true');
            }, 2150);
        }, 0);
        
        
    } else {
        // If the intro has already been played, we skip it and set the page to its normal state
        document.body.classList.remove('no-scroll');
        nav.style.transform = 'translateY(0px)';
        nav.style.opacity = '1';
        homepage.style.transform = 'scale(1.00)';
        setTimeout(() => {
            mouseScroll.style.opacity = '0.8';
            mouseScroll.style.visibility = 'visible';
            mouseScroll.style.transform = 'translateY(0px)';
        }, 4000)
        setTimeout(() => {
            document.querySelector('.hp-line').style.transform = 'scaleX(1)';
        }, 1);
    }
}

// Call introAnim on page load
introAnim();


// homepage typewriter text in multiple lines instead of one
function adjustHomepageForMobile() {
    var screenWidth = window.innerWidth;
    var homepage = document.querySelector('.homepage'); // Get the homepage element
    var homepageTextBox = document.querySelector('.homepage-text-box');
    var homepageText = document.querySelector('.homepage-text');
    
    if (screenWidth <= 600) {
        homepageText.innerHTML = '';

        var text2box = homepageText.cloneNode();
        var text3box = homepageText.cloneNode();

        var text1 = document.createElement('h3');
        text1.className = 'homepage-text';
        text1.innerHTML = 'THE <b id="charlotte">MISSION</b> BEHIND';
        text1.style.animation = 'typing 0.4s steps(40, end) forwards, blink-caret .4s step-end 0s';
        text1.style.border = 'transparent';
        text1.style.animationDelay = '1s';
        text1.style.textAlign = 'center';

        var text2 = text1.cloneNode(true);
        text2.innerHTML = '<b id="charlotte">CLTUTORING.</b>';
        text2.style.animation = 'typing 0.3s steps(40, end) forwards, blink-caret .4s step-end 0s';
        text2.style.animationDelay = '1.4s';

        // var text3 = text1.cloneNode(true);
        // text3.innerHTML = 'FOR STUDENTS LIKE <b id="charlotte">YOU.</b>';
        // text3.style.animationDelay = '3.15s';

        text2box.appendChild(text2);

        homepageText.appendChild(text1);
        homepageTextBox.appendChild(text2box);
    }
}

// Add event listeners
window.addEventListener('load', adjustHomepageForMobile);


// phone-menu-item effect of hovering over different items
const navPhoneItems = document.querySelectorAll('.phone-menu-tools > a:not(:nth-child(2)), .phone-curriculum-dropdown');
navPhoneItems.forEach(item => {
  // Add hover effect to each item
  item.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.10) translateX(2px)';
    document.querySelector('.phone-menu-tools > :nth-child(2)').style.transform = 'scale(1)';
    document.querySelector('.phone-menu-tools > :nth-child(2)').style.opacity = '.75';
  });

  item.addEventListener('mouseout', (event) => {
    event.target.style.transform = 'scale(1.0)';
    document.querySelector('.phone-menu-tools > :nth-child(2)').style.transform = 'scale(1.10) translateX(2px)';
    document.querySelector('.phone-menu-tools > :nth-child(2)').style.opacity = '1';
  });

    // Prevent hover effect when hovering over 'dropdown-arrow'
    const phoneDropdownArrows = item.querySelectorAll('.phone-dropdown-arrow');
    phoneDropdownArrows.forEach(arrow => {
      arrow.addEventListener('mouseover', (event) => {
        event.stopPropagation(); // Stop the event from bubbling up to the item
      });
      arrow.addEventListener('mouseout', (event) => {
        event.stopPropagation(); // Stop the event from bubbling up to the item
      });
    });
});
// if phone-curriculum-dropdown is tapped, show dropdown-box
const phoneCurriculumDropdown = document.querySelector('.phone-curriculum-dropdown');
phoneCurriculumDropdown.addEventListener('click', () => {
    
})

// // if phone-curriculum-dropdown is tapped, show dropdown-box
// const phoneCurriculumDropdown = document.querySelector('.phone-curriculum-dropdown');
// phoneCurriculumDropdown.addEventListener('click', () => {
    
// })
// JavaScript

let scrollPosition = 0;

function disableScroll() {
    document.body.style.overflow = 'hidden'; // Prevent scrolling by hiding overflow
}

function enableScroll() {
    document.body.style.overflow = ''; // Re-enable scrolling by showing overflow
}



const phoneMenuButtonLines = document.querySelectorAll('#phone-menu-button > div > div');
phoneMenuButton.addEventListener('mouseover', () => {
    phoneMenuButton.style.transform = 'translateY(0px) scale(0.9)';
})
phoneMenuButton.addEventListener('mouseout', () => {
    phoneMenuButton.style.transform = 'translateY(0px) scale(1.00)';
})

let canClick = true;
//shows phone menu when phoneMenuButton is clicked
const phoneMenu = document.querySelector('#phone-menu');
function showPhoneMenu() {
    if (!canClick) return;
    canClick = false;

    if(phoneMenu.style.transform === 'translateX(100vw)') {
        phoneMenu.style.display = 'flex';

        document.querySelectorAll('body > *').forEach(bodyItem => {
            if (bodyItem != phoneMenu) {
                bodyItem.style.transition = '1s ease-in-out';
                bodyItem.classList.add('blur');
            }
            localStorage.setItem('phoneMenuClicked', 'true');
        })
        nav.style.filter = 'blur(0)';
        navLogo.classList.add('blur');
        navLogo.style.transition = '1s ease-in-out';
        setTimeout(() => {
            phoneMenu.style.transform = 'translateX(0)';
        }, 100);
        disableScroll();
        phoneMenuButtonLines[0].style.width = '100%';
        phoneMenuButtonLines[2].style.width = '100%';
        setTimeout(() => {
            phoneMenuButtonLines[0].style.transform = ' translateY(12.5px) rotate(135deg)';
            phoneMenuButtonLines[1].style.opacity = '0';
            phoneMenuButtonLines[2].style.transform = 'translateY(-12.5px) rotate(45deg)';
        }, 250);
    } else {
        document.querySelectorAll('body > *').forEach(bodyItem => {
            bodyItem.classList.remove('blur');
            setTimeout(() => { //so when removing blur, it still takes 1s
                bodyItem.style.removeProperty('transition');
                phoneMenu.style.display = 'none';
                enableScroll();
            }, 400)
            localStorage.setItem('phoneMenuClicked', 'false');
        })
        navLogo.classList.remove('blur');
        setTimeout(() => {
            navLogo.style.removeProperty('transition');
        }, 1000)
        phoneMenu.style.transform = 'translateX(100vw)';
        phoneMenuButtonLines[0].style.transform = 'none';
        phoneMenuButtonLines[1].style.opacity = '1';
        phoneMenuButtonLines[2].style.transform = 'none';
        setTimeout(() => {
            phoneMenuButtonLines[0].style.width = '70%';
            phoneMenuButtonLines[2].style.width = '50%';
        }, 250);
    }
    setTimeout(() => {
        canClick = true;
    }, 500);
} 
phoneMenuButton.addEventListener('click', showPhoneMenu);

// nav-item effect of hovering over different items
const navItems = document.querySelectorAll('.nav-tools > a:not(:nth-child(2)), .curriculum-dropdown');
navItems.forEach(item => {
  // Add hover effect to each item
  item.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.05)';
    document.querySelector('.nav-tools > :nth-child(2)').style.transform = 'scale(1)';
    document.querySelector('.nav-tools > :nth-child(2)').style.opacity = '.85';
  });

  item.addEventListener('mouseout', (event) => {
    event.target.style.transform = 'scale(1.0)';
    document.querySelector('.nav-tools > :nth-child(2)').style.transform = 'scale(1.05)';
    document.querySelector('.nav-tools > :nth-child(2)').style.opacity = '1';
  });

  // Prevent hover effect when hovering over 'dropdown-arrow'
  const dropdownArrows = item.querySelectorAll('.dropdown-arrow');
  dropdownArrows.forEach(arrow => {
    arrow.addEventListener('mouseover', (event) => {
      event.stopPropagation(); // Stop the event from bubbling up to the item
    });
    arrow.addEventListener('mouseout', (event) => {
      event.stopPropagation(); // Stop the event from bubbling up to the item
    });
  });
});


// when curriculum navbar-heading, or the dropdown box is hovered, the navbar links adjust opacity + transformation
const curriculum = document.querySelectorAll('.curriculum-dropdown-content, .curriculum-dropdown')
curriculum.forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelector('.curriculum-dropdown').style.transform = 'scale(1.05)';
        document.querySelector('.curriculum-dropdown').style.opacity = '1';
        document.querySelector('.dropdown-arrow').style.transform = 'translateY(27px) rotate(-135deg)';
        document.querySelector('.dropdown-arrow').style.borderBottom = '1px solid #675879';
        document.querySelector('.dropdown-arrow').style.borderRight = '1px solid #675879';
        document.querySelector('.dropdown-arrow').style.backgroundColor = '#33004D';
        document.querySelector('.nav-tools > :nth-child(2)').style.transform = 'scale(1)';
        document.querySelector('.nav-tools > :nth-child(2)').style.opacity = '.85';
    });
    item.addEventListener('mouseout', () => {
        document.querySelector('.curriculum-dropdown').style.transform = 'scale(1.0)';
        document.querySelector('.curriculum-dropdown').style.opacity = '.85';
        document.querySelector('.dropdown-arrow').style.transform = 'translateY(0px) rotate(45deg)';
        document.querySelector('.dropdown-arrow').style.borderBottom = '1px solid white';
        document.querySelector('.dropdown-arrow').style.borderRight = '1px solid white';
        document.querySelector('.dropdown-arrow').style.backgroundColor = 'transparent';
        document.querySelector('.nav-tools > :nth-child(2)').style.transform = 'scale(1.05)';
        document.querySelector('.nav-tools > :nth-child(2)').style.opacity = '1';
    });
})


//shows curriculum dropdown when curriculum navbar-heading is hovered
const curriculumDropdown2 = document.querySelector('.curriculum-dropdown-content-box');
document.querySelectorAll('.curriculum-dropdown, .curriculum-dropdown-content').forEach(item => {
    item.addEventListener('mouseover', () => {
        curriculumDropdown2.style.opacity = '1';
        curriculumDropdown2.style.visibility = 'visible';
    });
    item.addEventListener('mouseout', () => {
        curriculumDropdown2.style.opacity = '0';
        curriculumDropdown2.style.visibility = 'hidden';
    });
})





// the below until 5 space marks is all chatgpt, i had a ton of trouble with little bugs and this dude went all out so don't ask me abt the code 😭

// Shows curriculum links when each curriculum-heading is hovered
const curriculumDropdown = document.querySelector('.curriculum-dropdown-content-box');
let mouseOverTimeout;

document.querySelectorAll('.curriculum-dropdown, .curriculum-dropdown-content').forEach(item => {
    item.addEventListener('mouseover', () => {
        clearTimeout(mouseOverTimeout); // Clear any running timeout
        curriculumDropdown.style.opacity = '1';
        curriculumDropdown.style.visibility = 'visible';
    });
    item.addEventListener('mouseout', () => {
        // Debounce the mouseout event
        mouseOverTimeout = setTimeout(() => {
            curriculumDropdown.style.opacity = '0';
            curriculumDropdown.style.visibility = 'hidden';
        }, 100); // A smaller delay for mouseout
    });
});

// Shows curriculum links when each curriculum-heading is hovered
const curriculumHeadings = document.querySelectorAll('.curriculum-heading');

curriculumHeadings.forEach(heading => {
    const linksBox = heading.nextElementSibling; // Assumes links box is the next sibling
    let isMouseOverLinks = false; // Flag to track mouse hover state

    // Add event listeners for each curriculum link
    const curriculumLinks = linksBox.querySelectorAll('.curriculum-link');
    curriculumLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            isMouseOverLinks = true; // Set the flag to true when mouse is over a link
            link.style.opacity = '1'; // Full opacity on hover
        });
        link.addEventListener('mouseout', () => {
            isMouseOverLinks = false; // Set the flag to false when mouse leaves a link
            link.style.opacity = '0.8'; // Return to initial opacity
        });
    });

    linksBox.addEventListener('mouseover', () => {
        isMouseOverLinks = true;
        linksBox.style.visibility = 'visible'; // Keep the links visible when hovered
    });

    let mouseOutTimeout; // Timeout for debounce
    linksBox.addEventListener('mouseout', () => {
        // Debounce the mouseout event
        mouseOutTimeout = setTimeout(() => {
            if (!isMouseOverLinks) {
                linksBox.style.visibility = 'hidden';
                hideLinksWithAnimation(linksBox);
            }
        }, 100); // A smaller delay for mouseout
    });

    heading.addEventListener('mouseover', () => {
        clearTimeout(mouseOutTimeout); // Clear any running timeout
        linksBox.style.visibility = 'visible';
        showLinksWithAnimation(linksBox);
    });

    heading.addEventListener('mouseout', () => {
        // Debounce the mouseout event
        mouseOutTimeout = setTimeout(() => {
            if (!isMouseOverLinks) {
                linksBox.style.visibility = 'hidden';
                hideLinksWithAnimation(linksBox);
            }
        }, 100); // A smaller delay for mouseout
    });
});

// Function to show links with animation
function showLinksWithAnimation(linksBox) {
    linksBox.querySelectorAll('.curriculum-link').forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = 'translateX(0)';
            link.style.opacity = '0.8';
        }, 100 * index); // Stagger the animation
    });
}

// Function to hide links with reverse animation
function hideLinksWithAnimation(linksBox) {
    const links = linksBox.querySelectorAll('.curriculum-link');
    Array.from(links).reverse().forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = 'translateX(10px)';
            link.style.opacity = '0';
        }, 100 * (links.length - index - 1)); // Stagger the animation in reverse
    });
}

// end of chatgpt work





// Function to show links with animation
function showLinksWithAnimation(linksBox) {
    linksBox.querySelectorAll('.curriculum-link').forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = 'translateX(0)';
            link.style.opacity = '0.8';
        }, 100 * index); // Stagger the animation
    });
}

// Function to hide links with reverse animation
function hideLinksWithAnimation(linksBox) {
    const links = linksBox.querySelectorAll('.curriculum-link');
    Array.from(links).reverse().forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = 'translateX(10px)';
            link.style.opacity = '0';
        }, 100 * (links.length - index - 1)); // Stagger the animation in reverse
    });
}




// Function to check if an element is FULLY in the viewport with tolerance
function isInViewport(element, tolerance = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 - tolerance &&
        rect.left >= 0 - tolerance &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + tolerance &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + tolerance
    );
}

//the services on body0 have transform: translateX(0); applied so hover effects:
const body0Workshops = document.querySelectorAll('.about-body1 .workshop-box');
body0Workshops.forEach(workshop => {
    workshop.addEventListener('mouseover', () => {
        workshop.style.transform = 'translateY(10px) scale(0.97)';
        workshop.style.transition = '0.4s ease-in-out';
        workshop.style.color = 'whitesmoke';
    })
    workshop.addEventListener('click', () => {
        window.location.href = 'https://tally.so/r/nGRj1p';
    });
})
body0Workshops.forEach(workshop => {
    workshop.addEventListener('mouseout', () => {
        workshop.style.transform = 'translateX(0)';
        workshop.style.color = 'white';
    })
})

// Get the elements
const slides = document.querySelectorAll('.slideshow-sec');
const nextArrow = document.querySelectorAll('.slideshow-arrow')[1]; // Assuming the second arrow is the 'next' arrow
const prevArrow = document.querySelectorAll('.slideshow-arrow')[0]; // Assuming the first arrow is the 'prev' arrow
const indicators = document.querySelectorAll('.slider'); // Get the slider indicators if you have them
const slideChangers = document.querySelectorAll('.slideshow-arrow, .slider');

let currentSlide = 0;

slideChangers.forEach(slide => {
    slide.addEventListener('click', () => {
        if (slide == nextArrow || slide == indicators[1]) {
            const nextSlideIndex = (1); //currentSlide + 1) % slides.length; // Wrap around to the first slide
            goToSlide(nextSlideIndex);
            prevArrow.style.visibility = 'visible';
            prevArrow.style.opacity = '1';
            nextArrow.style.visibility = 'hidden';
            nextArrow.style.opacity = '0';
        } else if (slide == prevArrow || slide == indicators[0]) {
            const prevSlideIndex = (0) //currentSlide - 1 + slides.length) % slides.length; // Wrap around to the last slide
            goToSlide(prevSlideIndex);
            nextArrow.style.visibility = 'visible';
            nextArrow.style.opacity = '1';
            prevArrow.style.visibility = 'hidden';
            prevArrow.style.opacity = '0';
        };
    });
})
// Function to go to a specific slide
function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 105}%)`;
    // Update indicator style if you have indicators
    if (indicators[index]) {
      indicators[index].style.opacity = index === slideIndex ? '1' : '0.45';
    }
  });
  // Update the current slide index
  currentSlide = slideIndex;
}

// Set up event listeners for arrows

// Initialize the slideshow by showing the first slide
goToSlide(0);



//shows elements as user scrolls to bottom
function applyStylesOnScroll() {
    //body0
    const body0 = document.querySelector('.about-body0');
    const body0Heading = document.querySelector('.about-body0 .slideshow-heading')
    if (isInViewport(body0Heading)) {
        body0.style.transform = 'translateY(0px)';
        body0.style.opacity = '1';
    }
    const body0Line = document.querySelector('.line');
    if (isInViewport(body0Line, 50)) {
        body0Line.style.transform = 'translateY(0px) scaleX(1)';
        body0Line.style.opacity = '1'
    }

    //body1 workshops
    const body1HeadingBox = document.querySelector('.about-body1 .title-box-left');
    const body1TitleBox = document.querySelector('.about-body1 .title-box');
    const body1LearnMoreButton = document.querySelector('.about-body1 .title-box .learn-more-button');
    const body1Workshops = document.querySelectorAll('.workshop-box');
    const body1Workshop1Img= document.querySelector('.workshop-box:first-child .workshop-img');
    if (isInViewport(body1HeadingBox)) {
        body1TitleBox.style.transform = 'translateY(0px)';
        body1TitleBox.style.opacity = '1';
        body1LearnMoreButton.style.opacity= '1';
    }
    if (isInViewport(body1Workshop1Img, 100)) {
        body1Workshops[0].style.transform = 'translateY(0)';
        body1Workshops[0].style.opacity = '1';
        setTimeout(() => {
            body1Workshops[2].style.transform = 'translateY(0)';
            body1Workshops[2].style.opacity = '1';
            setTimeout(() => {
                body1Workshops[1].style.transform = 'translateY(0)';
                body1Workshops[1].style.opacity = '1';
            }, 100);
        }, 100);
    }
    
    // passion section
    const passionSec1 = document.querySelector('.about-body1 .passion-heading');
    const passionSec2 = document.querySelector('.about-body1 .passion-desc-box');
    if (isInViewport(passionSec1)) {
        passionSec1.style.opacity = '1';
        passionSec1.style.transform = 'translateX(0)';
        setTimeout(() => {
            passionSec2.style.opacity = '1';
            passionSec2.style.transform = 'translateX(0)';
        }, 150);
    }

    // footer
    const footer = document.querySelector('.footer');
    const footerLine = document.querySelector('.footer-line');

    if (footerLine && isInViewport(footerLine)) {
        footerLine.style.transform = 'scaleX(1)';
    }
    if (footer && isInViewport(footerLine)) {
        document.querySelectorAll('.footer .social-media, .footer-tools').forEach(item => {
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
            setTimeout(() => {
                document.querySelector('.footer-message').style.opacity = '1';
            }, 500);
        }, 500);
        })
    }
}


window.addEventListener('scroll', applyStylesOnScroll);
document.addEventListener("load", applyStylesOnScroll);


//right arrow animation for curriculum dropdown links (needs .curriculum-heading so that the heading is opacity(1) when the heading is hovered)
const curriculumHoverables = document.querySelectorAll('.curriculum-link, .curriculum-heading');
curriculumHoverables.forEach(link => {
    link.addEventListener('mouseover', () => {
        const arrow = link.querySelector('.right-arrow');
        if (arrow) {
            arrow.style.transform = "translateX(0)";
            arrow.style.opacity = "1";
        }
        // Find the common ancestor .curriculum-subject
        const subject = link.closest('.curriculum-subject');
        // From the ancestor, find the .curriculum-heading to change its opacity
        const heading = subject.querySelector('.curriculum-heading');
        if (heading) {
            heading.style.opacity = '1';
        }
    });

    link.addEventListener('mouseout', () => {
        const arrow = link.querySelector('.right-arrow');
        if (arrow) {
            arrow.style.transform = "translateX(-20px)";
            arrow.style.opacity = "0";
        }
        // Find the common ancestor .curriculum-subject
        const subject = link.closest('.curriculum-subject');
        // From the ancestor, find the .curriculum-heading to change its opacity
        const heading = subject.querySelector('.curriculum-heading');
        if (heading) {
            heading.style.opacity = '0.8';
        }
    });
});


//right arrow animation for footer links
const footerSections = document.querySelectorAll('.footer-section');

footerSections.forEach(section => {
  const links = section.querySelectorAll('*:not(a:first-of-type)');
  
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      const arrow = link.querySelector('.right-arrow');
      if (arrow) {
        arrow.style.transform = "translateX(0)";
        arrow.style.opacity = "0.8";
      }
    });

    link.addEventListener('mouseout', () => {
      const arrow = link.querySelector('.right-arrow');
      if (arrow) {
        arrow.style.transform = "translateX(-20px)";
        arrow.style.opacity = "0";
      }
    });
  });
});

document.querySelector('.footer-message > div:first-of-type').addEventListener('mouseover', () => {
    document.querySelector('.footer-message_underline').style.transform = 'scaleX(1)';
})
document.querySelector('.footer-message > div:first-of-type').addEventListener('mouseout', () => {
    document.querySelector('.footer-message_underline').style.transform = 'scaleX(0)';
})


