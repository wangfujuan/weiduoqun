
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"content { padding: ",[0,30],"; line-height: 1.8; }\n.",[1],"rule-tl { font-weight: 500; margin: ",[0,20]," 0 ",[0,10],"; }\n",],undefined,{path:"./pages/rule/rule.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/rule/rule.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      