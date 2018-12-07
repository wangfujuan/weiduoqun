
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"content { background-color: #f4f6fa; }\n.",[1],"edit-ls { background-color: #fff; border-top: ",[0,2]," solid #eee; }\n.",[1],"edit-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding: ",[0,20],"; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"edit-item-lf { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 1; }\n.",[1],"edit-item-tl { padding-top: ",[0,20],"; }\n.",[1],"edit-item-txt { font-size: ",[0,24],"; color: #a1a1a1; margin-top: ",[0,25],"; }\n.",[1],"avatar-80 { width: ",[0,80],"; height: ",[0,80],"; border-radius: 100%; }\n.",[1],"edit-item-status { color: #44B549; }\n",],undefined,{path:"./pages/setting/setting.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/setting/setting.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      