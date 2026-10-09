var WA='919550446661';
var IC={search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',wa:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',menu:'<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',back:'<path d="m15 18-6-6 6-6"/>'};
function ic(n){return '<svg class="i" viewBox="0 0 24 24">'+IC[n]+'</svg>'}
document.querySelectorAll('[data-i]').forEach(function(e){e.innerHTML=IC[e.dataset.i]});
var $=function(s){return document.querySelector(s)};
var fmt=function(n){return '₹'+n.toLocaleString('en-IN')};
var r10=function(n){return Math.round(n/10)*10};
/* EDIT PRODUCTS HERE: base = price for the main size (pickles: 500g, snacks: 250g, combos: per pack) */
var P=[
{id:'mango',n:'Mango Pickle',c:'veg',img:'images/mango-pickle.jpg',b:320,k:'p',d:'Raw mango pieces cured with mustard, red chilli and oil.'},
{id:'lemon',n:'Lemon Pickle',c:'veg',img:'images/lemon-pickle.jpg',b:250,k:'p',d:'Whole lemons pickled with fenugreek and mustard seed.'},
{id:'tomgon',n:'Tomato + Gongura Pickle',c:'veg',img:'images/tomato-gongura-pickle.jpg',b:290,k:'p',d:'Gongura leaves and ripe tomato cooked down with garlic and chilli.'},
{id:'gongura',n:'Gongura Pickle',c:'veg',img:'images/gongura-pickle.jpg',b:280,k:'p',d:'Gongura leaves slow-cooked with garlic and red chilli.'},
{id:'chicken',img:'images/chicken-pickle.svg',n:'Chicken Pickle',c:'nonveg',b:420,k:'p',d:'Boneless chicken cooked in red chilli and spices, sealed in oil.'},
{id:'mutton',img:'images/mutton-pickle.svg',n:'Mutton Pickle',c:'nonveg',b:550,k:'p',d:'Tender mutton cooked low and slow in a deep red masala.'},
{id:'prawn',img:'images/prawn-pickle.svg',n:'Prawn Pickle',c:'nonveg',b:480,k:'p',d:'Prawns cooked with ginger-garlic and chilli.'},
{id:'murukku',img:'images/murukku.svg',n:'Murukku',c:'snacks',b:180,k:'s',d:'Crisp rice-flour spirals with sesame and cumin.'},
{id:'mixture',img:'images/mixture.svg',n:'Mixture',c:'snacks',b:160,k:'s',d:'Crunchy mix of fried gram-flour drops, peanuts and curry leaves.'},
{id:'chekkalu',img:'images/chekkalu.svg',n:'Chekkalu',c:'snacks',b:160,k:'s',d:'Telugu-style rice crackers with peanuts and curry leaves.'},
{id:'chekodilu',img:'images/chekodilu.svg',n:'Chekodilu',c:'snacks',b:170,k:'s',d:'Ring-shaped rice crackers with a light savoury crunch.'},
{id:'boondi',img:'images/boondi.svg',n:'Boondi',c:'snacks',b:150,k:'s',d:'Tiny fried gram-flour drops seasoned with curry leaves.'},
{id:'vegc',img:'images/veg-combo.svg',n:'Veg Combo',c:'combo',b:650,k:'c',m:'v',d:'All 4 veg pickles, 250g each.'},
{id:'nvc',img:'images/non-veg-combo.svg',n:'Non-Veg Combo',c:'combo',b:720,k:'c',m:'n',d:'Chicken, Mutton and Prawn pickles, 250g each.'},
{id:'psc',img:'images/pickle-snacks-combo.svg',n:'Pickle + Snacks Combo',c:'combo',b:550,k:'c',d:'Any 2 pickles (250g each) with 2 snacks (200g each).'}
];
var CATS={veg:'Veg Pickles',nonveg:'Non-Veg Pickles',snacks:'Snacks',combo:'Combo Packs'};
function sizes(p){if(p.k=='p')return[['250g',r10(p.b*.55)],['500g',p.b],['1kg',r10(p.b*1.85)]];if(p.k=='s')return[['250g',p.b],['500g',r10(p.b*1.9)]];return[['Pack',p.b]]}
var byId={};P.forEach(function(p){byId[p.id]=p});
var st={cat:'all',q:'',sort:'f'},cart=[];
try{cart=JSON.parse(localStorage.getItem('mhm_cart')||'[]')}catch(e){cart=[]}
cart=cart.filter(function(l){return byId[l.id]&&l.qty>0&&sizes(byId[l.id]).some(function(s){return s[0]==l.size})});
function save(){try{localStorage.setItem('mhm_cart',JSON.stringify(cart))}catch(e){}}
function price(l){return sizes(byId[l.id]).filter(function(s){return s[0]==l.size})[0][1]}
function sub(){return cart.reduce(function(a,l){return a+price(l)*l.qty},0)}
function toast(m){var t=document.createElement('div');t.className='toast';t.textContent=m;$('#toasts').appendChild(t);setTimeout(function(){t.remove()},2600)}
function mark(p){if(p.c=='veg'||p.c=='snacks'||p.m=='v')return'<span class="vm"></span>';if(p.c=='nonveg'||p.m=='n')return'<span class="vm nv"></span>';return''}
/* categories + chips */
$('#cats').innerHTML=Object.keys(CATS).map(function(k){var n=P.filter(function(p){return p.c==k}).length;return '<button class="cat" data-cat="'+k+'"><h3>'+CATS[k]+'</h3><span>'+n+' items</span></button>'}).join('');
function chips(){var all=[['all','All']].concat(Object.keys(CATS).map(function(k){return[k,CATS[k]]}));$('#chips').innerHTML=all.map(function(a){return '<button class="chip" data-chip="'+a[0]+'" aria-pressed="'+(st.cat==a[0])+'">'+a[1]+'</button>'}).join('')}
function grid(){
 var q=st.q.trim().toLowerCase();
 var L=P.filter(function(p){return(st.cat=='all'||p.c==st.cat)&&(!q||(p.n+' '+p.d+' '+CATS[p.c]).toLowerCase().indexOf(q)>-1)});
 if(st.sort!='f')L.sort(function(a,b){return st.sort=='lo'?a.b-b.b:b.b-a.b});
 $('#grid').innerHTML=L.length?L.map(function(p){
  var s=sizes(p),def=s.length>1?1:0;
  return '<article class="card"><div class="media">'+(p.img?'<img loading="lazy" src="'+p.img+'" alt="'+p.n+'">':'<div class="ph">'+ic('leaf')+'<span>Photo coming soon</span></div>')+'<span class="badge">'+mark(p)+CATS[p.c]+'</span></div><div class="cb"><h3>'+p.n+'</h3><p>'+p.d+'</p><div class="row">'+(s.length>1?'<label class="sr" for="s-'+p.id+'">Size for '+p.n+'</label><select id="s-'+p.id+'" data-sz="'+p.id+'">'+s.map(function(x,i){return '<option value="'+x[0]+'"'+(i==def?' selected':'')+'>'+x[0]+'</option>'}).join('')+'</select>':'<span style="font-size:.88rem;color:var(--text2)">Per pack</span>')+'<span class="price" id="pr-'+p.id+'">'+fmt(s[def][1])+'</span></div><button class="btn gold" data-add="'+p.id+'">Add to bag</button></div></article>'
 }).join(''):'<div class="empty"><p style="margin:0 0 12px">No products match your search.</p><button class="btn" data-reset>Clear search</button></div>';
}
/* cart */
function badge(){var n=cart.reduce(function(a,l){return a+l.qty},0);var e=$('#cnt');e.textContent=n||'';e.dataset.n=n}
function add(id,size){var l=cart.filter(function(x){return x.id==id&&x.size==size})[0];if(l)l.qty=Math.min(l.qty+1,20);else cart.push({id:id,size:size,qty:1});save();badge();toast(byId[id].n+' ('+size+') added to bag');if($('#dr').classList.contains('on'))view()}
var delivery='courier',lastFocus=null,mode='cart';
function openCart(){lastFocus=document.activeElement;mode='cart';view();$('#ov').classList.add('on');$('#dr').classList.add('on');setTimeout(function(){$('#dx').focus()},50)}
function closeCart(){$('#ov').classList.remove('on');$('#dr').classList.remove('on');if(lastFocus)lastFocus.focus()}
function fee(s){return delivery=='courier'?100:(s>=799?0:null)}
function summary(){var s=sub(),f=fee(s);return '<div class="tot"><span>Subtotal</span><span>'+fmt(s)+'</span></div><div class="tot"><span>Delivery</span><span>'+(f===null?'Confirmed on WhatsApp':f?fmt(f):'Free')+'</span></div><div class="tot f"><span>Total</span><span>'+fmt(s+(f||0))+(f===null?'+':'')+'</span></div>'}
function delOpts(){return '<fieldset style="border:0;padding:0;margin:0 0 12px"><legend class="sr">Delivery method</legend><label class="opt"><input type="radio" name="dl" value="courier"'+(delivery=='courier'?' checked':'')+'><span><b>Courier anywhere in India</b><br>Flat ₹100 per order</span></label><label class="opt"><input type="radio" name="dl" value="local"'+(delivery=='local'?' checked':'')+'><span><b>Local delivery, Peddaparupudi Mandal</b><br>Free above ₹799, otherwise confirmed on WhatsApp</span></label></fieldset>'}
function view(){
 var v=$('#dv');
 if(!cart.length){v.innerHTML='<div class="db" style="display:grid;place-items:center;text-align:center;color:var(--text2)"><div>'+ic('bag').replace('class="i"','class="i" style="width:44px;height:44px;color:#C6A15B"')+'<p>Your bag is empty.</p><button class="btn" data-close>Continue shopping</button></div></div>';return}
 if(mode=='cart'){
  v.innerHTML='<div class="db">'+cart.map(function(l,i){var p=byId[l.id];return '<div class="li">'+(p.img?'<img src="'+p.img+'" alt="">':'<div class="th">'+ic('leaf')+'</div>')+'<div><h4>'+p.n+'</h4><small>'+l.size+' · '+fmt(price(l))+'</small><div class="qty"><button data-q="'+i+'" data-d="-1" aria-label="Decrease quantity">'+ic('minus')+'</button><span aria-live="polite">'+l.qty+'</span><button data-q="'+i+'" data-d="1" aria-label="Increase quantity">'+ic('plus')+'</button></div></div><div style="text-align:right"><b>'+fmt(price(l)*l.qty)+'</b><br><button class="rm" data-rm="'+i+'" aria-label="Remove '+p.n+'">'+ic('trash')+'</button></div></div>'}).join('')+'</div><div class="df">'+delOpts()+summary()+'<button class="btn gold" style="width:100%" data-go>Checkout</button><div class="note">Order is sent to us on WhatsApp. Payment is arranged after we confirm.</div></div>'
 }else{
  v.innerHTML='<form id="cf" novalidate style="display:flex;flex-direction:column;flex:1;min-height:0"><div class="db"><button type="button" class="btn" style="min-height:36px;padding:0 12px;margin:8px 0 14px" data-back>'+ic('back')+'Back to bag</button>'+fld('name','Full name','text','name')+fld('phone','Mobile number (10 digits)','tel','tel')+'<div class="fld"><label for="addr">Delivery address</label><textarea id="addr" autocomplete="street-address"></textarea><div class="er" id="e-addr"></div></div>'+fld('city','Town / city','text','address-level2')+fld('pin','PIN code','text','postal-code')+'</div><div class="df">'+summary()+'<button class="btn gold" style="width:100%" type="submit">'+ic('wa')+'Send order on WhatsApp</button></div></form>'
 }
}
function fld(id,l,t,ac){return '<div class="fld"><label for="'+id+'">'+l+'</label><input id="'+id+'" type="'+t+'" autocomplete="'+ac+'"><div class="er" id="e-'+id+'"></div></div>'}
function validate(){
 var v={name:$('#name').value.trim(),phone:$('#phone').value.replace(/[\s-]/g,'').replace(/^(\+91|91|0)(?=\d{10}$)/,''),addr:$('#addr').value.trim(),city:$('#city').value.trim(),pin:$('#pin').value.trim()};
 var e={};
 if(v.name.length<2)e.name='Please enter your name.';
 if(!/^[6-9]\d{9}$/.test(v.phone))e.phone='Enter a valid 10-digit mobile number.';
 if(v.addr.length<10)e.addr='Please enter your full address (house, street, village).';
 if(v.city.length<2)e.city='Please enter your town or city.';
 if(!/^\d{6}$/.test(v.pin))e.pin='Enter a valid 6-digit PIN code.';
 ['name','phone','addr','city','pin'].forEach(function(k){$('#e-'+k).textContent=e[k]||'';$('#'+k).closest('.fld').classList.toggle('bad',!!e[k]);$('#'+k).setAttribute('aria-invalid',!!e[k])});
 var first=Object.keys(e)[0];if(first){$('#'+first).focus();return null}return v
}
function send(v){
 var s=sub(),f=fee(s),lines=cart.map(function(l,i){return (i+1)+'. '+byId[l.id].n+' ('+l.size+') x '+l.qty+' = '+fmt(price(l)*l.qty)});
 var msg='Hi Mani Home Making! I would like to order:\n\n'+lines.join('\n')+'\n\nSubtotal: '+fmt(s)+'\nDelivery: '+(delivery=='courier'?'Courier (Rs 100)':'Local delivery'+(f===0?' (free)':' (to be confirmed)'))+'\nTotal: '+fmt(s+(f||0))+(f===null?' + delivery':'')+'\n\nName: '+v.name+'\nMobile: '+v.phone+'\nAddress: '+v.addr+', '+v.city+' - '+v.pin;
 window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank','noopener');
 cart=[];save();badge();closeCart();toast('Opening WhatsApp. Please press send to place your order.');
}
/* events */
document.addEventListener('click',function(e){
 var t=e.target,b;
 if(b=t.closest('[data-add]')){var id=b.dataset.add,sel=$('#s-'+id);add(id,sel?sel.value:'Pack');return}
 if(b=t.closest('[data-cat]')){st.cat=b.dataset.cat;chips();grid();$('#shop').scrollIntoView();return}
 if(b=t.closest('[data-chip]')){st.cat=b.dataset.chip;chips();grid();return}
 if(t.closest('[data-reset]')){st.q='';$('#q').value='';st.cat='all';chips();grid();return}
 if(t.closest('#cartBtn')){openCart();return}
 if(t.closest('#dx')||t.closest('#ov')||t.closest('[data-close]')){closeCart();return}
 if(b=t.closest('[data-q]')){var l=cart[+b.dataset.q];l.qty+=+b.dataset.d;if(l.qty<1)cart.splice(+b.dataset.q,1);if(l&&l.qty>20)l.qty=20;save();badge();view();return}
 if(b=t.closest('[data-rm]')){var n=byId[cart[+b.dataset.rm].id].n;cart.splice(+b.dataset.rm,1);save();badge();view();toast(n+' removed');return}
 if(t.closest('[data-go]')){mode='form';view();return}
 if(t.closest('[data-back]')){mode='cart';view();return}
 if(t.closest('#srch')){$('#shop').scrollIntoView();setTimeout(function(){$('#q').focus()},350);return}
 if(t.closest('#mbtn')){var m=$('#mnav'),o=m.classList.toggle('on');$('#mbtn').setAttribute('aria-expanded',o);return}
 if(t.closest('#mnav a'))$('#mnav').classList.remove('on');
});
document.addEventListener('change',function(e){
 var t=e.target;
 if(t.dataset.sz){var p=byId[t.dataset.sz];$('#pr-'+p.id).textContent=fmt(sizes(p).filter(function(s){return s[0]==t.value})[0][1])}
 if(t.name=='dl'){delivery=t.value;view()}
 if(t.id=='sort'){st.sort=t.value;grid()}
});
$('#q').addEventListener('input',function(e){st.q=e.target.value;grid()});
document.addEventListener('submit',function(e){if(e.target.id=='cf'){e.preventDefault();var v=validate();if(v)send(v)}});
document.addEventListener('keydown',function(e){
 var d=$('#dr');
 if(e.key=='Escape'&&d.classList.contains('on'))closeCart();
 if(e.key=='Tab'&&d.classList.contains('on')){var f=d.querySelectorAll('button,input,textarea,select,a[href]');if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement==a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement==z){e.preventDefault();a.focus()}}
});
$('#heroImg').src='images/mango-pickle.jpg';
chips();grid();badge();
