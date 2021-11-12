(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var i=r(3),n=r(7),a=(r(0),r(134)),o={id:"viewer-setup",title:"Viewer Setup",sidebar_label:"Viewer Setup"},l={unversionedId:"integrating/viewer-setup",id:"integrating/viewer-setup",isDocsHomePage:!1,title:"Viewer Setup",description:"BIRT POJO Viewer",source:"@site/docs/integrating/viewer-setup.md",slug:"/integrating/viewer-setup",permalink:"/birt-website/docs/integrating/viewer-setup",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/integrating/viewer-setup.md",version:"current",sidebar_label:"Viewer Setup",sidebar:"someSidebar",previous:{title:"Integrating BIRT",permalink:"/birt-website/docs/integrating/integrating"},next:{title:"Viewer Usage",permalink:"/birt-website/docs/integrating/viewer-usage"}},p=[{value:"BIRT POJO Viewer",id:"birt-pojo-viewer",children:[{value:"Using Tomcat",id:"using-tomcat",children:[]},{value:"Install the Viewer",id:"install-the-viewer",children:[]},{value:"Install your JDBC Drivers",id:"install-your-jdbc-drivers",children:[]},{value:"Testing a More Complex Report",id:"testing-a-more-complex-report",children:[]},{value:"Deploying to JBoss",id:"deploying-to-jboss",children:[]},{value:"Other Java EE Servers",id:"other-java-ee-servers",children:[]}]}],c={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"birt-pojo-viewer"},"BIRT POJO Viewer"),Object(a.b)("p",null,"The Viewer is POJO based. "),Object(a.b)("h3",{id:"using-tomcat"},"Using Tomcat"),Object(a.b)("p",null,"This page explains how to deploy the BIRT viewer to a Java EE container. We'll use ",Object(a.b)("a",{parentName:"p",href:"http://tomcat.apache.org/"},"Apache Tomcat"),", since it is open source and readily available. The same concepts, perhaps with different details, apply to other app servers. These instructions assume you'll install Tomcat on your own machine using the default port number of 8080."),Object(a.b)("p",null,"If you don't have Tomcat installed on your system you can download it from ",Object(a.b)("a",{parentName:"p",href:"http://tomcat.apache.org/"},"http://tomcat.apache.org/")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://wiki.eclipse.org/BirtPOJO_Viewer_Tomcat_Deployment"},"See BIRT POJO Viewer Tomcat Deployment"),"."),Object(a.b)("h3",{id:"install-the-viewer"},"Install the Viewer"),Object(a.b)("p",null,"Deploy the BIRT Viewer application. Follow these steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-version#.zip.",Object(a.b)("br",{parentName:"p"}),"\n","")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Unzip the file in a staging area.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Look under the birt-runtime- directory and locate the "Web Viewer Example" directory.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Copy the Web Viewer Example directory to the webapps directory of your Tomcat installation. For ease of reference, rename the directory to "birt-viewer".')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Stop, then restart Tomcat.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Display the Tomcat manager application to check that the viewer is deployed: http://localhost:8080/manager/html.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Verify that birt-viewer is listed as an application, then click on the birt-viewer link.\n")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'A page confirming that the BIRT viewer has been installed should be displayed. Click on the link labeled "View Example" to confirm that your installation is working properly.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The BIRT Viewer requires that cookies be enabled."))),Object(a.b)("p",null,"If you choose to put the Viewer into some other location, you'll need to use a context entry within the server.xml file to indicate the deployment location. See Tomcat documentation for details."),Object(a.b)("h3",{id:"install-your-jdbc-drivers"},"Install your JDBC Drivers"),Object(a.b)("p",null,"Add the jar files for your JDBC drivers to the Viewer. Copy the driver the following directory:"),Object(a.b)("h4",{id:"birt-jdbc-driver-location-note"},"BIRT JDBC Driver Location Note:"),Object(a.b)("p",null,"If you are installing BIRT 2 series the driver needs to be copied to birt-viewer\\WEB-INF\\platform\\plugins\\org.eclipse.birt.report.data.oda.jdbc\\drivers directory.\nIf you are installing BIRT 3.7 or higher, the jdbc driver should be placed in the WebViewer's classpath (eg WEB-INF/lib)."),Object(a.b)("h3",{id:"testing-a-more-complex-report"},"Testing a More Complex Report"),Object(a.b)("p",null,'We\'ll test the viewer further using one of the example reports created for the "Classic Models" database. Note that Classic Models database is included in the birt runtime distribution so no further set-up is required. Follow these steps:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-.zip.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click on the following link to download the example report design, ",Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/phoenix/examples/solution/SalesInvoice.rptdesign"},"SalesInvoice.rptdesign"),' into another browser window. Use the "Save as..." command from the file menu to save the report into the birt-viewer/report directory.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you've installed everything in its default location, then click on the following link. If you've changed anything, then copy the following URL into your browser and make the needed changes."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  http://localhost:8080/birt-viewer/run?__report=Report\\SalesInvoice.rptdesign \n")),Object(a.b)("p",{parentName:"li"},"  or"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  http://localhost:8080/birt-viewer/frameset?__report=Report\\SalesInvoice.rptdesign \n")))),Object(a.b)("p",null,"The report should run and appear in your browser. See ",Object(a.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/documentation/integrating/viewer-usage.php"},"Viewer Usage")," for information on the Viewer Operations."),Object(a.b)("h3",{id:"deploying-to-jboss"},"Deploying to JBoss"),Object(a.b)("p",null,"If you are deploying BIRT version 2 series to JBoss use the following steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download the zip file with the BIRT report engine runtime. The file is named birt-runtime-version#.zip.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Unzip the file in a staging area.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Look under the birt-runtime- directory and locate the "WebViewerExample" directory.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Copy the "WebViewerExample" directory to your JBoss installation, under the deploy directory for your configuration. (eg) C:\\jboss-4.0.3SP1\\server\\default\\deploy.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Rename the WebViewerExample directory to birt.war, so it will deploy in place.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Start up JBoss and enter the URL to BIRT (ie http://localhost:8080/birt) and run the test report."))),Object(a.b)("p",null,"If you are deploying the BIRT Viewer version 3.7 or later to JBoss use the directions supplied on the following link:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://wiki.eclipse.org/BirtPOJO_Viewer_JBOSS_Deployment"},"BIRT POJO Viewer JBoss Deployment")),Object(a.b)("h3",{id:"other-java-ee-servers"},"Other Java EE Servers"),Object(a.b)("p",null,"BIRT FAQ has instructions for many other deployement options."),Object(a.b)("p",null,"If you are installing BIRT 3.7 or later see these pages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.eclipse.org/BirtPOJO_Viewer_WebSphere_Deployment"},"BIRT POJO Viewer Websphere Deployment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.eclipse.org/BirtPOJO_Viewer_WebLogic_Deployment"},"BIRT POJO Viewer WebLogic Deployment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.eclipse.org/BirtPOJO_Viewer_JBOSS_Deployment"},"BIRT POJO Viewer JBoss Deployment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.eclipse.org/BirtPOJO_Viewer_Tomcat_Deployment"},"BIRT POJO Viewer Tomcat Deployment"))))}s.isMDXComponent=!0},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=i,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return r?n.a.createElement(h,l(l({ref:t},c),{},{components:r})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);