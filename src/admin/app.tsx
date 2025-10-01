import type { StrapiApp } from '@strapi/strapi/admin';

// Simple theme configuration with E60000 color
const customTheme = {
  colors: {
    primary500: '#E60000',
    primary600: '#E60000',
    primary700: '#cc0000',
    buttonPrimary500: '#E60000',
    buttonPrimary600: '#cc0000',
  },
};

export default {
  config: {
    locales: [
      'th', // Thai language support
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    theme: customTheme,
    head: {
      favicon: '/favicon.png',
    },
  },
  bootstrap(app: StrapiApp) {
    console.log('🎨 E60000 Theme Loaded!');

    // Change page title
    document.title = 'CMS Admin';

    // Debug function to inspect button elements
    (window as any).debugButtons = () => {
      console.log('🔍 Button Debug Info:');
      console.log('All buttons:', document.querySelectorAll('button'));
      console.log('Button with "Create API Token":', document.querySelector('button:contains("Create API Token")'));
      console.log('Buttons with role="button":', document.querySelectorAll('[role="button"]'));

      // Check computed styles
      const buttons = document.querySelectorAll('button');
      buttons.forEach((btn, index) => {
        if (btn.textContent.includes('Create') || btn.textContent.includes('API')) {
          console.log(`Button ${index}:`, {
            text: btn.textContent,
            computedColor: getComputedStyle(btn).color,
            className: btn.className,
            id: btn.id
          });
        }
      });
    };

    // Simple CSS for E60000 theme
    const style = document.createElement('style');
    style.textContent = `
      /* ===== E60000 RED THEME ===== */
      
      /* 1. HEADER STYLING */
      [data-testid="main-header"], 
      .main-header,
      header[role="banner"] {
        background: #E60000 !important;
      }
      
      /* 2. SIDEBAR STYLING */
      nav {
        background: white !important;
      }
      
      /* 3. LINKS STYLING */
      a:not(button):not([role="button"]) {
        color: #E60000 !important;
      }
      
      /* Links that open in new tab */
      a[target="_blank"]:not(button):not([role="button"]) {
        color:rgb(255, 255, 255) !important;
      }
      
      /* Links with text-decoration none */
      a[style*="text-decoration: none"]:not(button):not([role="button"]),
      a[style*="text-decoration:none"]:not(button):not([role="button"]) {
        color: rgb(255, 255, 255) !important;
        text-decoration: none !important;
      }
      
      /* Specific href links */
      a[href="/admin/settings/webhooks/create"]:not(button):not([role="button"]) {
        color: rgb(255, 255, 255) !important;
      }
      
      /* 4. ACTIVE ITEMS */
      .active {
        background: rgba(230, 0, 0, 0.1) !important;
        color: #E60000 !important;
      }
      
      /* Specific active class combination - no background */
      .sc-biMVnu.gLUaOg.sc-eUkiUm.jIJgV.sc-egFxlz.ftaVBk.active {
        background: none !important;
      }
      
      /* Active SVG - red color with higher specificity */
      .active svg,
      .active svg *,
      a.active svg,
      a.active svg * {
        fill: #E60000 !important;
        color: #E60000 !important;
        stroke-width: inherit !important;
      }
      
      /* Preserve stroke on click/hold (active state) */
      button:active svg,
      button:active svg *,
      a:active svg,
      a:active svg *,
      [role="button"]:active svg,
      [role="button"]:active svg * {
        stroke-width: inherit !important;
      }
      
      .kcQkRk.active > div {
        background: rgb(30, 27, 27) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      /* 5. BUTTON STYLING */
      [data-testid*="button"] {
        background: rgb(255, 219, 219) !important;
        border-color: #E60000 !important;
        color: #E60000 !important;
      }
      
      /* Red Button Classes */
      .sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.dCiuLR,
      .sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.eryDNk,
      .sc-biMVnu.cwpumT.sc-fEETNT.jtRUlM.sc-fdOGDD.eryDNk {
        background: rgb(212, 18, 18) !important;
        border-color: #E60000 !important;
        color: white !important;
      }
      
      /* Light Red Button Classes */
      .sc-biMVnu.jDHAqW.sc-fEETNT.jPaZnx
   {
        background: rgb(255, 61, 61) !important;
        border-color: #E60000 !important;
        color: white !important;
      }
      
      /* Button Hover States */
      .sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.dCiuLR:hover {
        background: rgba(245, 149, 149, 0.96) !important;
      }
      
      .cIoXGJ:hover {
        background: rgb(230, 0, 0) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      /* SVG styling for cIoXGJ hover */
      .cIoXGJ:hover svg,
      .cIoXGJ:hover svg *,
      .cIoXGJ:hover svg path,
      .cIoXGJ:hover svg polygon,
      .cIoXGJ:hover svg circle,
      .cIoXGJ:hover svg rect,
      .cIoXGJ:hover svg line {
        fill: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      /* Aggressive circle targeting for cIoXGJ hover */
      .cIoXGJ:hover svg circle,
      .cIoXGJ:hover circle,
      .cIoXGJ:hover svg circle *,
      .cIoXGJ:hover svg * circle {
        fill: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      /* Force circle color with higher specificity */
      .cIoXGJ.cIoXGJ:hover svg circle,
      .cIoXGJ:hover svg circle[fill],
      .cIoXGJ:hover svg circle[stroke] {
        fill: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
      }
      
      /* 6. SVG STYLING - WHITE ICONS */
      .sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.dCiuLR svg,
      .sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.dCiuLR svg *,
      .sc-biMVnu.jDHAqW.sc-fEETNT.jPaZnx svg,
      .sc-biMVnu.jDHAqW.sc-fEETNT.jPaZnx svg *,
      .sc-biMVnu.QOLeH.sc-eisxGE.dlEVMa svg,
      .sc-biMVnu.QOLeH.sc-eisxGE.dlEVMa svg * {
        fill: white !important;
        stroke: white !important;
        color: white !important;
      }
      
      /* 7. CIRCLE BUTTONS (PLUS SYMBOLS) */

      
      .lbdmvl svg,
      .cKyIch path,
      .iiZyjm:focus,
      .cKyIch path *,
      .hLDDnY svg,
      .jjXEOO svg,
      .jjXEOO svg *,
      .hLDDnY svg *,
      .hLDDnY *,
      .iyGaEL *,
      .VxfeP path,
      .doUwfF[data-state="open"],
      [data-state="unchecked"]:hover svg,
      .sc-biMVnu.gLUaOg.sc-eUkiUm.jIJgV.sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.hQoytw,
      .sc-biMVnu.gLUaOg.sc-eUkiUm.jIJgV.sc-biMVnu.hutJZB.sc-fEETNT.jtRUlM.sc-fdOGDD.lbdmvl,
      .cgBZXP path,
      .guTTOk svg path,
      .jKOxX svg path,
      .dNTDVm svg path {
        color: rgb(255, 255, 255) !important;
        fill: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
      }
    
      
      /* AgPfA with data-state open */
      .AgPfA[data-orientation="vertical"],
      [data-state="unchecked"],
      .AgPfA[data-orientation="vertical"]:hover {
        background: none !important;
        color: black !important;
      }
      
      /* Menu items hover */
      [role="menuitem"]:hover {
        background: none !important;
      }
      
      /* Selected menu item hover - override blue with red */
      [role="menuitem"][aria-current="true"],
      [role="menuitem"][data-state="checked"],
      [role="option"][aria-selected="true"] {
        background: #cc0000 !important;
        color: white !important;
      }
      
      .dDfGrE[data-orientation="vertical"]:hover {
        background: rgb(220, 157, 161) !important;
      }
      
      /* 9. DROPDOWN STYLING */
      /* Non-hover state - black text on white background */
      .dDfGrE:not([data-disabled]) > .sc-fSwKIM .sc-dYsygx {
        color: black !important;
      }
      
      /* Hover state - white text on red background */
      .dDfGrE:not([data-disabled]):hover > .sc-fSwKIM .sc-dYsygx,
      .dDfGrE:not([data-disabled])[data-state='open'] > .sc-fSwKIM .sc-dYsygx {
        background-color: rgb(255, 123, 132) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      .dDfGrE:not([data-disabled]):hover > .sc-fSwKIM .sc-cbrqwu,
      .dDfGrE:not([data-disabled])[data-state='open'] > .sc-fSwKIM .sc-cbrqwu,
      .dDfGrE:not([data-disabled]):hover > .sc-fSwKIM .sc-cbrqwu svg,
      .dDfGrE:not([data-disabled])[data-state='open'] > .sc-fSwKIM .sc-cbrqwu svg,
      .dDfGrE:not([data-disabled]):hover > .sc-fSwKIM .sc-cbrqwu svg *,
      .dDfGrE:not([data-disabled])[data-state='open'] > .sc-fSwKIM .sc-cbrqwu svg * {
        color: rgb(255, 255, 255) !important;
        fill: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
      }

      
      /* Dropdown open state - pink background, white text */
      .dDfGrE:not([data-disabled])[data-state='closed']:hover,
      .dDfGrE:not([data-disabled])[data-state='open']:hover,
      .dDfGrE:not([data-disabled])[data-state='open']{
        background: rgb(255, 216, 216) !important;
      }
      
      /* 10. SPECIAL CLASSES */
      .lnXrMG,
      .sc-biMVnu.gyLppJ.sc-eBIPcU.fDGhCK,
      [class*="sc-biMVnu gLUaOg sc-eUkiUm jIJgV sc-biMVnu hutJZB sc-fEETNT jtRUlM sc-fdOGDD fHlMsU"] * {
        color: white !important;
      }
      
      /* Remove hover text effects for fDGhCK */
      .fDGhCK {
        color: inherit !important;
      }
      
      /* cPFtpB with aria-expanded="true" - grey text */
      .cPFtpB[aria-expanded="true"] {
        color: #8e8ea9 !important;
      }
      
      /* Dropdown with data-state open - black text, no background */
      .sc-fqdHUJ.jSowaA[data-state="open"] {
        color: black !important;
        background: none !important;
      }
      
      .gMZHjq,
      .hONHGK,
      .dppjTS {
        background: rgb(255, 237, 237) !important;
      }
      
      .sc-gXdkiT.dCNmII {
        background: rgb(100, 100, 100, 0.5) !important;
      }
      
      .sc-eaIzCS.bfhOg {
        background: rgb(255, 255, 255) !important;
        border: 1px solid gray !important;
      }
      
      /* 11. BACKGROUND STYLING */
      .guTTOk,
      .cKyIch,
      .DlEVMa,
      .jKOxX,
      .QOLeH,
      .jjXEOO,
      .cIoXGJ:hover,
      [data-state="unchecked"]:hover,
      .fxpKbY,
      .lbdmvl,
      a[href="/admin/content-manager/collection-types/plugin::users-permissions.user/create"]:not(button):not([role="button"]),
      .VxfeP {
        background: rgb(213, 0, 0) !important;
        color: rgb(255, 255, 255) !important;
      }
      
      div.css-3r9uaq,
      .eryDNk,
      .sc-biMVnu.hCRpDc.sc-fEETNT.kMOJHi.sc-dPKWQb.dWnVTT.sc-bruwDQ.buWeOZ,
      .css-3r9uaq div,
      .doQLPW,
      .sc-biMVnu hWKkhu sc-fEETNT jPaZnx:active,
      .sc-biMVnu hWKkhu sc-fEETNT jPaZnx:hover,
      [class*="css-3r9uaq"],
      .lCPOf .container input:checked~div,
      .gMJoFE:hover,
      .bXiYyu .container input:checked~div,
      [data-radix-focus-guard][tabindex="0"] {
        background: rgb(255, 238, 238) !important;
      }
      
      /* 12. BLACK TEXT ELEMENTS */
      .iuxVNm,
      .ftfKfW,
      .hkCDaM svg,
      .eryDNk[aria-disabled='true']:hover,
      .eryDNk[aria-disabled='true']:hover svg,
      .sc-biMVnu.hCRpDc.sc-fEETNT.kZxVIC,
      .sc-fSrMxd.fdJuxD svg,
      svg[aria-hidden="true"].sc-biMVnu.hCRpDc.sc-fEETNT.kZxVIC,
      svg[aria-hidden="true"].sc-biMVnu.hCRpDc.sc-fEETNT.kZxVIC * {
        fill: rgb(0, 0, 0) !important;
        color: rgb(0, 0, 0) !important;
      }
      

      
      /* Gray SVG styling */
      .dLPymG svg {
        fill: #8e8ea9 !important;
      }
      
      /* Remove hover SVG effects */
      .kQCTkf:hover svg,
      .kQCTkf:hover svg * {
        fill: #8e8ea9  !important;
      }
      
      /* Delete button - red background with white SVG */
      button.gNIxuT[name="delete"][type="button"][aria-haspopup="dialog"] {
        background:#cc0000 !important;
      }
      
      button.gNIxuT[name="delete"][type="button"][aria-haspopup="dialog"] svg,
      button.gNIxuT[name="delete"][type="button"][aria-haspopup="dialog"] svg * {
        fill: rgb(255, 255, 255) !important;
        color: rgb(255, 255, 255) !important;
        stroke: rgb(255, 255, 255) !important;
      }
      
      /* 13. FOCUS/BORDER REMOVAL */
      [data-state]:focus,
      [data-state]:active,
      [data-state]:focus-visible,
      [data-state]:focus-within,
      [data-state] *:focus,
      [data-state] *:active,
      [data-state] *:focus-visible {
        border-color: transparent !important;
        outline: none !important;
        box-shadow: none !important;
      }
      
      /* 14. RADIX ID STYLING */
      gkUaWr[data-state='open'],
      .gyOpKs[data-state='open'] {
        background: rgb(255, 255, 255) !important;
      }
      
      /* 15. DIRECTION STYLING */
      [dir="ltr"] {
        background: rgb(255, 255, 255) !important;
      }

       .fxbVuZ {
         padding-top: 0 !important;
         padding-bottom: 0 !important;
       }
       
       /* Enhanced border-radius for guTTOk */
       .guTTOk {
         border: none !important;
         border-radius: 4px !important;
         -webkit-border-radius: 4px !important;
         -moz-border-radius: 4px !important;
       }
       
       /* More specific targeting for border-radius */
       button.guTTOk,
       [role="button"].guTTOk {
         border-radius: 4px !important;
         -webkit-border-radius: 4px !important;
         -moz-border-radius: 4px !important;
       }
       
       /* Force border-radius with higher specificity */
       .jKOxX,
       .guTTOk,
       .guTTOk *,
       .guTTOk::before,
       .guTTOk::after {
         border-radius: 4px !important;
         -webkit-border-radius: 4px !important;
         -moz-border-radius: 4px !important;
       }

       [aria-label="Pagination"],
       .bWkfGq  {
         background: none !important;
       }
         
        .jvTske[data-state="open"]{
        background: rgb(255, 255, 255) !important;
        color: rgb(0, 0, 0) !important;
       }
       .cnJuJo[data-state="open"] {
        background: rgb(255, 255, 255,0.5) !important;
        color: rgb(0, 0, 0) !important;
       }

             .doUwfF[data-state="open"],{
             box-shadow: none !important;
             }

      .gNIxuT svg{
        fill: rgb(0, 0, 0) !important;
        color: rgb(0, 0, 0) !important;
      }

    `;
    document.head.appendChild(style);
  },
};
