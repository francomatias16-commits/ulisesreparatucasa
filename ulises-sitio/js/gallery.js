// ============================================================
// GALERÍA – Ulises Repara Tu Casa
// 10 trabajos reales. Auto-play + touch + teclado + accesibilidad
// ============================================================
(function(){

  var FOTOS = [
    { src:'/img/galeria/trabajo-01.jpg', title:'Instalación de calefón y mesada',              tags:['Gas','Plomería'] },
    { src:'/img/galeria/trabajo-02.jpg', title:'Baño premium con vanitory y revestimiento',    tags:['Revestimientos','Plomería'] },
    { src:'/img/galeria/trabajo-03.jpg', title:'Ducha con revestimiento de piedra travertino', tags:['Revestimientos'] },
    { src:'/img/galeria/trabajo-04.jpg', title:'Reforma integral de cocina',                   tags:['Albañilería','Plomería'] },
    { src:'/img/galeria/trabajo-05.jpg', title:'Revestimiento ducha con mosaico y piedra',     tags:['Revestimientos'] },
    { src:'/img/galeria/trabajo-06.jpg', title:'Instalación de cañerías de cobre',             tags:['Plomería General'] },
    { src:'/img/galeria/trabajo-07.jpg', title:'Instalación PPR con llave de paso',            tags:['Plomería General'] },
    { src:'/img/galeria/trabajo-08.jpg', title:'Cañería PPR empotrada en pared',               tags:['Plomería General'] },
    { src:'/img/galeria/trabajo-09.jpg', title:'Grifería nueva instalada',                     tags:['Plomería','Grifería'] },
    { src:'/img/galeria/trabajo-10.jpg', title:'Construcción de ducha a nuevo',                tags:['Albañilería','Revestimientos'] }
  ];

  var current = 0;
  var total   = FOTOS.length;
  var autoTimer = null;
  var AUTO_MS   = 4500;
  var transitioning = false;

  // ── DOM refs ─────────────────────────────────────────────
  var imgEl    = document.getElementById('galImg');
  var titleEl  = document.getElementById('galTitle');
  var tagsEl   = document.getElementById('galTags');
  var nEl      = document.getElementById('galN');
  var tEl      = document.getElementById('galT');
  var dotsWrap = document.getElementById('galDots');
  var thumbWrap= document.getElementById('galThumbs');
  var prevBtn  = document.getElementById('galPrev');
  var nextBtn  = document.getElementById('galNext');
  var stage    = document.querySelector('.gal-stage');

  if(!imgEl) return; // galería no está en el DOM

  // ── Actualizar contador total ─────────────────────────────
  if(tEl) tEl.textContent = total;

  // ── Construir dots ────────────────────────────────────────
  if(dotsWrap){
    FOTOS.forEach(function(f, i){
      var d = document.createElement('button');
      d.className = 'gal-dot' + (i===0?' active':'');
      d.setAttribute('aria-label','Ver foto '+(i+1));
      d.setAttribute('type','button');
      d.addEventListener('click', function(){ goTo(i, true); });
      dotsWrap.appendChild(d);
    });
  }

  // ── Construir thumbnails ──────────────────────────────────
  if(thumbWrap){
    FOTOS.forEach(function(f, i){
      var th = document.createElement('button');
      th.className = 'gal-thumb' + (i===0?' active':'');
      th.setAttribute('aria-label', f.title);
      th.setAttribute('type','button');
      th.style.backgroundImage = "url('"+f.src+"')";
      th.addEventListener('click', function(){ goTo(i, true); });
      thumbWrap.appendChild(th);
    });
  }

  // ── Función principal: ir a foto N ───────────────────────
  function goTo(idx, userAction){
    if(transitioning) return;
    if(idx < 0) idx = total - 1;
    if(idx >= total) idx = 0;

    transitioning = true;
    current = idx;
    var foto = FOTOS[idx];

    // Fade out
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(1.03)';

    setTimeout(function(){
      imgEl.src = foto.src;
      imgEl.alt = foto.title + ' – Ulises Repara Tu Casa';

      if(titleEl) titleEl.textContent = foto.title;
      if(tagsEl){
        tagsEl.innerHTML = foto.tags.map(function(t){
          return '<span class="gal-tag">'+t+'</span>';
        }).join('');
      }
      if(nEl) nEl.textContent = idx + 1;

      // Dots
      var dots = dotsWrap ? dotsWrap.querySelectorAll('.gal-dot') : [];
      dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });

      // Thumbs
      var thumbs = thumbWrap ? thumbWrap.querySelectorAll('.gal-thumb') : [];
      thumbs.forEach(function(t,i){ t.classList.toggle('active', i===idx); });
      // Scroll activo a la vista en thumbs
      if(thumbs[idx]) thumbs[idx].scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});

      // Fade in
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
      transitioning = false;
    }, 280);

    if(userAction) resetAuto();
  }

  // ── Imagen inicial ────────────────────────────────────────
  imgEl.style.transition = 'opacity .28s ease, transform .28s ease';
  goTo(0, false);

  // ── Botones prev / next ───────────────────────────────────
  if(prevBtn) prevBtn.addEventListener('click', function(){ goTo(current - 1, true); });
  if(nextBtn) nextBtn.addEventListener('click', function(){ goTo(current + 1, true); });

  // ── Teclado ───────────────────────────────────────────────
  document.addEventListener('keydown', function(e){
    var section = document.getElementById('galeria');
    if(!section) return;
    var rect = section.getBoundingClientRect();
    var visible = rect.top < window.innerHeight && rect.bottom > 0;
    if(!visible) return;
    if(e.key === 'ArrowLeft')  goTo(current - 1, true);
    if(e.key === 'ArrowRight') goTo(current + 1, true);
  });

  // ── Touch / swipe ─────────────────────────────────────────
  var touchStartX = 0, touchStartY = 0;
  if(stage){
    stage.addEventListener('touchstart', function(e){
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, {passive:true});
    stage.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if(Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40){
        dx < 0 ? goTo(current + 1, true) : goTo(current - 1, true);
      }
    }, {passive:true});
  }

  // ── Auto-play ─────────────────────────────────────────────
  function startAuto(){
    autoTimer = setInterval(function(){ goTo(current + 1, false); }, AUTO_MS);
  }
  function resetAuto(){
    clearInterval(autoTimer);
    startAuto();
  }
  // Pausar cuando no es visible (ahorra CPU)
  if('IntersectionObserver' in window && stage){
    var galObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ startAuto(); }
        else { clearInterval(autoTimer); }
      });
    }, {threshold: 0.3});
    galObs.observe(stage);
  } else {
    startAuto();
  }

  // ── Preload siguiente foto ────────────────────────────────
  function preloadNext(){
    var next = (current + 1) % total;
    var img = new Image();
    img.src = FOTOS[next].src;
  }
  setInterval(preloadNext, 2000);

})();
