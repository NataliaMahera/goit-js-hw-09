!function(){function e(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setInterval((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=t.delay,r=t.step,a=t.amount,c=Number(o.value),i=Number(r.value),u=Number(a.value),l=1;l<=u;l+=1)e(l,c+=i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.f634fcee.js.map
