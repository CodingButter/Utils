**Package**: *PackageImporter*

**Extends**: *String*;

**Description**: This package will allow you to import classes really easily from anywhere even within classes

**Requirements**: jQuery and Set the ROOT Constant

**Setup**: 

Place classUpdater.php in the root of your js class folder structure.

Defining Root is simple. it can be done with one or both of these methods

  Method 1:
  
  Place The following Script before Embedding this Class
    
      <script type="text/javascript"> const ROOT = "path.to.root"; </script>
      
  Method 2:
  
  Place Root in function call
  
      "path.to.mysclasses.classfile".import({"root":"path.to.root"});
    
***Require And Set Root***  
  
    <script type="text/javascript"> const ROOT = "path.to.root" </script> 
    
    <script src="path/to/PackageImporter.js"></script>

**Example Usage**: *String.import(Optinal object{"root":Optional String [ Seporated by commas the package to import ], "element": Optional Element [ $("body") or $("#tag") or even getElementById("#tag") ]);*
	
	"path.to.classfile".import()";  //Single Import
	
	"path.to.myclasses.classfile, com.site.myclasses.classfile2".import()"; //Multiple Imports Comma Seporated
	
	"path.to.myclass".import({"root":"path.to.root"}); //Custom ROOT 
	
	"path.to.myclass".import({"element":$("body")}); 
	
	"path.to.myclass".import({"root":"path.to.root","element":$("#tagsID")}); //Custom ROOT and add to tag with Id;
