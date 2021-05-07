import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <meta name="googlebot-news" content="noindex" />
    <link rel="shortcut icon" href="https://res.cloudinary.com/threesixzero/image/upload/v1620251271/fleetICon.png" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177359694-1"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@300;400&display=swap" rel="stylesheet"/>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />


    <script dangerouslySetInnerHTML={{ __html: `
        window['_fs_debug'] = false;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
        window['_fs_org'] = 'YF60N';
        window['_fs_namespace'] = 'FS';
        (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
            o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
            g.anonymize=function(){g.identify(!!0)};
            g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
            g.log = function(a,b){g("log",[a,b])};
            g.consent=function(a){g("consent",!arguments.length||a)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
            g.setVars=function(n, p){g(n, p);};
            g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
            if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
            g._v="1.3.0";
        })(window,document,window['_fs_namespace'],'script','user');
   `}} />
  <title>Fleet Dashboard</title>
  </Head>
);

export default Meta;
