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
        document.querySelector('#mouse-scroll').style.visibility = 'hidden';
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
        phoneMenuButton.addEventListener('mouseover', () => {
            phoneMenuButton.style.transform = 'translateY(0px) scale(0.9)';
        })
        phoneMenuButton.addEventListener('mouseout', () => {
            phoneMenuButton.style.transform = 'translateY(0px) scale(1.00)';
        })
        nav.classList.add("navbar-scrolled");
    } else {
        document.querySelector('#mouse-scroll').style.visibility = 'visible';
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
            homepage.style.transform = 'scale(1.10)';
            setTimeout(() => {
                document.querySelector('.title-line').style.transform = 'scaleX(0)';
                document.querySelector('.title-line').style.transform = 'scaleX(1)';
            }, 850);

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
        document.querySelector('.title-line').style.transform = 'scaleX(1)';
        document.querySelector('.hp-line').style.transform = 'scaleX(1)';
    }
}

// Call introAnim on page load
introAnim();


// homepage typewriter text in multiple lines instead of one
function adjustHomepageForMobile() {
    var screenWidth = window.innerWidth;
    var homepage = document.querySelector('.homepage'); // Get the homepage element
    var mouseScrollBox = document.querySelector('#mouse-scroll-box');
    var homepageText = document.querySelector('.homepage-text');
    
    if (screenWidth <= 600) {
        homepageText.innerHTML = '';

        var text2box = homepageText.cloneNode();
        var text3box = homepageText.cloneNode();

        var text1 = document.createElement('h3');
        text1.className = 'homepage-text';
        text1.innerHTML = 'PRIVATE, PERSONALIZED';
        text1.style.animation = 'typing 0.4s steps(40, end) forwards, blink-caret .4s step-end 0s';
        text1.style.border = 'transparent';
        text1.style.animationDelay = '2.35s';
        text1.style.textAlign = 'center';

        var text2 = text1.cloneNode(true);
        text2.innerHTML = 'TUTORING FOR STUDENTS';
        text2.style.animationDelay = '2.75s';

        var text3 = text1.cloneNode(true);
        text3.innerHTML = 'IN <b id="charlotte">BALLANTYNE, CHARLOTTE.</b>';
        text3.style.animationDelay = '3.15s';

        text2box.appendChild(text2);
        text3box.appendChild(text3);

        homepageText.appendChild(text1);
        homepage.insertBefore(text2box, mouseScrollBox);
        homepage.insertBefore(text3box, mouseScrollBox);
    } else {
        homepageText.innerHTML = '';

        var h3 = document.createElement('h3');
        h3.className = 'homepage-text';
        h3.style.animation = 'typing 1.2s steps(40, end) forwards, blink-caret .75s step-end infinite';
        h3.style.borderColor = 'transparent';
        h3.style.animationDelay = '2.35s';
        h3.innerHTML = 'PRIVATE, PERSONALIZED TUTORING FOR STUDENTS IN <b id="charlotte">BALLANTYNE, CHARLOTTE.</b>';
        
        homepageText.appendChild(h3);
    }
}

// Add event listeners
window.addEventListener('load', adjustHomepageForMobile);


// phone-menu-item effect of hovering over different items
const navPhoneItems = document.querySelectorAll('.phone-menu-tools > a:not(:first-child), .phone-curriculum-dropdown');
navPhoneItems.forEach(item => {
  // Add hover effect to each item
  item.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.10) translateX(14px)';
    document.querySelector('.phone-menu-tools > :first-child').style.transform = 'scale(1)';
    document.querySelector('.phone-menu-tools > :first-child').style.opacity = '.75';
  });

  item.addEventListener('mouseout', (event) => {
    event.target.style.transform = 'scale(1.0)';
    document.querySelector('.phone-menu-tools > :first-child').style.transform = 'scale(1.10) translateX(14px)';
    document.querySelector('.phone-menu-tools > :first-child').style.opacity = '1';
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


// nav-item effect of hovering over different items
const navItems = document.querySelectorAll('.nav-tools > a:not(:first-child), .curriculum-dropdown');
navItems.forEach(item => {
  // Add hover effect to each item
  item.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.05)';
    document.querySelector('.nav-tools > :first-child').style.transform = 'scale(1)';
    document.querySelector('.nav-tools > :first-child').style.opacity = '.85';
  });

  item.addEventListener('mouseout', (event) => {
    event.target.style.transform = 'scale(1.0)';
    document.querySelector('.nav-tools > :first-child').style.transform = 'scale(1.05)';
    document.querySelector('.nav-tools > :first-child').style.opacity = '1';
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
        document.querySelector('.nav-tools > :first-child').style.transform = 'scale(1)';
        document.querySelector('.nav-tools > :first-child').style.opacity = '.85';
    });
    item.addEventListener('mouseout', () => {
        document.querySelector('.curriculum-dropdown').style.transform = 'scale(1.0)';
        document.querySelector('.curriculum-dropdown').style.opacity = '.85';
        document.querySelector('.dropdown-arrow').style.transform = 'translateY(0px) rotate(45deg)';
        document.querySelector('.dropdown-arrow').style.borderBottom = '1px solid white';
        document.querySelector('.dropdown-arrow').style.borderRight = '1px solid white';
        document.querySelector('.dropdown-arrow').style.backgroundColor = 'transparent';
        document.querySelector('.nav-tools > :first-child').style.transform = 'scale(1.05)';
        document.querySelector('.nav-tools > :first-child').style.opacity = '1';
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
const body0Services = document.querySelectorAll('.body0 .service-box');
body0Services.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'translateX(0) translateY(-15px) scale(1.02)';
        service.style.transition = '0.4s ease-in-out';
        service.style.color = 'whitesmoke';
    })
    service.addEventListener('mouseout', () => {
        service.style.transform = 'translateX(0)';
        service.style.color = 'white';
    })
})


