const toggle = (parent)=>{
  parent.querySelectorAll('.database-node.type-array > .database-node-click-target, .database-node.type-map > .database-node-click-target').forEach((el)=>el.click())
}

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes) {
      return;
    }
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      node = mutation.addedNodes[i]
      if(node.tagName==='FS-ANIMATE-CHANGES'){
        toggle(node)
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});