function init(){

	var Prototypes = "com.utils.prototypes.Array";
	var Silly = "com.project.Smiley";
	
	Prototypes.import();
	Silly.import();
	
	var test_ar = new Array("something "," something else"," another thing ");
	console.log(test_ar);
	console.log(test_ar.trim());
	
	
	smile = new Smiley();
	smile.mood = "happy";
	smile.Smile();
}