(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),s=(a(16),a(3)),l=a(4),o=a(6),u=a(5),m=a(1),d=a(7),p=(a(17),a(2)),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={playing:!1,currentTrackIndex:0,duration:0,toggle_track:!1,currentTrack:p.tracks[0]},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.playAudio=a.playAudio.bind(Object(m.a)(a)),a.pauseAudio=a.pauseAudio.bind(Object(m.a)(a)),a.selectTrackNumber=a.selectTrackNumber.bind(Object(m.a)(a)),a.change_vol=a.change_vol.bind(Object(m.a)(a)),a.setTrack=a.setTrack.bind(Object(m.a)(a)),a.moveTrack=a.moveTrack.bind(Object(m.a)(a)),a.track_toggle=a.track_toggle.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"playAudio",value:function(){this.audioElement.play()}},{key:"pauseAudio",value:function(){this.audioElement.pause()}},{key:"selectTrackNumber",value:function(e){this.setState({currentTrackIndex:e,playing:!0},this.playAudio)}},{key:"change_vol",value:function(){this.audioElement.volume=document.getElementById("change_vol").value}},{key:"setTrack",value:function(){var e=this.audioElement.currentTime,t=this.audioElement.duration,a=this.state.currentTrack;this.setState({currentTrack:p.tracks[this.state.currentTrackIndex-1]}),document.getElementById("current").innerHTML=this.formatTime(e),document.getElementById("progress").value=e,document.getElementById("cur_title").innerHTML=a.title,e>0&&(this.setState({duration:t}),document.getElementById("duration").innerHTML=this.formatTime(t)),null===e&&(this.setState({duration:0}),document.getElementById("duration").innerHTML=" "),e===t&&document.getElementById("next").click()}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),a=Math.floor(e%60);return t+":"+(a<10?"0"+a:a)}},{key:"moveTrack",value:function(){this.audioElement.currentTime=document.getElementById("progress").value}},{key:"track_toggle",value:function(){this.setState({toggle_track:!this.state.toggle_track})}},{key:"handleClick",value:function(e){switch(e.target.id){case"play":this.setState(function(e,t){var a=e.currentTrackIndex;return 0===a&&(a=1),{playing:!0,currentTrackIndex:a}},this.playAudio);break;case"pause":this.setState({playing:!1},this.pauseAudio);break;case"prev":this.setState(function(e,t){var a=e.currentTrackIndex-1;return a<=0?null:{playing:!0,currentTrackIndex:a}},this.playAudio);break;case"next":this.setState(function(e,t){var a=e.currentTrackIndex+1;return a>p.tracks.length?null:{playing:!0,currentTrackIndex:a}},this.playAudio)}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"album",style:{backgroundImage:"url("+this.state.currentTrack.album+")"}}),i.a.createElement("div",{className:"player"},i.a.createElement(k,{onClick:this.handleClick,playing:this.state.playing}),i.a.createElement("audio",{id:"audio",ref:function(t){e.audioElement=t},src:"songs/"+this.state.currentTrackIndex+".mp3",onTimeUpdate:this.setTrack}),i.a.createElement("div",{id:"volume"},i.a.createElement("i",{class:"fas fa-volume-down"}),i.a.createElement("input",{type:"range",id:"change_vol",onChange:this.change_vol,step:"0.05",min:"0",max:"1","aria-label":"volume"})),i.a.createElement("div",{className:"track_set"},i.a.createElement("input",{type:"range",id:"progress",onChange:this.moveTrack,step:"0.5",min:"0",max:this.state.duration,"aria-label":"progress"}),i.a.createElement("div",{id:"times"},i.a.createElement("p",{id:"current"}),i.a.createElement("p",{id:"duration"})),i.a.createElement("div",{className:"info"},i.a.createElement("p",{id:"cur_title"}))),i.a.createElement("button",{className:"Track_toggle ripple",onClick:this.track_toggle,"aria-label":"playlist"},i.a.createElement("i",{class:"fas fa-music"}))),i.a.createElement(g,{currentTrackIndex:this.state.currentTrackIndex,selectTrackNumber:this.selectTrackNumber,toggle_track:this.state.toggle_track}))}}]),t}(i.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Controls"},i.a.createElement("i",{id:"prev",className:"fa fa-fw fa-fast-backward",onClick:this.props.onClick}),!this.props.playing&&i.a.createElement("i",{id:"play",onClick:this.props.onClick,className:"fa fa-fw fa-play"}),this.props.playing&&i.a.createElement("i",{id:"pause",onClick:this.props.onClick,className:"fa fa-fw fa-pause"}),i.a.createElement("i",{id:"next",className:"fa fa-fw fa-fast-forward",onClick:this.props.onClick}))}}]),t}(i.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={tracks:[]},a.renderListItem=a.renderListItem.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({tracks:p.tracks})}},{key:"renderListItem",value:function(e,t){var a=this,n=this.props.currentTrackIndex===e.id?"selected":"";return i.a.createElement("li",{key:e.id,className:n,ref:function(t){a.props.currentTrackIndex===e.id&&(a.activeTrack=t)},onClick:function(){a.props.selectTrackNumber(e.id)}},i.a.createElement("div",{className:"number"},e.id),i.a.createElement("div",{className:"title"},e.title),i.a.createElement("div",{className:"duration"},e.duration))}},{key:"render",value:function(){var e=this,t=this.state.tracks.map(this.renderListItem),a=[""];return!0===this.props.toggle_track&&a.push("active"),i.a.createElement("ul",{className:"TrackList "+[a.join(" ")],ref:function(t){e.trackList=t}},t)}}]),t}(i.a.Component),f=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e){e.exports={title:"How To Be A Human Being",artist:"Glass Animals",artwork:"http://3.bp.blogspot.com/-uL5E7Yxr97o/VRSpZSq1udI/AAAAAAAAAMc/UzCaqMsvAEw/s1600/A%2BNight%2BAt%2BThe%2BOpera.jpg",tracks:[{id:1,title:"Don't Stop Me Now",duration:"3:29",album:"https://images-na.ssl-images-amazon.com/images/I/61m6sOAPvrL.jpg"},{id:2,title:"Bohemian Rhapsody",duration:"5:54",album:"http://3.bp.blogspot.com/-uL5E7Yxr97o/VRSpZSq1udI/AAAAAAAAAMc/UzCaqMsvAEw/s1600/A%2BNight%2BAt%2BThe%2BOpera.jpg"},{id:3,title:"Radio Ga Ga",duration:"5:48",album:"http://www.ultimatequeen.co.uk/queen/gallery/singles-3/radio-ga-ga-uksinglescollectionfront.jpg"},{id:4,title:"Love of My Life",duration:"3:36",album:"http://images.45cat.com/queen-love-of-my-life-1979-2.jpg"},{id:5,title:"I Want to Break Free",duration:"4:18",album:"https://img.cdandlp.com/2019/05/imgL/3000349.jpg"},{id:6,title:"We Are the Champions",duration:"2:59",album:"https://images-na.ssl-images-amazon.com/images/I/81PgcGNI2bL._SX355_.jpg"}]}}},[[10,1,2]]]);
//# sourceMappingURL=main.dc373160.chunk.js.map