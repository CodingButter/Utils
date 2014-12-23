<?php 

function dirToArray($dir) { 
   $result = array(); 
   $cdir = scandir($dir); 
   foreach ($cdir as $key => $value) 
      if (!in_array($value,array(".","..")))
        if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
			$result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value); 
        else
			$result[] = $value; 
   return $result; 
} 
$dirArray = dirToArray(dirname(__DIR__));
$folder = dirname(__DIR__);
loopthrough($dirArray,$folder);
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
	file_put_contents($folder. DIRECTORY_SEPARATOR .$newFile,$content);
}
?>