function o(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;console.log(l),setInterval((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o),console.log(promise)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:l,amount:r}=t.currentTarget.elements;let s=Number(n.value),i=Number(l.value),a=Number(r.value);for(let t=0;t<a;t++)s+=i,o(t,s).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.fde26163.js.map