!function(o){"function"==typeof define&&define.amd?define(o):o()}((function(){"use strict";!function(o,t){(t=>{const n=document.createElement("div");n.id="sa11y-csp",n.lang=o,n.setAttribute("role","alert");const e=n.attachShadow({mode:"open"}),s=document.createElement("style");s.innerHTML="\n:host {\n  position: fixed; display: block; bottom: 50px; right: 50px; margin: auto 0px; width: 560px; z-index: 10000; background-color: rgb(255, 255, 255); border: 5px solid #0a2051; font-family: system-ui, sans-serif !important; box-shadow: rgba(154, 161, 177, 0.15) 0px 0px 20px 4px, rgba(36, 40, 47, 0.25) 0px 4px 80px -8px, rgba(91, 94, 105, 0.15) 0px 4px 4px -2px; border-radius: 5px;z-index:99999;\n}\n\n*:not(style) {\n  all: unset;\n  box-sizing: border-box !important;\n}\n\n#sa11y-update {\n  padding: 15px 80px 15px 15px;\n}\n\ndiv {\n  display: block;\n}\n\nh2 {\n  display: block;\n  font-size: 22px;\n  font-weight: bold;\n}\nh3 {\n  margin-top: 5px;\n  display: block;\n  font-size: 19px;\n  font-weight: bold;\n}\np {\n  display: block;\n  font-size: 17px;\n}\na {\n  display: inline-block;\n  font-size: 22px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding: 8px 12px;\n  background-color: #0a2051;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\na:hover, a:focus {\n  background-color: #0f3a9a;\n  outline: -webkit-focus-ring-color auto 2px;\n}\n\n#sa11y-csp-close {\n  position: absolute; top: 10px; right: 10px; padding: 5px 10px; background-color: rgb(246, 246, 246); border: 2px solid rgb(148, 148, 148); border-radius: 5px; cursor: pointer; font-size: 15px;\n}\n#sa11y-csp-close:focus {\n  outline: -webkit-focus-ring-color auto 2px;\n}",e.appendChild(s);const a=document.createElement("button");a.id="sa11y-csp-close",a.textContent=t.close,e.appendChild(a),setTimeout((()=>{e.getElementById("sa11y-csp-close").focus()}),300);const i=document.querySelectorAll('script[src*="sa11y"]'),u=()=>{i.forEach((o=>o.remove()))};a.addEventListener("click",(()=>{n.remove(),u()})),e.addEventListener("keyup",(o=>{"Escape"===o.key&&(n.remove(),u())}));const l=document.createElement("div");l.id="sa11y-update",l.innerHTML=`\n      <h2>${t.heading}</h2>\n      <p>${t.message}</p>\n      <p><a href="\njavascript:(function(){\n  const sa11yDialog = document.getElementById(&quot;sa11y-csp&quot;);\n  const sa11yScripts = document.querySelectorAll(&quot;script[src*='sa11y']&quot;);\n\n  const createAlert = (message) => {\n    const sa11yDialog = document.createElement(&quot;div&quot;);\n    sa11yDialog.id = &quot;sa11y-csp&quot;;\n    sa11yDialog.role = &quot;dialog&quot;;\n    sa11yDialog.textContent = message;\n    sa11yDialog.style.position = &quot;fixed&quot;;\n    sa11yDialog.style.display = &quot;block&quot;;\n    sa11yDialog.style.bottom = &quot;50px&quot;;\n    sa11yDialog.style.right = &quot;50px&quot;;\n    sa11yDialog.style.margin = &quot;auto 0&quot;;\n    sa11yDialog.style.width = &quot;400px&quot;;\n    sa11yDialog.style.zIndex = &quot;10000&quot;;\n    sa11yDialog.style.padding = &quot;10px 80px 10px 10px&quot;;\n    sa11yDialog.style.backgroundColor = &quot;#fff&quot;;\n    sa11yDialog.style.border = &quot;5px solid #ff0000&quot;;\n    sa11yDialog.style.fontWeight = &quot;bold&quot;;\n    sa11yDialog.style.fontSize = &quot;17px&quot;;\n    sa11yDialog.style.fontFamily = &quot;system-ui, sans-serif&quot;;\n    sa11yDialog.style.boxShadow = &quot;0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px\n    rgba(91,94,105,.15)&quot;;\n    sa11yDialog.style.borderRadius = &quot;5px&quot;;\n    sa11yDialog.setAttribute(&quot;role&quot;, &quot;alert&quot;);\n    document.body.appendChild(sa11yDialog);\n\n    const closeButton = document.createElement(&quot;button&quot;);\n    closeButton.id = &quot;csp-close&quot;;\n    closeButton.textContent = &quot;Close&quot;;\n    closeButton.style.position = &quot;absolute&quot;;\n    closeButton.style.top = &quot;10px&quot;;\n    closeButton.style.color = &quot;#000&quot;;\n    closeButton.style.right = &quot;10px&quot;;\n    closeButton.style.padding = &quot;5px 10px&quot;;\n    closeButton.style.backgroundColor = &quot;#f6f6f6&quot;;\n    closeButton.style.border = &quot;2px solid #949494&quot;;\n    closeButton.style.borderRadius = &quot;5px&quot;;\n    closeButton.style.cursor = &quot;pointer&quot;;\n    closeButton.style.fontSize = &quot;15px&quot;;\n    sa11yDialog.appendChild(closeButton);\n\n    closeButton.addEventListener(&quot;click&quot;, () => {\n      sa11yDialog.remove();\n    });\n\n    const close = document.getElementById(&quot;csp-close&quot;);\n    setTimeout(() => close.focus(), 300);\n\n    document.addEventListener(&quot;keyup&quot;, (event) => {\n      if (event.key === 'Escape') {\n      sa11yDialog.remove();\n      }\n    });\n  };\n\n  const securityListener = () => {\n    if (typeof sa11y === 'undefined') {\n      createAlert('This website has a security policy that prevents Sa11y from working on its pages. Press Escape to dismiss this message.');\n    }\n  };\n\n  const url = window.location.href;\n  if (url.includes('bookmarklet') && url.includes('sa11y')) {\n    createAlert('Drag the &quot;Sa11y&quot; button into your bookmarks bar. Then click the bookmark on any webpage.');\n  } else if (sa11yDialog == null && sa11yScripts.length === 0) {\n    const inject = document.createElement(&quot;script&quot;);\n    inject.src = &quot;https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/v2.js&quot;;\n    document.body.appendChild(inject);\n  } else {\n    location.reload();\n  }\n\n  document.addEventListener(&quot;securitypolicyviolation&quot;, securityListener);\n  setTimeout(() => document.removeEventListener(&quot;securitypolicyviolation&quot;, securityListener), 100);\n})();\n">Sa11y</a></p>\n      <h2>${t.features}</h2>\n      <h3>${t.a}</h3>\n      <p>${t.aContent}</p>\n      <h3>${t.b}</h3>\n      <p>${t.bContent}</p>\n    `,e.appendChild(l),document.body.appendChild(n)})(t)}("lt",{close:"Uždaryti",heading:"Reikalingas atnaujinimas",message:"Prašome atnaujinti Sa11y žymeklį pridedant žemiau pateiktą nuorodą į savo žymių juostą.",features:"Naujos žymeklio funkcijos",a:"Automatinis puslapio kalbos nustatymas",aContent:"Šis žymeklis automatiškai rodo Sa11y išverstą versiją pagal puslapio kalbą. Jei kalba nepalaikoma, bus naudojama anglų kalba.",b:"Saugumo politikos įspėjimas",bContent:"Jei svetainė taiko saugumo politiką, kuri apriboja Sa11y veikimą jos puslapiuose, bus rodomas įspėjimas."})}));