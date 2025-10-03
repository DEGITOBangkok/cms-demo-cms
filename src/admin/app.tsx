import type { StrapiApp } from '@strapi/strapi/admin';

const config = {
    translations: {
        en: {
            "app.components.LeftMenu.navbrand.title": "CMS workplace",
            "Auth.form.welcome.title": " ",
            "Auth.form.welcome.subtitle": "Log in to your CMS",
            "content-manager.components.LeftMenu.single-types": "Pages",
            "content-manager.components.LeftMenu.content-types": "Pages",
            "app.components.HomePage.welcomeBlock.content": "ยินดีต้อนรับ Admin ท่านเป็นสำคัญในการบริหารจัดการ CMS ของ Thainamthip ท่านมีอำนาจและความรับผิดชอบในการกำหนดค่าและปรับแต่งเว็บไซต์อย่างเต็มที่ ขอให้ท่านใช้เครื่องมือที่มีอยู่ให้เต็มที่เพื่อสร้างประสบการณ์เว็บไซต์ที่ยอดเยี่ยมให้กับผู้ใช้ ขอให้ท่าน Admin มีความสุขและประสบความสำเร็จในการใช้งาน CMS ของเรา!",
        },
    },
    tutorials: false,
    theme: {
        light: {
            colors: {
                danger100: "#fcecea", // TOGGLE OFF BG
                danger700: "#b72b1a", // TOGGLE OFF COLOR
                neutral0: "#ffffff", // BACKGROUND SIDEBAR
                neutral100: "#fafafa", // BACKGROUND CONTENT
                neutral150: "#eaeaef", // DISABLED BUTTON BG
                neutral200: "#dcdce4", // LINE THROUGH MIDDLE
                neutral500: "#000000", // MENU IDLE COLOR
                neutral600: "#666687", // MENU HOVER COLOR
                neutral700: "#4a4a6a", // MENU ACTIVE ICON COLOR
                neutral800: "#32324d", // TITLE COLORS
                neutral900: "#212134", // TOOLTIP BG
                primary100: "#ffefed", // MENU ACTIVE BG
                primary200: "#ffb8b8", // PLUS SIGN BG
                primary500: "#CC0000", // PRIMARY BUTTON HOVER
                primary600: "#E60000", // PRIMARY BUTTON COLOR
                primary700: "#E60000", // HIGHLIGHT COLOR
                buttonPrimary100: "#ffefed",
                buttonPrimary200: "#ffefed",
                buttonPrimary500: "#CC0000",
                buttonPrimary600: "#E60000",
                buttonPrimary700: "#E60000",
                secondary100: "#DCEAF0",
                secondary200: "#B7D0E1",
                secondary500: "#3C91C5",
                secondary600: "#2E7AB8",
                secondary700: "#1F639C",
                success100: "#ffff", // SUCCESS BOX BG
            },
        },
        dark: {
            colors: {
                danger100: "#181818", // TOGGLE OFF BG
                danger700: "#b72b1a", // TOGGLE OFF COLOR
                neutral0: "#242424", // BACKGROUND SIDEBAR
                neutral100: "#181818", // BACKGROUND CONTENT
                neutral150: "#171717", // DISABLED BUTTON BG
                neutral200: "#363535", // LINE THROUGH MIDDLE
                neutral500: "#FFFFFF", // MENU IDLE COLOR
                neutral600: "#a5a5ba", // MENU HOVER COLOR
                neutral700: "#eaeaef", // MENU ACTIVE ICON COLOR
                neutral800: "#ffffff", // TITLE COLORS
                neutral900: "#ffffff", // TOOLTIP BG
                primary100: "#242424", // MENU ACTIVE BG
                primary200: "#2A2F2F", // PLUS SIGN BG
                primary500: "#CC0000", // PRIMARY BUTTON HOVER
                primary600: "#E60000", // PRIMARY BUTTON COLOR
                primary700: "#E60000", // HIGHLIGHT COLOR
                buttonPrimary100: "#202035",
                buttonPrimary200: "#2A2F2F",
                buttonPrimary500: "#CC0000",
                buttonPrimary600: "#E60000",
                buttonPrimary700: "#CC0000",
                secondary100: "#2A3C50",
                secondary200: "#355672",
                secondary500: "#3C91C5",
                secondary600: "#4DA1D8",
                secondary700: "#62B0E8",
                success100: "#181826", // SUCCESS BOX BG
            },
        },
    },
};


const bootstrap = (app: StrapiApp) => {
    // Force custom favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.type = "image/png";
    faviconLink.href = "/favicon.png?v=" + Date.now(); // Cache busting
    document.head.appendChild(faviconLink);
    
    const styleTag = document.createElement("style");
    styleTag.innerText = `
    a[href*="/cms/dashboard/plugins/cloud"], a[href*="/cms/strapi/strapi/releases/tag/v"], a[href*="strapi.io/"], a[href*="cloud.strapi.io"] {
        display: none;
      }
   
      a[href*="/admin/marketplace"] {
        display: none;
      }

      a[href*="/cms/admin/marketplace"] {
        display: none;
      }
      a[href*="/admin/plugins/cloud"] {
        display: none !important;
      }
  
      a[href*="/cms/admin/plugins/cloud"] {
        display: none;
      }
      a[href*="/cms/admin/list-plugins"] {
        display: none;
      }
    aside[aria-labelledby="join-the-community"], .home-page #main-content>div:first-child>img {
      display: none;
    }
    .hmXWWS{
      display: none;
    }
    a[href*="/cms/admin/plugins/auto-slug-manager"] {
      display: none !important;
    }

    ul[class*="sc-biMVnu"][style*="max-height"] {
        overflow-y: auto !important;
    }

    a[href*="/cms/admin/seo"] {
      display: none !important;
    }

  `;
    document.head.appendChild(styleTag);
    styleTag.appendChild(document.createTextNode(`.cropper-container{-webkit-touch-callout:none;direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}`));
    const isHomePage =
        window.location.pathname === "/dashboard" ||
        window.location.pathname === "/dashboard/";
    document.documentElement.classList.add(
        isHomePage ? "home-page" : "not-home-page"
    );

  if (typeof document !== 'undefined') {
    const observer = new MutationObserver(() => {
      if (document.title.includes('| Strapi')) {
        document.title = document.title.replace('| Strapi', '');
      }
    });
    observer.observe(document.querySelector('title') || document.head, {
      childList: true,
      subtree: true,
    });
  }
};

export default {
    config,
    bootstrap,
};
