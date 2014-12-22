**Package**: *PackageImporter*

**Extends**: *String*;

**Description**: This package will allow you to import

**Requirements**: jQuery and Set the ROOT Constant

**Setup**: 

Defining Root is simple. it can be done with one or both of these methods

  Method 1:
  
  Place The following Script before Embedding this Class
    
      <script type="text/javascript"> const ROOT = "path.to.root"; </script>
      
  Method 2:
  
  Place Root in function call
  
      "path.to.mysclasses.classfile".import("my.root.path");
    
***Require And Set Root***  
  
    <script type="text/javascript"> const ROOT = "path.to.root" </script> 
    
    <script src="path/to/PackageImporter.js"></script>

**Example Usage**: String.import(optional:String[seporated by commas the package to import], optional:Element[jQuery element 	identifier such as $("body") or $("#tag")])
	
	"path.to.classfile".import()";  //Single Import
	
	"path.to.myclasses.classfile, com.site.myclasses.classfile2".import()"; //Multiple Imports Comma Seporated
	
	"path.to.myclass".import("path.to.root"); //Custom ROOT 
	
	"path.to.myclass".import(ROOT,"body"); //Pass ROOT then element to specify where to add script tags
	
	"path.to.myclass".import("path.to.root","#tagsID"); //Custom ROOT and add to tag with Id;
