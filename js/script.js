// SIEEBAR

const menuitems = document.querySelectorAll('.menu-item');
const menuitems2 = document.querySelectorAll('.sidebend .menu-item2');

// messages
const sidei = document.querySelector('#sidei');
const sidebend = document.querySelector('.sidebend');
const sidebar = document.querySelector('.sidebar');
const messagesnoti = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messagesearch = document.querySelector('#message-search');

// theme
const theme = document.querySelector('#theme');
const themes = document.querySelector('#themes');
const thememod = document.querySelector('.customize-theme');
const fontsize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorpalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



// remove active
const changeactiveitem = () =>{
    menuitems.forEach(item => {
        item.classList.remove('active');
    })
}

menuitems.forEach(item => {
    item.addEventListener('click', () => {
        changeactiveitem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

const changeactiveitem2 = () =>{
    menuitems2.forEach(item => {
        item.classList.remove('active');
    })
}

menuitems2.forEach(item => {
    item.addEventListener('click', () => {
        changeactiveitem2();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.lefti .notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.lefti .notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})



// messages
// search chats
const searchmessage =() =>{
    const val = messagesearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
             user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

// search chat
messagesearch.addEventListener('keyup', searchmessage);

messagesnoti.addEventListener('click', () =>{
    messages.style.boxShadow = '0  0 1rem var(--color-primary)';
    messagesnoti.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})

setTimeout(() => {
    sidebend.style.display = 'none';
}, 7000);

const opensidei = () =>{
    sidebend.style.display = 'block';
    setTimeout(() => {
        sidebend.style.display = 'none';
    }, 15000);
}

sidei.addEventListener('click', opensidei);

// THEME MODAL//display

const openthemesmod = () =>{
    thememod.style.display = 'grid';
}

// THEME MODAL//closing
const closethemesmod = (e) =>{
    if (e.target.classList.contains('customize-theme')) {
        thememod.style.display ='none';
    }
}

thememod.addEventListener('click', closethemesmod);
themes.addEventListener('click', openthemesmod);


// THEME MODAL//display

const openthememod = () =>{
    thememod.style.display = 'grid';
}

// THEME MODAL//closing
const closethememod = (e) =>{
    if (e.target.classList.contains('customize-theme')) {
        thememod.style.display ='none';
    }
}

thememod.addEventListener('click', closethememod);
theme.addEventListener('click', openthememod);


// fonts
const removesize = () => {
    fontsize.forEach(size => {
        size.classList.remove('active');
    });
}

fontsize.forEach(size => {
     size.addEventListener('click', () => {
        removesize();
        let fontsize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontsize = '10px';
            root.style.setProperty('----sticky-top-left', '0rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontsize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontsize = '15px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontsize = '16px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontsize = '17px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // change font size of the root html element and this was possible becoz we used rem*
         document.querySelector('html').style.fontSize = fontsize;
     });
})

// remove active from color
const changeactivecolor = () =>{
    colorpalette.forEach(colorpicker => {
        colorpicker.classList.remove('active');
    })
}


// change color
colorpalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
// remove active from color
        changeactivecolor();

        if (color.classList.contains('color-1')) {
            primaryhue = 252;
        }else if (color.classList.contains('color-2')) {
            primaryhue = 52;
        }else if (color.classList.contains('color-3')) {
            primaryhue = 352;
        }else if (color.classList.contains('color-4')) {
            primaryhue = 152;
        }else if (color.classList.contains('color-5')) {
            primaryhue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryhue);
    })
})


// bg color
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

// change bg color
const changebg = () =>{
    root.style.setProperty('--light-color-lightness', lightcolorlightness);
    root.style.setProperty('--white-color-lightness', whitecolorlightness);
    root.style.setProperty('--dark-color-lightness', darkcolorlightness);
};

bg1.addEventListener('click', () => {
    // add active
    bg1.classList.add('active');
    // remove active
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // remove customised changes from local storage
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '20%';
    lightcolorlightness = '15%';

    // add active
    bg2.classList.add('active');
    // remove active
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
    
});

bg3.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '10%';
    lightcolorlightness = '0%';

    // add active
    bg3.classList.add('active');
    // remove active
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
    
})