
## Performance

1. Compress components with gzip
2. CSS in `<head>`, JS before `</body>`
3. Concatenate and minify JS and CSS
    * [SquishIt](http://nuget.org/packages/SquishIt/)
    * [System.Web.Optimization](http://nuget.org/packages/microsoft.web.optimization) 
    * [grunt-usemin](https://github.com/yeoman/grunt-usemin)
4. Add expires header
    4. [EPiServer guide](http://www.frederikvig.com/2011/10/faster-episerver-sites-client-side-performance/)
5. Use sprite maps or fonts for graphics
    5. [Compass sprite tutorial](http://compass-style.org/reference/compass/utilities/sprites/sprite_img/)
    6. [IcoMoon](http://icomoon.io/)
6. Responsive images
    7. [Choosing A Responsive Image Solution](http://mobile.smashingmagazine.com/2013/07/08/choosing-a-responsive-image-solution/) 
7. Optimize images
    8. [Smush.it](http://www.smushit.com/ysmush.it/)
    9. [Geta.ImageOptimization](http://www.frederikvig.com/2012/05/faster-episerver-sites-image-optimization/) for EPiServer
    10. [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
8. Create custom builds of js libraries
    11. Many js libs have custom build tools, letting you get only the parts you need. For example, modernizr and jQuery UI provides this.
9. (Consider not using jQuery)
    12. http://remysharp.com/2013/04/19/i-know-jquery-now-what/
