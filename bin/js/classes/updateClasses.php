<?php 

function dirToArray($dir) {
   $result = array(); 
   $cdir = scandir($dir); 
   foreach ($cdir as $key => $value) 
      if (!in_array($value,array(".","..")))
        if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
			$result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value); 
        elseif(strpos($value,".js")!=false)
			$result[] = $value; 
   return $result; 
} 
$dirArray = dirToArray(dirname(__FILE__));
//file_put_contents("config.js","var CLASS_PATHS = \"". str_replace('"','\"',json_encode($dirArray))."\"");
define('ROOTDIR',dirname(__file__));
loopthrough($dirArray,ROOTDIR);
function loopthrough($dirArray,$folder){
	$files = Array();	
	$farr= explode(DIRECTORY_SEPARATOR,$folder);
	$count = count($farr)-1;
	$newFile = $farr[$count] .".js";
	$content = "(function(window){var GetClasses = function(){}\n GetClasses.prototype.classes = new Array( \n";
	foreach($dirArray as $key=>$value){
		
		$newFolder = $folder . DIRECTORY_SEPARATOR .$key;
		if((array)$value===$value){
			loopthrough($value,$newFolder);
			$content .="\"".$key.".*\",";
		}
		else{
			if(str_replace(".js","",$value) != $newFile && strpos($value,".js")!==false)
			$content .= "\"". str_replace(".js","",$value) ."\",";
			//echo $value ."\n" .$key ."\n\n";
		}
	}
	$content = rtrim($content,",");
	$content .= "\n);window.GetClasses = GetClasses;})(window)";
	//$tmp = Array("folder"=>$folder. DIRECTORY_SEPARATOR .$newFile,"content"=>$content);
	//print_r($tmp);
	if($folder != ROOTDIR)file_put_contents($folder. DIRECTORY_SEPARATOR .$newFile,$content);
}

?>