//shows elements as user scrolls to bottom
function applyStylesOnScroll() {
    //body0 segments
    const body0Seg1Line = document.querySelector('.body0-section:first-child .body0-line');
    const body0Seg1Heading = document.querySelector('.body0-section:first-child .body0-heading');
    const body0Seg1Content = document.querySelector('.body0-section:first-child .body0-indent .body0-indent');
    if (isInViewport(body0Seg1Heading, 0)) {
        setTimeout(() => {
            body0Seg1Line.style.transform = 'translateX(0)';
            body0Seg1Line.style.opacity = '1';
            setTimeout(() => {
                body0Seg1Heading.style.transform = 'translateX(0)';
                body0Seg1Heading.style.opacity = '1';
                setTimeout(() => {
                    body0Seg1Content.style.transform = 'translateX(0)';
                    body0Seg1Content.style.opacity = '1';
                }, 200);
            }, 200);
        }, 150);
    };
    const body0Seg2TitleBox = document.querySelector('.body0-sec2-title-box');
    const body0Seg2Service1Heading = document.querySelector('.body0-section:last-child .service-box:first-child .service-heading');
    const body0Seg2Line = document.querySelector('.body0-section:last-child .body0-line');
    const firstService = document.querySelector('.body0-section:last-child .service-box:first-child');
    const secondService = document.querySelector('.body0-section:last-child .service-box:nth-child(2)');
    const thirdService = document.querySelector('.body0-section:last-child .service-box:last-child');
    if (isInViewport(body0Seg2TitleBox)) {
        setTimeout(() => {
            body0Seg2Line.style.transform = 'translateX(0)';
            body0Seg2Line.style.opacity = '1';
            setTimeout(() => {
                body0Seg2TitleBox.style.transform = 'translateX(0)';
                body0Seg2TitleBox.style.opacity = '1';
            }, 100)
        }, 150);

    }
    if (isInViewport(body0Seg2Service1Heading, 50)) {
        setTimeout(() => {
            firstService.style.transform = 'translateY(0)';
            firstService.style.opacity = '1';
            setTimeout(() => {
                thirdService.style.transform = 'translateY(0)';
                thirdService.style.opacity = '1';
                setTimeout(() => {
                    secondService.style.transform = 'translateY(0)';
                    secondService.style.opacity = '1';
                }, 100);
            }, 100) 
        }, 100);

    }

    // body1 segments
    const body1Segs = document.querySelectorAll('.body1-segment');
    body1Segs.forEach(body1Seg => {
        if (body1Seg && isInViewport(body1Seg, 300)) {
            body1Seg.style.transform = 'translateY(0)';
            body1Seg.style.opacity = '1';
        }
    });

    //reviews
    const reviewLineBoxes = document.querySelectorAll('.reviews-first-line-box, .reviews-second-line-box');
    const reviewLines = document.querySelectorAll('.reviews-first-line, .reviews-second-line');
    const firstReview = document.querySelector('.review-item:first-child');
    const secondReview = document.querySelector('.review-item:nth-child(2)');
    const thirdReview = document.querySelector('.review-item:last-child');
    if (isInViewport(reviewLineBoxes[0], 50)) {
        setTimeout(() => {
            reviewLines.forEach(line => {
                line.style.opacity = '1';
                if (line.classList.contains('reviews-second-line')) {
                    line.style.transform = 'translateX(0) rotate(180deg)';
                } else {
                    line.style.transform = 'translateX(0)';
                }
            });
            setTimeout(() => {
                firstReview.style.opacity = '1';
                firstReview.style.transform = 'translateY(0)';
            }, 200);
            setTimeout(() => {
                secondReview.style.opacity = '1';
                secondReview.style.transform = 'translateY(0)';
            }, 400);
            setTimeout(() => {
                thirdReview.style.opacity = '1';
                thirdReview.style.transform = 'translateY(0)';
            }, 300);
        }, 200);
    } 
    if (isInViewport(secondReview, 50)) {
        document.querySelector('.reviews').style.opacity = '1';
    } else {
        document.querySelector('.reviews').style.opacity = '0.6';
    };
    const Reviews = document.querySelectorAll('.review-item');
    Reviews.forEach(review => {
        review.addEventListener('mouseover', () => {
            review.style.transform = 'translateY(0) scale(0.98)';
            review.style.transition = '0.5s ease-in-out';
        });
        review.addEventListener('mouseout', () => {
            review.style.transform = 'translateY(0) scale(1.00)';
        });
        review.addEventListener('mousedown', () => {
            review.style.transform = 'translateY(0) scale(0.95)';
            review.style.transition = '0.5s ease-in-out';
            review.style.opacity = '0.8';
        });
        review.addEventListener('mouseup', () => {
            review.style.transform = 'translateY(0) scale(0.98)';
            review.style.opacity = '1';
        });
    })

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


