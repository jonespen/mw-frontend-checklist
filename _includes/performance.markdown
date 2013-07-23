
## Performance

1. Compress components with [gzip](http://developer.yahoo.com/performance/rules.html#gzip)
1. Put CSS in `<head>`
1. Put JavaScript before `</body>`
    * JavaScript scripts block parallel downloads; that is, when a script is downloading, the browser will not start any other downloads. To help the page load faster, move scripts to the bottom of the page if they are deferrable.
3. Concatenate and minify JavaScript and CSS
    * [SquishIt](http://nuget.org/packages/SquishIt/)
    * [System.Web.Optimization](http://nuget.org/packages/microsoft.web.optimization) 
    * [grunt-usemin](https://github.com/yeoman/grunt-usemin)
4. Add expires header
    * [EPiServer guide](http://www.frederikvig.com/2011/10/faster-episerver-sites-client-side-performance/)
5. Use sprite maps or fonts for graphics
    * [Compass sprite tutorial](http://compass-style.org/reference/compass/utilities/sprites/sprite_img/)
    * [IcoMoon](http://icomoon.io/)
6. Responsive images
    * [Choosing A Responsive Image Solution](http://mobile.smashingmagazine.com/2013/07/08/choosing-a-responsive-image-solution/) 
7. Optimize images
    * [Smush.it](http://www.smushit.com/ysmush.it/)
    * [Geta.ImageOptimization](http://www.frederikvig.com/2012/05/faster-episerver-sites-image-optimization/) for EPiServer
    * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
8. Create custom builds of JavaScript libraries
    * Many JavaScript libs have custom build tools, letting you get only the parts you need. For example, [Modernizr](http://modernizr.com/download/) and [jQuery UI](http://jqueryui.com/download/) provides this.
9. (Consider not using jQuery)
    * http://remysharp.com/2013/04/19/i-know-jquery-now-what/
