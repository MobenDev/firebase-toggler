const toggle = (parent, query)=>{
  parent.querySelectorAll(query).forEach((el)=>el.click())
}

const toggleInConsole = (parent)=>toggle(parent, '.database-node.type-array > .database-node-click-target, .database-node.type-map > .database-node-click-target')

const toggleInLocalhost = (parent)=>toggle(parent, '.List-Actions .FieldPreview:not(.FieldPreview--primitive)')
const isLocalhost = window.location.host.indexOf('localhost')!==-1 || window.location.host.indexOf('127.0.0.1')!==-1


var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes) {
      return;
    }
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      node = mutation.addedNodes[i]
      console.log(node)
      if(isLocalhost && node.querySelector('.List-Actions .FieldPreview:not(.FieldPreview--primitive)')){
        toggleInLocalhost(node)

      }else if(node.tagName==='FS-ANIMATE-CHANGES'){
        toggleInConsole(node)
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});