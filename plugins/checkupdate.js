function _0x41c4(_0x4d7775,_0x320bde){const _0x665e75=_0x665e();return _0x41c4=function(_0x41c4e7,_0x320894){_0x41c4e7=_0x41c4e7-0xa3;let _0x1868b0=_0x665e75[_0x41c4e7];return _0x1868b0;},_0x41c4(_0x4d7775,_0x320bde);}function _0x665e(){const _0x2b81a1=['sha','checksync','Error\x20reading\x20package.json:','```✅\x20Your\x20DEVIL-TECH-MD\x20bot\x20is\x20already\x20up-to-date!```\x0a','2900704ZLIDMQ','66555vxuAFv','778880KDiIpq','filename','get','error','Check\x20update\x20error:','date','files','173054YcKihJ','4624250wILaRR','6479046otulTt','checkupgrade','10891esTfRy','\x0a\x0aTo\x20update\x20the\x20bot,\x20please\x20run\x20the\x20command\x20`.update`','path','map','UTC','\x0a📅\x20*Date*:\x20','misc','58VbOdyE','toLocaleString','https://api.github.com/repos/itx-alii-raza/ALI-MD/commits/main','commit','en-US','author','unknown','60HsLbmL','commitHash','adm-zip','\x0a🔄\x20*Files\x20Modified*:\x0a'];_0x665e=function(){return _0x2b81a1;};return _0x665e();}const _0xcaa1ef=_0x41c4;(function(_0x454eec,_0x255f42){const _0x546b82=_0x41c4,_0x3d1b24=_0x454eec();while(!![]){try{const _0x45c9be=parseInt(_0x546b82(0xc1))/0x1*(parseInt(_0x546b82(0xa5))/0x2)+parseInt(_0x546b82(0xb5))/0x3+-parseInt(_0x546b82(0xb6))/0x4+parseInt(_0x546b82(0xbe))/0x5+parseInt(_0x546b82(0xac))/0x6*(-parseInt(_0x546b82(0xbd))/0x7)+parseInt(_0x546b82(0xb4))/0x8+-parseInt(_0x546b82(0xbf))/0x9;if(_0x45c9be===_0x255f42)break;else _0x3d1b24['push'](_0x3d1b24['shift']());}catch(_0x8ece62){_0x3d1b24['push'](_0x3d1b24['shift']());}}}(_0x665e,0x7130c));const {cmd}=require('../command'),axios=require('axios'),fs=require('fs'),path=require(_0xcaa1ef(0xc3)),AdmZip=require(_0xcaa1ef(0xae));cmd({'pattern':'checkupdate','alias':[_0xcaa1ef(0xc0),_0xcaa1ef(0xb1)],'react':'🔍','desc':'Check\x20for\x20updates\x20without\x20applying\x20them.','category':_0xcaa1ef(0xa4),'filename':__filename},async(_0x12553d,_0x3b0e7f,_0x513ca0,{from:_0x4f6035,reply:_0x5d90e8,sender:_0x3fc6ce,isOwner:_0x90cd41})=>{const _0x50a56d=_0xcaa1ef;if(!_0x90cd41)return _0x5d90e8('This\x20command\x20is\x20only\x20for\x20the\x20bot\x20owner.');try{const {data:_0x5b6f17}=await axios[_0x50a56d(0xb8)](_0x50a56d(0xa7)),_0x2bd28a=_0x5b6f17[_0x50a56d(0xb0)],_0x352f8e=_0x5b6f17[_0x50a56d(0xa8)][_0x50a56d(0xaa)]['name'],_0x35cca7=new Date(_0x5b6f17[_0x50a56d(0xa8)]['author'][_0x50a56d(0xbb)])[_0x50a56d(0xa6)](_0x50a56d(0xa9),{'timeZone':_0x50a56d(0xc5)}),_0x5bab21=_0x5b6f17[_0x50a56d(0xbc)][_0x50a56d(0xc4)](_0x550ee4=>'📄\x20'+_0x550ee4[_0x50a56d(0xb7)])['join']('\x0a');let _0x22514c=_0x50a56d(0xab);try{const _0xf8cf3d=require('../package.json');_0x22514c=_0xf8cf3d[_0x50a56d(0xad)]||_0x50a56d(0xab);}catch(_0x5a922b){console['error'](_0x50a56d(0xb2),_0x5a922b);}if(_0x2bd28a===_0x22514c)return _0x5d90e8(_0x50a56d(0xb3));else await _0x5d90e8('🔄\x20*Updates\x20are\x20available\x20for\x20ALI-MD.*\x0a📝\x20*Last\x20Commit*:\x20`'+_0x2bd28a+'`\x0a👤\x20*Author*:\x20'+_0x352f8e+_0x50a56d(0xa3)+_0x35cca7+_0x50a56d(0xaf)+_0x5bab21+_0x50a56d(0xc2));}catch(_0x301335){console[_0x50a56d(0xb9)](_0x50a56d(0xba),_0x301335),_0x5d90e8('❌\x20Check\x20update\x20failed.\x20Please\x20try\x20manually.');}});
