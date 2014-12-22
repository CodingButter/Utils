/**
* Package: PackageImporter
* Extends: String;
* Description: This package will allow you to import
* 
* 
* 
* Requirements: jQuery and Set the ROOT Constant
* Setup: 
*	Defining Root is simple. it can be done with one or both of these methods
*		Method 1:
*			Place The following Script before Embedding this Class
*				<script type="text/javascript"> const ROOT = "path.to.root"; </script>
*				___________________________PROPPER____REQUIRE___________________________
*				| <script type="text/javascript"> const ROOT = "path.to.root" </script> |
*				| <script src="path/to/PackageImporter.js"></script>					|	
*				-------------------------------------------------------------------------
* Example Usage: String.import(optional:String[seporated by commas the package to import], optional:Element[jQuery element identifier such as $("body") or $("#tag")])
* 	"path.to.classfile".import()";  //Single Import
* 	"path.to.myclasses.classfile, com.site.myclasses.classfile2".import()"; //Multiple Imports Comma Seporated
*	"path.to.myclass".import("path.to.root"); //Custom ROOT 
*	"path.to.myclass".import(ROOT,"body"); //Pass ROOT then element to specify where to add script tags
*	"path.to.myclass".import("path.to.root","#tagsID"); //Custom ROOT and add to tag with Id;
*/


(function(window){//Set up the anonymous function
	String.prototype.import = function(_root,_element){//create prototype function to String Class 
		if (typeof ROOT !== 'undefined' || typeof _root !== 'undefined') {//Check if a root is available
			if(typeof _root !== 'undefined')var root = _root;else var root = ROOT;//Set root to passed _root or to the Root Constant
			var pkgs = this.split(",");//Make into array splitting by commas
			pkgs.forEach(function(pkg){//Loop through the array
				pkg = pkg.trim();//Trim and spaces there may be
				path = root + "." + pkg;//Add the root path
				AppendPkg(path,_element);//Append to head or Element
			});	
		}
	}
	
	var AppendPkg = function(pkg,_element){//Now lets get Appending
		pkg = pkg.replace(/\./g,"/"); //first lets replace all periods with forward slashes to build a path
		pkg = pkg + ".js"; //second lets add the .js extension.
		var script = $("<script></script>");//now lets build our script element
		script.attr("src",pkg);//and now add the source
		try{//we will catch the errors so all the classes get imported even if one isn't correct
			if (typeof _element !== 'undefined'){//check to see if we passed in an element
				var content = _element.html();// if we did lets get the current content of the element
				if(content.Contains(script.attr("src"))==false){//now we will make sure the it hasn't already been loaded by some other class
					_element.append(script);//if it hasn't then we can append it too the selected element
				}
			}
			else {//in this case no custom element was set so we will put it in the head
				var content = $("head").html();//get the current content in head
				if(content.Contains(script.attr("src"))==false){ //now we will make sure the it hasn't already been loaded by some other class
					$("head").append(script);//if it hasn't then we can append it too the head
				}
			}
		}catch(err){//lets catch the error
			console.log(err); //and render it to the console.
		}
	}
	
	String.prototype.Contains = function(_string){//this is a quick prototype to check if a string contains a substring
		return this.indexOf(_string) > -1; //if the position of the string is > -1 then it must exist so return true, else false;
	}
	
})(window);
