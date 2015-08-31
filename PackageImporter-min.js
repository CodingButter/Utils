(function(window){String.prototype.import = function(_root,_element){if (typeof ROOT !== 'undefined' || typeof _root !== 'undefined') {			if(typeof _root !== 'undefined')var root = _root;else var root = ROOT;			var pkgs = this.split(",");			pkgs.forEach(function(pkg){				pkg = pkg.trim();				if(pkg.Contains(".*")){					pkg = pkg.replace(".*","");					var pathclass = pkg + "." + pkg.split(".")[pkg.split(".").length-1];					AppendPkg(root + "." + pathclass);					var gc = new window.GetClasses();					var classes = gc.classes;					classes.forEach(function(e){						var cs = pkg + "." + e;						cs.import();					});				}else{					path = root + "." + pkg;					AppendPkg(path,_element);				}			});			}	}		
function AppendPkg(pkg,_element){				pkg = pkg.replace(/\./g,"/"); 		pkg = pkg + ".js"; 		var script = $("<script></script>");		script.attr("src",pkg);		try{			if (typeof _element !== 'undefined'){				var content = _element.html();				if(content.Contains(script.attr("src"))==false){					_element.append(script);				}			}			else {				var content = $("head").html();				if(content.Contains(script.attr("src"))==false){ 					$("head").append(script);				}			}		}catch(err){			console.log(err); 		}	}String.prototype.Contains = function(_string){		return (this.indexOf(_string) > -1); 	}	
window.UpdateClasses = function(){		$.get(ROOT.replace(/\./g,"/") + "/updateClasses.php");		console.log("Classes Updated");	}})(window);