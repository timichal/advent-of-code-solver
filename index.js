!function(A){var I={};function g(C){if(I[C])return I[C].exports;var Q=I[C]={i:C,l:!1,exports:{}};return A[C].call(Q.exports,Q,Q.exports,g),Q.l=!0,Q.exports}g.m=A,g.c=I,g.d=function(A,I,C){g.o(A,I)||Object.defineProperty(A,I,{enumerable:!0,get:C})},g.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},g.t=function(A,I){if(1&I&&(A=g(A)),8&I)return A;if(4&I&&"object"==typeof A&&A&&A.__esModule)return A;var C=Object.create(null);if(g.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:A}),2&I&&"string"!=typeof A)for(var Q in A)g.d(C,Q,function(I){return A[I]}.bind(null,Q));return C},g.n=function(A){var I=A&&A.__esModule?function(){return A.default}:function(){return A};return g.d(I,"a",I),I},g.o=function(A,I){return Object.prototype.hasOwnProperty.call(A,I)},g.p="",g(g.s=0)}([function(A,I,g){"use strict";g.r(I);const C=A=>{const I=[...A[0]];let g=0;return[I.reduce((A,I,C)=>(g||-1!==A||(g=C),A+("("===I?1:-1)),0),g]};const Q=A=>A.reduce((A,I)=>A+I,0);const B=A=>{const I=A.map(A=>A.split("x").map(Number));return[Q(I.map(A=>(([A,I,g])=>2*A*I+2*g*A+2*I*g+Math.min(A*I,I*g,g*A))(A))),Q(I.map(A=>(([A,I,g])=>2*Math.min(A+I,I+g,g+A)+A*I*g)(A)))]};const E=A=>{const I=[...A[0]],g=A=>{const g=Array(I.length).fill([0,0]);return I.forEach((I,C)=>{const[Q,B]=g[C-A]||[0,0];"^"===I&&(g[C]=[Q+1,B]),"v"===I&&(g[C]=[Q-1,B]),">"===I&&(g[C]=[Q,B+1]),"<"===I&&(g[C]=[Q,B-1])}),new Set(g.map(A=>JSON.stringify(A))).size};return[g(1),g(2)]};const i=new WebAssembly.Table({initial:1,maximum:1,element:"anyfunc"}),a=new WebAssembly.Memory({initial:256,maximum:256}),{buffer:o}=a,N=new Int32Array(o),D=new Uint8Array(o);N[444]=5244816;const G=A=>{throw new Error("WebAssembly error: "+A)},e={__handle_stack_overflow:()=>G("stack overflow!"),__lock:()=>{},__unlock:()=>{},emscripten_get_sbrk_ptr:()=>1776,emscripten_memcpy_big:(A,I,g)=>D.set(D.subarray(I,I+g),A),emscripten_resize_heap:()=>G("cannot grow memory!"),memory:a,table:i};let c;WebAssembly.instantiateStreaming(fetch("data:application/wasm;base64,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AkAgAC0AAA0AIAAhAQwCCyAAIQEDQCABQQFqIgFBA3FFDQEgAS0AAEUNAgwAAAsACwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALAkAgA0H/AXENACACIQEMAQsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawuTBAEDfwJAIAJBgMAASQ0AIAAgASACEAAaIAAPCyAAIAJqIQMCQAJAIAEgAHNBA3ENAAJAAkAgAkEBTg0AIAAhAgwBCwJAIABBA3ENACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA08NASACQQNxDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgALAAsCQCADQQRPDQAgACECDAELAkAgA0F8aiIEIABPDQAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCwJAIAIgA08NAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAAC/MCAgN/AX4CQCACRQ0AIAIgAGoiA0F/aiABOgAAIAAgAToAACACQQNJDQAgA0F+aiABOgAAIAAgAToAASADQX1qIAE6AAAgACABOgACIAJBB0kNACADQXxqIAE6AAAgACABOgADIAJBCUkNACAAQQAgAGtBA3EiBGoiAyABQf8BcUGBgoQIbCIBNgIAIAMgAiAEa0F8cSIEaiICQXxqIAE2AgAgBEEJSQ0AIAMgATYCCCADIAE2AgQgAkF4aiABNgIAIAJBdGogATYCACAEQRlJDQAgAyABNgIYIAMgATYCFCADIAE2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"),{env:e}).then(A=>{c=A.instance.exports});const F=A=>{const I=c.stackSave(),g=(A=>{let I=A;for(;D[I];)I+=1;return new TextDecoder("utf8").decode(D.subarray(A,I))})(c.md5_hex((A=>{let I=0;if(null!=A){const g=1+(A.length<<2);I=c.stackAlloc(g),((A,I,g)=>{const C=I,Q=I+g-1;for(let g=0;g<A.length;++g){let C=A.charCodeAt(g);if(C>=55296&&C<=57343){C=65536+((1023&C)<<10)|1023&A.charCodeAt(++g)}if(C<=127){if(I>=Q)break;D[I++]=C}else if(C<=2047){if(I+1>=Q)break;D[I++]=192|C>>6,D[I++]=128|63&C}else if(C<=65535){if(I+2>=Q)break;D[I++]=224|C>>12,D[I++]=128|C>>6&63,D[I++]=128|63&C}else{if(I+3>=Q)break;D[I++]=240|C>>18,D[I++]=128|C>>12&63,D[I++]=128|C>>6&63,D[I++]=128|63&C}}D[I]=0})(A,I,g)}return I})(A)));return c.stackRestore(I),g};const k=A=>{const I=A[0],g=(A,I)=>{let g=1;for(;;){if(F(A+g).startsWith(I))return g;g+=1}};return[g(I,"00000"),g(I,"000000")]};const Y={2015:{1:C,2:B,3:E,4:k},2016:{}};const t={2015:{1:"Not Quite Lisp",2:"I Was Told There Would Be No Math",3:"Perfectly Spherical Houses in a Vacuum",4:"The Ideal Stocking Stuffer",5:"Doesn't He Have Intern-Elves For This?",6:"Probably a Fire Hazard",7:"Some Assembly Required",8:"Matchsticks",9:"All in a Single Night",10:"Elves Look, Elves Say",11:"Corporate Policy",12:"JSAbacusFramework.io",13:"Knights of the Dinner Table",14:"Reindeer Olympics",15:"Science for Hungry People",16:"Aunt Sue",17:"No Such Thing as Too Much",18:"Like a GIF For Your Yard",19:"Medicine for Rudolph",20:"Infinite Elves and Infinite Houses",21:"RPG Simulator 20XX",22:"Wizard Simulator 20XX",23:"Opening the Turing Lock",24:"It Hangs in the Balance",25:"Let It Snow"},2016:{}};const h=A=>document.querySelector(A),n=A=>document.querySelectorAll(A),s=(A=!0)=>{const I=h("input[name='year']:checked").value,g=h("input[name='day']:checked").value;n("input[name='day']").forEach(A=>{Y[Number(I)][Number(A.value)]||(A.disabled=!0)});const C=`https://adventofcode.com/${I}/day/${Number(g)}`,Q=`https://github.com/timichal/advent-of-code-solver/blob/master/src/${I}/day_${g}.ts`,B=`https://adventofcode.com/${I}/day/${Number(g)}/input`;h("#puzzle-info").innerHTML=`\n    <a href=${C} target="_blank">\n      ${I}, Day ${g}: ${t[Number(I)][Number(g)]}\n    </a><br>\n    <span class="link-line">\n    <a href=${B} target="__blank">Open puzzle input (AoC login required)</a>\n    •\n    <a href=${Q} target="__blank">View solution on GitHub</a>\n    </span>\n  `,A&&(h("textarea").value="",h("#answer").innerHTML="Part 1:<br> Part 2:")};window.onload=()=>s(!1),n("input[type='radio']").forEach(A=>A.addEventListener("click",()=>s())),h("#submit").addEventListener("click",()=>{const A=Number(h("input[name='year']:checked").value),I=Number(h("input[name='day']:checked").value);n("input[name='day']").forEach(I=>{Y[A][Number(I.value)]||(I.disabled=!0)});const g=(A=>A.split("\n").filter(A=>A))(h("#input").value),[C,Q]=Y[A][I](g);h("#answer").innerHTML=`Part 1: ${C} <br> Part 2: ${Q}`})}]);